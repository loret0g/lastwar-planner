import React from 'react'
import TaskItem from './TaskItem'
import styles from './TaskList.module.css'

export default function TaskList({ tasks }) {
  return (
    <div className={styles.wrapper}>
      <details open className={styles.accordion}>
        <summary className={styles.summary}>Qué hacer</summary>
        <ul className={styles.list}>
          {tasks.do.map((tObj, i) => (
            <li key={i} className={styles.item}>
              <TaskItem text={tObj.text} tooltipKey={tObj.tooltipKey} />
            </li>
          ))}
        </ul>
      </details>

      {tasks.dont.length > 0 && (
        <details className={styles.accordion}>
          <summary className={styles.summaryDont}>Qué NO hacer</summary>
          <ul className={styles.list}>
            {tasks.dont.map((t, i) => (
              <li key={i} className={styles.itemDont}>{t}</li>
            ))}
          </ul>
        </details>
      )}
    </div>
  )
}