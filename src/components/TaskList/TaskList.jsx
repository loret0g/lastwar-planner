// src/components/TaskList/TaskList.jsx
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import informationIcon from '../../assets/info.png'
import styles from './TaskList.module.css'

export default function TaskList({ tasks }) {
  return (
    <div className={styles.wrapper}>
      {/* Acordeón “Qué hacer” */}
      <details open className={styles.accordion}>
        <summary className={styles.summary}>Qué hacer</summary>
        <ul className={styles.list}>
          {tasks.do.map((t, i) => {
            const isRadar = t.toLowerCase().includes('radar')
            return (
              <li key={i} className={styles.item}>
                {isRadar ? (
                  <InfoTooltip
                    icon={
                      <img
                        src={informationIcon}
                        alt="Info"
                        className={styles.infoIcon}
                      />
                    }
                    brief="Guarda las tareas de radar cada 6 h para maximizar puntos."
                    details={
                      <>
                        <h2>Cómo usar el radar</h2>
                        <p>
                          El radar ofrece misiones que dan puntos extra durante el VS.
                          Para guardarlas, ve a la pestaña Radar y pulsa “Guardar”.
                        </p>
                        <img
                          src="/src/assets/radar-example.png"
                          alt="Ejemplo radar"
                          className={styles.detailImage}
                        />
                        <p>Repite cada 6 h para cubrir todo el día.</p>
                      </>
                    }
                  >
                    <label className={styles.checkboxLabel}>
                      <input type="checkbox" className={styles.checkbox} />
                      <span>{t}</span>
                    </label>
                  </InfoTooltip>
                ) : (
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span>{t}</span>
                  </label>
                )}
              </li>
            )
          })}
        </ul>
      </details>

      {/* Acordeón “Qué NO hacer” */}
      {tasks.dont.length > 0 && (
        <details className={styles.accordion}>
          <summary className={styles.summaryDont}>Qué NO hacer</summary>
          <ul className={styles.list}>
            {tasks.dont.map((t, i) => (
              <li key={i} className={styles.itemDont}>{t}</li>
            ))}
          </ul>
        </details>
      )}
    </div>
  )
}
