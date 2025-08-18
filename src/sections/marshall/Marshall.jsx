import React from "react";
import styles from "./Marshall.module.css";

export default function Marshall() {
  return (
    <div className={styles.wrapper}>
      {/* Objetivo */}
      <div className={styles.callouts} style={{ marginBottom: ".5rem" }}>
        <div className={styles.info}>
          <strong>Objetivo:</strong>{" "}
          Maximizar el daño y las recompensas del Marshall abriendo los rallys con un
          <em> escuadrón débil (1 héroe)</em> y uniéndonos siempre con el
          <em> escuadrón principal (más fuerte)</em> a los rallys de los compañeros.
        </div>
      </div>

      {/* PREPARACIÓN */}
      <section aria-labelledby="prep-title">
        <h2 id="prep-title" className={styles.title}>Preparación</h2>
        <p className={styles.lead}>
          Configura <strong>dos escuadrones</strong> antes de empezar:
        </p>
        <ul className={styles.bullets}>
          <li>
            <strong>Escuadrón débil:</strong> un <em>único héroe</em> (el más flojo) para
            <strong> abrir rallys</strong> y minimizar bajas.
          </li>
          <li>
            <strong>Escuadrón principal:</strong> tu <em>mejor</em> formación para
            <strong> unirte a los rallys</strong> de los compañeros y aportar el máximo daño.
          </li>
        </ul>

      </section>

      {/* FIEBRE DE GUERRA */}
      <section aria-labelledby="fever-title">
        <h2 id="fever-title" className={styles.title}>Fiebre de guerra (+1% · 15 min)</h2>
        <p className={styles.lead}>
          Explorar <em>cualquier base (mejor sin alianza)</em> activa la <strong>Fiebre de guerra</strong>:
          <strong> +1% de daño</strong>  (<strong>no podrás poner escudo</strong> durante <strong>15 min</strong>).
        </p>
        <ol className={styles.steps}>
          <li>
            <strong>Exploración 1 (inicio):</strong> al comenzar el Marshall, explora para activar la fiebre.
          </li>
          <li>
            <strong>Exploración 2 (~min 15):</strong> repite para cubrir los ~30 minutos del evento.
          </li>
          <li>
            <strong>Coordinación:</strong> en el chat compartimos coordenadas de una base para facilitar la exploración.
          </li>
        </ol>

        <div className={styles.callouts}>
          <div className={styles.warn}>
            <strong>Importante:</strong> Explorar quita el escudo. El <strong>sábado no exploramos</strong> o quedaremos descubiertos para el rival del VS.
          </div>
        </div>
      </section>

      {/* OPERATIVA & RECOMPENSAS */}
      <section aria-labelledby="ops-title">
        <h2 id="ops-title" className={styles.title}>Operativa y recompensas</h2>
        <ol className={styles.steps}>
          <li>
            <strong>Abre rallys</strong> con el <em>escuadrón débil (1 héroe)</em>.
          </li>
          <li>
            <strong>Únete a los rallys</strong> de tus compañeros con tu <em>escuadrón principal</em>.
          </li>
          <li>
            <strong>Revisa recompensas individuales:</strong> cuando la alianza alcance el daño objetivo,
            comprueba las individuales.
          </li>
          <li>
            <strong>Si ya las tienes,</strong> deja de unirte con el escuadrón fuerte (evitas bajas),
            pero <em>sigue abriendo</em> rallys con el escuadrón débil para que otros terminen.
          </li>
        </ol>

      </section>
    </div>
  );
}