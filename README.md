# FDLM Live V2 🗺️ (Supabase)

Eigenständige Live-Map für die Crew — **komplett getrennt von Amos' V1**.
Backend: **Supabase** (Postgres + Realtime + Edge Function für Web-Push).
Frontend: statische PWA (Leaflet + vanilla JS), gehostet auf **GitHub Pages**.
Kein Firebase, kein Cloudflare, kein Build-Step.

## Was V2 kann (neu ggü. V1)
- 🛰️ **Satelliten-Ansicht** (Umschalter oben rechts: Karte / Satellit)
- 📷 **Fotos/Avatare** — beim Namen-Setup ein Foto wählen; erscheint im Karten-Pin & in der Crew-Liste
- 🔋 **Akku-schonend** — GPS schreibt nur alle ~5 Min (oder bei > 75 m Bewegung) in die DB
- 🧭 **Apple Maps** für Routen (war schon in V1)
- 🔒 **Saubere Sicherheit** — RLS aktiv, Push-Abos für Clients nicht lesbar, keine 30-Tage-Ablauf-Regel, kein Admin-Key im Client
- ⏱️ „online" = letztes Update < 45 Min (ehrlicher als V1: 10 h)

## Architektur
- **DB-Tabellen:** `members` (Präsenz/Standort), `events` (eigene Events), `messages` (Crew-Chat + DMs), `push_subscriptions` (server-only), `app_secrets` (server-only).
- **Realtime:** `postgres_changes` auf members/events/messages.
- **Push:** Web-Push (VAPID). Edge Function `send-push` liest den privaten VAPID-Key aus `app_secrets` (Service-Role) und verschickt. Public Key steckt im Client (`config.js`).

## Supabase-Projekt
- Projekt: `fdlm-live` (ref `zyulchfvqrhyoxcjvaci`, eu-west-1)
- URL/Anon-Key/VAPID-Public liegen in `config.js` (öffentlich, ok).
- **Geheim** (NICHT im Repo): VAPID-Private-Key → liegt in der DB-Tabelle `app_secrets` und in `../_secrets/vapid-keys.json` lokal.

## Lokal testen
```bash
cd v2
python3 -m http.server 5050
# http://localhost:5050  (GPS nur über https/localhost)
```

## Deploy (GitHub Pages)
Repo `fdlm-live` → Branch `main`, Pages aus Root. Push = live.
Live-URL: siehe GitHub → Settings → Pages.

## iOS-Hinweis
Web-Push auf iPhone nur ab iOS 16.4 **und** wenn die App über „Zum Home-Bildschirm" installiert wurde — das erzwingt das Onboarding bereits.
