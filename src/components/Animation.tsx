"use client";
import React, { FC, useRef } from "react";
import { motion, inView } from "framer-motion";
//import { useInView } from "react-intersection-observer";

const Animation: FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef(null);
  //const isInView = useInView(ref);
  //const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <motion.div
      className="w-full md:max-x-7xl h-screen mx-auto"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 1.5,
      }}>
      {children}
    </motion.div>
  );
};

export default Animation;
