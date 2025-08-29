import React, { useEffect, useState } from "react";
import styles from "./Season1.module.css";

// imágenes (guía inicial / pretemporada + profesiones)
import spanish    from "../../assets/season1/season1-spanish.jpg";
import italian    from "../../assets/season1/season1-italian.jpg";
import french     from "../../assets/season1/season1-french.jpg";
import english    from "../../assets/season1/season1-english.jpg";
import ukrainian  from "../../assets/season1/season1-ukrainian.jpg";

// imágenes (novedades de héroes)
import heroSpanish    from "../../assets/season1/hero-spanish.jpg";
import heroItalian    from "../../assets/season1/hero-italian.jpg";
import heroFrench     from "../../assets/season1/hero-french.jpg";
import heroEnglish    from "../../assets/season1/hero-english.jpg";
import heroUkrainian  from "../../assets/season1/hero-ukrainian.jpg";
import heroPolish     from "../../assets/season1/hero-polish.jpg";

// subcomponentes
import SheetsGrid     from "./components/SheetsGrid";
import Allies         from "./components/Allies";
import Manual         from "./components/Manual";
import LightboxImage  from "./components/LightboxImage";

// === BLOQUE 1: Guía inicial (pretemporada y profesiones) ===
const SHEETS_GUIDE = [
  { key: "es", label: "Español",     img: spanish },
  { key: "it", label: "Italiano",    img: italian },
  { key: "fr", label: "Français",    img: french  },
  { key: "en", label: "English",     img: english },
  { key: "uk", label: "Українська",  img: ukrainian },
];

// === BLOQUE 2: Novedades de héroes ===
const SHEETS_HEROES = [
  { key: "es", label: "Español",     img: heroSpanish },
  { key: "it", label: "Italiano",    img: heroItalian },
  { key: "fr", label: "Français",    img: heroFrench  },
  { key: "en", label: "English",     img: heroEnglish },
  { key: "uk", label: "Українська",  img: heroUkrainian },
  { key: "pl", label: "Polski",      img: heroPolish },
];

const ALLIES = [
  { tag: "Riot", server: "#1514", colorClass: styles.allyRiot },
  { tag: "OTAn", server: "#1515", colorClass: styles.allyOTAn },
  { tag: "WDG",  server: "#1521", colorClass: styles.allyWDG  },
];

export default function Season1() {
  const [open, setOpen] = useState(null); // {key,label,img} | null

  // bloquea scroll mientras el lightbox está abierto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  return (
    <div className={styles.wrapper}>
      {/* Grupo 1: Guía inicial */}
      <section className={styles.group}>
        <h4 className={styles.groupTitle}>Guía inicial (pretemporada y profesiones)</h4>
        <SheetsGrid sheets={SHEETS_GUIDE} onOpen={setOpen} />
      </section>

      {/* Grupo 2: Novedades de héroes */}
      <section className={styles.group}>
        <h4 className={styles.groupTitle}>Novedades de héroes</h4>
        <SheetsGrid sheets={SHEETS_HEROES} onOpen={setOpen} />
      </section>

      <Allies allies={ALLIES} />
      <Manual />

      {open && (
        <LightboxImage img={open.img} label={open.label} onClose={() => setOpen(null)} />
      )}
    </div>
  );
}