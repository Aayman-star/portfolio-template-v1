"use client";
import { Menu, X, SunMedium, MoonStar } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [navBar, setNavBar] = useState(false);
  const navLinks = [
    "Home",
    "Experience",
    "Qualification",
    "Achievements",
    "Skills",
  ];
  return (
    <div className="w-full p-4 border-b-2 border-slate-50">
      <div className="flex items-center justify-between">
        <h1 className={`text-xl font-semibold ${navBar ? "hidden" : "block"}`}>
          Kanza Khalid
        </h1>
        <div className="flex items-center gap-2">
          {darkMode ? (
            <MoonStar
              onClick={() => setDarkMode(false)}
              className="text-slate-50 text-2xl font-bold"
            />
          ) : (
            <SunMedium
              onClick={() => setDarkMode(true)}
              className={`text-slate-50 text-2xl font-bold
              }`}
            />
          )}
          {navBar ? (
            <div className="bg-blue-500 fixed left-0 top-0 w-[100%]  h-screen ">
              <X
                onClick={() => setNavBar(!navBar)}
                className="text-slate-50 text-2xl font-bold absolute top-5 right-5"
              />
              <ul className="bg-green-500  h-screen  p-2 flex flex-col items-center space-y-6  mt-24">
                {navLinks.map((link, index) => (
                  <li className="hover:scale-105 hover:underline">{link}</li>
                ))}
              </ul>
            </div>
          ) : (
            <Menu
              onClick={() => setNavBar(!navBar)}
              className="text-slate-50 text-2xl font-bold"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
