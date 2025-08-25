import styles from "../Season1.module.css";

export default function Allies({ allies }) {
  return (
    <section className={styles.allies}>
      <h3 className={styles.alliesTitle}>Aliados</h3>
      <p className={styles.alliesSubtitle}>
        Estos son nuestros aliados confirmados para la temporada. No hay que saquear ni sus camiones, ni sus tareas.
      </p>

      <div className={styles.allyGrid}>
        {allies.map((a) => (
          <div key={a.tag} className={`${styles.allyCard} ${a.colorClass}`}>
            <div className={styles.allyLeft}>
              <div className={styles.allyAvatar} aria-hidden>🛡️</div>
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
  );
}