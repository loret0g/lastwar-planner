import React, { useEffect, useState } from "react";
import styles from "./Season1.module.css";

// Láminas por idioma
import spanish from "../../assets/season1/season1-spanish.jpg";
import italian from "../../assets/season1/season1-italian.jpg";
import french from "../../assets/season1/season1-french.jpg";
import english from "../../assets/season1/season1-english.jpg";
import ukrainian from "../../assets/season1/season1-ukrainian.jpg";

const SHEETS = [
  { key: "es", label: "Español", img: spanish },
  { key: "it", label: "Italiano", img: italian },
  { key: "fr", label: "Français", img: french },
  { key: "en", label: "English", img: english },
  { key: "uk", label: "Українська", img: ukrainian },
];

// Aliados (tag + servidor + clase para color)
const ALLIES = [
  { tag: "Riot", server: "#1514", colorClass: styles.allyRiot },
  { tag: "OTAn", server: "#1515", colorClass: styles.allyOTAn },
  { tag: "WDG", server: "#1521", colorClass: styles.allyWDG },
];

export default function Season1() {
  const [open, setOpen] = useState(null); // {key,label,img} ó null

  // Bloquear scroll del body mientras el lightbox está abierto + Escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={styles.wrapper}>
      {/* Láminas por idioma */}
      <header className={styles.header}>
        <h3 className={styles.alliesTitle}>Guías</h3>
        <p className={styles.subtitle}>
          Selecciona tu idioma para ver la guía.
        </p>
      </header>

      <section className={styles.grid}>
        {SHEETS.map((s) => (
          <button
            key={s.key}
            className={styles.card}
            onClick={() => setOpen(s)}
          >
            <div className={styles.cardHeader}>{s.label}</div>
            <img src={s.img} alt={s.label} loading="lazy" />
          </button>
        ))}
      </section>

      {/* Aliados */}
      <section className={styles.allies}>
        <h3 className={styles.alliesTitle}>Aliados</h3>
        <p className={styles.alliesSubtitle}>
          Estos son nuestros aliados confirmados para la temporada. No hay que
          saquear ni sus camiones, ni sus tareas.
        </p>

        <div className={styles.allyGrid}>
          {ALLIES.map((a) => (
            <div key={a.tag} className={`${styles.allyCard} ${a.colorClass}`}>
              <div className={styles.allyLeft}>
                <div className={styles.allyAvatar} aria-hidden>
                  🛡️
                </div>
                <div className={styles.allyText}>
                  <div className={styles.allyTag}>{a.tag}</div>
                  <div className={styles.allyServer}>Servidor {a.server}</div>
                </div>
              </div>
              <div className={styles.allyBadge}>Aliado</div>
            </div>
          ))}
        </div>
      </section>

      {/* Manual de Temporada 1 */}
      <section className={styles.manual}>
        <h3 className={styles.manualTitle}>Temporada 1 · Resumen práctico</h3>

        <div className={`${styles.kblock} ${styles.kblockWarn}`} role="note">
          {/* <h4>Lo importante</h4> */}
          <p>
            Sin <strong>Resistencia al Virus</strong>, tu daño contra
            zombis/doom cae en picado. <br />
            Sube la Resistencia cuanto antes.
          </p>
        </div>

        <div className={styles.twoCols}>
          <div className={styles.kblock}>
            <h4>Recursos nuevos</h4>
            <ul className={styles.klist}>
              <li>
                <strong>Cristales mutantes</strong>: de zombis/doom y eventos →
                mejoran la <em>Granja de Proteínas</em>.
              </li>
              <li>
                <strong>Proteínas inmunes</strong>: las da la <em>Granja</em> →
                mejoran el <em>Instituto del Virus</em>.
              </li>
              <li>
                <strong>Flujo</strong>: Zombis → Cristales → Granja → Proteínas
                → Instituto del Virus → Resistencia.
              </li>
            </ul>
          </div>

          <div className={styles.kblock}>
            <h4>Edificios</h4>
            <ul className={styles.klist}>
              <li>
                <strong>Granja de Proteínas</strong>: produce proteínas (se sube
                con Cristales).
              </li>
              <li>
                <strong>Instituto del Virus</strong>: otorga Resistencia (se
                sube con Proteínas).
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.kblock}>
          <h4>Infección y cura</h4>
          <p>
            Tras atacar puedes infectarte. Pide/da{" "}
            <strong>cura a los aliados</strong>.
          </p>
        </div>

        <div className={styles.kblock}>
          <h4>Estrategia rápida</h4>
          <ul className={styles.klist}>
            <li>
              Si eres débil, <strong>abre rally con 1 héroe</strong> y deja que
              un fuerte complete.
            </li>
            <li>
              Prioriza: Cristales → Granjas de proteínas → Instituto del Virus.
              Haz zombis a diario.
            </li>
          </ul>
        </div>

        <div className={styles.kblock}>
          <h4>Semana 1</h4>
          <ol className={styles.steps}>
            <li>
              Junta <strong>Cristales</strong> y sube la <strong>Granja</strong>
              .
            </li>
            <li>
              Usa <strong>Proteínas</strong> para subir{" "}
              <strong>Instituto del Virus</strong> y ganar Resistencia.
            </li>
            <li>Rallys en equipo + curas de infección.</li>
          </ol>
        </div>
      </section>

      {/* Lightbox fullscreen (propio de Season1) */}
      {open && (
        <div
          className={styles.lightboxOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={`Ver ${open.label} en grande`}
          onClick={() => setOpen(null)} // click fuera cierra
        >
          <button
            className={styles.lightboxClose}
            aria-label="Cerrar"
            onClick={() => setOpen(null)}
          >
            ×
          </button>

          <figure
            className={styles.lightboxPanel}
            onClick={(e) => e.stopPropagation()} // no cerrar al clicar la imagen
          >
            <img
              src={open.img}
              alt={open.label}
              className={styles.lightboxImg}
            />
            <figcaption className={styles.caption}>{open.label}</figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
