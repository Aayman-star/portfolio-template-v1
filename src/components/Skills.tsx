"use client";
import Image from "next/image";
import img3 from "/public/images/skill-1.png";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { skills } from "@/lib/content";
import { poppins } from "@/lib/fonts";
import Animation from "./Animation";
import { useInView } from "react-intersection-observer";
import { inView, motion } from "framer-motion";
const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <motion.div
      ref={ref}
      id="Skills"
      className="w-full min-h-screen -mt-[125px] flex flex-col-reverse items-center gap-y-6 mb-10  md:max-w-7xl mx-auto   md:flex-row md:items-center md:justify between md:mb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeIn",
        duration: 1,
        delay: 0.5,
      }}>
      {/* div for the text */}
      <div className="w-full  p-2 md:basis-3/5">
        <Card>
          <CardHeader>
            {" "}
            <CardTitle className="border-b-[1px] p-2 text-primary">
              Skills
            </CardTitle>
          </CardHeader>

          <CardContent>
            {skills.map((skill, i) => (
              <ul className="p-2 list-inside list-disc" key={i}>
                <li className={`${poppins.className} text-primary`}>
                  <span className="text-base font-extralight text-foreground">
                    {" "}
                    {skill.title}
                  </span>
                </li>
              </ul>
            ))}
          </CardContent>
        </Card>
      </div>
      {/* div for the image */}
      <div className="w-full  md:basis-2/5 mx-auto">
        <Image
          className="mx-auto md:hidden"
          src={img3}
          alt="Experience"
          width={200}
          height={200}
        />
        <Image
          className="mx-auto hidden md:block"
          src={img3}
          alt="Experience"
          width={300}
          height={300}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
