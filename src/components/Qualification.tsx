import Image from "next/image";
import img1 from "/public/images/diploma.png";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { experience } from "@/lib/content";
import { poppins } from "@/lib/fonts";
import { qualification } from "@/lib/content";
const Qualification = () => {
  return (
    <div
      id="Qualification"
      className="w-full min-h-screen p-4 flex flex-col-reverse items-center gap-y-4 md:max-w-7xl mx-auto md:flex-row md:items-center justify between">
      {/* div for the text */}
      <div className="w-full p-2 md:basis-3/5">
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
      </div>
      {/* div for the image */}
      <div className="w-full  md:basis-2/5 mx-auto">
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
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Qualification;
