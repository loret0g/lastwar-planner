// src/sections/season1/Season1.jsx
import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import styles from "./Season1.module.css";

import spanish from "../../assets/season1/season1-spanish.jpg";
import italian from "../../assets/season1/season1-italian.jpg";
import french from "../../assets/season1/season1-french.jpg";
import english from "../../assets/season1/season1-english.jpg";
import ukrainian from "../../assets/season1/season1-ukrainian.jpg";

const IMAGES = [
  { lang: "Español",   src: spanish },
  { lang: "Italiano",  src: italian },
  { lang: "Français",  src: french },
  { lang: "English",   src: english },
  { lang: "Українська",src: ukrainian },
];

export default function Season1() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <p className={styles.subtitle}>Selecciona tu idioma para ver la guía.</p>
      </header>

      <div className={styles.grid}>
        {IMAGES.map((it, i) => (
          <button key={it.lang} className={styles.card} onClick={() => setOpenIndex(i)}>
            <span className={styles.badge}>{it.lang}</span>
            <img className={styles.thumb} src={it.src} alt={it.lang} loading="lazy" />
          </button>
        ))}
      </div>

      <Modal isOpen={openIndex !== null} onClose={() => setOpenIndex(null)} size="fullscreen">
        {openIndex !== null && (
          <div className={styles.viewer}>
            <img className={styles.viewerImg} src={IMAGES[openIndex].src} alt={IMAGES[openIndex].lang} />
            <div className={styles.caption}>{IMAGES[openIndex].lang}</div>
          </div>
        )}
      </Modal>
    </div>
  );
}