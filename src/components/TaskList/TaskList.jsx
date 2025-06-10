import InfoTooltip from '../InfoTooltip/InfoTooltip'
import informationIcon from '../../assets/info.png'
import styles from './TaskList.module.css'

export default function TaskList({ tasks }) {
  return (
    <ul className={styles.list}>
      {tasks.do.map((t, i) => {
        const isRadar = t.toLowerCase().includes('radar')
        return (
          <li key={i} className={styles.item}>
            {isRadar ? (
              <InfoTooltip
                // aquí pasas el icono que quieres mostrar
                icon={
                  <img
                    src={informationIcon}
                    alt="Info"
                    className={styles.infoIcon}
                  />
                }
                brief="Guarda las tareas de radar para maximizar puntos mañana"
                details={
                  <>
                    <h2>Cómo usar el radar</h2>
                    <p>
                      El radar ofrece misiones cada 6 horas que… {/* tu texto */}
                    </p>
                    <img
                      src="/src/assets/radar-example.png"
                      alt="Ejemplo radar"
                      className={styles.detailImage}
                    />
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
  )
}