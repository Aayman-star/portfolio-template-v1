import Image from "next/image";
import img2 from "/public/images/badge.png";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { achievements } from "@/lib/content";
import { poppins } from "@/lib/fonts";
import Animation from "./Animation";
const Achievements = () => {
  return (
    <Animation>
      <div
        id="Achievements"
        className="w-full min-h-screen p-4 flex flex-col items-center gap-y-4 md:max-w-7xl mx-auto  md:flex-row md:items-center justify between">
        {/* div for the image */}
        <div className="w-full md:basis-2/5 mx-auto">
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
        </div>
        {/* div for the text */}
        <div className="w-full p-2 md:basis-3/5">
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
        </div>
      </div>
    </Animation>
  );
};

export default Achievements;
