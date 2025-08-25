import styles from "../Season1.module.css";
import FlowCard from "./FlowCard";

import inmuneProteinImg from "../../../assets/season1/inmune-protein.png";
import mutantCrystalImg from "../../../assets/season1/mutant-crystal.png";

export default function Manual() {
  return (
    <section className={styles.manual}>
      {/* Título más directo */}
      <h3 className={styles.manualTitle}>Temporada 1 · Lo esencial</h3>

      <div className={`${styles.kblock} ${styles.kblockWarn}`} role="note">
        <p>
          Sin <strong>resistencia al virus</strong>, tu daño contra zombis/doom
          cae en picado (hasta un 99%).
          <br />
          Sube la <strong>Resistencia</strong> cuanto antes.
        </p>
      </div>

      <div className={styles.twoCols}>
        <div className={styles.kblock}>
          <h4 className={styles.kblockTitle}>Recursos nuevos</h4>
          <ul className={styles.klist}>
            <li>
              <strong>Cristales mutantes</strong>
              <img
                className={styles.inlineIcon}
                src={mutantCrystalImg}
                alt=""
                aria-hidden="true"
              />
              : de zombis/doom y eventos → mejoran la{" "}
              <em>Granja de Proteínas</em>.
            </li>

            <li>
              <strong>Proteínas inmunes</strong>
              <img
                className={styles.inlineIcon}
                src={inmuneProteinImg}
                alt=""
                aria-hidden="true"
              />
              : las da la <em>Granja</em> → mejoran el{" "}
              <em>Instituto del Virus</em>.
            </li>
          </ul>
        </div>

        <div className={styles.kblock}>
          <h4 className={styles.kblockTitle}>Edificios</h4>
          <ul className={styles.klist}>
            <li>
              <strong>Granja de Proteínas</strong>: produce proteínas (se sube
              con Cristales).
            </li>
            <li>
              <strong>Instituto del Virus</strong>: otorga Resistencia (se sube
              con Proteínas).
            </li>
          </ul>
        </div>
      </div>

      {/* Flujo a ancho completo */}
      <FlowCard />

      <div className={styles.kblock}>
        <h4 className={styles.kblockTitle}>Infección y cura</h4>
        <p>
          Tras atacar puedes infectarte. Pide/da{" "}
          <strong>cura a los aliados</strong>.
        </p>
      </div>

      <div className={styles.kblock}>
        <h4 className={styles.kblockTitle}>Estrategia rápida</h4>
        <ul className={styles.klist}>
          <li>
            Si eres débil, <strong>abre rally con 1 héroe</strong> y deja que un
            fuerte complete.
          </li>
          <li>
            Prioriza: Cristales → Granjas de proteínas → Instituto del Virus.
            Haz zombis a diario.
          </li>
        </ul>
      </div>

      <div className={styles.kblock}>
        <h4 className={styles.kblockTitle}>Semana 1</h4>
        <ol className={styles.steps}>
          <li>
            Junta <strong>Cristales</strong> y sube la <strong>Granja</strong>.
          </li>
          <li>
            Usa <strong>Proteínas</strong> para subir el{" "}
            <strong>Instituto del Virus</strong>.
          </li>
          <li>Rallys en equipo + curas de infección.</li>
        </ol>
      </div>
    </section>
  );
}
