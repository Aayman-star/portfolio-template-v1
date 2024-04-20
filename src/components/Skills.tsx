import Image from "next/image";
import img3 from "/public/images/skill-1.png";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { skills } from "@/lib/content";
import { poppins } from "@/lib/fonts";
const Skills = () => {
  return (
    <div
      id="Skills"
      className="w-full min-h-screen p-2 flex flex-col-reverse items-center  md:max-w-7xl mx-auto md:flex-row md:items-center md:justify between">
      {/* div for the text */}
      <div className="w-full p-2 md:w-1/2">
        <Card>
          <CardHeader>
            {" "}
            <CardTitle className="border-b-[1px] p-2 text-primary">
              Skills
            </CardTitle>
          </CardHeader>

          <CardContent>
            {skills.map((skill, i) => (
              <div className="p-2" key={i}>
                <p className={`${poppins.className} text-base font-extralight`}>
                  {skill.title}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      {/* div for the image */}
      <div className="w-full md:w-1/2 mx-auto">
        <Image
          className="mx-auto mb-10 md:hidden"
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
    </div>
  );
};

export default Skills;
