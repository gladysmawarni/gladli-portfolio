"use client";
import React from "react";
import { leagueSpartan } from "../font/font";
import ModalSection from "./ModalSection";


const ProjectCard = ({title, header, objective, solution, workflow, closing, github }) => {
  return (
    <div>
      {/* <div
        className="h-60 md:h-60 rounded-t-xl relative group "
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full rounded-t-xl bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <ModalSection title={title} header={header} objective={objective} solution={solution} workflow={workflow} closing={closing} github={github}/>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#e89bb0] py-5 px-5">
        <h3 className={`${leagueSpartan.className} text-3xl font-bold mb-2`}>
          {title}
        </h3>
        <p className={`${leagueSpartan.className} text-gray-200 text-lg`}>
          {summary}
        </p>
      </div> */}
      <div>
      <div className="flex justify-between items-center text-white rounded-t-xl rounded-b-xl bg-[#e89bb0] py-3 mb-5">
        <h3 className={`${leagueSpartan.className} text-3xl font-bold ml-10`}>
          {title}
        </h3>
        <div className="pr-10">
          <ModalSection title={title} header={header} objective={objective} solution={solution} workflow={workflow} closing={closing} github={github}/>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default ProjectCard;
