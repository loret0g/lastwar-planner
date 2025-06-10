import styles from './DayTabs.module.css';

export default function DayTabs({ days, current, onSelect }) {
  const todayName = new Date()
    .toLocaleDateString('es-ES', { weekday: 'long' })
    .toLowerCase();

  return (
    <div className={styles.tabs}>
      {days.map(day => {
        const isActive = day === current;
        const isToday = day.toLowerCase() === todayName;
        return (
          <button
            key={day}
            onClick={() => onSelect(day)}
            className={[
              styles.tab,
              isToday ? styles.today : '',
              isActive ? styles.active : ''
            ].join(' ')}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
}