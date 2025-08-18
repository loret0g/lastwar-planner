// src/sections/index.jsx
import React from "react";

// Secciones reales
import TaskBoard from "./alliance-duel/TaskBoard";
import { ALLIANCE_DUEL_TASKS } from "./alliance-duel/tasks";
import Marshall from "./marshall/Marshall";
import HQRequirements from "./hq-requirements/HQRequirements";

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

  Marshall: {
    usesDays: false,
    Component: Marshall,
  },

  "Requisitos CG": {
    usesDays: false,
    Component: HQRequirements,
  },

  // El resto:
  // "Carrera de armas": { usesDays: true/false, Component: X, getProps: ({day}) => ({ ... }) }
  /*
    "Tareas Diarias",
    "Carrera de armas",
    "Duelo de servidor",
    "Asedio zombie",
    "Héroes",
  */
};