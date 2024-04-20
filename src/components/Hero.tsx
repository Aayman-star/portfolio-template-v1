"use client";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import dp from "/public/images/place-holder.jpg";
import { poppins } from "@/lib/fonts";
import { useTheme } from "next-themes";
const Hero = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={`w-full min-h-screen p-2 flex flex-col items-center md:max-w-7xl mx-auto md:flex-row md:items-center justify-between`}>
      {/* This div is for image */}
      <div className="w-full md:w-1/2">
        <Image
          className="mx-auto rounded-full shadow-2xl"
          src={dp}
          alt="badge"
          width={325}
          height={325}
        />
      </div>
      <div className="w-full md:w-1/2 md:-mt-10">
        <h1 className="font-bold text-4xl md:text-6xl text-primary">
          Dr.Kanza Khalid
          <span
            className={`font-normal text-xl inline-block  ${
              theme == "dark" ? "text-gray-300" : "text-gray-500"
            } md:text-2xl`}>
            FCPS Cardiology
          </span>
        </h1>
        <p
          className={`${poppins.className} mt-2 font-normal text-base ${
            theme == "dark" ? "text-gray-300" : "text-gray-500"
          }`}>
          Medical Professional dedicated to providing better care to my patients
          and passionate about improving the health care facilities in Pakistan.
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
  );
};

export default Hero;
