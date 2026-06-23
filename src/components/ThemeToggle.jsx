import { useEffect, useState } from "react";

function ThemeToggle() {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {

    const savedTheme =
      localStorage.getItem("theme") || "dark";

    document.documentElement.setAttribute(
      "data-theme",
      savedTheme
    );

    setTheme(savedTheme);

  }, []);

  const toggleTheme = () => {

    const newTheme =
      theme === "dark"
        ? "light"
        : "dark";

    document.documentElement.setAttribute(
      "data-theme",
      newTheme
    );

    localStorage.setItem(
      "theme",
      newTheme
    );

    setTheme(newTheme);

  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;