import { useState } from "react";
import styles from "./Marshall.module.css";

const CARDS = [
  {
    key: "squads",
    title: "Preparar escuadrones",
    body: (
      <>
        <p className={styles.lead}>
          Llega al Marshall con todo listo: formaciones, equipo y consumibles.
        </p>

        <ol className={styles.steps}>
          <li>
            <strong>Formaciones listas.</strong> Define tus marchas principales
            (daño/soporte) y deja una de reserva. Asegúrate de que llevan{" "}
            <em>armamento</em> y <em>chips</em> correctos.
          </li>
          <li>
            <strong>Equipo al día.</strong> Revisa equipamiento (subidas clave),
            talentos y habilidades. Si usas presets, guarda uno “Marshall”.
          </li>
          <li>
            <strong>Hospital y curas.</strong> Deja capacidad libre y guarda{" "}
            <em>aceleradores de curación</em>. Tener recursos a mano acelera
            la vuelta al combate.
          </li>
          <li>
            <strong>Buffs y consumibles.</strong> Activa los que uses (ataque/daño,
            defensa, etc.). Comprueba también la energía si vas a hacer limpiezas
            alrededor.
          </li>
          <li>
            <strong>Coordinación en chat.</strong> Define hora, roles (quién abre,
            quién limpia, quién refuerza) y recuerda la exploración para fiebre
            de guerra (ver siguiente tarjeta).
          </li>
        </ol>

        <div className={styles.callouts}>
          <div className={styles.info}>
            <strong>Tip:</strong> ten un preset de escuadrón “Marshall” y
            otro “PvP” para alternar rápido si la zona se calienta.
          </div>
        </div>
      </>
    ),
  },

  {
    key: "war-fever",
    title: "Fiebre de guerra (explorar)",
    body: (
      <>
        <p className={styles.lead}>
          Explorar a un objetivo te da <strong>fiebre de guerra</strong>:
          bloquea el escudo durante <strong>15 min</strong> y otorga
          <strong> +1% de daño</strong>.
        </p>

        <ol className={styles.steps}>
          <li>
            <strong>Explora al empezar.</strong> En el chat solemos fijar
            coordenadas para que todos lo hagamos fácil. Tras explorar, no
            podrás poner escudo durante 15 min.
          </li>
          <li>
            <strong>Explora de nuevo a mitad.</strong> El Marshall dura ~30 min,
            así que repite la exploración sobre el min. 15 para mantener el
            1% de daño activo hasta el final.
          </li>
          <li>
            <strong>Evita errores.</strong> No explores si necesitas escudo
            inmediato; hazlo cuando ya estés en zona y listo para pegar.
          </li>
        </ol>

        <div className={styles.callouts}>
          <div className={styles.warn}>
            <strong>Importante:</strong> con fiebre activa no podrás poner
            escudo. Planifica tu salida o teletransporte si la zona se complica.
          </div>
        </div>
      </>
    ),
  },

  {
    key: "rewards",
    title: "Recompensas individuales",
    body: (
      <>
        <p className={styles.lead}>
          Al acabar, revisa y reclama tus <strong>recompensas individuales</strong>.
        </p>

        <ol className={styles.steps}>
          <li>
            <strong>Abre el evento del Marshall</strong> y entra en la pestaña
            de recompensas personales. Si llegaste al mínimo de participación/daño,
            podrás reclamarlas.
          </li>
          <li>
            <strong>Comprueba también las de alianza.</strong> A veces llegan por
            correo del sistema tras el cierre.
          </li>
          <li>
            <strong>¿No te deja reclamar?</strong> Suele ser por no cumplir el
            mínimo. Para la próxima: entra desde el inicio, mantén marchas activas,
            usa curas/buffs, y coordínate con la alianza.
          </li>
        </ol>

        <div className={styles.callouts}>
          <div className={styles.success}>
            <strong>Consejo:</strong> deja un recordatorio en el chat
            (“¡recompensas!”) justo al finalizar para que nadie se olvide.
          </div>
        </div>
      </>
    ),
  },
];

export default function Marshall() {
  const [selected, setSelected] = useState(null);
  const card = CARDS.find((c) => c.key === selected);

  // Vista tarjetas
  if (!card) {
    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h2 className={styles.title}>Marshall</h2>
          <p className={styles.subtitle}>
            Guía rápida: prepara tus escuadrones, activa la fiebre de guerra
            con exploración y no olvides reclamar las recompensas.
          </p>
        </header>

        <div className={styles.grid}>
          {CARDS.map((c) => (
            <button
              key={c.key}
              className={styles.card}
              onClick={() => setSelected(c.key)}
            >
              <span className={styles.cardTitle}>{c.title}</span>
              <span className={styles.cardChevron} aria-hidden>→</span>
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