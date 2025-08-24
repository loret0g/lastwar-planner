import React from "react";
import RadarTooltip from '../components/Tooltips/RadarToolTip'
import LegendaryTask from '../components/Tooltips/LegendaryTasks'
import Shopping from '../components/Tooltips/Shopping'

import infoIcon from "../assets/tooltip/help.png";
import dronChest from '../assets/tooltip/dron-chest.png'
import gather from '../assets/tooltip/resources.png'
import droneDataImg from '../assets/tooltip/drone.png'
import skillMedalsImg from '../assets/tooltip/skill-medals.png'

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
      "Actualiza las tareas hasta que sean legendarias (doradas).",
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

  buyResources: {
    icon: <img src={infoIcon} alt="Info" />,
    brief:
      "Existen varias tiendas donde canjear distintos tipos de monedas por objetos útiles para acelerar tu crecimiento.",
    details: (
      <Shopping />
    )
  },


  //! …otros tooltips posibles…
};