import React from "react";
import modalStyles from "../Modal/Modal.module.css";
import radarInfo from "../../assets/radar-info.png";

export default function RadarTooltip() {
  return (
    <>
      <h2>🎯 Objetivo</h2>
      <p>
        Aprovechar al máximo las tareas del radar, evitando que el contador se
        detenga al llegar al límite, y guardando tareas para recogerlas justo al
        empezar el evento del VS de alianza, que es cuando dan puntos.
      </p>

      <h2>🔍 ¿Cómo funciona?</h2>
      <p>
        El radar genera tareas automáticamente cada 6 horas, pero la cantidad
        que genera y el máximo de tareas que puedes almacenar depende del nivel
        de tu radar.
      </p>
      <p>Como puedes ver en esta imagen de un radar nivel 9:</p>
      <div className={modalStyles.imageGallery}>
        <img src={radarInfo} alt="Información del radar nivel 9" />
      </div>

      <ul>
        <li>Generación cada 6 horas → 11 tareas nuevas.</li>
        <li>Límite de almacenamiento → 35 tareas.</li>
      </ul>

      <p>
        Si tu radar es de otro nivel, estos valores podrían ser diferentes.
        Verifica los tuyos abriendo el radar y pulsando el icono de nivel.
      </p>

      <h2>🚫 ¿Cómo evitar que se detenga el radar?</h2>
      <p>
        Cuando llegas al número máximo de eventos almacenados (35/35), el
        contador se detiene y el radar deja de generar tareas automáticamente.
      </p>
      <p>
        Para evitarlo, anticipa el siguiente reinicio del radar y recoge
        suficientes tareas para que nunca alcance el límite.
      </p>

      <h2 className={modalStyles.strategyTitle}>
        {" "}
        Estrategia ideal para el evento VS ⚔️
      </h2>
      <ol className={modalStyles.strategyList}>
        <li>
          <h3>Identifica el último reinicio antes del inicio del evento</h3>
          <p>
            Si el evento VS empieza el miércoles a las 4:00, y tu radar se reinicia
            cada 6 horas (por ejemplo: 9:00, 15:00, 21:00, 3:00), entonces el último reinicio
            será el martes a las 3:00.
          </p>
        </li>
        <li>
          <h3>Calcula cuántas tareas puedes tener antes de ese reinicio</h3>
          <p>
            Antes del reinicio (por ejemplo, martes a las 21:10), haz el siguiente cálculo para dejar el
            radar con el máximo de tareas posible: 
            <br></br><b>límite - generadas - 1</b>
            <br>
            </br> Si almacena hasta 35 y genera 11: <br></br>
            35 - 11 - 1 = 23 → 23/35.
          </p>
        </li>
        <li>
          <h3>Se produce el reinicio automático</h3>
          <p>
            A las 3:00 se añadirán 11 nuevas tareas, subiendo el contador a
            34/35. El radar no se detiene y seguirá generando tareas con
            normalidad.
          </p>
        </li>
        <li>
          <h3>Cuando empiece el VS, recoge las tareas</h3>
          <p>
            Hazlo antes del siguiente reinicio (en este caso, antes de las
            9:00) o perderás 10 tareas y el contador no se reiniciará hasta que cojas una.
          </p>
          <p className={modalStyles.radarNote}>
            🏆 Todas esas tareas cuentan para el VS y el radar seguirá activo.
          </p>
        </li>
      </ol>
    </>
  );
}
