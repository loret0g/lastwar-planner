import styles from './Sidebar.module.css'

export default function Sidebar({ sections, current, onSelect, isOpen, onClose }) {
  const classNames = `${styles.sidebar} ${isOpen ? styles.mobileOpen : ''}`

  return (
    // En móvil: este aside ocupa toda la pantalla y hace de FONDO oscuro (overlay)
    <aside
      className={classNames}
      role="navigation"
      aria-label="Secciones"
      onClick={() => {
        // si tocas el fondo (no un botón), cierra
        if (onClose) onClose()
      }}
    >
      {/* Contenedor de botones: para que tocar fuera cierre, pero tocar dentro NO */}
      <div
        className={styles.inner}
        onClick={(e) => e.stopPropagation()}
      >
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() => onSelect(sec)}
            className={sec === current ? styles.active : ''}
          >
            {sec}
          </button>
        ))}
      </div>
    </aside>
  )
}