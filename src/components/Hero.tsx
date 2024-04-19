import { Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Poppins } from "next/font/google";
import Image from "next/image";
import badge from "/public/images/badge.png";
import { poppins } from "@/lib/fonts";
const Hero = () => {
  return (
    <div
      className={`w-full min-h-screen p-2 flex flex-col md:max-w-7xl mx-auto md:flex-row items-center justify-between`}>
      <div className="w-full md:w-1/2 md:-mt-10">
        <h1 className="font-bold text-4xl md:text-6xl text-primary">
          Dr.Kanza Khalid
          <span className="font-normal text-xl inline-block text-gray-500 md:text-2xl">
            FCPS Cardiology
          </span>
        </h1>
        <p
          className={`${poppins.className} mt-2 font-normal text-base text-gray-500`}>
          Medical Professional dedicated to providing better care to my patients
          and passionate about improving the health care facilities in Pakistan
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
      {/* This div is for image */}
      <div className="w-full md:w-1/2">
        <Image
          className="mx-auto rounded-full"
          src={badge}
          alt="badge"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Hero;
