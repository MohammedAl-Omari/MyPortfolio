import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark" || 
           (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });


  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    const newStatus = !isDark;
    setIsDark(newStatus);
    if (newStatus) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      type="button" 
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:ring-2 ring-blue-500 transition-all cursor-pointer active:scale-90"
      style={{ touchAction: 'manipulation' }}
      aria-label="Toggle Dark Mode"
    >
      <span className="w-5 h-5 flex items-center justify-center">
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}