"use client"; // Importante en Next.js App Router para componentes interactivos

import { useState, useEffect } from "react";

export default function ThemeToggleButton() {
  const [darkMode, setDarkMode] = useState(false);

  // Al cargar la página, revisamos si el usuario ya tenía un tema guardado
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark" || 
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lectura única del tema guardado al montar, no es una cascada de renders
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Función para alternar entre claro y oscuro
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
      aria-label="Cambiar modo de vista"
    >
      {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
    </button>
  );
}