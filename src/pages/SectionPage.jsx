// src/pages/SectionPage.jsx
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import DayTabs from "../components/DayTabs/DayTabs";
import { DAYS } from "../constants/days";
import { SECTION_REGISTRY } from "../sections";

// en→es
const EN2ES = {
  mon: "Lunes",
  tue: "Martes",
  wed: "Miércoles",
  thu: "Jueves",
  fri: "Viernes",
  sat: "Sábado",
  sun: "Domingo",
};
// es→en
const ES2EN = Object.fromEntries(Object.entries(EN2ES).map(([en, es]) => [es, en]));

export default function SectionPage({ sectionKey, usesDays = false }) {
  const entry = SECTION_REGISTRY[sectionKey];
  const [params, setParams] = useSearchParams();

  const dayEs = useMemo(() => {
    if (!usesDays) return null;
    const en = (params.get("day") || "mon").toLowerCase();
    return EN2ES[en] || "Lunes";
  }, [params, usesDays]);

  if (!entry) return <div style={{ padding: 16 }}>Section not found</div>;

  const Comp = entry.Component;
  const compProps = entry.getProps ? entry.getProps({ day: dayEs }) : { day: dayEs };

  return (
    <div className="section">
      <header className="section-header">
        <span className="section-dot" aria-hidden />
        <h1 className="section-title">{sectionKey}</h1>
      </header>

      {usesDays && (
        <DayTabs
          days={DAYS}          // sigue usando tu lista en español
          current={dayEs}
          onSelect={(newDayEs) => {
            const en = (ES2EN[newDayEs] || "mon").toLowerCase();
            setParams({ day: en }, { replace: true });
          }}
        />
      )}

      <Comp {...compProps} />
    </div>
  );
}