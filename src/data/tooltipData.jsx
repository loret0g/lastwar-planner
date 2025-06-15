import React from "react";
import infoIcon from "../assets/help.png";
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
