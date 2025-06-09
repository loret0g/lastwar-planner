import { useLocalStorage } from '../../hooks/useLocalStorage';
import styles from './TaskList.module.css';

export default function TaskList({ tasks, storageKey }) {
  const [done, setDone] = useLocalStorage(storageKey, {});

  function toggle(index) {
    setDone(prev => ({ ...prev, [index]: !prev[index] }));
  }

  return (
    <ul className={styles.list}>
      {tasks.map((task, i) => (
        <li key={i} className={done[i] ? styles.done : ''}>
          <input
            type="checkbox"
            checked={!!done[i]}
            onChange={() => toggle(i)}
          />
          {task}
        </li>
      ))}
    </ul>
  );
}