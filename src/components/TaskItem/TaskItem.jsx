import React from "react";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { tooltipData } from "../../data/tooltipData";
import styles from "./TaskItem.module.css";

export default function TaskItem({ text, tooltipKey, type = "task" }) {
  // Subtítulo / separador de bloque
  if (type === "section") {
    return (
      <div className={styles.sectionLabel} role="heading" aria-level={3}>
        <span className={styles.sectionIcon} aria-hidden>
          ⚠️
        </span>
        {text}
      </div>
    );
  }

  // Tarea normal con o sin tooltip
  const config = tooltipKey && tooltipData[tooltipKey];
  if (config) {
    const { icon, brief, details } = config;
    return (
      <InfoTooltip icon={icon} brief={brief} details={details}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" className={styles.checkbox} />
          <span>{text}</span>
        </label>
      </InfoTooltip>
    );
  }

  return (
    <label className={styles.checkboxLabel}>
      <input type="checkbox" className={styles.checkbox} />
      <span>{text}</span>
    </label>
  );
}