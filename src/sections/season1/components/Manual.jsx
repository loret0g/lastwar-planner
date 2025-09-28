import styles from "../Season1.module.css";
import FlowCard from "./FlowCard";

import inmuneProteinImg from "../../../assets/season1/inmune-protein.png";
import mutantCrystalImg from "../../../assets/season1/mutant-crystal.png";

export default function Manual() {
  return (
    <section className={styles.manual}>
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

      {/* ——— Semana 1 ——— */}
      <section className={styles.weekCard}>
        <header className={styles.weekHeader}>
          <h4 className={`${styles.weekTitle} ${styles.kblockTitle}`}>Semana 1</h4>
          <span className={`${styles.kpill} ${styles.kpillInfo}`}>Progresión base</span>
        </header>

        {/* Datos clave */}
        <div className={styles.kgridStats}>
          <div className={styles.kstat}>
            <div className={styles.kstatLabel}>Objetivo</div>
            <div className={styles.kstatValue}>Subir Resistencia</div>
          </div>
          <div className={styles.kstat}>
            <div className={styles.kstatLabel}>Prioridad de recursos</div>
            <div className={styles.kstatValue}>Cristales → Proteínas</div>
          </div>

          <div className={styles.kstat}>
            <div className={styles.kstatLabel}>Curación</div>
            <div className={styles.kstatValue}>Pide/da cura a aliados</div>
          </div>
        </div>

        {/* Checklist */}
        <ol className={styles.steps}>
          <li>
            Junta <strong>Cristales</strong> y sube la <strong>Granja de proteínas</strong>.
          </li>
          <li>
            Usa <strong>Proteínas</strong> para subir el <strong>Instituto del Virus</strong>.
          </li>
          <li>
            Consigue <strong>“primeras muertes”</strong> de <em>zombis</em>, <em>dooms</em> y
            <em> caminante fatal</em>.
          </li>
        </ol>

        {/* Tip */}
        <div className={`${styles.knote} ${styles.knoteWarn}`}>
          Contra zombies y dooms, si el % de reducción de daño es alto, prioriza subir Resistencia
          antes de malgastar tropas en objetivos muy altos.
        </div>
      </section>

      {/* ——— Semana 2 ——— */}
      <section className={styles.weekCard}>
        <header className={styles.weekHeader}>
          <h4 className={`${styles.weekTitle} ${styles.kblockTitle}`}>Semana 2</h4>
          <span className={`${styles.kpill} ${styles.kpillWarn}`}>Optimización</span>
        </header>

        {/* Datos clave */}
        <div className={styles.kgridStats}>
          <div className={styles.kstat}>
            <div className={styles.kstatLabel}>Evento clave</div>
            <div className={styles.kstatValue}>Jueves · VS</div>
          </div>
          <div className={styles.kstat}>
            <div className={styles.kstatLabel}>Héroe</div>
            <div className={styles.kstatValue}>Mason (5⭐ en Muro de honor)</div>
          </div>
          <div className={styles.kstat}>
            <div className={styles.kstatLabel}>Recurso</div>
            <div className={styles.kstatValue}>Fragmentos morados + Medallas</div>
          </div>
          <div className={styles.kstat}>
            <div className={styles.kstatLabel}>Resultado</div>
            <div className={styles.kstatValue}>Reembolso al pasar a UR</div>
          </div>
        </div>

        {/* Explicación breve y clara */}
        <div className={styles.kblock}>
          <p className={styles.par}>
            Si tienes a <strong>Mason con 5⭐</strong> en el <strong>Muro de honor</strong>:
          </p>
          <ul className={styles.klist}>
            <li>
              El <strong>jueves (VS)</strong>, invierte <strong>todos los fragmentos morados</strong> y
              <strong> medallas de habilidades</strong> en Mason.
            </li>
            <li>
              <strong>Después</strong> de invertir los fragmentos + medallas: <strong>asciéndelo a UR</strong>, el juego te devuelve esos materiales.
              Podrás reutilizarlos en cualquier héroe y puntuar mucho más en el VS.
            </li>
          </ul>
        </div>

        {/* Aviso */}
        <div className={`${styles.knote} ${styles.knoteWarn}`}>
          Comprueba que Mason esté realmente en <strong>5⭐</strong> en el Muro de honor
          antes de gastar. Si no, no habrá devolución completa.
        </div>
      </section>


    </section>
  );
}