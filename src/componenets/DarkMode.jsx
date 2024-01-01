import { useState } from "react";
import { useEffect } from "react";
import darkImg from "../assets/website/dark-mode-button.png";
import lightImg from "../assets/website/light-mode-button.png";
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <div className="relative">
      <img
        onClick={changeTheme}
        src={darkImg}
        alt=""
        className={`max-w-24 duration-300  cursor-pointer relative z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        onClick={changeTheme}
        src={lightImg}
        alt=""
        className="max-w-24 cursor-pointer absolute top-0"
      />
    </div>
  );
};

export default DarkMode;
