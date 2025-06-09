import { useState } from "react";
import Header from "./components/Header/Header";
import { SECTIONS, DAYS, DEFAULT_TASKS } from "./data/DefaultTasks";
import Sidebar from "./components/Sidebar/Sidebar";
import DayTabs from "./components/DayTabs/DayTabs";
import TaskList from "./components/TaskList/TaskList";
import "./index.css";

export default function App() {
  const today = new Date().toLocaleDateString("es-ES", { weekday: "long" });
  const [section, setSection] = useState(SECTIONS[0]);
  const [day, setDay] = useState(
    DAYS.find((d) => d.toLowerCase() === today.toLowerCase()) ?? "Lunes"
  );

  const tasks = DEFAULT_TASKS[section]?.[day] ?? [];

  return (
    <div className="layout">
      {" "}
      <Header />
      <div className="content">
        <Sidebar sections={SECTIONS} current={section} onSelect={setSection} />

        <main>
          <h1>{section}</h1>
          <DayTabs days={DAYS} current={day} onSelect={setDay} />

          <TaskList tasks={tasks} storageKey={`${section}-${day}`} />
        </main>
      </div>
    </div>
  );
}
