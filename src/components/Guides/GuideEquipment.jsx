import { useState } from "react";
import styles from "./Guides.module.css";

const CARDS = [
  {
    key: "basics",
    title: "Crear equipamiento legendario",
    thumb: "/src/assets/front-equipment-factory.png",
    body: (
      <>
        <p>
          Ir a la fábrica de equipamiento para crear los diversos componentes (únicamente legendarios)
        </p>
        <img src="/src/assets/equipment-factory.png" alt="Flow" />

        <p>
          Desmantela todo el equipamiento que no sea legendario (dorado) para
          conseguir más material
        </p>
        <img src="/src/assets/disassemble-equipment.png" alt="Flow" />

        <p>
          Fusiona los materiales uno por uno (empezando por la derecha) hasta
          conseguir 750 cerámicas dieléctricas
        </p>
        <img src="/src/assets/fusion-equipment.png" alt="Flow" />

        <p>
          Una vez que se tengan las cerámicas dieléctricas, construimos el
          equipamiento deseado.
        </p>
        <ul>
          <li>Cañón de riel (héroe de ataque)</li>
          <li>Chip de datos (héroe de ataque)</li>
          <li>Armadura (héroe defensivo)</li>
          <li>Radar (héroe defensivo)</li>
        </ul>
      </>
    ),
  },
  {
    key: "farm",
    title: "Prioridad de equipamiento",
    thumb: "/src/assets/attack-hero.png",
    body: (
      <>
        <h3>Héroes de ataque</h3>
        <ul>
          <li>Cañón de riel</li>
          <li>Chip de datos</li>
        </ul>
        <img src="/src/assets/attack-hero.png" alt="Heroe de ataque" />

        <h3>Héroes de defensa</h3>
        <ul>
          <li>Armadura</li>
          <li>Radar</li>
        </ul>
        <img src="/src/assets/defense-hero.png" alt="Heroe de defensa" />

        <h3>Héroes de curación</h3>
        <ul>
          <li>Cañón de riel</li>
          <li>Chip de datos</li>
        </ul>
        <img src="/src/assets/healing-hero.png" alt="Heroe de curación" />
      </>
    ),
  },

  {
    key: "optimize",
    title: "Mejorar el nivel del armamento en orden",
    thumb: "/src/assets/priority-equipment.png",
    body: (
      <>
        <ol className={styles.steps}>
          <li>Todo el equipamiento a <strong>nivel 10</strong>.</li>
          <li>Kim: <strong>Cañón 40</strong>.</li>
          <li>Stettman: <strong>Cañón 40</strong>.</li>
          <li>Williams: <strong>Radar 40</strong>.</li>
          <li>Murphy: <strong>Radar 40</strong>.</li>
          <li>Kim: <strong>Chip de datos 40</strong>.</li>
          <li>Stettman: <strong>Chip de datos 40</strong>.</li>
          <li>Williams: <strong>Armadura 20</strong>.</li>
          <li>Murphy: <strong>Armadura 20</strong>.</li>
          <li>Kim: <strong>Cañón 1★</strong>.</li>
          <li>Stettman: <strong>Cañón 1★</strong>.</li>
          <li>Marshall: <strong>Cañón 20</strong>.</li>
          <li>Kim: <strong>Chip de datos 1★</strong>.</li>
          <li>Stettman: <strong>Chip de datos 1★</strong>.</li>
          <li>Marshall: <strong>Chip de datos 20</strong>.</li>
          <li>Kim: <strong>Radar 20</strong>.</li>
          <li>Stettman: <strong>Radar 20</strong>.</li>
          <li>Marshall: <strong>Radar 20</strong>.</li>
          <li>Williams: <strong>Armadura 40</strong>.</li>
          <li>Murphy: <strong>Armadura 40</strong>.</li>
          <li>Kim: <strong>Cañón 4★</strong>.</li>
          <li>Stettman: <strong>Cañón 4★</strong>.</li>
          <li>Kim: <strong>Radar 40</strong>.</li>
          <li>Stettman: <strong>Radar 40</strong>.</li>
          <li>Marshall: <strong>Radar 40</strong>.</li>
          <li>Kim: <strong>Armadura 40</strong>.</li>
          <li>Stettman: <strong>Armadura 40</strong>.</li>
          <li>Marshall: <strong>Armadura 40</strong>.</li>
          <li>Williams: <strong>Radar 5★</strong>.</li>
          <li>Murphy: <strong>Radar 5★</strong>.</li>
          <li>Kim: <strong>Chip de datos 4★</strong>.</li>
          <li>Stettman: <strong>Chip de datos 4★</strong>.</li>
          <li>Williams: <strong>Chip de datos 40</strong>.</li>
          <li>Murphy: <strong>Chip de datos 40</strong>.</li>
          <li>Williams: <strong>Cañón 40</strong>.</li>
          <li>Murphy: <strong>Cañón 40</strong>.</li>
          <li>Todo el equipo a <strong>1★</strong>.</li>
          <li>Williams: <strong>Armadura 4★</strong>.</li>
          <li>Murphy: <strong>Armadura 4★</strong>.</li>
          <li>Kim: <strong>Radar 4★</strong>.</li>
          <li>Stettman: <strong>Radar 4★</strong>.</li>
          <li>Marshall: <strong>Radar 4★</strong>.</li>
        </ol>
      </>
    ),
  }

];

export default function GuideEquipment() {
  const [selected, setSelected] = useState(null);
  const card = CARDS.find((c) => c.key === selected);

  if (!card) {
    // Grid de tarjetas
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Mejorar equipamiento de héroes</h2>

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

  // Vista detalle
  return (
    <div className={styles.wrapper}>
      <div className={styles.detailHeader}>
        <button className={styles.backBtn} onClick={() => setSelected(null)}>
          ← Atrás
        </button>
        <h2 className={styles.title}>{card.title}</h2>
      </div>

      <div className={styles.detailBody}>{card.body}</div>
    </div>
  );
}