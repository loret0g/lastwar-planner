import { useMemo, useState, useEffect } from "react";
import styles from "./Events.module.css";

const DAYS = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

// Tipos → clase CSS
const TYPE_CLASS = {
  marshall: "typeMarshall",
  siege: "typeSiege",
  zombie: "typeZombie",
  desertStorm: "typeDesertStorm",
  other: "typeOther",
};

// === Config TZ ===
const BASE_TZ = "Europe/Madrid"; // tus horas base (España)
/** Hora del servidor: 4h menos que España en verano => UTC−02:00.
 *  OJO con IANA: 'Etc/GMT+2' significa UTC−02 (signo invertido por convención).
 */
const SERVER_TZ = "Etc/GMT+2";

const autoTZ = Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/Madrid";

const TIMEZONES = [
  { label: `Mi zona (auto) – ${autoTZ}`, value: autoTZ },
  { label: "España (Madrid)", value: "Europe/Madrid" },
  { label: "Francia (París)", value: "Europe/Paris" },
  { label: "Reino Unido (Londres)", value: "Europe/London" },
  { label: "Ucrania (Kyiv)", value: "Europe/Kyiv" },
  { label: "Portugal (Lisboa)", value: "Europe/Lisbon" },
  { label: "Servidor (UTC−02:00)", value: SERVER_TZ },
];

/** Datos base (horas en horario España) */
const SAMPLE_EVENTS = [
  // { day: "Lunes",     time: "21:00", title: "Marshall",                type: "marshall" },
  // { day: "Martes",    time: "21:00", title: "Asedio zombie",           type: "siege"    },
  { day: "Miércoles", time: "",      title: "Zombies dorados",         type: "zombie"   },
  { day: "Jueves",    time: "",      title: "Zombies dorados",         type: "zombie"   },
  { day: "Jueves",    time: "22:00", title: "Marshall",                type: "marshall" },
  { day: "Viernes",   time: "",      title: "Zombies dorados",         type: "zombie"   },
  { day: "Sábado",    time: "22:00", title: "Tormenta del desierto",   type: "desertStorm" },
  { day: "Sábado",    time: "13:00", title: "Tormenta del desierto",   type: "desertStorm" },
];

// ----------------- utilidades fecha / tz -----------------
function startOfWeek(d) {
  const js = new Date(d);
  const offset = (js.getDay() + 6) % 7; // JS Sunday=0 → lunes=0
  js.setHours(0,0,0,0);
  js.setDate(js.getDate() - offset);
  return js;
}
function formatDM(d) {
  return d.toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit" });
}
function pad2(n){ return String(n).padStart(2,"0"); }

function parseTimeStr(s) {
  const t = (s || "").trim().toLowerCase();
  if (!t) return { kind: "none" };
  if (t.includes("todo el día") || t.includes("todo el dia"))
    return { kind: "allday" };
  const m = t.match(/^(\d{1,2}):(\d{2})(?:\s*-\s*(\d{1,2}):(\d{2}))?$/);
  if (!m) return { kind: "text", raw: s };
  const h1 = +m[1], mi1 = +m[2];
  const start = h1*60 + mi1;
  if (m[3] != null) {
    const h2 = +m[3], mi2 = +m[4];
    const end = h2*60 + mi2;
    return { kind: "range", start, end };
  }
  return { kind: "single", start };
}
function minutesToStr(min) {
  const h = Math.floor(min/60), m = min%60;
  return `${pad2(h)}:${pad2(m)}`;
}
function shiftMinutes(min, delta) {
  const total = min + delta;
  const dayShift = Math.floor(total / 1440); // puede ser negativo
  let minutes = total % 1440; if (minutes < 0) minutes += 1440;
  return { minutes, dayShift };
}
// offset (minutos) de una zona en una fecha concreta
function tzOffsetMinutes(timeZone, dateUTC) {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone, hour12: false,
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit"
  });
  const parts = Object.fromEntries(dtf.formatToParts(dateUTC).map(p => [p.type, p.value]));
  const asUTC = Date.UTC(+parts.year, +parts.month-1, +parts.day, +parts.hour, +parts.minute, +parts.second);
  return (asUTC - dateUTC.getTime()) / 60000;
}
// delta minutos entre BASE_TZ y tz para ese día de la semana
function deltaForDay(dayIdx, mondayDate, tz) {
  const base = new Date(mondayDate);
  base.setDate(mondayDate.getDate() + dayIdx);
  // ancla a 12:00 UTC para evitar raros en cambios de hora
  const anchorUTC = new Date(Date.UTC(base.getFullYear(), base.getMonth(), base.getDate(), 12, 0, 0));
  const offBase   = tzOffsetMinutes(BASE_TZ, anchorUTC);
  const offTarget = tzOffsetMinutes(tz, anchorUTC);
  return offTarget - offBase; // minutos a sumar a la hora base
}

export default function Events() {
  // recuerda la elección del usuario
  const [tz, setTz] = useState(() => localStorage.getItem("tz") || autoTZ);
  useEffect(() => { localStorage.setItem("tz", tz); }, [tz]);

  const today  = useMemo(() => new Date(), []);
  const monday = useMemo(() => startOfWeek(today), [today]);

  const week = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 7; i++) {
      const dt = new Date(monday);
      dt.setDate(monday.getDate() + i);
      const name = DAYS[i];
      const isToday =
        dt.getFullYear() === today.getFullYear() &&
        dt.getMonth() === today.getMonth() &&
        dt.getDate() === today.getDate();
      arr.push({ name, date: formatDM(dt), dateObj: dt, isToday });
    }
    return arr;
  }, [monday, today]);

  const rangeLabel = useMemo(() => {
    const first = week[0]?.dateObj ?? monday;
    const last  = week[6]?.dateObj ?? monday;
    const fmt = (d) =>
      d.toLocaleDateString("es-ES", { day: "2-digit", month: "short" });
    return `${fmt(first)} — ${fmt(last)}`;
  }, [week, monday]);

  // === Agrupa eventos convertidos a la zona elegida ===
  const eventsByDay = useMemo(() => {
    const map = Object.fromEntries(DAYS.map(d => [d, []]));

    for (const ev of SAMPLE_EVENTS) {
      const srcIdx = DAYS.indexOf(ev.day);
      if (srcIdx === -1) continue;

      const parsed = parseTimeStr(ev.time || "");
      // Sin hora (o "todo el día"): no convertimos
      if (parsed.kind === "none" || parsed.kind === "allday" || parsed.kind === "text") {
        map[ev.day].push({ ...ev });
        continue;
      }

      const delta = deltaForDay(srcIdx, monday, tz);
      let destIdx = srcIdx;
      let timeStr = ev.time;

      if (parsed.kind === "single") {
        const s = shiftMinutes(parsed.start, delta);
        destIdx = (srcIdx + s.dayShift + 7) % 7;
        timeStr = minutesToStr(s.minutes);
      } else {
        const s = shiftMinutes(parsed.start, delta);
        const e = shiftMinutes(parsed.end,   delta);
        destIdx = (srcIdx + s.dayShift + 7) % 7; // día según el inicio
        timeStr = `${minutesToStr(s.minutes)}-${minutesToStr(e.minutes)}`;
      }

      map[DAYS[destIdx]].push({ ...ev, time: timeStr });
    }

    // ordenar por hora
    for (const d of DAYS) {
      map[d].sort((a, b) => (a.time || "").slice(0,5).localeCompare((b.time || "").slice(0,5)));
    }
    return map;
  }, [monday, tz]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.weekHeader}>
        <div className={styles.weekTitle}>Calendario semanal</div>
        <div className={styles.rightControls}>
          <label className={styles.tzControl}>
            Zona:
            <select
              className={styles.tzSelect}
              value={tz}
              onChange={(e) => setTz(e.target.value)}
            >
              {TIMEZONES.map((z) => (
                <option key={z.value} value={z.value}>{z.label}</option>
              ))}
            </select>
          </label>
          <div className={styles.weekRange} aria-label="Rango de la semana">
            {rangeLabel}
          </div>
        </div>
      </div>

      <div className={styles.calendar} role="grid" aria-label="Semana de eventos">
        {week.map((d) => (
          <section key={d.name} className={styles.dayCol} role="gridcell">
            <header className={`${styles.dayHeader} ${d.isToday ? styles.today : ""}`}>
              <span className={styles.dayName}>{d.name}</span>
              <span className={styles.dayDate}>{d.date}</span>
            </header>

            <ul className={styles.eventList}>
              {eventsByDay[d.name].length === 0 ? (
                <li className={styles.empty}>—</li>
              ) : (
                eventsByDay[d.name].map((ev, idx) => (
                  <li
                    key={`${ev.title}-${idx}`}
                    className={`${styles.eventCard} ${styles[TYPE_CLASS[ev.type] || TYPE_CLASS.other]}`}
                  >
                    <div className={styles.eventTime}>{ev.time}</div>
                    <div className={styles.eventTitle}>{ev.title}</div>
                  </li>
                ))
              )}
            </ul>
          </section>
        ))}
      </div>

      <div className={styles.legend} aria-hidden>
        <span className={`${styles.dot} ${styles.typeMarshall}`}/> Marshall
        <span className={`${styles.dot} ${styles.typeSiege}`}/> Asedio
        <span className={`${styles.dot} ${styles.typeZombie}`}/> Zombies dorados
        <span className={`${styles.dot} ${styles.typeDesertStorm}`}/> Tormenta del desierto
        {/* <span className={`${styles.dot} ${styles.typeOther}`}/> Otros */}
      </div>
    </div>
  );
}