import React from "react";

import Radar from "../components/Tooltips/Radar";
import LegendaryTasks from "../components/Tooltips/LegendaryTasks";
import Shopping from "../components/Tooltips/Shopping";

import infoIcon from "../assets/tooltip/help.png";
import dronChest from "../assets/tooltip/dron-chest.png";
import gather from "../assets/tooltip/resources.png";
import droneDataImg from "../assets/tooltip/drone.png";
import skillMedalsImg from "../assets/tooltip/skill-medals.png";
import honorMedalsImg from "../assets/tooltip/honor-medals.png";
import shinyTaskStarImg from "../assets/tooltip/shiny-task-star.png";

export const tooltipData = {
  radar: {
    icon: <img src={infoIcon} alt="Info" />,
    brief:
      "Es importante que el contador no llegue al límite o se perderán tareas.",
    details: <Radar />,
  },

  legendaryTasks: {
    icon: <img src={infoIcon} alt="Info" />,
    brief: "Actualiza las tareas hasta que sean legendarias (doradas).",
    details: <LegendaryTasks />,
  },

  dronChip: {
    icon: <img src={infoIcon} alt="Info" />,
    brief: (
      <>
        <img src={dronChest} alt="Cofres de dron" />
      </>
    ),
  },

  gather: {
    icon: <img src={infoIcon} alt="Info" />,
    brief: (
      <>
        <img src={gather} alt="Minas" />
      </>
    ),
  },

  droneData: {
    icon: <img src={infoIcon} alt="Info" />,
    brief: (
      <>
        <img src={droneDataImg} alt="Datos de dron" />
      </>
    ),
  },

  skillMedals: {
    icon: <img src={infoIcon} alt="Info" />,
    brief: (
      <>
        <img src={skillMedalsImg} alt="Medallas de habilidades" />
      </>
    ),
  },

  honorMedals: {
    icon: <img src={infoIcon} alt="Info" />,
    brief: (
      <>
        <img src={honorMedalsImg} alt="Medallas de honor" />
      </>
    ),
  },

  shinyTaskStar: {
    icon: <img src={infoIcon} alt="Info" />,
    brief: (
      <>
        <p>A pesar de que actualices, la tarea con estrella no se quitará.</p>
        <img src={shinyTaskStarImg} alt="Tarea brillante con estrella" />
      </>
    ),
  },

  buyResources: {
    icon: <img src={infoIcon} alt="Info" />,
    brief:
      "Existen varias tiendas donde canjear distintos tipos de monedas por objetos útiles para acelerar tu crecimiento.",
    details: <Shopping />,
  },

  //! …otros tooltips posibles…
};
