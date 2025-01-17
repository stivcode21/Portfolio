"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Crear el contexto
const ThemeContext = createContext();

// Proveedor del contexto
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Lee el tema desde localStorage o usa el modo oscuro por defecto
    return localStorage.getItem("theme") === "light";
  });

  const toggleTheme = () => {
    setIsDarkMode((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("theme", newTheme ? "light" : "dark");
      return newTheme;
    });
  };

  useEffect(() => {
    document.documentElement.className = isDarkMode
      ? "bg-light-bg text-light-text"
      : "bg-dark-bg text-dark-text";
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personalizado para usar el contexto fácilmente
export const useTheme = () => useContext(ThemeContext);
