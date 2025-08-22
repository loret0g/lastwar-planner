import { useMemo, useRef } from "react";
import styles from "./DayTabs.module.css";

export default function DayTabs({ days, current, onSelect }) {
  const todayName = new Date()
    .toLocaleDateString("es-ES", { weekday: "long" })
    .toLowerCase();

  const listRef = useRef(null);
  const currentIndex = useMemo(() => days.indexOf(current), [days, current]);

  const onKeyDown = (e) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = (currentIndex + dir + days.length) % days.length;
    onSelect(days[next]);

    // mueve el foco al botón siguiente
    const btns = listRef.current?.querySelectorAll("button");
    btns?.[next]?.focus({ preventScroll: true });
    // asegúrate de que se vea
    btns?.[next]?.scrollIntoView({ inline: "nearest", behavior: "smooth" });
  };

  return (
    <div
      className={styles.tabs}
      role="tablist"
      aria-label="Selecciona un día"
      ref={listRef}
      onKeyDown={onKeyDown}
    >
      <div className={styles.edgeLeft} aria-hidden />
      {days.map((day) => {
        const isActive = day === current;
        const isToday = day.toLowerCase() === todayName;
        return (
          <button
            key={day}
            onClick={() => onSelect(day)}
            role="tab"
            aria-selected={isActive}
            className={[
              styles.tab,
              isToday ? styles.today : "",
              isActive ? styles.active : "",
            ].join(" ")}
            title={isToday ? `${day} (hoy)` : day}
          >
            {day}
          </button>
        );
      })}
      <div className={styles.edgeRight} aria-hidden />
    </div>
  );
}