import { useEffect, useState } from "react";
import styles from "./DailyTasks.module.css";

// Tareas diarias
const BASE_TASKS = [
  { id: "sendTasks",      label: "Hacer tareas secretas",                                  emoji: "📨" },
  { id: "loot5Tasks",     label: "Saquear 5 tareas",                                        emoji: "🏴‍☠️" },
  { id: "help5Allies",    label: "Asistir tareas a 5 aliados",                              emoji: "🤝" },
  { id: "join20Dooms",    label: "Unirse a 20 dooms",                                       emoji: "💥" },
  { id: "sendTrucks",     label: "Mandar camiones",                                         emoji: "🚚" },
  { id: "lootTrucks",     label: "Saquear camiones",                                        emoji: "🚚" },
  { id: "hitCode",        label: "Pegarle a código",                                        emoji: "🧩" },
  { id: "attack2Bases",   label: "Atacar dos bases con recursos (~7 golpes cada una)",      emoji: "⚔️" },
  { id: "arenaLikes",     label: "Dar Me gusta en Arena (diamantes)",                       emoji: "👍" },
  { id: "playArena",      label: "Jugar el Arena",                                          emoji: "🎮" },
  { id: "donateAlliance", label: "Donar a la alianza",                                      emoji: "🏛️" },
];

// Clave fija (sin fecha)
const STORAGE_KEY = "lw-daily-tasks:v1";

export default function DailyTasks() {
  // Estado: mapa { id: boolean }
  const [checked, setChecked] = useState({});

  // Cargar del storage al montar
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") setChecked(parsed);
      }
    } catch {
      // ignorar errores de parseo/permiso
    }
  }, []);

  // Guardar en storage cuando cambie
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {
      // ignorar
    }
  }, [checked]);

  const total = BASE_TASKS.length;
  const done = BASE_TASKS.reduce((acc, t) => acc + (checked[t.id] ? 1 : 0), 0);
  const percent = Math.round((done / total) * 100);

  function toggle(id) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }
  function markAll() {
    const all = Object.fromEntries(BASE_TASKS.map((t) => [t.id, true]));
    setChecked(all);
  }
  function clearAll() {
    setChecked({});
  }

  return (
    <div className={styles.wrapper}>
      {/* Progreso */}
      <section className={styles.hero}>
        <div className={styles.progressRow}>
          <div className={styles.progressText}>
            <strong>{done}</strong> / {total} completadas
          </div>

          <div className={styles.progressBar} aria-label="Progreso diario">
            <span
              className={styles.progressFill}
              style={{ width: `${percent}%` }}
              aria-hidden
            />
          </div>

          <div className={styles.percent} aria-hidden>
            {percent}%
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.bulkBtn} onClick={markAll}>
            Marcar todo
          </button>
          <button className={styles.bulkBtnGhost} onClick={clearAll}>
            Reset del día
          </button>
        </div>
      </section>

      {/* Checklist */}
      <section>
        <ul className={styles.list}>
          {BASE_TASKS.map((t) => {
            const isDone = !!checked[t.id];
            return (
              <li key={t.id} className={`${styles.item} ${isDone ? styles.done : ""}`}>
                <label className={styles.label}>
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => toggle(t.id)}
                    className={styles.checkbox}
                    aria-label={t.label}
                  />
                  <span className={styles.fakeBox} aria-hidden>
                    <svg viewBox="0 0 24 24" className={styles.checkIcon}>
                      <polyline
                        points="20 6 9 17 4 12"
                        fill="none"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span className={styles.emoji} aria-hidden>{t.emoji}</span>
                  <span className={styles.text}>{t.label}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}