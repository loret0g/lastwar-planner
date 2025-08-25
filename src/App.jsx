import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DayTabs from "./components/DayTabs/DayTabs";
import { DAYS } from "./constants/days";
import { SECTION_REGISTRY } from "./sections";
import "./index.css";

export default function App() {
  const sectionsList = Object.keys(SECTION_REGISTRY);

  // Día inicial
  const todayName = new Date().toLocaleDateString("es-ES", { weekday: "long" });
  const normalizedToday =
    todayName.charAt(0).toUpperCase() + todayName.slice(1).toLowerCase();
  const initialDay = DAYS.includes(normalizedToday) ? normalizedToday : "Lunes";

  const [section, setSection] = useState(sectionsList[0]);
  const [day, setDay] = useState(initialDay);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Esc para cerrar overlay
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSidebarOpen(false);
    }
    if (isSidebarOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isSidebarOpen]);

  // Cierra overlay si vuelves a escritorio
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const handler = (e) => {
      if (e.matches) setSidebarOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const entry = SECTION_REGISTRY[section];

  // Salvaguarda si cambiara el registry
  useEffect(() => {
    if (!entry && sectionsList.length) setSection(sectionsList[0]);
  }, [entry, sectionsList]);

  return (
    <div className="layout">
      <Header onMenuClick={() => setSidebarOpen((o) => !o)} />

      <div className="content">
        <Sidebar
          sections={sectionsList}
          current={section}
          isOpen={isSidebarOpen}
          onSelect={(sec) => {
            setSection(sec);
            setSidebarOpen(false);
          }}
          onClose={() => setSidebarOpen(false)}
        />

        <main
          className="main"
          onClick={() => isSidebarOpen && setSidebarOpen(false)}
        >
          <header className="section-header">
            <span className="section-dot" aria-hidden />
            <h1 className="section-title">{section}</h1>
          </header>

          {entry?.usesDays && (
            <DayTabs days={DAYS} current={day} onSelect={setDay} />
          )}

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
