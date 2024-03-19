import React from "react";
import ExperienceCard from "./ExperienceCard";
import { DMserif } from "../font/font";
import { experienceData } from "../utilities";



const ExperienceSection = () => {
  return (
    <section id= "experience">
    <main className="bg-[#e66d8de2] py-20 place-self-center text-center">
      <h1 className="text-[#ebd0b9] text-5xl md:text-7xl lg:text-9xl pb-10">
        <span className={DMserif.className}>Experience</span>
      </h1>

      {experienceData.map((exp) => (
        <ExperienceCard
          key={exp.id}
          title={exp.title}
          place={exp.place}
          year={exp.year}
          description={exp.description}
          link={
            exp.link ? (
              <p className="bellabooFont text-xl text-[#e66d8de2]">
                <a href={exp.link} className="hover:text-[#e89bb0]">
                  link
                </a>
              </p>
            ) : (
              <p> </p>
            )
          }
          skills={exp.skills}
        />
      ))}
    </main>
    </section>
  );
};

export default ExperienceSection;
