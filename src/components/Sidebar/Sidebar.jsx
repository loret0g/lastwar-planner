import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar({ isOpen, onClose }) {
  const classNames = `${styles.sidebar} ${isOpen ? styles.mobileOpen : ""}`;

  const items = [
    { to: "/",                label: "Guía inicial", end: true },
    { to: "/alliance-duel",   label: "Duelo de alianza" },
    { to: "/daily-tasks",     label: "Tareas diarias" },
    { to: "/events",          label: "Eventos de Alianza" },
    { to: "/hq-requirements", label: "Requisitos CG" },
    { to: "/marshall",        label: "Marshall" },
    { to: "/season-1",        label: "Temporada 1" },
  ];

  return (
    <aside
      className={classNames}
      role="navigation"
      aria-label="Secciones"
      onClick={() => onClose && onClose()}
    >
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        {items.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={() => onClose && onClose()}
          >
            {label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
}