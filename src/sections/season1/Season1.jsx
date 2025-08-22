import React, { useState } from "react";
import styles from "./Season1.module.css";
import Modal from "../../components/Modal/Modal";

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
  const [open, setOpen] = useState(null); // key de la lámina abierta

  return (
    <div className={styles.wrapper}>
      {/* Aliados */}
      <section className={styles.allies}>
        <h3 className={styles.alliesTitle}>Aliados</h3>
        <p className={styles.alliesSubtitle}>
          Estos son nuestros aliados confirmados para la temporada. No hay que saquear ni sus camiones, ni sus tareas.
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

      {/* Láminas por idioma */}
      <header className={styles.header}>
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

      {/* Modal (visor grande) */}
      <Modal isOpen={!!open} onClose={() => setOpen(null)}>
        {open && (
          <figure className={styles.figure}>
            <img src={open.img} alt={open.label} className={styles.fullImg} />
            <figcaption className={styles.caption}>{open.label}</figcaption>
          </figure>
        )}
      </Modal>
    </div>
  );
}
