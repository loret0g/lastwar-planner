import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import styles from "./Season1.module.css";

import spanish   from "../../assets/season1/season1-spanish.jpg";
import italian   from "../../assets/season1/season1-italian.jpg";
import french    from "../../assets/season1/season1-french.jpg";
import english   from "../../assets/season1/season1-english.jpg";
import ukrainian from "../../assets/season1/season1-ukrainian.jpg";

const IMAGES = [
  { src: spanish,   lang: "Español",   code: "ES" },
  { src: english,   lang: "English",   code: "EN" },
  { src: french,    lang: "Français",  code: "FR" },
  { src: italian,   lang: "Italiano",  code: "IT" },
  { src: ukrainian, lang: "Українська", code: "UK" },
];

export default function Season1() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <p className={styles.subtitle}>Selecciona tu idioma para ver la guía a pantalla completa.</p>
      </header>

      <div className={styles.grid} role="list">
        {IMAGES.map((img, i) => (
          <button
            key={img.code}
            role="listitem"
            className={styles.card}
            onClick={() => setOpenIndex(i)}
            aria-label={`Abrir guía en ${img.lang}`}
          >
            <span className={styles.badge}>{img.lang}</span>
            <img
              src={img.src}
              alt={`Guía de Temporada 1 — ${img.lang}`}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <Modal isOpen={openIndex !== null} onClose={() => setOpenIndex(null)}>
        {openIndex !== null && (
          <figure className={styles.figure}>
            <img
              className={styles.fullImage}
              src={IMAGES[openIndex].src}
              alt={`Guía de Temporada 1 — ${IMAGES[openIndex].lang}`}
            />
            <figcaption className={styles.caption}>
              {IMAGES[openIndex].lang}
            </figcaption>
          </figure>
        )}
      </Modal>
    </div>
  );
}