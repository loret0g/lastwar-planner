// src/components/Accordion/Accordion.jsx
import { useEffect } from "react";
import styles from "./Accordion.module.css";

export function Accordion({ className = "", children }) {
  // Abre automáticamente el <details> cuyo id coincide con el hash
  useEffect(() => {
    const openFromHash = () => {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!id) return;
      const el = document.getElementById(id);
      if (el && el.tagName.toLowerCase() === "details") {
        el.setAttribute("open", "true");
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return <div className={`${styles.accordion} ${className}`}>{children}</div>;
}

export function AccordionItem({ id, title, children, onMore }) {
  // Cuando el usuario abre/cierra, sincroniza el hash
  const onToggle = (e) => {
    const isOpen = e.currentTarget.open;
    if (isOpen) {
      history.replaceState(null, "", `#${id}`);
    } else {
      history.replaceState(null, "", " ");
    }
  };

  return (
    <details id={id} className={styles.item} onToggle={onToggle}>
      <summary className={styles.summary}>
        <span className={styles.title}>{title}</span>
        <span className={styles.chev} aria-hidden />
      </summary>

      <div className={styles.panel}>
        {children}
        {onMore && (
          <div className={styles.moreRow}>
            <button className={styles.moreBtn} onClick={onMore}>
              Más detalles
            </button>
          </div>
        )}
      </div>
    </details>
  );
}