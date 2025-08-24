import React from "react";
import styles from "../Modal/Modal.module.css";

import shoppingRec from "../../assets/tooltip/shopping/shopping-rec.png";

export default function Shopping() {
  // Estilos inline mínimos para que se vea moderno sin crear más CSS
  const grid = { display: "grid", gap: "0.75rem" };
  const card = {
    border: "1px solid #ececec",
    borderRadius: "12px",
    background: "#fff",
    padding: "0.9rem 1rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  };
  const h3 = { margin: 0, fontSize: "1rem" };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Tiendas gratuitas</h2>

      <p>
        Menos en la tienda de diamantes, los recursos que se pueden comprar son limitados y cada lunes se renuevan, 
        por eso el domingo está bien comprar lo que pueda ser útil para la semana siguiente. (como la energía, aceleradores, fragmentos...)
      </p>

      <div style={grid}>
        <article style={card}>
          <h3 style={h3}>🛒 Tienda de Diamantes</h3>
          <p>
            Tienda siempre disponible e ilimitada. Se recomienda
            usarla como último recurso, una vez hayas agotado las opciones de otras
            tiendas más rentables.
          </p>
        </article>

        <article style={card}>
          <h3 style={h3}>💎 Tienda VIP</h3>
          <p>
            Se renueva cada semana, necesitas el VIP para usarla y ofrece los objetos
            más valiosos del juego (aceleradores de 8h, energía, fragmentos de
            héroes universales, etc.). Aunque es muy eficaz, requiere muchos diamantes,
            por lo que conviene elegir bien tus compras.
          </p>
        </article>

        <article style={card}>
          <h3 style={h3}>🤝 Tienda de Alianza</h3>
          <p>
            Puedes usar los puntos que ganas ayudando a tu alianza para comprar escudos,
            partes de dron, aceleradores y fragmentos UR. Es recomendable guardar puntos
            para comprar escudos los sábados.
          </p>
        </article>

        <article style={card}>
          <h3 style={h3}>⚔️ Tienda de Honor</h3>
          <p>
            Se actualiza mensualmente y es la mejor fuente de planos legendarios de
            equipamiento, algo que no se puede obtener fácilmente sin pagar. Muy útil
            para mejorar tu equipo sin gastar dinero real. <strong>Compra únicamente 'planos de equipamiento'.</strong>
          </p>
        </article>

        <article style={card}>
          <h3 style={h3}>🎯 Tienda de Campaña</h3>
          <p>
            Aquí puedes canjear las medallas que obtienes al completar misiones de campaña
            por cofres de recursos, fragmentos universales, piezas de dron... Es una buena forma
            de conseguir materiales sin gastar diamantes.
          </p>
        </article>
      </div>

      <div style={{ marginTop: "0.9rem" }}>
        <p>
          <strong>Recomendación:</strong> en la imagen, lo marcado como{" "}
          <em>“Get this”</em> es lo que conviene comprar; lo marcado como{" "}
          <em>“Avoid”</em> es mejor evitarlo.
        </p>
        <figure className={styles.fig}>
          <img
            src={shoppingRec}
            alt='Guía de compra: "Get this" (comprar) vs "Avoid" (evitar)'
            loading="lazy"
          />
        </figure>
      </div>

      {/* Pequeño tip reutilizando el estilo de callouts del modal si lo tienes */}
      {/* <div className={styles.callouts} style={{ marginTop: ".5rem" }}>
        <div className={styles.do}>
          <strong>Consejo:</strong> prioriza la tienda de Alianza. En la tienda de Honor únicamente compra los planos de equipamiento. Usa la de Diamantes solo cuando compense o falte algo concreto.
        </div>
      </div> */}
    </div>
  );
}