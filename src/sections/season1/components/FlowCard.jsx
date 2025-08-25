import styles from "../Season1.module.css";

// Iconos-imagen
import mutantCrystalImg from "../../../assets/season1/mutant-crystal2.png";
import inmuneProteinImg from "../../../assets/season1/inmune-protein2.png";

const STEPS = [
  { label: "Zombis", kind: "base", emoji: "🧟" },
  { label: "Cristales", kind: "mid", img: mutantCrystalImg },
  { label: "Granja", kind: "mid", emoji: "🌱" },
  { label: "Proteínas", kind: "mid", img: inmuneProteinImg },
  { label: "Instituto del Virus", kind: "accent", emoji: "🔬" },
  { label: "Resistencia", kind: "final", emoji: "🛡️" },
];

export default function FlowCard() {
  return (
    <div className={styles.flowCard} aria-label="Flujo de progreso">
      <h4 className={styles.flowTitle}>Flujo de progreso</h4>

      <div className={styles.flowSteps} role="list">
        {STEPS.map((s, i) => (
          <span key={s.label} className={styles.stepGroup}>
            <div
              role="listitem"
              className={`${styles.step} ${styles[s.kind]}`}
            >
              <span className={styles.stepIcon} aria-hidden>
                {s.img ? (
                  <img src={s.img} alt="" className={styles.stepIconImg} />
                ) : (
                  s.emoji
                )}
              </span>
              <span className={styles.stepText}>{s.label}</span>
            </div>

            {/* Conector entre pastillas (fuera del div) */}
            {i < STEPS.length - 1 && (
              <span className={styles.connector} aria-hidden="true" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}