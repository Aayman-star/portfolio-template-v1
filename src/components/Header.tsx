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
    <nav className="backdrop-blur     w-full p-4   md:max-w-7xl md:mx-auto md:fixed top-0 left-[100px] border-b-[1px] md:p-6">
      <div className="flex items-center justify-between">
        <Link href={"/"} className={`${navBar && "z-10"}`}>
          <h4
            className={`text-3xl font-extrabold text-primary ${
              navBar && "z-10"
            }`}>
            Kanza Khalid
          </h4>
        </Link>

        {/* menu for mobile */}
        <div className={`flex items-center justify-between md:hidden`}>
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="ghost"
            size="sm"
            className={`${navBar ? "hidden" : "block"}`}>
            {theme === "dark" ? (
              <SunMedium className="text-slate-200" />
            ) : (
              <MoonStar className="text-slate-500" />
            )}
          </Button>

          {navBar ? (
            <div className="fixed left-0 top-0  w-[100%]  min-h-screen bg-background">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setNavBar(!navBar)}>
                {" "}
                <X className="text-foreground text-2xl font-bold absolute top-5 right-5" />
              </Button>

              <ul className="w-full h-screen  z-10 overflow-x-hidden  p-2 flex flex-col items-center space-y-6  mt-28">
                {navLinks.map((link, index) => (
                  <a
                    href={`#${link}`}
                    key={index}
                    className="hover:scale-110 hover:underline hover:text-primary">
                    <li key={index} onClick={() => setNavBar(!navBar)}>
                      {link.toUpperCase()}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setNavBar(!navBar)}>
              <Menu
                className={`${
                  theme == "dark" ? "text-slate-200" : "text-slate-700"
                } text-2xl font-bold`}
              />
            </Button>
          )}
        </div>
        {/* Menu for medium screen and up */}
        <div className="hidden md:z-10 md:flex items-center justify-between">
          <ul className="flex items-center justify-between">
            {navLinks.map((link, index) => (
              <Button
                key={index}
                variant="link"
                className={`${
                  theme == "light" ? "text-gray-500" : "text-gray-300"
                }`}>
                <a href={`#${link}`} key={index}>
                  {" "}
                  <li className="m-2 text-base z-10" key={index}>
                    {link}
                  </li>
                </a>
              </Button>
            ))}
          </ul>
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="ghost"
            size="sm"
            className={`${navBar ? "hidden" : "block"}`}>
            {theme === "dark" ? (
              <SunMedium className="text-slate-200" />
            ) : (
              <MoonStar className="text-slate-500" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
