// ============================================================
//  FDLM Live V2 — öffentliche Client-Config
//  Diese Werte sind NICHT geheim (Supabase anon-Key + VAPID-Public-Key
//  sind by design öffentlich, geschützt durch RLS bzw. Push-Signatur).
//  Der GEHEIME VAPID-Private-Key liegt server-seitig im Supabase-Secret-Store.
// ============================================================
window.__SB_URL = "https://zyulchfvqrhyoxcjvaci.supabase.co";
window.__SB_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5dWxjaGZ2cXJoeW94Y2p2YWNpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3OTg2NzEsImV4cCI6MjA5NzM3NDY3MX0.-JNlOLAiQJsErVxS_jo_lYAsqOIxRCIBb1KJrux55kE";
window.__VAPID_PUBLIC = "BHpyvQtrsHuwfdI181valwtg-rsu5sajonlsdXKNnHmOgC4s2ED662v7SwX5xMOTmfvumvjj4lhY0Z434sXS7-k";

// Google Maps — paste your Google Cloud API key between the quotes to switch the
// base map to real Google Maps. Leave it empty to keep the current (CARTO) map.
// Steps: enable "Maps JavaScript API" + billing in Google Cloud, create an API
// key, then restrict it to your domain (leroyallen.github.io). The key is public
// by design (protected by the HTTP-referrer restriction).
window.__GMAPS_KEY = "AIzaSyCGqn5Axab19vVKCUQDduPb8wd64Y8b1LQ";
