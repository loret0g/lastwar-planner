import { useState } from "react";
import styles from "./Guides.module.css";

// IMPORTA TODAS LAS IMÁGENES (así Vite las empaqueta bien)
import rolesOverview from "../../assets/roles-overview.png";
import rolesApply from "../../assets/roles-apply.png";
import profileImg from "../../assets/profile.png";
import serverImg from "../../assets/server.png";
import rolesQueues from "../../assets/roles-queues.png";
import buildingImg from "../../assets/building.png";
import buildingHour from "../../assets/building-hour.png";

const CARDS = [
  {
    key: "how-it-works",
    title: "Funcionamiento de los cargos",
    thumb: rolesOverview,
    body: (
      <>
        <h3>Cargos y bonificaciones</h3>
        <ul>
          <li>
            <strong>Secretario de Desarrollo</strong> — reduce el tiempo de <em>construcción</em>.
            (+50% de bonificación de construcción sobre el tiempo base y 25% de bonificación en investigación).
            <br />
            Una vez que tienes el cargo, inicias las construcciones.
          </li>
          <li>
            <strong>Secretario de Ciencias</strong> — reduce el tiempo de <em>investigación</em>.
            (+50% de bonificación de investigación sobre el tiempo base y 25% de bonificación en construcción).
            <br />
            Una vez que tienes el cargo, inicias las investigaciones.
          </li>
          <li>
            <strong>Secretario de Seguridad</strong> — aumenta el número de soldados que pueden ser entrenados/promocionados.
            <br />
            Una vez que tienes el cargo, inicias los entrenamientos/promociones.
          </li>
          <li>
            <strong>Secretario del Interior</strong> — aumenta los recursos en las minas.
            <br />
            Una vez que tienes el cargo, recolectas las minas. Comprueba en tus
            minas el tiempo máximo de producción y solicita el cargo antes de que se llenen.
          </li>
          <li>
            <strong>Secretario de Estrategia</strong> — aumenta la capacidad del hospital.
            <br />
            Solicita el cargo antes de meterte en una batalla para que el hospital tenga más capacidad.
          </li>
          <li>
            <strong>Vice Presidente</strong> — <u>este puesto tiene una gran responsabilidad.</u> Se deben aceptar todas las peticiones a los cargos de todo el servidor.
            Con él obtienes un 20% en construcción, un 20% en investigación y un 10% de velocidad de entrenamiento.
          </li>
        </ul>

        <h3>Reglas clave</h3>
        <ul>
          <li>Los bonus son <strong>temporales</strong>, tienen una duración de 5 minutos si hay más gente en la cola.</li>
          <li>Te asignan el cargo, haces tu acción (p. ej. iniciar edificios/investigaciones) y listo.</li>
          <li>Planifica tus aceleradores para usarlos mientras el cargo esté activo.</li>
        </ul>

        <p className={styles.note}>Consejo:</p>
      </>
    ),
  },

  {
    key: "how-to-request",
    title: "Cómo solicitar los cargos",
    thumb: rolesApply,
    body: (
      <>
        <ol className={styles.steps}>
          <li>
            Arriba a la izquierda, pulsa en la foto de tu perfil.
            <img src={profileImg} alt="Acceso al perfil" loading="lazy" />
          </li>
          <li>
            Pulsa en el servidor.
            <img src={serverImg} alt="Pantalla del servidor" loading="lazy" />
          </li>
          <li>
            Selecciona el cargo que te interesa.
            <img src={rolesOverview} alt="Listado de cargos disponibles" loading="lazy" />
          </li>
          <li>
            Puedes ver la cola de espera y en “lista” verás si hay más gente que ha aplicado pero aún no ha sido aceptada.
            <img src={rolesQueues} alt="Colas de solicitud de cargos" loading="lazy" />
          </li>
          <li>
            Ve al edificio para confirmar tu hora una vez que te hayan aceptado. Selecciona “hora local” para no liarte.
            <img src={buildingImg} alt="Edificio de cargos" loading="lazy" className={styles.imgBuilding} />
            <img src={buildingHour} alt="Selección de hora local" loading="lazy" />
          </li>
        </ol>

        <h3>Buenas prácticas</h3>
        <ul>
          <li>Ten recursos y aceleradores listos antes de pedirlo.</li>
          <li>Prioriza cargos en ventanas de evento (VS y carrera de armas).</li>
        </ul>
      </>
    ),
  },
];

export default function GuideRoles() {
  const [selected, setSelected] = useState(null);
  const card = CARDS.find((c) => c.key === selected);

  // Vista “grid” (tarjetas)
  if (!card) {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Cargos de la capital</h2>

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
        <h2 className={styles.title}>{card.title}</h2>
      </div>

      <div className={styles.detailBody}>{card.body}</div>
    </div>
  );
}