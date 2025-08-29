import { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionItem } from "../../components/Accordion/Accordion";
import KList from "../../components/KList/KList";
import { SECTIONS } from "./sectionsData";
import Modal from "../../components/Modal/Modal";

// Estilos del botón "Más detalles" del acordeón
import accStyles from "../../components/Accordion/Accordion.module.css";
// Estilos propios de la guía inicial (galerías, etc.)
import igStyles from "./InitialGuide.module.css";


import colocationHeros from "../../assets/initial-guide/colocation-heros.png";
import wallOff1 from "../../assets/guides/attack/basic-tips/wall-off-1.png";
import wallOff2 from "../../assets/guides/attack/basic-tips/wall-off-2.png";
import reports1 from "../../assets/initial-guide/reports1.png";
import reports2 from "../../assets/initial-guide/reports2.png";

// Reutiliza guías del registry (CTAs kind:"guide")
import { guides } from "../../components/Guides/GuideRegistry";

export default function InitialGuide() {
  const [openModal, setOpenModal] = useState(null); // modales locales
  const [openGuideKey, setOpenGuideKey] = useState(null); // guías del registry

  const buildActions = (sec) => {
    if (!sec.ctas || sec.ctas.length === 0) return [];
    return sec.ctas.map((cta, idx) => {
      if (cta.kind === "link") {
        return (
          <Link key={idx} to={cta.to} className={accStyles.moreBtn}>
            {cta.label ?? "Ver más"}
          </Link>
        );
      }
      if (cta.kind === "modal") {
        return (
          <button
            key={idx}
            className={accStyles.moreBtn}
            onClick={() => setOpenModal(cta.modalKey)}
          >
            {cta.label ?? "Más detalles"}
          </button>
        );
      }
      if (cta.kind === "guide") {
        return (
          <button
            key={idx}
            className={accStyles.moreBtn}
            onClick={() => setOpenGuideKey(cta.guideKey)}
          >
            {cta.label ?? "Abrir guía"}
          </button>
        );
      }
      return null;
    });
  };

  const GuideComp = openGuideKey ? guides[openGuideKey]?.Component : null;

  return (
    <>
      <Accordion>
        {SECTIONS.map((sec) => (
          <AccordionItem
            key={sec.key}
            id={sec.key}
            title={sec.title}
            actions={buildActions(sec)}
          >
            <KList items={sec.items} />
          </AccordionItem>
        ))}
      </Accordion>

      {/* Modal de guías (registry) */}
      <Modal isOpen={!!GuideComp} onClose={() => setOpenGuideKey(null)}>
        {GuideComp && <GuideComp />}
      </Modal>

      {/* Modal local */}
      <Modal isOpen={!!openModal} onClose={() => setOpenModal(null)}>
        {openModal === "placement" && (
          <div style={{ textAlign: "center" }}>
            <img
              src={colocationHeros}
              alt="Ejemplo de colocación de héroes en el escuadrón"
            />
          </div>
        )}

        {openModal === "wall" && (
          <div>
            <h3 style={{ marginTop: 0 }}>Quitar tropas de la muralla</h3>
            <p style={{ marginTop: ".25rem" }}>
              Solo actívalas si te ataca un rival claramente más débil;
              desactívalas después.
            </p>

            <div className={igStyles.inlineGallery}>
              <figure className={igStyles.fig}>
                <img
                  src={wallOff1}
                  alt="Acceso a la muralla para desactivar tropas"
                />
                <figcaption>
                  Accede a la muralla para gestionar la guarnición.
                </figcaption>
              </figure>

              <figure className={igStyles.fig}>
                <img
                  src={wallOff2}
                  alt="Opción para retirar las tropas de la muralla"
                />
                <figcaption>
                  Retira las tropas para evitar bajas innecesarias.
                </figcaption>
              </figure>
            </div>
          </div>
        )}

        {openModal === "reports" && (
  <div>
    <h3 style={{ marginTop: 0 }}>Cómo leer los reportes</h3>

    {/* ✅ Viñetas verdes usando tu KList */}
    <KList
      items={[
        {
          text:
            "Ve al correo del juego y abre la sección correspondiente: Regular para zombies y Batalla para enemigos."
        },
        {
          text:
            "Entra en la pestaña “Estadísticas” y localiza el valor “MEA”."
        },
        {
          text:
            "El MEA son los soldados perdidos (no heridos). Esos son los que debes entrenar de nuevo para recuperarlos. Los que van al hospital se curan y vuelven a tus filas."
        },
      ]}
    />

    {/* Imágenes ilustrativas debajo */}
    <div className={igStyles.inlineGallery} style={{ marginTop: ".6rem" }}>
      <figure className={igStyles.fig}>
        <img
          src={reports1}
          alt="Correo del juego: secciones Regular (zombies) y Batalla (enemigos)"
        />
      </figure>
      <figure className={igStyles.fig}>
        <img
          src={reports2}
          alt="Pestaña Estadísticas del reporte con el indicador MEA"
        />
      </figure>
    </div>
  </div>
)}

      </Modal>
    </>
  );
}
