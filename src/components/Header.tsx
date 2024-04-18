"use client";
import { Menu, X, SunMedium, MoonStar } from "lucide-react";
import { useTheme } from "next-themes";

import { useState } from "react";
const Header = () => {
  const { setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const navLinks = [
    "Home",
    "Experience",
    "Qualification",
    "Achievements",
    "Skills",
  ];
  const handleTheme = () => {
    setDarkMode(!darkMode);
    setTheme(darkMode ? "light" : "dark");
  };
  return (
    <div className="bg-background w-full p-4 ">
      <div className="flex items-center justify-between">
        <h1 className={`text-xl font-bold text-primary`}>Kanza Khalid</h1>
        <div className="flex items-center gap-2">
          {darkMode ? (
            <SunMedium
              onClick={handleTheme}
              className={`text-foreground text-2xl font-bold ${
                navBar ? "hidden" : "block"
              }`}
            />
          ) : (
            <MoonStar
              onClick={handleTheme}
              className={`text-foreground text-2xl font-bold ${
                navBar ? "hidden" : "block"
              }`}
            />
          )}

          {navBar ? (
            <div className="fixed left-0 top-0 w-[100%]   h-screen z-10 ">
              <X
                onClick={() => setNavBar(!navBar)}
                className="text-foreground text-2xl font-bold absolute top-5 right-5"
              />
              <ul className="h-screen  p-2 flex flex-col items-center space-y-6  mt-28">
                {navLinks.map((link, index) => (
                  <li key={index} className="hover:scale-105 hover:underline">
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Menu
              onClick={() => setNavBar(!navBar)}
              className="text-foreground text-2xl font-bold"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
