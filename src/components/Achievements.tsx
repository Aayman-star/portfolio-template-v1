"use client";
import Image from "next/image";
import img2 from "/public/images/badge.png";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { achievements } from "@/lib/content";
import { poppins } from "@/lib/fonts";

import { inView, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
const Achievements = () => {
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
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };
  return (
    <div
      ref={ref}
      id="Achievements"
      className="w-full min-h-screen p-4 flex flex-col items-center gap-y-4 md:max-w-7xl mx-auto  md:flex-row md:items-center justify between">
      {/* div for the image */}
      <motion.div
        variants={variants}
        animate={controls}
        transition={{ ease: "easeIn", duration: 1, delay: 1 }}
        className="w-full md:basis-2/5 mx-auto">
        <Image
          className="mx-auto md:hidden"
          src={img2}
          alt="Experience"
          width={200}
          height={200}
        />
        <Image
          className="mx-auto hidden md:block"
          src={img2}
          alt="Experience"
          width={300}
          height={300}
        />
      </motion.div>
      {/* div for the text */}
      <motion.div
        variants={variants}
        animate={controls}
        transition={{ ease: "easeIn", duration: 1, delay: 1 }}
        className="w-full p-2 md:basis-3/5">
        <Card>
          <CardHeader>
            {" "}
            <CardTitle className="border-b-[1px] p-2 text-primary">
              Achievements
            </CardTitle>
          </CardHeader>

          <CardContent>
            {achievements.map((item, i) => (
              <ul className="p-2 list-disc list-inside" key={i}>
                <li className={`${poppins.className} text-primary`}>
                  <span className=" text-base font-extralight text-foreground">
                    {" "}
                    {item.title}
                  </span>
                </li>
              </ul>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Achievements;
