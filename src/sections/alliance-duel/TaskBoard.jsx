import React from "react";
import styles from "./TaskBoard.module.css";

import TaskItem from "../../components/TaskItem/TaskItem";
import QuickActions from "../../components/QuickActions/QuickActions";

export default function TaskBoard({ tasks, currentDay }) {
  const doTasks = tasks?.do ?? [];
  const dontTasks = tasks?.dont ?? [];

  return (
    <div className={styles.grid}>
      {/* Columna izquierda: Qué hacer */}
      <section className={styles.doCol} aria-labelledby="doTitle">
        <header
          className={`${styles.cardHeader} ${styles.doHeader}`}
          id="doTitle"
        >
          <span className={styles.chevron}>▾</span> Qué hacer
        </header>

        <div className={styles.cardBody}>
          <ul className={styles.list}>
            {doTasks.map((tObj, i) => (
              <li key={i} className={styles.item}>
                <TaskItem
                  text={tObj.text}
                  tooltipKey={tObj.tooltipKey}
                  type={tObj.type}
                />
              </li>
            ))}
          </ul>

          <QuickActions currentDay={currentDay} />
        </div>
      </section>

      {/* Columna derecha: Qué NO hacer */}
      {dontTasks.length > 0 && (
        <aside className={styles.dontCol} aria-labelledby="dontTitle">
          <div className={styles.dontCard}>
            <header
              className={`${styles.cardHeader} ${styles.dontHeader}`}
              id="dontTitle"
            >
              <span className={styles.warningDot} aria-hidden />
              Hoy NO se hace:
            </header>

            <div className={styles.cardBody}>
              <ul className={styles.dontList}>
                {dontTasks.map((t, i) => (
                  <li key={i} className={styles.dontItem}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
}