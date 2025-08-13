import { useState, useEffect, useRef } from 'react'
import Modal from '../Modal/Modal'
import styles from './InfoTooltip.module.css'

/**
 * Props:
 * - icon: ReactNode (icono que se muestra al lado del texto)
 * - brief: string | ReactNode (contenido del pop-over: puede incluir imágenes)
 * - details?: ReactNode (contenido del modal; si no se pasa, no sale el botón)
 * - children: ReactNode (checkbox + texto de la tarea)
 */
export default function InfoTooltip({ icon, brief, details, children }) {
  const [showBrief, setShowBrief] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const wrapperRef = useRef(null)

  // Cerrar pop-over al hacer click fuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (showBrief && wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowBrief(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showBrief])

  return (
    <>
      <div ref={wrapperRef} className={styles.wrapper}>
        {children}

        <span
          className={styles.iconWrapper}
          onClick={() => setShowBrief(b => !b)}
          aria-haspopup="dialog"
          aria-expanded={showBrief}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setShowBrief(b => !b)}
        >
          {icon}
        </span>

        {showBrief && (
          <div className={styles.popover}>
            <div className={styles.arrow} />
            {/* brief puede ser string o JSX con imágenes */}
            <div className={styles.brief}>{brief}</div>

            {/* Solo mostramos el botón si hay contenido de modal */}
            {details && (
              <button
                className={styles.moreBtn}
                onClick={(e) => {
                  e.stopPropagation()
                  setModalOpen(true)
                }}
              >
                Más detalles
              </button>
            )}
          </div>
        )}
      </div>

      {/* Modal solo se monta si existe `details` */}
      {details && (
        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          {details}
        </Modal>
      )}
    </>
  )
}