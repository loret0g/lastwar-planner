import styles from './Sidebar.module.css';

export default function Sidebar({ sections, current, onSelect }) {
  return (
    <aside className={styles.sidebar}>
      {sections.map(sec => (
        <button
          key={sec}
          onClick={() => onSelect(sec)}
          className={sec === current ? styles.active : ''}
        >
          {sec}
        </button>
      ))}
    </aside>
  );
}