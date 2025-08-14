import { useState } from "react";
import { guides } from "../Guides/GuideRegistry";
import Modal from "../Modal/Modal";
import styles from "./QuickActions.module.css";

export default function QuickActions({ currentDay }) {
  const [openKey, setOpenKey] = useState(null);
  const guide = openKey ? guides[openKey] : null;

  // Verificar si es jueves
  const isThursday =
    typeof currentDay === "string" && currentDay.toLowerCase() === "jueves";

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.grid}>
          {/* ✅ Botón que solo aparece el Jueves */}
          {isThursday && (
            <button
              className={`${styles.action} ${styles.highlight}`}
              onClick={() => setOpenKey("heros")}
            >
              Prioridad de héroes
            </button>
          )}

          <button
            className={styles.action}
            onClick={() => setOpenKey("equipment")}
          >
            Mejorar el equipamiento de los héroes
          </button>

          <button className={styles.action} onClick={() => setOpenKey("roles")}>
            Cargos de la capital
          </button>
        </div>
      </div>

      <Modal isOpen={!!guide} onClose={() => setOpenKey(null)}>
        {guide && <guide.Component />}
      </Modal>
    </>
  );
}
