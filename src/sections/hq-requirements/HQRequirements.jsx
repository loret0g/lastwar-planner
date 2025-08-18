import React from "react";
import { HQ_REQUIREMENTS } from "./data";
import styles from "./HQRequirements.module.css";

export default function HQRequirements() {
  return (
    <section className={styles.wrapper} aria-labelledby="hqTitle">
      <header className={styles.header}>
        <h2 id="hqTitle" className={styles.title}>Requisitos CG</h2>
        <p className={styles.help}>
          Edificios necesarios para subir cada nivel del Cuartel General.
        </p>
      </header>

      {/* ===== Desktop: filas compactas ===== */}
      <div className={styles.rowTable} role="table" aria-label="Requisitos del CG">
        <div className={styles.rowHead} role="rowgroup">
          <div className={styles.colLevel} role="columnheader">Nivel</div>
          <div className={styles.colReqs} role="columnheader">Requisitos</div>
        </div>

        <div role="rowgroup">
          {HQ_REQUIREMENTS.map(({ level, c1, c2 }) => {
            const reqs = [c1, c2].filter(Boolean);
            return (
              <div key={level} className={styles.row} role="row">
                <div className={`${styles.colLevel} ${styles.lvBadge}`} role="cell">
                  {level}
                </div>
                <div className={styles.colReqs} role="cell">
                  {reqs.length ? (
                    <div className={styles.tags}>
                      {reqs.map((r, i) => (
                        <span key={i} className={styles.tag}>{r}</span>
                      ))}
                    </div>
                  ) : (
                    <span className={styles.muted}>Sin requisitos</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ===== Móvil: cards agradables ===== */}
      <div className={styles.cardGrid} role="list">
        {HQ_REQUIREMENTS.map(({ level, c1, c2 }) => {
          const reqs = [c1, c2].filter(Boolean);
          return (
            <article key={level} className={styles.card} role="listitem">
              <div className={styles.cardHead}>
                <span className={styles.levelText}>Nivel {level}</span>
              </div>
              <ul className={styles.reqList}>
                {reqs.length ? (
                  reqs.map((req, i) => (
                    <li className={styles.reqItem} key={i}>
                      <span className={styles.reqBullet} aria-hidden />
                      <span className={styles.reqText}>{req}</span>
                    </li>
                  ))
                ) : (
                  <li className={styles.reqItem}>
                    <span className={styles.reqBullet} aria-hidden />
                    <span className={styles.reqMuted}>Sin requisitos</span>
                  </li>
                )}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}