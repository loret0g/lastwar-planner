import React, { useEffect } from 'react'
import styles from './Modal.module.css'

export default function Modal({ isOpen, onClose, children }) {
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
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={styles.modal}
        onClick={e => e.stopPropagation()}
      >
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}