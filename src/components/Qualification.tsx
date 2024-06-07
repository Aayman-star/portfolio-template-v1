"use client";
import Image from "next/image";
import img1 from "/public/images/diploma.png";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { experience } from "@/lib/content";
import { poppins } from "@/lib/fonts";
import { qualification } from "@/lib/content";
import { inView, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Layout from "./Layout";
const Qualification = () => {
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
        id="Qualification"
        className="w-full h-auto md:min-h-screen p-4 md:p-0 md:px-12 flex flex-col-reverse items-center gap-y-4 md:max-w-7xl mx-auto md:flex-row md:items-center md:justify-center">
        {/* div for the text */}
        <motion.div
          variants={variants}
          animate={controls}
          transition={{ ease: "easeIn", duration: 1, delay: 0.5 }}
          className="w-full p-2 md:basis-3/5">
          <Card>
            <CardHeader>
              {" "}
              <CardTitle className="border-b-[1px] p-2 text-primary">
                Qualification
              </CardTitle>
            </CardHeader>

            <CardContent>
              {qualification.map((item, i) => (
                <div className="p-2" key={i}>
                  <h3 className="font-semibold text-xl">
                    {item.institute}--
                    <span
                      className={`${poppins.className} text-base italic font-extralight`}>
                      {item.degree}
                    </span>
                  </h3>
                  <p
                    className={`${poppins.className} text-base italic font-extralight`}>
                    {item.duration}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
        {/* div for the image */}
        <motion.div
          variants={variants}
          animate={controls}
          transition={{ ease: "easeIn", duration: 1, delay: 0.75 }}
          className="w-full  md:basis-2/5 mx-auto">
          <Image
            className="mx-auto md:hidden"
            src={img1}
            alt="Experience"
            width={200}
            height={200}
          />
          <Image
            className="mx-auto hidden md:block"
            src={img1}
            alt="Experience"
            width={250}
            height={250}
          />
        </motion.div>
      </div>
    </Layout>
  );
};

export default Qualification;
