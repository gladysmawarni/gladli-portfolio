import React from "react";
import { leagueSpartan } from "../font/font";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

const ExperienceCard = ({ title, place, year, description, link, skills }) => {
  return (
    <div>
      <div className=" max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
        <div class="col-span-1 w-full h-full"></div>
        <div class="relative col-span-1 w-full h-full flex justify-center items-center">
          <div class="h-full w-1 bg-[#ebd0b9]"></div>
          <div class="absolute w-6 h-6 rounded-full bg-[#e89bb0] z-10 text-white text-center"></div>
        </div>
        <div className="col-span-5 w-full h-full pb-5">
          <div className="w-full h-full bg-[#ebd0b9] rounded-md p-3 md:pl-4">
            <h2 className="text-black bellabooFont text-2xl md:text-4xl">
              {title}
            </h2>
            <h3
              className={`${leagueSpartan.className} text-[#e66d8de2] text-xs md:text-base pb-2`}
            >
              {place} <br /> {year}
            </h3>
            <p className="text-gray-600 text-left text-sm md:text-base">
              {description}
            </p>
            {link}

            <h3
              className={`${leagueSpartan.className} text-[#e66d8de2] text-xs md:text-base pb-2 pt-5`}
            >
              Technical Skills Acquired
            </h3>

            <div className="flex flex-wrap gap-2 items-center justify-center">
              {skills.map((skill) => (
                <div key={skill}>
                  <Tooltip
                    content={skill}
                    placement="bottom"
                    className="bg-[#e89bb0] px-3 rounded-full text-sm"
                  >
                    <Image
                      src={`/images/icons/skills/${skill}.png`}
                      alt="skill icon"
                      className="m-auto"
                      width={40}
                      height={40}
                    />
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
