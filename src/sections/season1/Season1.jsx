import React, { useEffect, useState } from "react";
import styles from "./Season1.module.css";

// imágenes (como ya las tienes)
import spanish from "../../assets/season1/season1-spanish.jpg";
import italian  from "../../assets/season1/season1-italian.jpg";
import french   from "../../assets/season1/season1-french.jpg";
import english  from "../../assets/season1/season1-english.jpg";
import ukrainian from "../../assets/season1/season1-ukrainian.jpg";

// subcomponentes
import SheetsGrid     from "./components/SheetsGrid";
import Allies         from "./components/Allies";
import Manual         from "./components/Manual";
import LightboxImage  from "./components/LightboxImage";

const SHEETS = [
  { key: "es", label: "Español",   img: spanish  },
  { key: "it", label: "Italiano",  img: italian  },
  { key: "fr", label: "Français",  img: french   },
  { key: "en", label: "English",   img: english  },
  { key: "uk", label: "Українська", img: ukrainian },
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
      <header className={styles.header}>
        <h3 className={styles.alliesTitle}>Guías</h3>
        <p className={styles.subtitle}>Selecciona tu idioma para ver la guía.</p>
      </header>

      <SheetsGrid sheets={SHEETS} onOpen={setOpen} />
      <Allies allies={ALLIES} />
      <Manual />

      {open && (
        <LightboxImage img={open.img} label={open.label} onClose={() => setOpen(null)} />
      )}
    </div>
  );
}