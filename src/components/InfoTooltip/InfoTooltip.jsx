import { useState, useEffect, useRef } from 'react'
import Modal from '../Modal/Modal'
import styles from './InfoTooltip.module.css'

export default function InfoTooltip({ icon, brief, details, children }) {
  const [showBrief, setShowBrief] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const wrapperRef = useRef(null)

  // Cerrar pop-over al hacer click fuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        showBrief &&
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
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
        >
          {icon}
        </span>

        {showBrief && (
          <div className={styles.popover}>
            <div className={styles.arrow} />
            <div className={styles.brief}>{brief}</div>
            <button
              className={styles.moreBtn}
              onClick={e => {
                e.stopPropagation()
                setModalOpen(true)
              }}
            >
              Más detalles
            </button>
          </div>
        )}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {details}
      </Modal>
    </>
  )
}