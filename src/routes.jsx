import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import SectionPage from "./pages/SectionPage";

function RedirectToToday() {
  const short = ["sun","mon","tue","wed","thu","fri","sat"];
  const today = short[new Date().getDay()];
  return <Navigate to={`/alliance-duel?day=${today}`} replace />;
}

const NotFound = () => <div style={{ padding: 16 }}>Page not found</div>;

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <RedirectToToday /> },
      { path: "alliance-duel",   element: <SectionPage sectionKey="Duelo de alianza" usesDays /> },
      { path: "daily-tasks",     element: <SectionPage sectionKey="Tareas diarias" /> },
      { path: "events",          element: <SectionPage sectionKey="Eventos de Alianza" /> },
      { path: "hq-requirements", element: <SectionPage sectionKey="Requisitos CG" /> },
      { path: "marshall",        element: <SectionPage sectionKey="Marshall" /> },
      { path: "season-1",        element: <SectionPage sectionKey="Temporada 1" /> },
      { path: "initial-guide",   element: <SectionPage sectionKey="Guía inicial" /> },
    ],
  },
]);