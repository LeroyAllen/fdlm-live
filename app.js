// ===================== FDLM Live =====================

// Die 4 festen Orte + Line-ups (Zeiten in Paris-Zeit, +02:00)
const VENUES = [
  {
    id: "careful", name: "Trendy x Careful", lat: 48.8402962, lng: 2.3705034,
    emoji: "🎶", color: "#e4a13f", address: "Wanderlust, 32 Quai d'Austerlitz, 75013",
    dateLabel: "Night Sat→Sun, 20–21 Jun",
    lineup: [
      { s: "2026-06-21T01:00:00+02:00", e: "2026-06-21T01:45:00+02:00", act: "AMOS JOAN", me: true },
      { s: "2026-06-21T01:45:00+02:00", e: "2026-06-21T02:30:00+02:00", act: "ALICE" },
      { s: "2026-06-21T02:30:00+02:00", e: "2026-06-21T03:15:00+02:00", act: "KELLY JACKSON" },
      { s: "2026-06-21T03:15:00+02:00", e: "2026-06-21T04:00:00+02:00", act: "NAOMI YASMINE" },
      { s: "2026-06-21T04:00:00+02:00", e: "2026-06-21T04:45:00+02:00", act: "NAIRAA" },
      { s: "2026-06-21T04:45:00+02:00", e: "2026-06-21T05:30:00+02:00", act: "NLSON" },
      { s: "2026-06-21T05:30:00+02:00", e: "2026-06-21T06:00:00+02:00", act: "OPEN DECK B2B" },
    ],
  },
  {
    id: "nuu", name: "NUU", lat: 48.8635854, lng: 2.3490793,
    emoji: "🎶", color: "#7b3fe4", address: "30 Rue Pierre Lescot, 75001",
    dateLabel: "Sun 21 Jun",
    lineup: [
      { s: "2026-06-21T15:00:00+02:00", e: "2026-06-21T15:45:00+02:00", act: "UCHE" },
      { s: "2026-06-21T15:45:00+02:00", e: "2026-06-21T16:30:00+02:00", act: "LINO B2B SCOT" },
      { s: "2026-06-21T16:30:00+02:00", e: "2026-06-21T17:30:00+02:00", act: "JAROLD B2B SUAVE" },
      { s: "2026-06-21T17:30:00+02:00", e: "2026-06-21T18:15:00+02:00", act: "AMOS", me: true },
      { s: "2026-06-21T18:15:00+02:00", e: "2026-06-21T19:00:00+02:00", act: "TYFER" },
      { s: "2026-06-21T19:00:00+02:00", e: "2026-06-21T19:45:00+02:00", act: "GREAT" },
      { s: "2026-06-21T19:45:00+02:00", e: "2026-06-21T20:30:00+02:00", act: "HIRMA" },
      { s: "2026-06-21T20:30:00+02:00", e: "2026-06-21T21:30:00+02:00", act: "QPAEM" },
      { s: "2026-06-21T21:30:00+02:00", e: "2026-06-21T22:15:00+02:00", act: "LOLO" },
      { s: "2026-06-21T22:15:00+02:00", e: "2026-06-21T23:00:00+02:00", act: "LMN" },
      { s: "2026-06-21T23:00:00+02:00", e: "2026-06-21T23:45:00+02:00", act: "KIDCRAYOLA" },
      { s: "2026-06-21T23:45:00+02:00", e: "2026-06-22T00:30:00+02:00", act: "ASVNTE" },
    ],
  },
  {
    id: "sixtion", name: "Sixtion x LaSunday", lat: 48.8841454, lng: 2.3322002,
    emoji: "🎶", color: "#c34254", address: "La Machine du Moulin Rouge, 90 Bd de Clichy, 75018",
    dateLabel: "Night Sun→Mon, 21–22 Jun",
    lineup: [
      { s: "2026-06-22T00:00:00+02:00", e: "2026-06-22T01:00:00+02:00", act: "NEWCOMER" },
      { s: "2026-06-22T01:00:00+02:00", e: "2026-06-22T01:45:00+02:00", act: "AMOS JOAN", me: true },
      { s: "2026-06-22T01:45:00+02:00", e: "2026-06-22T02:30:00+02:00", act: "NAOMI YASMINE" },
      { s: "2026-06-22T02:30:00+02:00", e: "2026-06-22T03:30:00+02:00", act: "JEUNE LIO x BLACK CHARLES" },
      { s: "2026-06-22T03:30:00+02:00", e: "2026-06-22T03:45:00+02:00", act: "NTABA2LONDON (live)" },
      { s: "2026-06-22T03:45:00+02:00", e: "2026-06-22T04:30:00+02:00", act: "DC & JOJO SK" },
      { s: "2026-06-22T04:30:00+02:00", e: "2026-06-22T05:15:00+02:00", act: "BLOKYS" },
      { s: "2026-06-22T05:15:00+02:00", e: "2026-06-22T06:00:00+02:00", act: "MOHOGANY" },
    ],
  },
  {
    id: "submundo", name: "Submundo 808 x Midnight", lat: 48.8678381, lng: 2.3552755,
    emoji: "🎉", color: "#12b886", address: "67 Rue Notre-Dame de Nazareth, 75003",
    dateLabel: "Sun 21 Jun · 16:00–01:00",
    start: "2026-06-21T16:00:00+02:00", end: "2026-06-22T01:00:00+02:00",
    lineup: [
      { s: "2026-06-21T16:00:00+02:00", e: "2026-06-21T16:40:00+02:00", act: "Medussar b2b Nokiaze" },
      { s: "2026-06-21T16:40:00+02:00", e: "2026-06-21T17:20:00+02:00", act: "Cho Room" },
      { s: "2026-06-21T17:20:00+02:00", e: "2026-06-21T18:00:00+02:00", act: "Macksta C" },
      { s: "2026-06-21T18:00:00+02:00", e: "2026-06-21T18:40:00+02:00", act: "Apropri4damente" },
      { s: "2026-06-21T18:40:00+02:00", e: "2026-06-21T19:20:00+02:00", act: "Dj Sheykkh" },
      { s: "2026-06-21T19:20:00+02:00", e: "2026-06-21T20:00:00+02:00", act: "Spriteeyez b2b Haaizey" },
      { s: "2026-06-21T20:00:00+02:00", e: "2026-06-21T20:40:00+02:00", act: "SGAMO" },
      { s: "2026-06-21T20:40:00+02:00", e: "2026-06-21T21:20:00+02:00", act: "Lua & Galecta" },
      { s: "2026-06-21T21:20:00+02:00", e: "2026-06-21T22:00:00+02:00", act: "Silvasurfer & Nelystar" },
      { s: "2026-06-21T22:00:00+02:00", e: "2026-06-21T22:40:00+02:00", act: "Ray" },
      { s: "2026-06-21T22:40:00+02:00", e: "2026-06-21T23:20:00+02:00", act: "Xavbeatz & Bahiano" },
      { s: "2026-06-21T23:20:00+02:00", e: "2026-06-22T00:00:00+02:00", act: "Tresk & Clei" },
      { s: "2026-06-22T00:00:00+02:00", e: "2026-06-22T00:40:00+02:00", act: "Novin Yarp" },
    ],
  },
  {
    id: "adesso", name: "Adesso Blockparty", lat: 48.8613412, lng: 2.3583352,
    emoji: "🎉", color: "#e64980", address: "83 Rue des Archives, 75003",
    dateLabel: "Sun 21 Jun · 14:30–01:00",
    start: "2026-06-21T14:30:00+02:00", end: "2026-06-22T01:00:00+02:00",
    lineup: [
      { s: "2026-06-21T14:30:00+02:00", e: "2026-06-21T15:15:00+02:00", act: "Emblaiza" },
      { s: "2026-06-21T15:15:00+02:00", e: "2026-06-21T16:00:00+02:00", act: "ZOLYA" },
      { s: "2026-06-21T16:00:00+02:00", e: "2026-06-21T16:45:00+02:00", act: "TheKeys" },
      { s: "2026-06-21T16:45:00+02:00", e: "2026-06-21T17:30:00+02:00", act: "Evoox" },
      { s: "2026-06-21T17:30:00+02:00", e: "2026-06-21T18:15:00+02:00", act: "Bahiano" },
      { s: "2026-06-21T18:15:00+02:00", e: "2026-06-21T19:00:00+02:00", act: "DJ Decio" },
      { s: "2026-06-21T19:00:00+02:00", e: "2026-06-21T19:45:00+02:00", act: "DJ LILLI" },
      { s: "2026-06-21T19:45:00+02:00", e: "2026-06-21T20:10:00+02:00", act: "Lukas BL" },
      { s: "2026-06-21T20:10:00+02:00", e: "2026-06-21T20:55:00+02:00", act: "$MILLI" },
      { s: "2026-06-21T20:55:00+02:00", e: "2026-06-21T21:40:00+02:00", act: "Noah Uche" },
      { s: "2026-06-21T21:40:00+02:00", e: "2026-06-21T22:25:00+02:00", act: "Maloney" },
      { s: "2026-06-21T22:25:00+02:00", e: "2026-06-21T23:10:00+02:00", act: "Godspeed" },
      { s: "2026-06-21T23:10:00+02:00", e: "2026-06-21T23:55:00+02:00", act: "Dylan Ali" },
      { s: "2026-06-21T23:55:00+02:00", e: "2026-06-22T00:40:00+02:00", act: "Dany Silva" },
      { s: "2026-06-22T00:40:00+02:00", e: "2026-06-22T01:00:00+02:00", act: "YOUNGFRE$H" },
    ],
  },
  {
    id: "baile", name: "Baile da Eurotrip", lat: 48.8598930, lng: 2.3406181,
    emoji: "🎉", color: "#22b8cf", address: "Place du Louvre, 75001",
    dateLabel: "Sun 21 Jun · 16:00–00:00", lineup: [],
    start: "2026-06-21T16:00:00+02:00", end: "2026-06-22T00:00:00+02:00",
  },
  {
    id: "houseofnine", name: "House Of Nine x BABEWYD", lat: 48.8674641, lng: 2.3414034,
    emoji: "🎉", color: "#fab005", address: "7 Rue Notre-Dame des Victoires, 75002",
    dateLabel: "Fri 19 Jun · 14:00–22:00",
    start: "2026-06-19T14:00:00+02:00", end: "2026-06-19T22:00:00+02:00",
    lineup: [
      { s: "2026-06-19T18:00:00+02:00", e: "2026-06-19T18:30:00+02:00", act: "Naomi Yasmine" },
      { s: "2026-06-19T21:00:00+02:00", e: "2026-06-19T21:30:00+02:00", act: "Kelly Jackson" },
      { s: "2026-06-19T21:30:00+02:00", e: "2026-06-19T22:00:00+02:00", act: "NLSON" },
    ],
  },
  {
    id: "jeleel", name: "Jeleel's Wave", lat: 48.8818792, lng: 2.3369831,
    emoji: "🎉", color: "#fd7e14", address: "Rouge Pigalle, 77 Rue Jean-Baptiste Pigalle, 75009",
    dateLabel: "Sat→Sun 20–21 Jun · 23:00–06:00",
    start: "2026-06-20T23:00:00+02:00", end: "2026-06-21T06:00:00+02:00",
    lineup: [
      { s: "2026-06-21T00:30:00+02:00", e: "2026-06-21T01:30:00+02:00", act: "Naomi Yasmine" },
    ],
  },
  {
    id: "fdlm", name: "FDLM", lat: 48.8647875, lng: 2.3346137,
    emoji: "🎉", color: "#5f3dc4", address: "5 Avenue de l'Opéra, 75001",
    dateLabel: "Sun 21 Jun · 14:00–02:00",
    start: "2026-06-21T14:00:00+02:00", end: "2026-06-22T02:00:00+02:00",
    lineup: [
      { s: "2026-06-21T15:00:00+02:00", e: "2026-06-21T15:30:00+02:00", act: "Naomi Yasmine" },
    ],
  },
  {
    id: "genesis", name: "Genesis Block Party", lat: 48.8619727, lng: 2.3657451,
    emoji: "🎉", color: "#74b816", address: "Rue Commines, 75003",
    dateLabel: "Sun 21 Jun · 14:00–23:00",
    start: "2026-06-21T14:00:00+02:00", end: "2026-06-21T23:00:00+02:00",
    lineup: [
      { s: "2026-06-21T19:00:00+02:00", e: "2026-06-21T19:30:00+02:00", act: "NLSON" },
    ],
  },
  {
    id: "sixtionfdlm", name: "Sixtion FDLM Afterparty Pt. 1", lat: 48.8922406, lng: 2.3878226,
    emoji: "🎉", color: "#d6336c", address: "Cabaret Sauvage, Parc de la Villette, 75019",
    dateLabel: "Sun→Mon 21–22 Jun · 23:00–05:00",
    start: "2026-06-21T23:00:00+02:00", end: "2026-06-22T05:00:00+02:00",
    lineup: [
      { s: "2026-06-22T00:00:00+02:00", e: "2026-06-22T01:00:00+02:00", act: "NLSON" },
    ],
  },
  {
    id: "closefriends", name: "Close Friends x Trendy", lat: 48.8404962, lng: 2.3706034,
    emoji: "🎉", color: "#1098ad", address: "Wanderlust, 32 Quai d'Austerlitz, 75013",
    dateLabel: "Sun→Mon 21–22 Jun · 23:00–05:00",
    start: "2026-06-21T23:00:00+02:00", end: "2026-06-22T05:00:00+02:00",
    lineup: [
      { s: "2026-06-22T00:00:00+02:00", e: "2026-06-22T01:00:00+02:00", act: "Kelly Jackson" },
    ],
  },
  {
    id: "home", name: "Home", lat: 48.8880087, lng: 2.3909356,
    emoji: "🏠", color: "#2b7fff", address: "Au Bœuf Couronné, 188 Av. Jean Jaurès, 75019",
    dateLabel: "Your hotel",
    lineup: [],
  },
];

const statusEl = document.getElementById("status");
function setStatus(msg) { statusEl.textContent = msg; }

// ---- Helfer ----
function escapeHtml(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function fmtTime(iso) { return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Europe/Paris" }).format(new Date(iso)); }
function fmtDay(ms) { return new Intl.DateTimeFormat("en-GB", { weekday: "short", day: "2-digit", month: "2-digit", timeZone: "Europe/Paris" }).format(new Date(ms)); }
function fmtWeekday(ms) { return new Intl.DateTimeFormat("en-GB", { weekday: "short", timeZone: "Europe/Paris" }).format(new Date(ms)).replace(".", ""); }
function haversineKm(a, b) {
  const R = 6371, toRad = x => x * Math.PI / 180;
  const dLat = toRad(b.lat - a.lat), dLng = toRad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

// ---- Identität ----
function getUserId() {
  let id = localStorage.getItem("plm_uid");
  if (!id) { id = "u_" + Math.random().toString(36).slice(2, 10); localStorage.setItem("plm_uid", id); }
  return id;
}
const USER_ID = getUserId();
let userName = localStorage.getItem("plm_name") || "";
let myPhoto = localStorage.getItem("plm_photo") || null; // base64-Avatar (klein)
let visible = true;
let myStatus = localStorage.getItem("plm_status") || null;
let lastPos = null; // {lat, lng}
let chatOpen = false;
let activeChannel = "crew"; // "crew" oder "dm:<sortierter-key>"
const channelState = {}; // key -> { unread, name, messages, seen:Set, loaded:bool }
let chatInited = false;

// ---- Favoriten (lokal pro Gerät) ----
let favs = new Set(JSON.parse(localStorage.getItem("plm_favs") || "[]"));
let tlFavOnly = false;
function isFav(id) { return favs.has(id); }
// Verwaltungs-Rechte: nur Leroy & Amos (matcht auch "Amos Joan", "Leroy Allen").
// Hinweis: rein UI-seitig — die App hat keine echte Auth (nur selbst gewählter Name).
function isAdmin() {
  const n = (userName || "").trim().toLowerCase();
  return n.includes("leroy") || n.includes("amos");
}
function toggleFav(id) {
  if (favs.has(id)) favs.delete(id); else favs.add(id);
  localStorage.setItem("plm_favs", JSON.stringify([...favs]));
}

// Feste Farbpalette pro Freund (deterministisch aus der ID)
const FRIEND_COLORS = ["#00c389", "#ff6b6b", "#ffa94d", "#cc5de8", "#f783ac", "#20c997", "#fab005", "#15aabf"];
function colorForUid(uid) {
  let h = 0; for (let i = 0; i < uid.length; i++) h = (h * 31 + uid.charCodeAt(i)) >>> 0;
  return FRIEND_COLORS[h % FRIEND_COLORS.length];
}

// Live crew state — declared early because the venue crew-count badges (B) read
// friendData on the very first renderVenueMarkers() below.
const friendMarkers = {}, friendData = {};

// ---- Map ----
const map = L.map("map", { zoomControl: false }).setView([48.8649, 2.3550], 13);
map.attributionControl.setPrefix(false); // hide the "Leaflet" + flag branding (keep data attribution)
const baseStreets = L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
  maxZoom: 20, subdomains: "abcd", detectRetina: true,
  attribution: '© OpenStreetMap © CARTO',
}).addTo(map);
const baseSatellite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
  maxZoom: 19, attribution: '© Esri, Maxar, Earthstar Geographics',
});
let layersControl = L.control.layers({ "🗺️ Map": baseStreets, "🛰️ Satellite": baseSatellite }, null, { position: "bottomright", collapsed: true }).addTo(map);

// Real Google Maps — only if an API key is set in config.js. Loads Google's
// official JS API and renders it as a Leaflet layer (GoogleMutant), so all
// existing markers/popups/controls keep working unchanged. No key → CARTO stays.
// Cleaner Google base map: hide museums, monuments and churches so the party
// pins stand out. Everything else stays default — streets, neighbourhood and
// park names, bus stops, restaurants/shops and the river label all remain.
const CLEAN_MAP_STYLE = [
  { featureType: "poi.attraction",       stylers: [{ visibility: "off" }] }, // museums, monuments
  { featureType: "poi.place_of_worship", stylers: [{ visibility: "off" }] }, // churches
];
if (window.__GMAPS_KEY && window.L && L.gridLayer && L.gridLayer.googleMutant) {
  window.__initGmaps = () => {
    try {
      const gRoad = L.gridLayer.googleMutant({ type: "roadmap", styles: CLEAN_MAP_STYLE });
      const gSat = L.gridLayer.googleMutant({ type: "hybrid", styles: CLEAN_MAP_STYLE });
      map.removeLayer(baseStreets);
      if (layersControl) map.removeControl(layersControl);
      gRoad.addTo(map);
      layersControl = L.control.layers({ "🗺️ Google": gRoad, "🛰️ Satellite": gSat }, null, { position: "bottomright", collapsed: true }).addTo(map);
      // GoogleMutant manchmal grau, bis die Karte einmal neu vermessen wird
      setTimeout(() => map.invalidateSize(), 300);
    } catch (e) { console.warn("Google Maps init failed — keeping fallback map", e); }
  };
  const gs = document.createElement("script");
  gs.src = `https://maps.googleapis.com/maps/api/js?key=${window.__GMAPS_KEY}&loading=async&callback=__initGmaps`;
  gs.async = true; gs.onerror = () => console.warn("Google Maps script failed to load — keeping fallback map");
  document.head.appendChild(gs);
}

// ---- Orte (feste Events + selbst hinzugefügte aus der DB) ----
let dbEvents = [];
function allVenues() { return VENUES.concat(dbEvents); }
function venueById(id) { return allVenues().find(v => v.id === id); }
function isDbEvent(id) { return dbEvents.some(e => e.id === id); }
const venueMarkerById = {};
// ---- Crew at a venue (B) — client-side proximity over the live friendData ----
const CREW_VENUE_RADIUS_M = 110; // ~1 block tolerance for GPS jitter in dense Paris
function crewAtVenue(v) {
  if (!v || v.id === "home" || typeof v.lat !== "number") return [];
  const out = [];
  Object.entries(friendData).forEach(([uid, u]) => {
    if (!u || typeof u.lat !== "number" || typeof u.lng !== "number") return;
    if (u.hidden && uid !== USER_ID) return;
    if (haversineKm(u, v) * 1000 <= CREW_VENUE_RADIUS_M) out.push({ uid, u });
  });
  return out;
}
function venueForMember(u) {
  if (!u || typeof u.lat !== "number" || typeof u.lng !== "number") return null;
  let best = null, bestKm = Infinity;
  allVenues().forEach(v => {
    if (v.id === "home" || typeof v.lat !== "number") return;
    const km = haversineKm(u, v);
    if (km * 1000 <= CREW_VENUE_RADIUS_M && km < bestKm) { bestKm = km; best = v; }
  });
  return best;
}
function crewHereHtml(v) {
  const crew = crewAtVenue(v);
  if (!crew.length) return "";
  const rows = crew.map(({ uid, u }) => {
    const isMe = uid === USER_ID;
    const col = isMe ? "#2b7fff" : colorForUid(uid);
    const dot = u.photo
      ? `<span class="here-dot photo" style="background-image:url('${u.photo}')"></span>`
      : `<span class="here-dot" style="background:${col}"></span>`;
    const meTag = isMe ? ` <span class="here-you">(you)</span>` : "";
    const off = isOnline(u) ? "" : " off";
    return `<div class="here-row${off}">${dot}<span class="here-name">${escapeHtml(u.name || "?")}${meTag}</span></div>`;
  }).join("");
  return `<div class="here-list"><div class="here-hd">👥 ${crew.length} here now</div>${rows}</div>`;
}

function venueIcon(v) {
  const favBadge = isFav(v.id) ? `<span class="fav-badge">⭐</span>` : "";
  const n = crewAtVenue(v).length;
  const countBadge = n > 0 ? `<span class="crew-count">${n}</span>` : "";
  return L.divIcon({
    className: "",
    html: `<div class="venue-pin ${isFav(v.id) ? "fav" : ""}" style="background:${v.color}"><span>${v.emoji}</span>${favBadge}${countBadge}</div>`,
    iconSize: [30, 30], iconAnchor: [15, 30], popupAnchor: [0, -28],
  });
}
function renderVenueMarkers() {
  const seen = new Set();
  allVenues().forEach(v => {
    if (typeof v.lat !== "number" || typeof v.lng !== "number") return;
    seen.add(v.id);
    if (venueMarkerById[v.id]) {
      venueMarkerById[v.id].setLatLng([v.lat, v.lng]).setIcon(venueIcon(v));
    } else {
      const m = L.marker([v.lat, v.lng], { icon: venueIcon(v) }).addTo(map).bindPopup("", { maxWidth: 300, minWidth: 250, autoPanPaddingTopLeft: [12, 110], autoPanPaddingBottomRight: [12, 70] });
      m.on("popupopen", () => {
        m.setPopupContent(venuePopupHtml(venueById(v.id) || v));
        setTimeout(() => { const el = document.querySelector(".leaflet-popup .slot.live"); if (el) el.scrollIntoView({ block: "center" }); }, 30);
      });
      venueMarkerById[v.id] = m;
    }
  });
  Object.keys(venueMarkerById).forEach(id => {
    if (!seen.has(id)) { map.removeLayer(venueMarkerById[id]); delete venueMarkerById[id]; }
  });
}
renderVenueMarkers();

// Google-Maps-Directions-Icon (Material "directions"-Glyph, weiß) — gleiches Design wie Google
const DIR_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#fff" d="M22.43 10.59l-9.01-9.01c-.75-.75-2.07-.76-2.83 0l-9 9c-.78.78-.78 2.05 0 2.83l9 9c.39.39.9.58 1.41.58.51 0 1.02-.19 1.41-.58l8.99-8.99c.79-.76.8-2.05.03-2.84zM12.01 20.99l-9-9 9-9 9 9-9 9zM8 11v4h2v-3h4v2.5l3.5-3.5L14 7.5V10H9c-.55 0-1 .45-1 1z"/></svg>';

function venuePopupHtml(v) {
  const now = Date.now();
  const here = crewHereHtml(v); // B — who's here right now
  let dist = "";
  if (lastPos) {
    const km = haversineKm(lastPos, v);
    const min = Math.max(1, Math.round(km / 5 * 60)); // 5 km/h zu Fuß
    dist = `<div class="dist">📍 ${km.toFixed(1)} km · ~${min} min walk</div>`;
  }
  let lineup = "";
  if (v.lineup && v.lineup.length) {
    const rows = v.lineup.map(sl => {
      const s = new Date(sl.s).getTime(), e = new Date(sl.e).getTime();
      const live = now >= s && now < e, past = now >= e;
      const cls = [live ? "live" : "", past ? "past" : ""].filter(Boolean).join(" ");
      const tag = live ? '<span class="tag live">▶ NOW</span>' : "";
      return `<div class="slot ${cls}"><span class="t">${fmtTime(sl.s)}</span><span class="a">${escapeHtml(sl.act)}</span>${tag}</div>`;
    }).join("");
    lineup = `<div class="lineup">${rows}</div>`;
  }
  const dir = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(v.address || (v.lat + "," + v.lng))}`;
  const fav = isFav(v.id);
  const favBtn = v.id === "home" ? "" : `<button class="fav-btn ${fav ? "active" : ""}" data-vid="${v.id}">${fav ? "⭐ Favorite" : "☆ Add favorite"}</button>`;
  const delBtn = (isDbEvent(v.id) && isAdmin()) ? `<button class="del-event-btn" data-vid="${v.id}">🗑 Delete event</button>` : "";
  return `<div class="venue-popup"><b>${escapeHtml(v.name)}</b><div class="sub">${v.dateLabel} · ${escapeHtml(v.address)}</div>${favBtn}${dist}${here}${lineup}` +
         `<a class="route-btn" href="${dir}" target="_blank" rel="noopener">${DIR_ICON}<span>Directions</span></a>${delBtn}</div>`;
}

// ---- "Dein nächster Stop"-Banner (nächster favorisierter Event) ----
function favStops() {
  const arr = [];
  allVenues().forEach(v => {
    if (!isFav(v.id)) return;
    const w = venueWindow(v);
    if (w) arr.push({ v, s: w.s, e: w.e });
  });
  return arr.sort((a, b) => a.s - b.s);
}
function updateNextSet() {
  const el = document.getElementById("nextSet");
  const now = Date.now();
  const stops = favStops();
  const live = stops.find(x => now >= x.s && now < x.e);
  const next = stops.find(x => x.s > now);
  if (live) {
    el.innerHTML = `🔴 Live now: <b>${escapeHtml(live.v.name)}</b>`;
    el.dataset.vid = live.v.id; el.classList.add("show", "live");
  } else if (next) {
    el.innerHTML = `⭐ Your next stop: <b>${fmtDay(next.s)} ${fmtTime(next.s)}</b> @ ${escapeHtml(next.v.name)}`;
    el.dataset.vid = next.v.id; el.classList.add("show"); el.classList.remove("live");
  } else {
    el.classList.remove("show", "live");
  }
}
document.getElementById("nextSet").addEventListener("click", e => {
  const v = venueById(e.currentTarget.dataset.vid);
  const m = v && venueMarkerById[v.id];
  if (v && m) { map.setView([v.lat, v.lng], 16); m.openPopup(); }
});

// ---- Supabase ----
let sb = null;
// Realtime channel handles — kept so we can tear them down and re-subscribe on reconnect (A1).
let chMembers = null, chEvents = null, chMessages = null;
let lastResync = 0, lastBeat = 0;

function rowToMember(r) {
  return { id: r.id, name: r.name, photo: r.photo || null, lat: r.lat, lng: r.lng,
           hidden: !!r.hidden, status: r.status || null, ts: r.updated_at ? Date.parse(r.updated_at) : 0 };
}
function rowToEvent(r) {
  return { id: r.id, name: r.name, address: r.address, lat: r.lat, lng: r.lng,
           dateLabel: r.date_label, start: r.start_ts, end: r.end_ts,
           lineup: Array.isArray(r.lineup) ? r.lineup : [], color: r.color, emoji: r.emoji || "🎉", addedBy: r.added_by };
}
function membersById(rows) {
  const m = {}; (rows || []).forEach(r => { m[r.id] = rowToMember(r); }); return m;
}

// Meinen eigenen Datensatz schreiben (Upsert). Gedrosselt aus startTracking,
// sofort bei Status-/Sichtbarkeits-/Foto-Änderung.
async function upsertMe() {
  if (!sb || !userName) return;
  const row = { id: USER_ID, name: userName, hidden: !visible, status: myStatus, photo: myPhoto, updated_at: new Date().toISOString() };
  if (lastPos) { row.lat = lastPos.lat; row.lng = lastPos.lng; }
  try { await sb.from("members").upsert(row); } catch (e) { console.warn(e); }
}

function initSupabase() {
  const url = window.__SB_URL, key = window.__SB_ANON;
  if (!url || !key || !window.supabase) { setStatus("⚠️ Supabase config missing — see config.js"); return false; }
  sb = window.supabase.createClient(url, key, { realtime: { params: { eventsPerSecond: 5 } } });
  reloadMembers();
  reloadEvents();
  setupChat();          // ensures the "crew" channel state exists
  subscribeRealtime();
  return true;
}

// Authoritative refetches — also reused by resync() on reconnect.
async function reloadMembers() {
  if (!sb) return;
  // initial + on reconnect — no auto-remove, last location stays as an offline pin
  const { data } = await sb.from("members").select("*");
  renderFriends(membersById(data));
}
async function reloadEvents() {
  if (!sb) return;
  const { data } = await sb.from("events").select("*");
  dbEvents = (data || []).map(rowToEvent);
  renderVenueMarkers(); updateNextSet();
  if (!document.getElementById("timeline").classList.contains("hidden")) renderTimeline();
}

// (Re-)subscribe all realtime channels. One code path for init AND reconnect → no drift.
function subscribeRealtime() {
  if (!sb) return;
  chMembers = sb.channel("members-rt")
    .on("postgres_changes", { event: "*", schema: "public", table: "members" }, payload => {
      if (payload.eventType === "DELETE") { if (payload.old && payload.old.id) delete friendData[payload.old.id]; }
      else if (payload.new) { friendData[payload.new.id] = rowToMember(payload.new); }
      renderFriends(friendData);
    }).subscribe();
  chEvents = sb.channel("events-rt")
    .on("postgres_changes", { event: "*", schema: "public", table: "events" }, reloadEvents)
    .subscribe();
  chMessages = sb.channel("messages-rt")
    .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, onMessageInsert)
    .subscribe();
}
function recreateRealtime() {
  if (!sb) return;
  [chMembers, chEvents, chMessages].forEach(ch => { if (ch) { try { sb.removeChannel(ch); } catch (e) {} } });
  chMembers = chEvents = chMessages = null;
  subscribeRealtime();
}

// A1 — foreground recovery: iOS PWA closes the realtime socket on background and
// doesn't reliably reopen it. On return, authoritatively refetch + re-subscribe so
// crew pins, events and chat never silently freeze.
async function resync(reason) {
  if (!sb || !userName) return;
  const now = Date.now();
  if (now - lastResync < 10000) return; // absorb double visibilitychange + online
  lastResync = now;
  setStatus("Reconnecting…");
  try {
    await Promise.all([reloadMembers(), reloadEvents()]);
    await loadActiveChannelFresh();
    await upsertMe();
    recreateRealtime();
  } catch (e) { console.warn("resync failed", e); }
}
// Re-pull the open chat channel (loadChannel early-returns once loaded; the seen-Set
// dedupes, so only messages missed while backgrounded get added).
async function loadActiveChannelFresh() {
  const ch = activeChannel, st = channelState[ch];
  if (!st || !sb) return;
  st.loaded = false;
  await loadChannel(ch);
  if (chatOpen && activeChannel === ch) {
    const listEl = document.getElementById("chList");
    if (listEl) {
      listEl.innerHTML = "";
      st.messages.forEach(appendMessage);
      setTimeout(() => { listEl.scrollTop = listEl.scrollHeight; }, 30);
    }
  }
}

// Status-Optionen
const STATUSES = [
  { key: "here", emoji: "📍", label: "I’m here" },
  { key: "otw", emoji: "🚕", label: "on the way" },
  { key: "bar", emoji: "🍹", label: "at the bar" },
  { key: "home", emoji: "🏠", label: "home" },
];
function statusOf(key) { return STATUSES.find(s => s.key === key); }

const ONLINE_WINDOW_MS = 45 * 60 * 1000; // 45 Min ohne Update → offline (ehrlicher fürs nächtliche Tempo)
function isOnline(u) { return !!u && !u.hidden && u.ts && (Date.now() - u.ts < ONLINE_WINDOW_MS); }

function friendIcon(isMe, name, color, statusKey, online, photo) {
  const dotColor = !online ? "#e03131" : (isMe ? "#2b7fff" : color);
  const st = statusOf(statusKey);
  const badge = st && online ? `<span class="status-badge">${st.emoji}</span>` : "";
  const offlineCls = online ? "" : " offline";
  const dot = photo
    ? `<div class="dot photo" style="background-image:url('${photo}');border-color:${!online ? "#e03131" : (isMe ? "#2b7fff" : "#fff")}">${badge}</div>`
    : `<div class="dot" style="background:${dotColor}">${badge}</div>`;
  return L.divIcon({
    className: "",
    html: `<div class="friend-pin ${isMe ? "me" : ""}${offlineCls}">${dot}<div class="label">${escapeHtml(name)}</div></div>`,
    iconSize: [60, 40], iconAnchor: [30, 9],
  });
}
function friendPopupHtml(uid, u) {
  const online = isOnline(u);
  const st = statusOf(u.status);
  const stLine = st && online ? `<div class="sub">${st.emoji} ${st.label}</div>` : "";
  if (uid === USER_ID) return `<div class="friend-popup"><b>${escapeHtml(u.name || "You")}</b><div class="sub">That’s you</div>${stLine}</div>`;
  const mins = Math.round((Date.now() - (u.ts || 0)) / 60000);
  const seen = mins <= 0 ? "just now" : (mins === 1 ? "1 min ago" : `${mins} min ago`);
  const offlineLine = online ? "" : `<div class="sub offline-line">🔴 Offline · last location</div>`;
  const dir = `https://www.google.com/maps/search/?api=1&query=${u.lat},${u.lng}`;
  return `<div class="friend-popup"><b>${escapeHtml(u.name || "?")}</b>${offlineLine}${stLine}<div class="sub">📡 Location ${seen}</div>` +
         `<a class="route-btn" href="${dir}" target="_blank" rel="noopener">${DIR_ICON}<span>Route to ${escapeHtml(u.name || "Friend")}</span></a>` +
         `<button class="dm-btn" data-uid="${uid}" data-name="${escapeHtml(u.name || "Friend")}">💬 Private chat with ${escapeHtml(u.name || "Friend")}</button></div>`;
}

function renderFriends(data) {
  const seen = new Set();
  let onlineCount = 0, offlineCount = 0;
  Object.entries(data).forEach(([uid, u]) => {
    if (!u || typeof u.lat !== "number" || typeof u.lng !== "number") return;
    if (u.hidden && uid !== USER_ID) return; // versteckte Freunde nicht anzeigen
    seen.add(uid);
    friendData[uid] = u;
    const online = isOnline(u);
    if (uid !== USER_ID) { online ? onlineCount++ : offlineCount++; }
    const isMe = uid === USER_ID, pos = [u.lat, u.lng], color = colorForUid(uid);
    const icon = friendIcon(isMe, u.name || "?", color, u.status, online, u.photo);
    if (friendMarkers[uid]) {
      friendMarkers[uid].setLatLng(pos).setIcon(icon);
    } else {
      const m = L.marker(pos, { icon, zIndexOffset: isMe ? 1000 : (online ? 500 : 300) }).addTo(map);
      m.bindPopup("", { closeButton: false });
      m.on("popupopen", () => m.setPopupContent(friendPopupHtml(uid, friendData[uid] || u)));
      friendMarkers[uid] = m;
    }
  });
  // Gelöschte/nicht mehr vorhandene Nutzer aus der lokalen Liste entfernen (sonst bleiben sie in der Crew-Liste)
  Object.keys(friendData).forEach(uid => { if (!data[uid]) delete friendData[uid]; });
  Object.keys(friendMarkers).forEach(uid => {
    if (!seen.has(uid)) { map.removeLayer(friendMarkers[uid]); delete friendMarkers[uid]; }
  });
  if (onlineCount === 0 && offlineCount === 0) setStatus("You’re online — no friends yet");
  else if (offlineCount === 0) setStatus(`🟢 ${onlineCount} online`);
  else if (onlineCount === 0) setStatus(`🔴 ${offlineCount} last seen`);
  else setStatus(`🟢 ${onlineCount} online · 🔴 ${offlineCount} offline`);
  renderVenueMarkers(); // B — refresh venue crew-count badges from the latest positions
  renderCrewList();
}

// ---- Standort ----
function startTracking() {
  if (!navigator.geolocation) { setStatus("⚠️ No GPS available"); return; }
  let firstFix = true;
  let lastUpload = 0, lastUpPos = null, watchId = null;
  const onErr = err => { setStatus("⚠️ Location blocked — enable GPS/permission"); console.warn(err); };
  const onPos = pos => {
    const { latitude, longitude } = pos.coords;
    lastPos = { lat: latitude, lng: longitude };
    const now = Date.now();
    const movedM = lastUpPos ? haversineKm(lastUpPos, lastPos) * 1000 : Infinity;
    // Battery: only write to the DB every 5 min OR after >75 m of movement.
    if (firstFix || now - lastUpload > 5 * 60 * 1000 || movedM > 75) {
      lastUpload = now; lastUpPos = lastPos;
      upsertMe();
    }
    if (firstFix) {
      map.setView([latitude, longitude], 15);
      firstFix = false;
      // A3 — after the first precise fix, downgrade to low-power tracking to save
      // battery over a long night. The 5-min/75-m write throttle above is unchanged.
      if (watchId !== null) navigator.geolocation.clearWatch(watchId);
      watchId = navigator.geolocation.watchPosition(onPos, onErr, { enableHighAccuracy: false, maximumAge: 60000, timeout: 30000 });
    }
  };
  watchId = navigator.geolocation.watchPosition(onPos, onErr, { enableHighAccuracy: true, maximumAge: 5000, timeout: 20000 });
}

// ---- "Alle anzeigen" ----
function showAll() {
  const pts = allVenues().map(v => [v.lat, v.lng]);
  Object.values(friendMarkers).forEach(m => pts.push(m.getLatLng()));
  if (lastPos) pts.push([lastPos.lat, lastPos.lng]);
  map.fitBounds(L.latLngBounds(pts), { padding: [60, 60], maxZoom: 16 });
}

// ---- Programm-Timeline ----
function venueWindow(v) {
  if (v.start && v.end) return { s: new Date(v.start).getTime(), e: new Date(v.end).getTime() };
  if (v.lineup && v.lineup.length) return { s: new Date(v.lineup[0].s).getTime(), e: new Date(v.lineup[v.lineup.length - 1].e).getTime() };
  return null;
}
// Merkt sich, welche Detail-Ansichten offen sind (überlebt das periodische Re-Render)
const tlOpen = new Set();

// Bucket einen Event in eine Festival-Session: "So 21." (Tag) oder "Sa-Nacht" (Abend/Nacht)
function venueDay(ms) {
  const hour = +new Intl.DateTimeFormat("en-GB", { hour: "2-digit", hour12: false, timeZone: "Europe/Paris" }).format(new Date(ms));
  const isNight = hour >= 20 || hour < 6;
  // Sessions nach Mitternacht (00–06 Uhr) gehören zum vorherigen Abend
  const key = (isNight && hour < 6) ? ms - 12 * 3600 * 1000 : ms;
  const wd = fmtWeekday(key);
  if (isNight) return `${wd} night`;
  const day = new Intl.DateTimeFormat("en-GB", { day: "2-digit", timeZone: "Europe/Paris" }).format(new Date(key));
  return `${wd} ${day}`;
}

// Öffnet Google Maps — direkt die App, wenn installiert (Universal/App Link), sonst Browser
function gmapsUrl(v) {
  const q = v.address ? encodeURIComponent(v.address) : `${v.lat},${v.lng}`;
  return `https://www.google.com/maps/search/?api=1&query=${q}`;
}

function tlSetRows(v, now) {
  if (!v.lineup || !v.lineup.length) return '<div class="tl-empty">Line-up to be announced</div>';
  return v.lineup.map(sl => {
    const s = new Date(sl.s).getTime(), e = new Date(sl.e).getTime();
    const live = now >= s && now < e, past = now >= e, me = sl.me === true;
    const cls = [live ? "now" : "", past ? "past" : "", me ? "me" : ""].filter(Boolean).join(" ");
    const pill = me ? '<span class="mepill">YOUR SET</span>' : "";
    return `<div class="tl-set ${cls}"><span class="st">${fmtTime(sl.s)}</span><span class="a">${escapeHtml(sl.act)}</span>${pill}</div>`;
  }).join("");
}

function renderTimeline() {
  const now = Date.now();
  // "+ Event" hinzufügen nur für Admins (Leroy & Amos)
  document.getElementById("aeOpen").style.display = isAdmin() ? "" : "none";
  let items = allVenues().map(v => ({ v, w: venueWindow(v) })).filter(x => x.w).sort((a, b) => a.w.s - b.w.s);
  if (tlFavOnly) items = items.filter(x => isFav(x.v.id));
  document.getElementById("tlFilter").innerHTML =
    `<button id="tlFavToggle" class="tl-filter ${tlFavOnly ? "active" : ""}">${tlFavOnly ? "⭐ Favorites only" : "All events"}</button>`;
  document.getElementById("tlFavToggle").addEventListener("click", () => { tlFavOnly = !tlFavOnly; renderTimeline(); });
  if (items.length === 0) { document.getElementById("tlList").innerHTML = '<div class="chat-empty">No favorites yet — tap ☆ Favorite on an event.</div>'; return; }

  // "Jetzt live"-Streifen
  const liveItems = items.filter(x => now >= x.w.s && now < x.w.e);
  let strip = "";
  if (liveItems.length && !tlFavOnly) {
    const cards = liveItems.map(({ v }) => {
      const cur = v.lineup && v.lineup.find(sl => now >= new Date(sl.s).getTime() && now < new Date(sl.e).getTime());
      const me = cur && cur.me === true;
      return `<div class="tl-lcard" data-jump="${v.id}">
        <div class="v">${escapeHtml(v.name)}</div>
        <div class="a ${me ? "me" : ""}">${cur ? escapeHtml(cur.act) : "live"}</div>
        <div class="t">${cur ? fmtTime(cur.s) + "–" + fmtTime(cur.e) : ""}</div></div>`;
    }).join("");
    strip = `<div class="tl-live-hd"><span class="pulse"></span>Live now · ${liveItems.length} venues</div><div class="tl-live-cards">${cards}</div>`;
  }

  // Nach Tag-Sessions gruppieren (items sind chronologisch → Gruppen-Reihenfolge stimmt)
  const groups = [];
  const seen = {};
  items.forEach(it => {
    const key = venueDay(it.w.s);
    if (!(key in seen)) { seen[key] = groups.length; groups.push({ key, rows: [] }); }
    groups[seen[key]].rows.push(it);
  });

  const body = groups.map(g => {
    const rows = g.rows.map(({ v, w }) => {
      const live = now >= w.s && now < w.e, past = now >= w.e;
      let badge;
      if (live) badge = '<span class="tl-badge live">▶ LIVE</span>';
      else if (past) badge = '<span class="tl-badge past">over</span>';
      else {
        const mins = Math.round((w.s - now) / 60000);
        badge = `<span class="tl-badge">${mins < 60 ? `in ${mins} min` : `in ${Math.round(mins / 60)} h`}</span>`;
      }
      const favIcon = isFav(v.id) ? ' <span class="tl-icon">⭐</span>' : "";
      const loc = `<div class="tl-loc">
          <button class="tl-place" data-jump="${v.id}"><span class="pin">📍</span><span class="ad">${escapeHtml(v.address || "")}</span></button>
          <a class="dir-btn" href="${gmapsUrl(v)}" target="_blank" rel="noopener" aria-label="Directions in Google Maps">${DIR_ICON}</a>
        </div>`;
      return `<div class="tl-row ${live ? "live" : ""} ${past ? "past" : ""} ${isFav(v.id) ? "fav" : ""} ${tlOpen.has(v.id) ? "open" : ""}" data-vid="${v.id}">
        <div class="tl-head" data-toggle="${v.id}">
          <span class="tl-dot" style="background:${v.color}">${v.emoji}</span>
          <span class="tl-mid"><span class="tl-name">${escapeHtml(v.name)}${favIcon}</span>
          <span class="tl-time">${fmtWeekday(w.s)} ${fmtTime(new Date(w.s).toISOString())}–${fmtTime(new Date(w.e).toISOString())}</span></span>
          ${badge}<span class="tl-chev">▾</span>
        </div>
        <div class="tl-detail"><div class="tl-detail-inner">
          ${loc}
          ${tlSetRows(v, now)}
        </div></div>
      </div>`;
    }).join("");
    return `<div class="tl-day">${g.key}</div>${rows}`;
  }).join("");

  document.getElementById("tlList").innerHTML = strip + body;

  // Kopf antippen → Detail auf/zu (Zustand merken)
  document.querySelectorAll("#tlList .tl-head").forEach(head => head.addEventListener("click", () => {
    const id = head.dataset.toggle;
    const row = head.parentElement;
    if (tlOpen.has(id)) { tlOpen.delete(id); row.classList.remove("open"); }
    else { tlOpen.add(id); row.classList.add("open"); }
  }));

  // "Auf der Karte zeigen" + Live-Karten → zum Pin springen
  document.querySelectorAll("#tlList [data-jump]").forEach(el => el.addEventListener("click", e => {
    e.stopPropagation();
    const v = venueById(el.dataset.jump);
    const m = v && venueMarkerById[v.id];
    closeSheets();
    if (v && m) { map.setView([v.lat, v.lng], 16); m.openPopup(); }
  }));
}

// ---- Event hinzufügen (in DB, für alle sichtbar) ----
function addDayStr(dateStr) { const d = new Date(dateStr + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() + 1); return d.toISOString().slice(0, 10); }
const EVENT_COLORS = ["#e8590c", "#2b8a3e", "#1971c2", "#9c36b5", "#c2255c", "#0c8599", "#e67700", "#5c940d", "#6741d9"];
async function submitNewEvent() {
  const g = id => document.getElementById(id);
  const name = g("aeName").value.trim();
  const addr = g("aeAddr").value.trim();
  const date = g("aeDate").value;
  const von = g("aeVon").value, bis = g("aeBis").value;
  const msg = g("aeMsg");
  if (!name || !addr || !date || !von || !bis) { msg.textContent = "Please fill in name, address, date and times."; return; }
  if (!sb) { msg.textContent = "No connection."; return; }
  msg.style.color = "#888"; msg.textContent = "Searching address…";
  let lat, lng;
  try {
    const q = /paris/i.test(addr) ? addr : addr + ", Paris, France";
    const r = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(q)}`, { headers: { Accept: "application/json" } });
    const arr = await r.json();
    if (!arr || !arr.length) { msg.style.color = "#c34254"; msg.textContent = "Address not found — be more specific (street + no.)."; return; }
    lat = parseFloat(arr[0].lat); lng = parseFloat(arr[0].lon);
  } catch (e) { msg.style.color = "#c34254"; msg.textContent = "Address search failed. Try again."; return; }

  const startIso = `${date}T${von}:00+02:00`;
  const endIso = `${(bis <= von ? addDayStr(date) : date)}T${bis}:00+02:00`;
  const dateLabel = `${fmtDay(new Date(startIso).getTime())} · ${von}–${bis}`;
  const lineup = [];
  const act = g("aeAct").value.trim(), av = g("aeActVon").value, ab = g("aeActBis").value;
  if (act && av) {
    const ae = ab || av;
    lineup.push({ s: `${date}T${av}:00+02:00`, e: `${(ae <= av && ab ? addDayStr(date) : date)}T${ae}:00+02:00`, act });
  }
  const ev = { name, address: addr, lat, lng, date_label: dateLabel, start_ts: startIso, end_ts: endIso, lineup, color: EVENT_COLORS[Math.floor(Math.random() * EVENT_COLORS.length)], emoji: "🎉", added_by: userName || "?" };
  try {
    const { error } = await sb.from("events").insert(ev);
    if (error) throw error;
    ["aeName", "aeAddr", "aeAct", "aeActVon", "aeActBis"].forEach(i => g(i).value = "");
    msg.textContent = "";
    closeSheets();
    toast("✅ Event added — visible to everyone!");
  } catch (e) { msg.style.color = "#c34254"; msg.textContent = "Saving failed."; }
}

// ---- Crew-Liste ----
function renderCrewList() {
  const wrap = document.getElementById("crewList");
  if (!wrap) return;
  const users = Object.entries(friendData)
    .filter(([uid, u]) => u && (uid === USER_ID || !u.hidden))
    .map(([uid, u]) => ({ uid, u, online: isOnline(u) }));
  users.sort((a, b) => {
    if (a.uid === USER_ID) return -1;
    if (b.uid === USER_ID) return 1;
    return (b.online - a.online) || ((b.u.ts || 0) - (a.u.ts || 0));
  });
  if (users.length === 0) { wrap.innerHTML = '<div class="chat-empty">No crew online yet — send your friends the link!</div>'; return; }
  const admin = isAdmin();
  wrap.innerHTML = users.map(({ uid, u, online }) => {
    const isMe = uid === USER_ID;
    const color = isMe ? "#2b7fff" : colorForUid(uid);
    const st = statusOf(u.status);
    const mins = Math.round((Date.now() - (u.ts || 0)) / 60000);
    const seen = mins <= 0 ? "just now" : (mins === 1 ? "1 min ago" : (mins < 60 ? `${mins} min ago` : `${Math.round(mins / 60)} h ago`));
    const atV = venueForMember(u); // B — "at NUU" when within a venue radius
    const sub = atV ? `📍 at ${atV.name}`
      : (isMe ? "You" : (online ? (st ? `${st.emoji} ${st.label}` : `📡 ${seen}`) : `🔴 last seen ${seen}`));
    const dot = (u.photo
      ? `<span class="crew-dot photo" style="background-image:url('${u.photo}')"></span>`
      : `<span class="crew-dot" style="background:${color}"></span>`) + `<span class="crew-online ${online ? 'on' : 'off'}"></span>`;
    const adminDel = (admin && !isMe) ? `<button class="crew-del" data-uid="${uid}" data-name="${escapeHtml(u.name || "?")}">🗑</button>` : "";
    return `<div class="crew-row" data-uid="${uid}"><div class="crew-avatar">${dot}</div>` +
           `<div class="crew-mid"><div class="crew-name">${escapeHtml(u.name || "?")}${isMe ? ' <span class="crew-me">(you)</span>' : ''}</div><div class="crew-sub">${escapeHtml(sub)}</div></div>` +
           `${adminDel}<button class="crew-go">📍</button></div>`;
  }).join("");
  wrap.querySelectorAll(".crew-row").forEach(row => row.addEventListener("click", () => {
    const uid = row.dataset.uid;
    const m = friendMarkers[uid];
    closeSheets();
    if (m) { map.setView(m.getLatLng(), 16); setTimeout(() => m.openPopup(), 250); }
  }));
  wrap.querySelectorAll(".crew-del").forEach(btn => btn.addEventListener("click", async e => {
    e.stopPropagation();
    const uid = btn.dataset.uid;
    if (sb && confirm(`Delete account “${btn.dataset.name}”?`)) {
      try {
        await sb.from("push_subscriptions").delete().eq("uid", uid);
        await sb.from("members").delete().eq("id", uid);
        delete friendData[uid]; renderFriends(friendData);
        toast("🗑 Account deleted");
      } catch (err) { toast("Error: " + (err && err.message ? err.message : err)); }
    }
  }));
}

// ---- Sheets (Programm / Status) ----
// Highlight the bottom-bar tab whose sheet is open (null = none, back on the map)
const TAB_FOR_SHEET = { timeline: "programBtn", crewSheet: "crewBtn", chatSheet: "chatBtn", statusSheet: "statusBtn" };
function setActiveTab(sheetId) {
  document.querySelectorAll("#bottomBar .tab").forEach(t => t.classList.remove("active"));
  const id = TAB_FOR_SHEET[sheetId];
  if (id) document.getElementById(id).classList.add("active");
}
function closeSheets() { document.querySelectorAll(".sheet").forEach(s => s.classList.add("hidden")); chatOpen = false; setActiveTab(null); }
function openSheet(id) { closeSheets(); document.getElementById(id).classList.remove("hidden"); setActiveTab(id); }

// ---- Status-Picker ----
function renderStatusOptions() {
  const wrap = document.getElementById("stOptions");
  wrap.innerHTML = STATUSES.map(s => `<button class="st-opt ${myStatus === s.key ? "active" : ""}" data-key="${s.key}">${s.emoji} ${s.label}</button>`).join("")
    + `<button class="st-opt clear" data-key="">✖️ Clear status</button>`;
  wrap.querySelectorAll(".st-opt").forEach(b => b.addEventListener("click", () => {
    myStatus = b.dataset.key || null;
    if (myStatus) localStorage.setItem("plm_status", myStatus); else localStorage.removeItem("plm_status");
    upsertMe();
    closeSheets();
  }));
}

// ---- Push (Web-Push via VAPID) ----
async function updatePushBtn() {
  const b = document.getElementById("pushBtn");
  if (!b) return;
  // A4 — reconcile the stored flag against the REAL subscription so we never show
  // "Push on" when iOS/the browser has silently dropped the subscription.
  if (localStorage.getItem("plm_push") && "serviceWorker" in navigator) {
    try {
      const reg = await navigator.serviceWorker.getRegistration();
      const sub = reg && await reg.pushManager.getSubscription();
      if (!sub) localStorage.removeItem("plm_push");
    } catch (e) { /* keep last-known state */ }
  }
  if (localStorage.getItem("plm_push")) { b.textContent = "🔔 Push on ✓"; b.classList.add("active"); }
  else { b.textContent = "🔔 Enable push notifications"; b.classList.remove("active"); }
}
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const raw = atob(base64);
  const arr = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i);
  return arr;
}
async function enablePush(mode) {
  // mode: "auto" (beim Laden, leise) oder "manual" (Button-Tipp, mit Rückmeldung)
  const loud = mode === "manual";
  const fail = (msg) => { if (loud) alert("🔔 " + msg); };

  if (!("Notification" in window) || !("serviceWorker" in navigator) || !("PushManager" in window)) {
    fail("Notifications only work via the Home Screen icon."); return;
  }
  const vapid = window.__VAPID_PUBLIC;
  if (!vapid) { fail("Push isn’t configured yet."); return; }
  try {
    const reg = await navigator.serviceWorker.register("sw.js");
    await navigator.serviceWorker.ready;
    const perm = await Notification.requestPermission();
    if (perm !== "granted") { fail("Please allow notifications (iPhone Settings → FDLM Live → Notifications)."); return; }
    let sub = await reg.pushManager.getSubscription();
    if (!sub) sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlBase64ToUint8Array(vapid) });
    const { error } = await sb.from("push_subscriptions").upsert({ uid: USER_ID, subscription: sub.toJSON() });
    if (error) { fail("Couldn’t save push."); return; }
    localStorage.setItem("plm_push", "1");
    updatePushBtn();
    if (loud) alert("🔔 Push enabled! ✓");
  } catch (e) {
    if (loud) alert("🔔 Push error: " + (e && e.message ? e.message : e));
  }
}

// ---- Erinnerungen ----
const notified = new Set();
function maybeAskNotify() {
  if (!("Notification" in window) || Notification.permission !== "default") return;
  // dezent: einmal nach 3s fragen
  setTimeout(() => { try { Notification.requestPermission(); } catch (e) {} }, 3000);
}
function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg; t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 6000);
}
function fireReminder(key, title, body) {
  if (notified.has(key)) return;
  notified.add(key);
  toast("🔔 " + body);
  if ("Notification" in window && Notification.permission === "granted") {
    try { new Notification(title, { body, icon: "icon-192.png" }); } catch (e) {}
  }
}
function checkReminders() {
  const now = Date.now();
  // Erinnerung 30 Min vor jedem favorisierten Event
  allVenues().forEach(v => {
    if (!isFav(v.id)) return;
    const w = venueWindow(v);
    if (!w) return;
    const mins = (w.s - now) / 60000;
    if (mins <= 30 && mins > 0) fireReminder("fav_" + v.id, "⭐ Your stop is coming up!", `In ${Math.round(mins)} min: ${v.name} starts`);
  });
}

// ---- Chat (Crew + DMs) ----
function dmKey(uidA, uidB) { return [uidA, uidB].sort().join("__"); }
function chDmKey(otherUid) { return "dm:" + dmKey(USER_ID, otherUid); }
function otherFromDmChannel(ch) {
  const parts = ch.slice(3).split("__");
  return parts[0] === USER_ID ? parts[1] : parts[0];
}
function isMyChannel(ch) {
  if (ch === "crew") return true;
  if (!ch.startsWith("dm:")) return false;
  return ch.slice(3).split("__").includes(USER_ID);
}
function addMsg(st, m) { if (st.seen.has(m.id)) return false; st.seen.add(m.id); st.messages.push(m); return true; }
async function loadChannel(ch) {
  const st = channelState[ch];
  if (!st || st.loaded) return;
  st.loaded = true;
  const { data } = await sb.from("messages").select("*").eq("channel", ch).order("created_at", { ascending: true }).limit(200);
  (data || []).forEach(r => addMsg(st, { id: r.id, uid: r.uid, name: r.name, text: r.text, ts: Date.parse(r.created_at) }));
}
function notifyMessage(ch, m) {
  const label = ch === "crew" ? "Crew Chat" : `${m.name || "Friend"} (private)`;
  const body = ch === "crew" ? `${m.name || "Friend"}: ${m.text}` : m.text;
  toast(`💬 ${m.name || "Friend"}: ${m.text}`);
  // System-Notification nur, wenn KEIN echter Push aktiv ist (sonst kommt der Push vom Server → Doppel vermeiden)
  if (!localStorage.getItem("plm_push") && "Notification" in window && Notification.permission === "granted") {
    try { new Notification("💬 " + label, { body, icon: "icon-192.png", tag: "chat_" + ch, renotify: true }); } catch (e) {}
  }
}
function ensureChannel(ch, name) {
  if (!channelState[ch]) channelState[ch] = { unread: 0, name, messages: [], seen: new Set(), loaded: false };
  if (name) channelState[ch].name = name;
}
function setupChat() {
  if (chatInited || !sb) return;
  chatInited = true;
  ensureChannel("crew", "Crew");
  // The messages-rt subscription itself is created in subscribeRealtime() so it shares
  // the reconnect path. The handler below also catches DMs someone sends to me FIRST.
}
// Handler for every new message (routed by channel). Extracted so subscribeRealtime reuses it.
function onMessageInsert({ new: r }) {
  const ch = r.channel;
  if (!isMyChannel(ch)) return;
  if (!channelState[ch]) {
    const other = ch.startsWith("dm:") ? otherFromDmChannel(ch) : null;
    const nm = (other && friendData[other] && friendData[other].name) || "Friend";
    ensureChannel(ch, nm);
  }
  const st = channelState[ch];
  const msg = { id: r.id, uid: r.uid, name: r.name, text: r.text, ts: Date.parse(r.created_at) };
  if (!addMsg(st, msg)) { renderChannelTabs(); return; }
  if (ch.startsWith("dm:") && r.uid !== USER_ID && r.name) st.name = r.name;
  if (activeChannel === ch && chatOpen) {
    const empty = document.querySelector("#chList .chat-empty");
    if (empty) document.getElementById("chList").innerHTML = "";
    appendMessage(msg);
    const l = document.getElementById("chList"); l.scrollTop = l.scrollHeight;
  }
  const viewingThis = chatOpen && activeChannel === ch && !document.hidden;
  if (r.uid !== USER_ID && !viewingThis) { st.unread++; updateChatBadge(); notifyMessage(ch, msg); }
  renderChannelTabs();
}
function appendMessage(m) {
  const listEl = document.getElementById("chList");
  const mine = m.uid === USER_ID;
  const div = document.createElement("div");
  div.className = "msg " + (mine ? "mine" : "theirs");
  const time = m.ts ? fmtTime(new Date(m.ts).toISOString()) : "";
  // In DMs zeigen wir den Namen nicht — es ist eh nur eine andere Person
  const showName = activeChannel === "crew" && !mine;
  div.innerHTML = (showName ? `<div class="who">${escapeHtml(m.name || "?")}</div>` : "") +
    `<div class="bubble">${escapeHtml(m.text || "")}</div><div class="time">${time}</div>`;
  listEl.appendChild(div);
}
function updateChatBadge() {
  const total = Object.values(channelState).reduce((s, c) => s + c.unread, 0);
  const b = document.getElementById("chatBadge");
  if (total > 0) { b.textContent = total > 99 ? "99+" : total; b.classList.add("show"); }
  else b.classList.remove("show");
}
async function openChannel(ch, name) {
  ensureChannel(ch, name);
  activeChannel = ch;
  const listEl = document.getElementById("chList");
  listEl.innerHTML = `<div class="chat-empty">Loading…</div>`;
  await loadChannel(ch);
  channelState[ch].unread = 0;
  updateChatBadge();
  listEl.innerHTML = "";
  const msgs = channelState[ch].messages;
  if (msgs.length === 0) {
    listEl.innerHTML = `<div class="chat-empty">${ch === "crew" ? "No messages yet — say hi to the crew! 👋" : "No messages in this private chat yet 🔒"}</div>`;
  } else {
    msgs.forEach(appendMessage);
  }
  const dispName = name || channelState[ch].name;
  const inp = document.getElementById("chInput");
  inp.placeholder = ch === "crew" ? "Message the crew…" : `Private to ${dispName}…`;
  renderChannelTabs();
  setTimeout(() => { listEl.scrollTop = listEl.scrollHeight; }, 30);
  document.getElementById("chatTitle").textContent = ch === "crew" ? "💬 Crew Chat" : "🔒 Private · " + dispName;
}
function renderChannelTabs() {
  const wrap = document.getElementById("chTabs");
  const tabs = [{ ch: "crew", label: "👥 Crew" }];
  Object.keys(channelState).forEach(k => {
    if (k === "crew") return;
    const name = channelState[k].name || "?";
    tabs.push({ ch: k, label: name });
  });
  wrap.innerHTML = tabs.map(t => {
    const u = channelState[t.ch] ? channelState[t.ch].unread : 0;
    const badge = u > 0 ? `<span class="tab-badge">${u}</span>` : "";
    const active = t.ch === activeChannel ? "active" : "";
    return `<button class="ch-tab ${active}" data-ch="${t.ch}" data-name="${escapeHtml(t.label.replace("👥 ", ""))}">${escapeHtml(t.label)}${badge}</button>`;
  }).join("");
  wrap.querySelectorAll(".ch-tab").forEach(b => b.addEventListener("click", () => openChannel(b.dataset.ch, b.dataset.name)));
}
async function sendChat() {
  const inp = document.getElementById("chInput");
  const text = inp.value.trim();
  if (!text || !sb) return;
  inp.value = "";
  const ch = activeChannel;
  const { error } = await sb.from("messages").insert({ channel: ch, uid: USER_ID, name: userName || "?", text });
  if (error) { toast("Send failed"); inp.value = text; return; }
  if (ch === "crew") triggerPush("crew", null, text);
  else if (ch.startsWith("dm:")) triggerPush("dm", otherFromDmChannel(ch), text);
}
// Push an die Empfänger anstoßen (Supabase Edge Function verschickt Web-Push)
function triggerPush(kind, recipientUid, text) {
  if (!sb) return;
  sb.functions.invoke("send-push", {
    body: { kind, senderUid: USER_ID, recipientUid, name: userName || "?", text },
  }).catch(() => {});
}
function startDmWith(uid, name) {
  const ch = chDmKey(uid);
  ensureChannel(ch, name);
  openSheet("chatSheet"); chatOpen = true;
  openChannel(ch, name);
}

// ---- UI ----
const nameOverlay = document.getElementById("nameOverlay");
const nameInput = document.getElementById("nameInput");
function begin() {
  nameOverlay.classList.add("hidden");
  if (initSupabase()) startTracking();
  updateNextSet();
  renderStatusOptions();
  updatePushBtn();
  // Push automatisch einrichten (registriert SW, fragt Erlaubnis, speichert Abo).
  // Beim ersten Mal nicht-silent (zeigt Prompt + Erfolg/Fehler), danach still erneuern.
  enablePush("auto").catch(() => {});
  checkReminders();
  lastBeat = Date.now();
  setInterval(() => {
    updateNextSet(); checkReminders();
    renderFriends(friendData); // re-evaluate online/offline by time
    // A2 — presence keepalive: a motionless person stops writing and would silently
    // drop to "offline" after 45 min. Beat at most every ~4 min to stay honest.
    const now = Date.now();
    if (userName && now - lastBeat > 4 * 60 * 1000) { lastBeat = now; upsertMe(); }
  }, 30000);
  // A1 — recover the live socket when the app returns to the foreground / regains network.
  document.addEventListener("visibilitychange", () => { if (!document.hidden) resync("visible"); });
  window.addEventListener("online", () => resync("online"));
}

// ---- Foto/Avatar beim Namen-Setup ----
let pendingPhoto = myPhoto;
function fileToAvatar(file) {
  return new Promise((res, rej) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      const size = 96;
      const c = document.createElement("canvas"); c.width = size; c.height = size;
      const ctx = c.getContext("2d");
      const m = Math.min(img.width, img.height);
      ctx.drawImage(img, (img.width - m) / 2, (img.height - m) / 2, m, m, 0, 0, size, size);
      URL.revokeObjectURL(url);
      res(c.toDataURL("image/jpeg", 0.7));
    };
    img.onerror = rej; img.src = url;
  });
}
const photoInput = document.getElementById("photoInput");
const photoPreview = document.getElementById("photoPreview");
if (photoPreview && myPhoto) { photoPreview.style.backgroundImage = `url('${myPhoto}')`; photoPreview.classList.add("has"); }
if (photoInput) photoInput.addEventListener("change", async () => {
  const f = photoInput.files && photoInput.files[0];
  if (!f) return;
  try {
    pendingPhoto = await fileToAvatar(f);
    if (photoPreview) { photoPreview.style.backgroundImage = `url('${pendingPhoto}')`; photoPreview.classList.add("has"); }
  } catch (e) { /* egal */ }
});

document.getElementById("nameSubmit").addEventListener("click", () => {
  const v = nameInput.value.trim();
  if (!v) { nameInput.focus(); return; }
  userName = v; localStorage.setItem("plm_name", v);
  if (pendingPhoto) { myPhoto = pendingPhoto; localStorage.setItem("plm_photo", myPhoto); }
  begin();
});
nameInput.addEventListener("keydown", e => { if (e.key === "Enter") document.getElementById("nameSubmit").click(); });

document.getElementById("recenterBtn").addEventListener("click", () => {
  if (friendMarkers[USER_ID]) map.setView(friendMarkers[USER_ID].getLatLng(), 16);
  else if (lastPos) map.setView([lastPos.lat, lastPos.lng], 16);
});
document.getElementById("allBtn").addEventListener("click", showAll);
document.getElementById("programBtn").addEventListener("click", () => { renderTimeline(); openSheet("timeline"); });
document.getElementById("aeOpen").addEventListener("click", () => openSheet("addEventSheet"));
document.getElementById("aeClose").addEventListener("click", closeSheets);
document.getElementById("aeSubmit").addEventListener("click", submitNewEvent);
document.getElementById("crewBtn").addEventListener("click", () => { renderCrewList(); openSheet("crewSheet"); });
document.getElementById("crClose").addEventListener("click", closeSheets);
document.getElementById("statusBtn").addEventListener("click", () => { renderStatusOptions(); updatePushBtn(); openSheet("statusSheet"); });
document.getElementById("pushBtn").addEventListener("click", () => enablePush("manual"));
document.getElementById("tlClose").addEventListener("click", closeSheets);
document.getElementById("stClose").addEventListener("click", closeSheets);
document.getElementById("chatBtn").addEventListener("click", () => {
  openSheet("chatSheet"); chatOpen = true;
  openChannel(activeChannel || "crew", channelState[activeChannel]?.name);
});
document.addEventListener("click", e => {
  const btn = e.target.closest(".dm-btn");
  if (btn) startDmWith(btn.dataset.uid, btn.dataset.name);
  const fb = e.target.closest(".fav-btn");
  if (fb) {
    const id = fb.dataset.vid;
    toggleFav(id);
    const f = isFav(id);
    fb.textContent = f ? "⭐ Favorite" : "☆ Add favorite";
    fb.classList.toggle("active", f);
    const v = venueById(id);
    if (venueMarkerById[id] && v) venueMarkerById[id].setIcon(venueIcon(v));
    updateNextSet();
  }
  const del = e.target.closest(".del-event-btn");
  if (del) {
    const id = del.dataset.vid;
    if (confirm("Delete this event for everyone?") && sb) {
      sb.from("events").delete().eq("id", id);
      map.closePopup();
    }
  }
});
document.getElementById("chClose").addEventListener("click", closeSheets);
document.getElementById("chSend").addEventListener("click", sendChat);
document.getElementById("chInput").addEventListener("keydown", e => { if (e.key === "Enter") sendChat(); });

const hideBtn = document.getElementById("hideBtn");
hideBtn.addEventListener("click", () => {
  visible = !visible;
  hideBtn.textContent = visible ? "Visible" : "Hidden";
  hideBtn.classList.toggle("ghost", !visible);
  upsertMe();
});

// Auf dem Handy nur in der installierten Home-App registrieren (sonst Doppel-Accounts:
// Safari-Tab und Home-App haben getrennte Speicher). Im Safari-Tab → Installations-Anleitung.
const PLM_STANDALONE = (window.navigator.standalone === true) || (window.matchMedia && matchMedia("(display-mode: standalone)").matches);
const PLM_MOBILE = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (PLM_MOBILE && !PLM_STANDALONE) {
  document.getElementById("installOverlay").classList.remove("hidden");
  nameOverlay.classList.add("hidden");
} else if (userName) {
  nameInput.value = userName; begin();
} else {
  nameInput.focus();
}
