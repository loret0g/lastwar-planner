import React from "react";

// Secciones reales
import TaskBoard from "./alliance-duel/TaskBoard";
import { ALLIANCE_DUEL_TASKS } from "./alliance-duel/tasks";
import Marshall from "./marshall/Marshall";
import HQRequirements from "./hq-requirements/HQRequirements";
import Season1 from "./season1/Season1";
import DailyTasks from "./daily-tasks/DailyTasks";
import InitialGuide from "./initial-guide/InitialGuide";
import Events from "./events/Events";

// Registro central de secciones
export const SECTION_REGISTRY = {
  "Duelo de alianza": {
    usesDays: true,
    Component: TaskBoard,
    // Props que necesita la sección en función del día seleccionado
    getProps: ({ day }) => ({
      tasks: ALLIANCE_DUEL_TASKS[day] ?? { do: [], dont: [] },
      currentDay: day,
    }),
  },

  "Temporada 1": {
    usesDays: false,
    Component: Season1,
  },

  "Guía inicial": {
    usesDays: false,
    Component: InitialGuide,
  },

  Marshall: {
    usesDays: false,
    Component: Marshall,
  },

  "Requisitos CG": {
    usesDays: false,
    Component: HQRequirements,
  },

  "Tareas diarias": {
    usesDays: false,
    Component: DailyTasks,
  },

  "Eventos de Alianza": {
    usesDays: false,
    Component: Events,
  },

  /*
    "Carrera de armas": { usesDays: true/false, Component: X, getProps: ({day}) => ({ ... }) }
    "Duelo de servidor",
    "Asedio zombie",
    "Héroes",
  */
};