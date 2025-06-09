// src/components/DayTabs/DayTabs.jsx
import styles from './DayTabs.module.css';

export default function DayTabs({ days, current, onSelect }) {
  const todayName = new Date()
    .toLocaleDateString('es-ES', { weekday: 'long' })
    .toLowerCase();

  return (
    <div className={styles.tabs}>
      {days.map(day => {
        const isActive = day === current;
        const isToday  = day.toLowerCase() === todayName;

        return (
          <button
            key={day}
            onClick={() => onSelect(day)}
            className={[
              styles.tab,                       // base
              isToday  ? styles.today  : '',    // color especial
              isActive ? styles.active : ''     // día seleccionado
            ].join(' ')}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
}