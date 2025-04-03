import { useEffect, useState } from "react";
import Switch from "react-switch";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <Switch
      onChange={() => setIsDark(!isDark)}
      checked={isDark}
      offColor="#e5e7eb" // Soft gray for light mode
      onColor="#222" // Dark gray to stay visible in dark mode
      uncheckedIcon={<div className="pl-1">☀️</div>}
      checkedIcon={<div className="pl-1">🌙</div>}
      className="outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-shadow" // Added focus ring
    />
  );
}
