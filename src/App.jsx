import { useState, useEffect, useRef } from "react";
import { SECTIONS, DAYS, DEFAULT_TASKS } from "./data/defaultTasks";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DayTabs from "./components/DayTabs/DayTabs";
import TaskList from "./components/TaskList/TaskList";
import "./index.css";

export default function App() {
  const today = new Date().toLocaleDateString("es-ES", { weekday: "long" });
  const onlyDuel = ["Duelo de alianza"];
  const showAll = import.meta.env.VITE_SHOW_ALL === "true";
  const sectionsList = showAll ? SECTIONS : onlyDuel;

  const [section, setSection] = useState(sectionsList[0]);
  const [day, setDay] = useState(
    DAYS.find((d) => d.toLowerCase() === today.toLowerCase()) ?? "Lunes"
  );

  // Control de sidebar abierto
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Ref para detectar clicks fuera
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

  const tasksByDay = DEFAULT_TASKS[section]?.[day] ?? { do: [], dont: [] };

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
        {/* Sidebar con ref para detectar clicks fuera */}
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
          <DayTabs days={DAYS} current={day} onSelect={setDay} />
          <TaskList tasks={tasksByDay} />
        </main>
      </div>
    </div>
  );
}
