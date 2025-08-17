import React from "react";
import styles from "../Modal/Modal.module.css";

import step1 from "../../assets/tooltip/legendary-tasks/task-1.png";
import step2 from "../../assets/tooltip/legendary-tasks/task-2.png";
import step3 from "../../assets/tooltip/legendary-tasks/task-3.png";
import step4 from "../../assets/tooltip/legendary-tasks/task-4.png";

export default function LegendaryTasks() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Tareas legendarias (UR)</h2>

      <p>
        Únicamente se realizan tareas doradas. La mecánica correcta es:
        <strong> actualizar hasta que salga una dorada, hacerla y volver a actualizar</strong>.
        Nunca actualices si tienes una dorada sin hacer porque desaparecerá.
      </p>

      <h3>Pasos</h3>
      <ol className={`${styles.steps} ${styles.stepsIndented}`}>
        <li>
          <strong>Busca la dorada (UR).</strong> Ignora las moradas y azules. Usa el botón
          <em> Actualizar</em> hasta que veas una dorada.
        </li>
        <li>
          <strong>Haz la dorada en cuanto aparezca.</strong> Pulsa <em>Ir</em> y complétala
          antes de volver a actualizar.
        </li>
        <li>
          <strong>Vuelve a actualizar.</strong> Tras completarla, regresa a la lista y sigue
          actualizando para sacar la siguiente dorada.
        </li>
        <li>
          <strong>Repite el ciclo.</strong> Doradas → hacer → actualizar.
        </li>
      </ol>

      <div className={styles.gallery}>
        <figure className={styles.fig}>
          <img src={step1} alt="Lista con SR y botón Actualizar disponible" />
          <figcaption>1 Cuando aparezca la UR, pulsa <em>Ir</em> y hazla.</figcaption>
        </figure>

        <figure className={styles.fig}>
          <img src={step2} alt="Aparece una tarea UR con botón Ir" />
          <figcaption>2 Actualiza hasta que salga una UR.</figcaption>
        </figure>

        <figure className={styles.fig}>
          <img src={step3} alt="UR hecha; no refrescar mientras quede una UR sin hacer" />
          <figcaption>3 No actualices si queda una UR sin hacer: se perderá.</figcaption>
        </figure>

        <figure className={styles.fig}>
          <img src={step4} alt="Tras completar la UR, vuelve a actualizar" />
          <figcaption>4 UR hecha. Vuelve a <em>Actualizar</em> y repite el ciclo.</figcaption>
        </figure>
      </div>

      <div className={styles.callouts}>
        <div className={styles.do}>
          <strong>Haz:</strong> actualizar → hacer UR → actualizar.
        </div>
        <div className={styles.dont}>
          <strong>No hagas:</strong> actualizar si todavía tienes una UR sin hacer.
        </div>
      </div>
    </div>
  );
}