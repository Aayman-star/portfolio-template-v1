"use client";
import { Menu, X, SunMedium, MoonStar } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
const Header = () => {
  const { theme, setTheme } = useTheme();

  const [navBar, setNavBar] = useState(false);
  const navLinks = [
    "Home",
    "Experience",
    "Qualification",
    "Achievements",
    "Skills",
  ];

  return (
    <nav className="bg-background w-full p-4 z-10 sticky md:max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <h1
          className={`text-2xl font-extrabold text-primary ${
            navBar && "z-10"
          }`}>
          Kanza Khalid
        </h1>
        <div className={`flex items-center justify-between`}>
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="ghost"
            size="sm"
            className={`${navBar ? "hidden" : "block"}`}>
            {theme === "dark" ? <SunMedium /> : <MoonStar />}
          </Button>

          {navBar ? (
            <div className="fixed left-0 top-0  w-[100%]  min-h-screen bg-background">
              <X
                onClick={() => setNavBar(!navBar)}
                className="text-foreground text-2xl font-bold absolute top-5 right-5"
              />

              <ul className="w-full h-screen  z-10 overflow-x-hidden  p-2 flex flex-col items-center space-y-6  mt-28">
                {navLinks.map((link, index) => (
                  <Link href="#" key={index}>
                    <li
                      key={index}
                      className="hover:scale-110 hover:underline hover:text-primary">
                      {link.toUpperCase()}
                    </li>
                  </Link>
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
    </nav>
  );
};

export default Header;
