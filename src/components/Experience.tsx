"use client";
import Image from "next/image";
import Exp from "/public/images/evaluation.png";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { experience } from "@/lib/content";
import { poppins } from "@/lib/fonts";
import Animation from "./Animation";
import { useInView } from "react-intersection-observer";
import { inView, motion } from "framer-motion";
const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <motion.div
      ref={ref}
      id="Experience"
      className="w-full min-h-screen p-4 mt-10 flex flex-col items-center gap-y-4 md:max-w-7xl mx-auto md:flex-row md:items-center0 justify between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 1,
        delay: 0.5,
      }}>
      {/* div for the image */}

      <div className="w-full  md:basis-2/5 mx-auto">
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
          width={300}
          height={300}
        />
      </div>

      {/* div for the text */}
      <div className="w-full p-2 md:basis-3/5">
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
      </div>
    </motion.div>
  );
};

export default Experience;
