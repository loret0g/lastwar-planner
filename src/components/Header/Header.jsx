import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/alliance-logo.png";

export default function Header({ onMenuClick }) {
  const [now, setNow] = useState(new Date());

  // Actualiza cada 30s para que el reloj esté vivo pero sin gastar de más
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const dateStr = now.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const timeStr = now.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Tema día/noche suave según la hora (para el gradiente)
  const hour = now.getHours();
  const isDay = hour >= 7 && hour < 19;

  return (
    <header
      className={styles.header}
      data-theme={isDay ? "day" : "night"}
      role="banner"
    >
      {/* Bloque marca */}
      <div className={styles.brand}>
        <div className={styles.logoWrap}>
          <img src={logo} alt="Alianza LGES" className={styles.logo} />
        </div>

        <div className={styles.titles}>
          <h1 className={styles.title}>Planificador Last War</h1>
          <div className={styles.metaRow}>
            <span className={styles.serverBadge}>#1510&nbsp;·&nbsp;LGES</span>
          </div>
        </div>
      </div>

      {/* Reloj + botón menú (opcional en móvil) */}
      <div className={styles.right}>
        <div className={styles.clockChip} aria-label="Fecha y hora">
          <span className={styles.date}>{dateStr}</span>
          <span className={styles.dot} aria-hidden>•</span>
          <span className={styles.time}>{timeStr}</span>
        </div>

        {onMenuClick && (
          <button
            className={styles.menuBtn}
            onClick={onMenuClick}
            aria-label="Abrir secciones"
          >
            {/* icono “hamburguesa” */}
            <span className={styles.menuIcon} aria-hidden />
          </button>
        )}
      </div>

      {/* barra de acento animada */}
      <span className={styles.accentBar} aria-hidden />
    </header>
  );
}