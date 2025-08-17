import React from "react";
import styles from "../Modal/Modal.module.css";

import step1 from "../../assets/tooltip/legendary-tasks/task-1.png";
import step2 from "../../assets/tooltip/legendary-tasks/task-2.png";
import step3 from "../../assets/tooltip/legendary-tasks/task-3.png";
import step4 from "../../assets/tooltip/legendary-tasks/task-4.png";

export default function Shopping() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Tiendas gratuitas</h2>
      🛒 Tienda de Diamantes: Es la tienda básica y siempre disponible. Sin
      embargo, se recomienda usarla como último recurso, una vez hayas agotado
      las opciones de otras tiendas más rentables. 
      💎 Tienda VIP: Se renueva
      cada semana, necesitas el VIP para usarla y ofrece los objetos más
      valiosos del juego, como aceleradores de 8 horas, energía, fragmentos de
      héroes universales, etc. Aunque es muy eficaz, requiere una gran cantidad
      de diamantes, por lo que conviene elegir bien tus compras. 
      🤝 Tienda de Alianza: Puedes usar los puntos que ganas ayudando a tu alianza para
      comprar escudos, partes de dron, aceleradores y fragmentos UR. Es
      recomendable guardar puntos para comprar escudos los sábados. 
      ⚔️ Tienda de Honor: Se actualiza mensualmente y es la mejor fuente de planos
      legendarios de equipamiento, algo que no se puede obtener fácilmente sin
      pagar. Muy útil para mejorar tu equipo sin gastar dinero real. 
      🎯 Tienda de Campaña: Aquí puedes canjear las medallas que obtienes al completar
      misiones de campaña por cofres de recursos, energía y fragmentos
      universales. Es una buena forma de conseguir materiales sin gastar
      diamantes.
    </div>
  );
}
