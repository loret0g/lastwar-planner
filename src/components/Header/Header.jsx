import { useEffect, useState } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/alliance-logo.png'  // pon aquí tu logo

export default function Header() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(id)
  }, [])

  const dateStr = now.toLocaleDateString('es-ES', {
    weekday: 'long', day: 'numeric', month: 'long'
  })
  const timeStr = now.toLocaleTimeString('es-ES', {
    hour: '2-digit', minute: '2-digit'
  })

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img src={logo} alt="Alianza LGES" className={styles.logo} />
        <div className={styles.titles}>
          <h1 className={styles.title}>Planificador Last War</h1>
          <p className={styles.subtitle}>¡Con amor! VIVA LGES</p>
        </div>
      </div>

      <div className={styles.clock}>
        <span className={styles.date}>{dateStr}</span>
        <span className={styles.time}>{timeStr}</span>
      </div>
    </header>
  )
}