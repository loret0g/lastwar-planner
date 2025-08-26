import styles from "./KList.module.css";

export default function KList({ items }) {
  return (
    <ul className={styles.klist}>
      {items.map((it, i) => (
        <li key={i}>
          {it.text}
          {it.sub && (
            <ul className={styles.sublist}>
              {it.sub.map((s, j) => <li key={j}>{s}</li>)}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}