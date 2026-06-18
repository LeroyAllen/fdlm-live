// FDLM Live V2 — Edge Function "send-push" (REFERENZKOPIE der deployten Version).
// Verschickt Web-Push an die Crew bzw. an eine Person (DM).
// Der PRIVATE VAPID-Key wird NICHT hier gespeichert, sondern zur Laufzeit aus
// der geschützten Tabelle public.app_secrets (key='vapid_private') gelesen
// (Service-Role umgeht RLS; anon hat keinen Zugriff).
import { createClient } from "npm:@supabase/supabase-js@2";
import webpush from "npm:web-push@3.6.7";

const VAPID_PUBLIC = "BHpyvQtrsHuwfdI181valwtg-rsu5sajonlsdXKNnHmOgC4s2ED662v7SwX5xMOTmfvumvjj4lhY0Z434sXS7-k";
const VAPID_SUBJECT = "mailto:leroyallen1999@gmail.com";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

let vapidReady = false;
async function ensureVapid() {
  if (vapidReady) return true;
  const { data, error } = await supabase
    .from("app_secrets").select("value").eq("key", "vapid_private").single();
  if (error || !data?.value) return false;
  webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC, data.value);
  vapidReady = true;
  return true;
}

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

function json(obj: unknown, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ ok: true });
  try {
    if (!(await ensureVapid())) return json({ error: "vapid-missing" });
    const { kind, senderUid, recipientUid, name, text } = await req.json();
    if (!kind || !text) return json({ error: "missing fields" }, 400);

    const { data: subs, error } = await supabase
      .from("push_subscriptions").select("uid, subscription");
    if (error) return json({ error: error.message });

    let targets = subs ?? [];
    if (kind === "crew") targets = targets.filter((s) => s.uid !== senderUid);
    else if (kind === "dm") targets = targets.filter((s) => s.uid === recipientUid);
    else targets = [];

    const title = kind === "crew" ? "💬 Crew-Chat" : `💬 ${name || "Freund"} (privat)`;
    const body = kind === "crew" ? `${name || "Freund"}: ${text}` : text;
    const payload = JSON.stringify({ title, body, url: "./" });

    let sent = 0;
    const dead: string[] = [];
    await Promise.all(targets.map(async (s) => {
      try {
        await webpush.sendNotification(s.subscription, payload);
        sent++;
      } catch (e) {
        const code = (e as { statusCode?: number })?.statusCode;
        if (code === 404 || code === 410) dead.push(s.uid);
      }
    }));
    if (dead.length) {
      await supabase.from("push_subscriptions").delete().in("uid", dead);
    }
    return json({ sent, tried: targets.length });
  } catch (e) {
    return json({ error: String((e as Error)?.message ?? e) });
  }
});
