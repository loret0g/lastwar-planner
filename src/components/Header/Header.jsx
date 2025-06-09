import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  // Estado local para la hora
  const [now, setNow] = useState(new Date());

  // Actualizar cada minuto
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  // Formatos
  const dateStr = now.toLocaleDateString('es-ES', {
    weekday: 'long', day: 'numeric', month: 'long'
  });
  const timeStr = now.toLocaleTimeString('es-ES', {
    hour: '2-digit', minute: '2-digit'
  });

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <h1 className={styles.title}>Planificador&nbsp;Last&nbsp;War con amor! VIVA LGES</h1>
      </div>

      <div className={styles.right}>
        <span className={styles.date}>{dateStr}</span>
        <span className={styles.time}>{timeStr}</span>
      </div>
    </header>
  );
}