import styles from './TaskList.module.css';

export default function TaskList({ tasks }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <h2 className={styles.heading}>Qué hacer</h2>
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
      </div>

      {tasks.dont.length > 0 && (
        <div className={styles.section}>
          <h2 className={styles.heading}>Qué NO hacer</h2>
          <ul className={styles.list}>
            {tasks.dont.map((t, i) => (
              <li key={i} className={styles.itemDont}>{t}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}