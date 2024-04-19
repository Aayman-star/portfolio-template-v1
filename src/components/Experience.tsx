import Image from "next/image";
import Exp from "/public/images/evaluation.png";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { experience } from "@/lib/content";
import { poppins } from "@/lib/fonts";
const Experience = () => {
  return (
    <div className="w-full min-h-screen p-2 flex flex-col md:max-w-7xl mx-auto md:flex-row items-center justify between">
      {/* div for the image */}
      <div className="w-full md:w-1/2 mx-auto">
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
      <div className="w-full p-2 md:w-1/2">
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
    </div>
  );
};

export default Experience;
