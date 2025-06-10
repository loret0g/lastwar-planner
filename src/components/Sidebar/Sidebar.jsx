import styles from './Sidebar.module.css'

export default function Sidebar({ sections, current, onSelect, isOpen }) {
  // Combina la clase base con mobileOpen si corresponde
  const classNames = `${styles.sidebar} ${isOpen ? styles.mobileOpen : ''}`

  return (
    <aside className={classNames}>
      {sections.map(sec => (
        <button
          key={sec}
          onClick={() => onSelect(sec)}
          className={sec === current ? styles.active : ''}
        >
          {sec}
        </button>
      ))}
    </aside>
  )
}