// src/components/TaskList/TaskItem.jsx
import React from 'react'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import { tooltipData } from '../../data/tooltipData'
import styles from './TaskList.module.css'

export default function TaskItem({ text, tooltipKey }) {
  const config = tooltipKey && tooltipData[tooltipKey]
  if (config) {
    const { icon, brief, details } = config
    return (
      <InfoTooltip icon={icon} brief={brief} details={details}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" className={styles.checkbox} />
          <span>{text}</span>
        </label>
      </InfoTooltip>
    )
  }
  return (
    <label className={styles.checkboxLabel}>
      <input type="checkbox" className={styles.checkbox} />
      <span>{text}</span>
    </label>
  )
}