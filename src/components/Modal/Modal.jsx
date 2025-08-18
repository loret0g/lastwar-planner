// src/components/Modal/Modal.jsx
import React, { useEffect } from 'react'
import styles from './Modal.module.css'

export default function Modal({ isOpen, onClose, children, size = 'default' }) {
  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    if (!isOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = original }
  }, [isOpen])

  // Cerrar con Escape
  useEffect(() => {
    function handleKey(e) { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const isFull = size === 'fullscreen'
  const modalClass    = isFull ? `${styles.modal} ${styles.fullscreen}` : styles.modal
  const contentClass  = isFull ? `${styles.content} ${styles.contentFlush}` : styles.content
  const closeBtnClass = isFull ? `${styles.closeBtnAbs} ${styles.closeBtnSolid}` : styles.closeBtnAbs

  // En fullscreen, un tap/click en cualquier parte cierra.
  const handleModalClick = e => {
    if (isFull) onClose()
    else e.stopPropagation()
  }

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={modalClass} onClick={handleModalClick}>
        {/* X grande y segura en móvil/desktop */}
        <button className={closeBtnClass} onClick={onClose} aria-label="Cerrar">×</button>

        {/* En modo normal mantenemos la topbar sticky; en fullscreen no hace falta */}
        {!isFull && (
          <div className={styles.topBar}>
            <button className={styles.closeBtnSticky} onClick={onClose} aria-label="Cerrar">×</button>
          </div>
        )}

        {/* En fullscreen NO paramos la propagación para permitir tap-to-close;
            en modo normal sí. */}
        <div className={contentClass} onClick={e => { if (!isFull) e.stopPropagation() }}>
          {children}
        </div>
      </div>
    </div>
  )
}