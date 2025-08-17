import { useState } from "react";
import styles from "./Guides.module.css";

// Quitar tropas de la muralla
import wallOff1 from "../../assets/guides/attack/basic-tips/wall-off-1.png";
import wallOff2 from "../../assets/guides/attack/basic-tips/wall-off-2.png";
// import wall3 from "../../assets/guides/attack/basic-tips/wall-off-3.png";

import knowAttacker from "../../assets/guides/attack/basic-tips/know-attacker.png";

import moveServer1 from "../../assets/guides/attack/move-servers/move-server.png";
import moveServer2 from "../../assets/guides/attack/move-servers/move-server2.png";
import moveServer3 from "../../assets/guides/attack/move-servers/move-server3.png";
import moveServer4 from "../../assets/guides/attack/move-servers/move-server4.png";

const CARDS = [
  {
    key: "basics",
    title: "Consejos básicos",
    thumb: moveServer1,
    body: (
      <>
        <ul className={styles.tips}>
          <li>
            <strong>Quita las tropas de la muralla.</strong> Solo actívalas si
            te ataca un rival claramente más débil; desactívalas después.
            {/* Galería de apoyo: dos capturas bajo el primer punto */}
            <div className={styles.inlineGallery}>
              <figure className={styles.fig}>
                <img
                  src={wallOff1}
                  alt="Acceso a la muralla para desactivar tropas"
                />
                <figcaption>
                  Accede a la muralla para gestionar la guarnición.
                </figcaption>
              </figure>
              <figure className={styles.fig}>
                <img
                  src={wallOff2}
                  alt="Opción para retirar las tropas de la muralla"
                />
                <figcaption>
                  Retira las tropas para evitar bajas innecesarias.
                </figcaption>
              </figure>
            </div>
          </li>

          <li>
            <strong>No ataques bases de nivel superior al tuyo</strong> (puedes
            explorar su base y si no tiene las tropas puestas podrás atacarle).
          </li>

          <li>
            <strong>Explora</strong> antes de atacar si dudas, puede que esté
            guarnecido.
          </li>

          <li>
            <strong>No guarnezcas</strong> a un compañero si el atacante te
            supera de nivel; convertirás 1 derrota en 2 (y sumarán el doble de
            puntos).
            <p className={styles.tipSub}>
              Puedes comprobar el nivel en la pantalla de{" "}
              <em>guerra de alianza</em>, (donde aparecen las espadas que nos
              avisan de que estamos siendo atacados). Ahí verás las coordenadas
              del atacante y, al pulsar, te llevará a su base donde podrás
              verificar el nivel antes de guarnecer.
            </p>
            <figure className={styles.fig}>
              <img
                src={knowAttacker}
                alt="Pantalla con coordenadas del atacante y acceso a su base"
              />
              <figcaption>
                Consulta el nivel del atacante antes de guarnecer.
              </figcaption>
            </figure>
          </li>
        </ul>

        <h3>Acércate sin avisar</h3>
        <p>
          Si estás lejos, no ataques directo.{" "}
          <strong>Usa minas de recursos</strong>: envía un escuadrón a una mina
          cercana al objetivo; cuando pase cerca del rival, ordena el ataque a
          la base. La marcha se desviará y llegarás
          <em> más rápido y sin avisar</em> al radar enemigo hasta el último
          momento.
        </p>

        <h3>Teletransportes útiles</h3>
        <ul className={styles.tips}>
          <li>
            <strong>Teletransporte del evento (VS/alianza):</strong> úsalo para
            acercarte al rival y/o para huir.
          </li>
          <li>
            <strong>Teletransporte Aleatorio:</strong> ten varios en tu
            inventario. Si no puedes usar el TP del evento, te ayudará a huir.
          </li>
        </ul>
      </>
    ),
  },
  {
    key: "move-servers",
    title: "Moverse entre servidores (VS)",
    thumb: moveServer2,
    body: (
      <>
        <p>
          Los sábados, durante el <strong>Duelo de Servidor</strong> puedes
          saltar al mapa rival y volver, de forma gratuita, usando el acceso del
          evento.
        </p>

        <ol className={styles.steps}>
          <li>
            Abre el evento VS y ves a la última pestaña{" "}
            <strong>“Asalto de la alianza”</strong> y pulsa en{" "}
            <strong>"Ataque"</strong>.
            <figure className={styles.fig}>
              <img src={moveServer1} alt="Entrada al evento VS" />
              <figcaption>Acceso desde el evento.</figcaption>
            </figure>
          </li>

          <li>
            Elige donde ubicarte (al lado de un enemigo para atacar o alejado
            para esconderte).
            <figure className={styles.fig}>
              <img src={moveServer2} alt="Selección de zona para caer" />
              <figcaption>Selecciona zona de aterrizaje.</figcaption>
            </figure>
          </li>

          <li>
            Para volver a <strong>nuestro servidor</strong>, regresa desde el
            evento o pulsa la flecha de la esquina superior izquierda. Fíjate en
            el <strong>contador</strong>: indica cuánto falta para poder saltar
            de nuevo al servidor rival (cooldown). A casa puedes volver siempre,
            incluso con los escuadrones fuera. Si te persiguen en nuestro mapa y
            aún no puedes saltar otra vez, usa un <strong>TP aleatorio</strong>{" "}
            para esconderte.
            <figure className={styles.fig}>
              <img
                src={moveServer3}
                alt="Volver a nuestro servidor desde el VS"
              />
              <figcaption>Regresa a casa y controla el cooldown.</figcaption>
            </figure>
          </li>

          <li>
            Si te atacan <strong>teletranspórtate</strong> (evento o aleatorio)
            para huir. No vuelvas a la colmena cuando huyas, es mejor esconderse
            en un sitio alejado del mapa. Si te encuentran (y tiene más nivel
            que tu) usa el TP aleatorio; eso te llevará a otro sitio del mapa.
            <figure className={styles.fig}>
              <img src={moveServer4} alt="Salida/teletransporte" />
              <figcaption>De regreso a la colmena.</figcaption>
            </figure>
          </li>
        </ol>

        <div className={styles.note}>
          Prueba el flujo con escudo puesto para practicar sin riesgo.
        </div>
        <div className={styles.note}>Guarda siempre 1-2 TP aleatorios.</div>
      </>
    ),
  },
];

export default function GuideAttackEnemy() {
  const [selected, setSelected] = useState(null);
  const card = CARDS.find((c) => c.key === selected);

  // Grid de tarjetas
  if (!card) {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Atacar al enemigo</h2>

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
