import { useState } from 'react'
import { SECTIONS, DAYS, DEFAULT_TASKS } from './data/defaultTasks'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import DayTabs from './components/DayTabs/DayTabs'
import TaskList from './components/TaskList/TaskList'
import './index.css'

export default function App() {
  // Nombre del día de la semana en español
  const today = new Date().toLocaleDateString('es-ES', { weekday: 'long' })

  // En producción solo mostramos 'Duelo de alianza'
  const onlyDuel = ['Duelo de alianza']
  const sectionsList = import.meta.env.PROD ? onlyDuel : SECTIONS

  // Estado de sección y día
  const [section, setSection] = useState(sectionsList[0])
  const [day, setDay] = useState(
    DAYS.find(d => d.toLowerCase() === today.toLowerCase()) ?? 'Lunes'
  )

  // Tareas a mostrar (objeto { do: [], dont: [] })
  const tasksByDay = DEFAULT_TASKS[section]?.[day] ?? { do: [], dont: [] }

  return (
    <div className="layout">
      <Header />

      <div className="content">
        <Sidebar
          sections={sectionsList}
          current={section}
          onSelect={setSection}
        />

        <main className="main">
          <h1>{section}</h1>
          <DayTabs days={DAYS} current={day} onSelect={setDay} />
          <TaskList tasks={tasksByDay} />
        </main>
      </div>
    </div>
  )
}