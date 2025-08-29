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

// Imagen de colocación (modal "placement")
import colocationHeros from "../../assets/initial-guide/colocation-heros.png";

// Imágenes para el modal "wall"
import wallOff1 from "../../assets/guides/attack/basic-tips/wall-off-1.png";
import wallOff2 from "../../assets/guides/attack/basic-tips/wall-off-2.png";

import reports1 from "../../assets/initial-guide/reports1.png";
import reports2 from "../../assets/initial-guide/reports2.png";


// Reutiliza guías del registry (si usas CTAs kind:"guide")
import { guides } from "../../components/Guides/GuideRegistry";

export default function InitialGuide() {
  const [openModal, setOpenModal] = useState(null);       // modales locales
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

      {/* Modal local (placement con imagen, wall con galería, etc.) */}
      <Modal isOpen={!!openModal} onClose={() => setOpenModal(null)}>
        {openModal === "placement" && (
          <div style={{ textAlign: "center" }}>
            <img
              src={colocationHeros}
              alt="Ejemplo de colocación de héroes en el escuadrón"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 8px 24px rgba(0,0,0,.15)"
              }}
            />
          </div>
        )}

        {openModal === "wall" && (
          <div>
            <h3 style={{ marginTop: 0 }}>Quitar tropas de la muralla</h3>
            <p style={{ marginTop: ".25rem" }}>
              Solo actívalas si te ataca un rival claramente más débil; desactívalas después.
            </p>

            {/* Galería de apoyo: dos capturas */}
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
    <ol style={{ margin: ".5rem 0 1rem 1.25rem", lineHeight: 1.6 }}>
      <li>
        Ve al <strong>correo</strong> del juego y abre la sección correspondiente:
        <em> Regular</em> para <strong>zombies</strong> y <em>Batalla</em> para <strong>enemigos</strong>.
      </li>
      <li>
        Entra en la pestaña <strong>“Estadísticas”</strong> y localiza el valor <strong>“MEA”</strong>.
      </li>
      <li>
        El <strong>MEA</strong> son los <strong>soldados perdidos</strong> (no heridos). Esos son los que
        debes <strong>entrenar de nuevo</strong> para recuperarlos. Los que van al <strong>hospital</strong> se <strong>curan</strong> y vuelven a tus filas.
      </li>
    </ol>

    <div className={igStyles.inlineGallery}>
      <figure className={igStyles.fig}>
        <img
          src={reports1}
          alt="Correo del juego: secciones Regular (zombies) y Batalla (enemigos)"
        />
        <figcaption>
          1. Entra al correo y elige la sección: <em>Regular</em> para zombies o <em>Batalla</em> para enemigos.
        </figcaption>
      </figure>

      <figure className={igStyles.fig}>
        <img
          src={reports2}
          alt="Pestaña Estadísticas del reporte con el indicador MEA"
        />
        <figcaption>
          2. En <strong>Estadísticas</strong>, fíjate en <strong>MEA</strong>: son las bajas definitivas que debes entrenar.
        </figcaption>
      </figure>
    </div>
  </div>
)}

      </Modal>
    </>
  );
}