"use client";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import dp from "/public/images/place-holder.jpg";
import { poppins } from "@/lib/fonts";
import { useTheme } from "next-themes";
import { Title, Subtitle, AboutText } from "@/lib/content";
import { TypeAnimation } from "react-type-animation";
import { motion, MotionConfig } from "framer-motion";
import Animation from "./Animation";
const Hero = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Animation>
      <div
        id="Home"
        className={`w-full min-h-screen   flex flex-col items-center justify-center md:max-w-7xl mx-auto md:flex-row md:items-center md:justify-between`}>
        {/* This div is for image */}
        <div className="w-full basis-1/2  md:basis-1/2">
          <Image
            className="mx-auto rounded-full shadow-2xl"
            src={dp}
            alt="badge"
            width={325}
            height={325}
          />
        </div>

        <div className="w-full p-4 md:w-1/2 md:-mt-10">
          <h1 className="font-bold text-[40px] md:text-6xl text-primary">
            {Title}
            <span
              className={`font-normal text-xl block  ${
                theme == "dark" ? "text-gray-300" : "text-gray-700"
              } md:text-2xl`}>
              {Subtitle}
            </span>
          </h1>
          <p
            className={`${poppins.className} mt-2 font-normal text-base ${
              theme == "dark" ? "text-gray-300" : "text-gray-700"
            }`}>
            <TypeAnimation
              sequence={[AboutText, 500]}
              speed={70}
              wrapper="span"
              cursor={false}
              repeat={0}></TypeAnimation>
          </p>
          <div className="mt-2 flex items-center space-x-2 md:space-x-4 text-primary md:mt-6">
            <Button variant="secondary" className="text-primary">
              {" "}
              <Linkedin className="hover:text-primary" />
            </Button>
            <Button className="">
              <Mail />
            </Button>
          </div>
        </div>
      </div>
    </Animation>
  );
};

export default Hero;
