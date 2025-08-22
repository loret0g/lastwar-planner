import { useState } from "react";
import styles from "./Guides.module.css";

import priorityTank from "../../assets/guides/heros/tank-priority.png";
import priorityAircraft from "../../assets/guides/heros/aircraft-priority.png";
import priorityMissile from "../../assets/guides/heros/missile-priority.png";


const CARDS = [
  {
    key: "tank-priority",
    title: "Héroes de tanque",
    thumb: priorityTank,
    body: (
      <>
        <img src={priorityTank} alt="Héroes de tanque" />
      </>
    ),
  },

  {
    key: "aircraft-priority",
    title: "Héroes de aeronaves",
    thumb: priorityAircraft,
    body: (
      <>
        <img src={priorityAircraft} alt="Héroes de aeronaves" />
      </>
    ),
  },

  {
    key: "missile-priority",
    title: "Héroes de misiles",
    thumb: priorityMissile,
    body: (
      <>
        <img src={priorityMissile} alt="Héroes de misiles" />
      </>
    ),
  },
];

export default function GuideHeros() {
  const [selected, setSelected] = useState(null);
  const card = CARDS.find((c) => c.key === selected);

  // Vista “grid” (tarjetas)
  if (!card) {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Prioridad de héroes</h2>

        <div className={styles.grid}>
          {CARDS.map((c) => (
            <button
              key={c.key}
              className={styles.card}
              onClick={() => setSelected(c.key)}
            >
              {c.thumb && <img src={c.thumb} alt="" loading="lazy" />}
              <span>{c.title}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Vista detalle (contenido de la tarjeta)
  return (
    <div className={styles.wrapper}>
      <div className={styles.detailHeader}>
        <button className={styles.backBtn} onClick={() => setSelected(null)}>
          ← Atrás
        </button>
      </div>

      <div className={styles.detailBody}>{card.body}</div>
    </div>
  );
}