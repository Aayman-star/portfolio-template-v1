"use client";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import dp from "/public/images/place-holder.jpg";
import { poppins } from "@/lib/fonts";
import { useTheme } from "next-themes";
import { Title, Subtitle, AboutText, contactLinks } from "@/lib/content";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Layout from "./Layout";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  /**This stuff is for animation */
  const ref = useRef(null);
  const isInView = useInView(ref);

  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("show");
      console.log("First div in view");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <Layout>
      <div
        ref={ref}
        id="Home"
        className={`w-full py-[5.5rem] md:py-0 h-auto md:min-h-screen   flex flex-col items-center justify-center md:max-w-7xl mx-auto md:flex-row md:items-center md:justify-between`}>
        {/* This div is for image */}

        <motion.div
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
          className="w-full  md:p-0 basis-1/2  md:basis-1/2">
          <Image
            className="mx-auto rounded-full shadow-2xl"
            src={dp}
            alt="badge"
            width={325}
            height={325}
          />
        </motion.div>

        <motion.div
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
          className="w-full p-4 md:w-1/2 md:-mt-10">
          <h1 className="font-bold text-[40px] md:text-6xl text-primary">
            {Title}
            <span
              className={`font-normal text-xl block px-2 md:px-4 ${
                theme == "dark" ? "text-gray-300" : "text-gray-700"
              } md:text-2xl`}>
              {Subtitle}
            </span>
          </h1>
          <p
            className={`${
              poppins.className
            } mt-2 px-2 md:px-4 font-normal text-base ${
              theme == "dark" ? "text-gray-300" : "text-gray-700"
            }`}>
            <TypeAnimation
              sequence={[AboutText, 500]}
              speed={70}
              wrapper="span"
              cursor={false}
              repeat={0}></TypeAnimation>
          </p>
          <div className="mt-2 px-2 md:px-4 flex items-center space-x-2 md:space-x-4 text-primary md:mt-6">
            <Button variant="secondary" className="text-primary">
              {" "}
              <a
                href={contactLinks[1].linkedin}
                target="_blank"
                rel="noopener noreferrer">
                <Linkedin className="hover:text-primary" />
              </a>
            </Button>
            <Button className="">
              <a
                href={contactLinks[0].email}
                target="_blank"
                rel="noopener noreferrer">
                <Mail />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Hero;
