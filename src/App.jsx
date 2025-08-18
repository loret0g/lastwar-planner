import { useState, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DayTabs from "./components/DayTabs/DayTabs";
import { DAYS } from "./constants/days";
import { SECTION_REGISTRY } from "./sections";
import "./index.css";

export default function App() {
  // ——— Mostrar SIEMPRE todas las secciones ———
  const sectionsList = Object.keys(SECTION_REGISTRY);

  // Día inicial normalizado a ES
  const todayName = new Date().toLocaleDateString("es-ES", { weekday: "long" });
  const normalizedToday =
    todayName.charAt(0).toUpperCase() + todayName.slice(1).toLowerCase();
  const initialDay = DAYS.includes(normalizedToday) ? normalizedToday : "Lunes";

  // Estado principal
  const [section, setSection] = useState(sectionsList[0]);
  const [day, setDay] = useState(initialDay);

  // Sidebar en móvil
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  // Entrada actual del registry
  const entry = SECTION_REGISTRY[section];

  // Si por algún motivo cambia el registry y la sección ya no existe,
  // caemos a la primera disponible.
  useEffect(() => {
    if (!entry && sectionsList.length) {
      setSection(sectionsList[0]);
    }
  }, [entry, sectionsList]);

  return (
    <div className="layout">
      <Header />

      {/* Toggle para móvil */}
      <button
        className="toggle-sections-btn"
        onClick={() => setSidebarOpen((o) => !o)}
      >
        {isSidebarOpen ? "▲ Secciones" : "▼ Secciones"}
      </button>

      <div className="content">
        {/* Sidebar con ref para clicks fuera */}
        <div ref={sidebarRef}>
          <Sidebar
            sections={sectionsList}
            current={section}
            isOpen={isSidebarOpen}
            onSelect={(sec) => {
              setSection(sec);
              setSidebarOpen(false);
            }}
          />
        </div>

        <main className="main">
          <h1>{section}</h1>

          {/* Tabs de día solo si la sección lo necesita */}
          {entry?.usesDays && (
            <DayTabs days={DAYS} current={day} onSelect={setDay} />
          )}

          {/* Render de la sección con sus props calculadas */}
          {entry && (
            <entry.Component
              {...(entry.getProps ? entry.getProps({ day }) : { day })}
            />
          )}
        </main>
      </div>
    </div>
  );
}