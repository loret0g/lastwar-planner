import { useState } from "react";
import styles from "./Guides.module.css";

// Comprar escudo
import shieldShop from "../../assets/guides/shield/buy-shield/go-shop.png";
import shieldBuy from "../../assets/guides/shield/buy-shield/alliance-shop.png";

// Poner escudo (inventario / base)
import shieldInventory from "../../assets/guides/shield/put-shield/put-shield-inventary.png";
import shieldInventory2 from "../../assets/guides/shield/put-shield/put-shield-inventary2.png";
import shieldBase from "../../assets/guides/shield/put-shield/put-shield-base.png";
import shieldBase2 from "../../assets/guides/shield/put-shield/put-shield-base2.png";

// Renovar escudo
import shieldRenovate from "../../assets/guides/shield/renovate-shield/renovate-shield.png";

const CARDS = [
  {
    key: "buy-shield",
    title: "Comprar escudo",
    thumb: shieldShop,
    body: (
      <>
        <p>
          Los <strong>escudos</strong> se compran en la <strong>tienda de la alianza</strong> con monedas de alianza. Van
          directos a tu <em>inventario</em> tras la compra.
        </p>

        <ol className={styles.steps}>
          <li>
            Abre la tienda de alianza.
            <img src={shieldShop} alt="Acceso a la tienda de alianza" />
          </li>
          <li>
            En la sección de 'alianza'', busca los <strong>escudos</strong> (8h, 12h, 24h…)
            y compra el que necesites.
            <img src={shieldBuy} alt="Escudos en la tienda de la alianza" />
          </li>
        </ol>

        <p className={styles.note}>
          Asegúrate de tener <strong>monedas de alianza</strong> suficientes o tendrás que gastar gemas.
        </p>
      </>
    ),
  },
  {
    key: "put-shield",
    title: "Poner escudo",
    thumb: shieldInventory2,
    body: (
      <>
        <p>
          Puedes activar el escudo desde <strong>tu inventario</strong> o
          directamente desde <strong>tu base</strong> en el mapa. En ambos casos,
          el tiempo empieza a contar <strong>al instante</strong>.
        </p>

        <h3>Opción A — Desde el inventario</h3>
        <ol className={styles.steps}>
          <li>
            Abre <em>Inventario → Especial</em> y localiza el escudo.
            <img src={shieldInventory} alt="Abrir escudo desde inventario" />
          </li>
          <li>
            Elige la duración (8h/16h/24h…) y pulsa <strong>Usar</strong>.
            <img src={shieldInventory2} alt="Confirmar uso del escudo" />
          </li>
        </ol>

        <h3>Opción B — Desde tu base</h3>
        <ol className={styles.steps}>
          <li>
            Toca tu <strong>base</strong> en el mapa y pulsa el botón de escudo.
            <img src={shieldBase} alt="Activar escudo desde la base" />
          </li>
          <li>
            Selecciona la duración y confirma.
            <img src={shieldBase2} alt="Confirmación de escudo en la base" />
          </li>
        </ol>

        <p className={styles.note}>
          Mientras el escudo esté activo, <strong>no podrás atacar</strong> y otros
          jugadores <strong>no podrán atacarte</strong>.
        </p>
        <p className={styles.note}>
          Explorar <strong>te quitará el escudo</strong>.
        </p>
        <p className={styles.note}>
           Las tropas fuera de la base (minando) <strong>pueden ser atacadas</strong>.
        </p>
      </>
    ),
  },
  {
    key: "renew-shield",
    title: "Renovar escudo",
    thumb: shieldBase2,
    body: (
      <>
        <ol className={styles.steps}>
          <li>
            Para renovar, sigue los mismos pasos de <strong>compra</strong> y <strong>activación</strong>. Al confirmar, verás una notificación y el
          escudo comenzará a contar con la nueva duración.
            <img src={shieldRenovate} alt="Renovar escudo" />
          </li>
        </ol>

        <p className={styles.note}>
          La <strong>renovación sustituye</strong> al escudo actual: el <strong>tiempo restante se pierde</strong>. 
          Ejemplo: si te queda 1h y activas uno de 8h, pasarás a tener <strong>8h</strong>, no 9h.
        </p>
        <p className={styles.note}>
          Si no te puedes conectar a tiempo, renueva el escudo con horas de antelación.
        </p>
      </>
    ),
  },
];

export default function GuideShield() {
  const [selected, setSelected] = useState(null);
  const card = CARDS.find((c) => c.key === selected);

  // Vista “grid”
  if (!card) {
    return (
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Poner escudo</h2>

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