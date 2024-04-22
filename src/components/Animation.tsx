"use client";
import React, { FC, useRef } from "react";
import { motion, inView } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Animation: FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef(null);
  //const isInView = useInView(ref);
  //   const [ref, inView] = useInView({ threshold: 1 });
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 1.5,
        delay: 0.5,
      },
    },
  };
  const variants1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 2,
        delay: 0.5,
      },
    },
  };
  return (
    <motion.div
      className="w-full md:max-x-7xl h-screen mx-auto"
      initial="hidden"
      animate="visible"
      whileInView="visible"
      variants={variants1}>
      {children}
    </motion.div>
  );
};

export default Animation;
// transition={{
//       ease: "easeIn",
//       duration: 1.5,
//       delay: 0.5,
//     }}
//  ref = { ref };
