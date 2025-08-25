import { useEffect } from "react";
import styles from "../Season1.module.css";

export default function LightboxImage({ img, label, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose?.(); }
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  if (!img) return null;

  return (
    <div className={styles.lightboxOverlay} role="dialog" aria-modal="true"
         aria-label={`Ver ${label} en grande`} onClick={onClose}>
      <button className={styles.lightboxClose} aria-label="Cerrar" onClick={onClose}>×</button>
      <figure className={styles.lightboxPanel} onClick={(e) => e.stopPropagation()}>
        <img src={img} alt={label} className={styles.lightboxImg} decoding="async" />
        <figcaption className={styles.caption}>{label}</figcaption>
      </figure>
    </div>
  );
}