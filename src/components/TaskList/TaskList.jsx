import styles from './TaskList.module.css'

export default function TaskList({ tasks }) {
  return (
    <div className={styles.wrapper}>
      <details open className={styles.accordion}>
        <summary className={styles.summary}>Qué hacer</summary>
        <ul className={styles.list}>
          {tasks.do.map((t, i) => (
            <li key={i} className={styles.item}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkbox} />
                <span>{t}</span>
              </label>
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