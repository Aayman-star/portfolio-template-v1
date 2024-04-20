import Image from "next/image";
import img2 from "/public/images/badge.png";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { achievements } from "@/lib/content";
import { poppins } from "@/lib/fonts";
const Achievements = () => {
  return (
    <div
      id="Achievements"
      className="w-full min-h-screen p-2 flex flex-col md:max-w-7xl mx-auto md:flex-row items-center justify between">
      {/* div for the image */}
      <div className="w-full md:w-1/2 mx-auto">
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
      <div className="w-full p-2 md:w-1/2">
        <Card>
          <CardHeader>
            {" "}
            <CardTitle className="border-b-[1px] p-2 text-primary">
              Achievements
            </CardTitle>
          </CardHeader>

          <CardContent>
            {achievements.map((item, i) => (
              <div className="p-2" key={i}>
                <p className={`${poppins.className} text-base font-extralight`}>
                  {item.title}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Achievements;
