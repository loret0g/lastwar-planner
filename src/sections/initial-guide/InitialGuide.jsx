import { useEffect, useMemo, useState } from "react";
import styles from "./InitialGuide.module.css";

/**
 * Props opcionales:
 *  - onNavigate?: (sectionName: string) => void
 *    Si la pasas desde App/registry, en algunos paneles saldrá “Ver guía”.
 */
export default function InitialGuide({ onNavigate }) {
  return <p>En construcción...</p>;
}