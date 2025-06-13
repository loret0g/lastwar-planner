import React from "react";
// import modalStyles from "../components/Modal/Modal.module.css";
import infoIcon from "../assets/info.png";
import RadarTooltip from '../components/ToolTips/RadarToolTip'

export const tooltipData = {
  radar: {
    icon: <img src={infoIcon} alt="Info" />,
    brief:
      "Es importante que el contador no llegue al límite o se perderán tareas.",
    details: (
      <RadarTooltip />
    ),
  },

  //! …otros tooltips posibles…
};
