"use client";
import Image from "next/image";
import Exp from "/public/images/evaluation.png";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { experience } from "@/lib/content";
import { poppins } from "@/lib/fonts";
import { useRef, useEffect } from "react";

import { inView, motion, useInView, useAnimation } from "framer-motion";
import Layout from "./Layout";
const Experience = () => {
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
        id="Experience"
        className="w-full h-auto md:min-h-screen p-4 md:p-0 md:px-[5rem] mt-10 flex flex-col items-center gap-y-4 md:max-w-7xl mx-auto md:flex-row md:items-center justify-between">
        {/* div for the image */}

        <motion.div
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
          className="w-full  md:basis-2/5 mx-auto">
          <Image
            className="mx-auto md:hidden"
            src={Exp}
            alt="Experience"
            width={200}
            height={200}
          />
          <Image
            className="mx-auto hidden md:block"
            src={Exp}
            alt="Experience"
            width={250}
            height={250}
          />
        </motion.div>

        {/* div for the text */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
          className="w-full p-2 md:basis-3/5">
          <Card>
            <CardHeader>
              {" "}
              <CardTitle className="border-b-[1px] p-2 text-primary">
                Experience
              </CardTitle>
            </CardHeader>

            <CardContent>
              {experience.map((exp, i) => (
                <div className="p-2" key={i}>
                  <h3 className="font-semibold text-xl">
                    {exp.institute}--
                    <span
                      className={`${poppins.className} text-base italic font-extralight`}>
                      {exp.position}
                    </span>
                  </h3>
                  <p
                    className={`${poppins.className} text-base italic font-extralight`}>
                    {exp.duration}
                  </p>
                  <p
                    className={`${poppins.className} text-base italic font-extralight`}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Experience;

// initial={{ opacity: 0 }}
// animate={{ opacity: 1 }}
// transition={{
//   ease: "easeIn",
//   duration: 1,
//   delay: 0.5,
// }}
