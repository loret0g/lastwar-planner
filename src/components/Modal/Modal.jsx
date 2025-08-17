import React, { useEffect } from 'react'
import styles from './Modal.module.css'

export default function Modal({ isOpen, onClose, children }) {
  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [isOpen])

  // Cerrar con Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()}
      >
        {/* X absoluta (visible en desktop) */}
        <button
          className={styles.closeBtnAbs}
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        {/* Top bar sticky (visible en móvil) */}
        <div className={styles.topBar}>
          <button
            className={styles.closeBtnSticky}
            onClick={onClose}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}