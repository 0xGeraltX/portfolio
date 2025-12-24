"use client";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-6 max-w-5xl mx-auto">
      <h1 className="font-bold text-lg">Geralt | Web3</h1>

      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600"
      >
        {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
