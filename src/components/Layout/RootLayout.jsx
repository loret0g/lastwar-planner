import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./RootLayout.module.css";
import ScrollToTop from "./ScrollToTop";

export default function RootLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // ESC para cerrar overlay
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSidebarOpen(false);
    }
    if (isSidebarOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isSidebarOpen]);

  // Cierra overlay si vuelves a escritorio
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const handler = (e) => {
      if (e.matches) setSidebarOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <div className={styles.app}>
      {/* Pasamos onMenuClick para que el Header muestre el botón hamburguesa */}
      <Header onMenuClick={() => setSidebarOpen((o) => !o)} />

      <div className={styles.body}>
        {/* Pasamos isOpen y onClose al Sidebar (overlay móvil) */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main
          className={styles.main}
          onClick={() => isSidebarOpen && setSidebarOpen(false)}
        >
          <ScrollToTop />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
