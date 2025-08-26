import styles from "./Accordion.module.css";

export function Accordion({ className = "", children }) {
  return <div className={`${styles.accordion} ${className}`}>{children}</div>;
}

export function AccordionItem({ title, children, onMore }) {
  return (
    <details className={styles.item}>
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