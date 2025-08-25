import styles from "../Season1.module.css";

export default function SheetsGrid({ sheets, onOpen }) {
  return (
    <section className={styles.grid}>
      {sheets.map((s) => (
        <button key={s.key} className={styles.card} onClick={() => onOpen(s)}>
          <div className={styles.cardHeader}>{s.label}</div>
          <img src={s.img} alt={s.label} loading="lazy" decoding="async" />
        </button>
      ))}
    </section>
  );
}