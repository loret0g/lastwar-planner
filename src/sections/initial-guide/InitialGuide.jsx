import { useState } from "react";
import { Accordion, AccordionItem } from "../../components/Accordion/Accordion";
import KList from "../../components/KList/KList";
import { SECTIONS } from "./sectionsData";
import Modal from "../../components/Modal/Modal";

export default function InitialGuide() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <Accordion>
        {SECTIONS.map(sec => (
          <AccordionItem
            key={sec.key}
            title={sec.title}
            onMore={sec.more ? () => setOpenModal(sec.more) : undefined}
          >
            <KList items={sec.items} />
          </AccordionItem>
        ))}
      </Accordion>

      <Modal isOpen={!!openModal} onClose={() => setOpenModal(null)}>
        {openModal === "hq-barraks" && <div><h3>Requisitos Cuartel general</h3><p>Contenido ampliado… redirigir a la section</p></div>}
        {openModal === "placement" && <div><h3>Colocación de los héroes</h3><p>Añadir foto de un escuadrón</p></div>}
        {openModal === "equipment" && <div><h3>Armamento — ampliación</h3><p>Añadir guía para subir el equipamiento</p></div>}
        {openModal === "wall" && <div><h3>Quitar tropas de la muralla</h3><p>Añadir imágenes para quitar las tropas</p></div>}
        {openModal === "roles" && <div><h3>Cargos de la capital</h3><p>Añadir guía para pedir los cargos</p></div>}
        {openModal === "reports" && <div><h3>Reportes</h3><p>Añadir fotos para que puedan ver los MEA</p></div>}
      </Modal>
    </>
  );
}