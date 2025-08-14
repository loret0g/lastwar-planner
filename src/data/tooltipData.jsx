import React from "react";
import RadarTooltip from '../components/ToolTips/RadarToolTip'
import LegendaryTask from '../components/ToolTips/LegendaryTasks'
import AttackEnemy from "../components/ToolTips/AttackEnemy";

import infoIcon from "../assets/help.png";
import dronChest from '../assets/dron-chest.png'
import gather from '../assets/resources.png'
import droneDataImg from '../assets/drone.png'
import skillMedalsImg from '../assets/skill-medals.png'

export const tooltipData = {
  radar: {
    icon: <img src={infoIcon} alt="Info" />,
    brief:
      "Es importante que el contador no llegue al límite o se perderán tareas.",
    details: (
      <RadarTooltip />
    ),
  },

  legendaryTask: {
    icon: <img src={infoIcon} alt="Info" />,
    brief:
      "Actualiza las tareas hasta que sean legendarias",
    details: (
      <LegendaryTask />
    )
  },

  dronChip: {
    icon: <img src={infoIcon} alt="Info" />,
    brief:
      <>
        <img src={dronChest} alt="Cofres de dron" />
      </>
  },

  gather: {
    icon: <img src={infoIcon} alt="Info" />,
    brief:
      <>
        <img src={gather} alt="Minas" />
      </>
  },

  droneData: {
    icon: <img src={infoIcon} alt="Info" />,
    brief:
     <>
        <img src={droneDataImg} alt="Datos de dron" />
      </>
  },

  skillMedals: {
    icon: <img src={infoIcon} alt="Info" />,
    brief:
      <>
        <img src={skillMedalsImg} alt="Minas" />
      </>
  },


  //! …otros tooltips posibles…
};