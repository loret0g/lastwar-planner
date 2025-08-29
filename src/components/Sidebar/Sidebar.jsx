import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

export default function Sidebar({ isOpen, onClose }) {
  const classNames = `${styles.sidebar} ${isOpen ? styles.mobileOpen : ""}`;

  const items = [
    { to: "initial-guide", label: "Guía inicial", end: true },
    { to: "/alliance-duel", label: "Duelo de alianza" },
    { to: "/events", label: "Eventos semanales" },
    { to: "/season-1", label: "Temporada 1" },
    { to: "/hq-requirements", label: "Requisitos CG" },
    { to: "/marshall", label: "Marshall" },
    { to: "/daily-tasks", label: "Tareas diarias" },
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
