import { useEffect, useMemo, useState } from "react";
import styles from "./InitialGuide.module.css";

/**
 * Props opcionales:
 *  - onNavigate?: (sectionName: string) => void
 *    Si la pasas desde App/registry, en algunos paneles saldrá “Ver guía”.
 */
export default function InitialGuide({ onNavigate }) {
  // ====== CHECKLIST DE INICIO RÁPIDO ======
  const STORAGE_KEY = "lw-initial-guide:v1";

  const CHECK_TASKS = useMemo(
    () => [
      { id: "hq-barracks", label: "Sube Cuartel y Barracas como prioridad total", emoji: "🏛️" },
      { id: "first-squad", label: "Prioriza tu primer escuadrón (mejor héroes + armamento)", emoji: "🥇" },
      { id: "place-heroes", label: "Coloca bien a los héroes (tanques delante, daño detrás)", emoji: "🧭" },
      { id: "ladder-training", label: "Entrena tropas en escalera (siempre colas activas)", emoji: "📈" },
      { id: "healing", label: "Curación de tropas: no dejes el hospital al máximo", emoji: "⛑️" },
      { id: "fast-mines", label: "Mueve rápido tus marchas (minas cerca, sin parones)", emoji: "⛏️" },
      { id: "wall-off", label: "Quita tropas de la muralla si te van a farmear", emoji: "🧱" },
      { id: "read-reports", label: "Mira los reportes (aprende de cada combate)", emoji: "📜" },
    ],
    []
  );

  const [checked, setChecked] = useState({});
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setChecked(JSON.parse(raw) || {});
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
    } catch {}
  }, [checked]);

  const total = CHECK_TASKS.length;
  const done = CHECK_TASKS.reduce((n, t) => n + (checked[t.id] ? 1 : 0), 0);
  const percent = Math.round((done / total) * 100);

  function toggle(id) {
    setChecked((p) => ({ ...p, [id]: !p[id] }));
  }
  function clearAll() {
    setChecked({});
  }

  // ====== MINI-GUÍAS (ACORDEONES) ======
  const PANELS = [
    {
      key: "hq",
      title: "Subir Cuartel y Barracas",
      badge: "Básico",
      points: [
        "El Cuartel General (CG) desbloquea todo. Si dudas, sube CG.",
        "Las Barracas permiten más y mejores tropas → daño total ↑.",
        "Aprovecha “días de construcción” para acelerar con bonus."
      ],
    },
    {
      key: "heroes",
      title: "Cómo colocar a los héroes",
      badge: "Básico",
      points: [
        "Tanques delante (absorber), daño/soporte detrás (proteger).",
        "Prioriza sinergias/bonificaciones de facción si existen.",
        "Mejora habilidades clave antes que subir todo a medias."
      ],
    },
    {
      key: "first-squad",
      title: "Prioridad al primer escuadrón",
      badge: "Pro tip",
      points: [
        "Mejor 1 escuadrón fuerte que 3 mediocres (limpia mapa, gana rallys).",
        "Invierte armamento/chips/fragmentos primero en ese equipo.",
        "Cuando sea sólido, empieza a levantar el segundo."
      ],
    },
    {
      key: "squads",
      title: "Escuadrones óptimos",
      badge: "Intermedio",
      points: [
        "Mantén un rol por escuadrón: daño, soporte, tanque—no mezcles al azar.",
        "Construye combos estables aunque no sean ‘meta’ top.",
        "Guarda presets (cuando tengas) para cambiar rápido."
      ],
    },
    {
      key: "gear",
      title: "Armamento (guía)",
      badge: "Guía",
      points: [
        "No subas todo: prioriza piezas que den daño/precisión/crit.",
        "Equilibra set por rol: tanque ≠ daño.",
        "Refuerza sólo cuando haya salto real de stats."
      ],
      cta: onNavigate ? { label: "Ver guía de Armamento", to: "Armamento" } : null,
    },
    {
      key: "wall",
      title: "Quitar tropas de la muralla",
      badge: "Básico",
      points: [
        "Si te van a farmear, vacía la guarnición → pierdes menos.",
        "Déjalas recolectando/guarneciendo con aliados.",
        "Recuerda poner escudo si te machacan."
      ],
      cta: onNavigate ? { label: "Ver cómo se hace", to: "Temporada 1" } : null,
    },
    {
      key: "mines",
      title: "Moverse rápido con minas",
      badge: "Farm",
      points: [
        "Elige minas cercanas para reducir viajes muertos.",
        "Evita parones: re-asigna marchas en cuanto vuelvan.",
        "En eventos, cambia a minas del recurso objetivo."
      ],
    },
    {
      key: "heal",
      title: "Curación de tropas",
      badge: "Básico",
      points: [
        "No dejes el hospital al tope—cura en tandas.",
        "Guarda aceleradores para eventos de curación si suman puntos.",
        "Si vas a pelear fuerte, prepara recursos primero."
      ],
    },
    {
      key: "ladder",
      title: "Entrenamiento en escalera",
      badge: "Farm",
      points: [
        "Mantén siempre colas activas—mejor pequeñas y constantes.",
        "Encadena lotes para no quedarte vacío en eventos.",
        "Usa bonus/roles de alianza si existen para ahorrar."
      ],
    },
    {
      key: "capital",
      title: "Cargos de la capital (guía)",
      badge: "Guía",
      points: [
        "Algunos cargos dan buffs importantes (daño, entreno, etc.).",
        "Coordínate con tu R4/lead para aprovecharlos.",
        "Consulta la rotación y horarios."
      ],
      cta: onNavigate ? { label: "Ver guía de Cargos", to: "Cargos de la capital" } : null,
    },
    {
      key: "reports",
      title: "Mirar reportes",
      badge: "Hábito",
      points: [
        "Identifica dónde fallaste: tropas, héroes, bonus, counters.",
        "Compara tus stats con el objetivo para detectar carencias.",
        "Apunta aprendizajes: pequeños ajustes suman mucho."
      ],
    },
  ];

  const [openKey, setOpenKey] = useState(PANELS[0].key);
  const togglePanel = (k) => setOpenKey((prev) => (prev === k ? "" : k));

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h2 className={styles.title}>Guía inicial</h2>
        <p className={styles.subtitle}>
          Lo esencial para arrancar con buen pie: prioriza CG, 1er escuadrón fuerte y hábitos diarios.
        </p>
      </header>

      <div className={styles.twoCols}>
        {/* Columna izquierda: Checklist */}
        <section className={styles.leftCol}>
          <div className={styles.card}>
            <div className={styles.progressRow}>
              <div className={styles.progressText}>
                <strong>{done}</strong> / {total} completadas
              </div>
              <div className={styles.progressBar} aria-label="Progreso de la guía">
                <span className={styles.progressFill} style={{ width: `${percent}%` }} />
              </div>
            </div>

            <ul className={styles.checkList}>
              {CHECK_TASKS.map((t) => {
                const isDone = !!checked[t.id];
                return (
                  <li key={t.id} className={`${styles.checkItem} ${isDone ? styles.done : ""}`}>
                    <label className={styles.checkLabel}>
                      <input
                        type="checkbox"
                        checked={isDone}
                        onChange={() => toggle(t.id)}
                        className={styles.checkbox}
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
                      <span className={styles.labelText}>{t.label}</span>
                    </label>
                  </li>
                );
              })}
            </ul>

            <div className={styles.actions}>
              <button className={styles.btnGhost} onClick={clearAll}>Reset</button>
            </div>
          </div>
        </section>

        {/* Columna derecha: Acordeones */}
        <section className={styles.rightCol}>
          {PANELS.map((p) => {
            const open = openKey === p.key;
            return (
              <article key={p.key} className={`${styles.panel} ${open ? styles.open : ""}`}>
                <button className={styles.panelHeader} onClick={() => togglePanel(p.key)} aria-expanded={open}>
                  <div className={styles.phLeft}>
                    <span className={styles.panelTitle}>{p.title}</span>
                    {p.badge && <span className={styles.badge}>{p.badge}</span>}
                  </div>
                  <span className={styles.chev} aria-hidden>▾</span>
                </button>

                {open && (
                  <div className={styles.panelBody}>
                    <ul className={styles.klist}>
                      {p.points.map((txt, i) => <li key={i}>{txt}</li>)}
                    </ul>

                    {p.cta && (
                      <div className={styles.panelCta}>
                        <button
                          className={styles.linkBtn}
                          onClick={() => onNavigate && onNavigate(p.cta.to)}
                          disabled={!onNavigate}
                          title={onNavigate ? p.cta.to : "Conecta onNavigate desde App para navegar"}
                        >
                          {p.cta.label}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}