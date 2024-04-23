"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { DMserif } from "../font/font";
import { projectsData } from "../utilities";



const ProjectsSection = () => {
  const [tag, setTag] =useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => 
  project.tag.includes(tag));

  return (
    <section id = "projects">
      <h1 className="text-[#e66d8de2] text-5xl md:text-7xl lg:text-9xl mb-10 place-self-center text-center">
        <span className={DMserif.className}>Projects</span>
      </h1>
      <div className="text-black flex flex-wrap justify-center items-center gap-1 md:gap-3 py-3 md:py-6 ">
        <ProjectTag onCLick={handleTagChange} name="All" isSelected= {tag === "All"} />
        <ProjectTag onCLick={handleTagChange} name="Automation" isSelected= {tag === "Automation"} />
        <ProjectTag onCLick={handleTagChange} name="Visualization" isSelected= {tag === "Visualization"} />

      </div>
      <div className="py-5 px-8 md:px-36 md:py-10">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tags={project.tag}
            header={project.header}
            objective={project.objective}
            solution={project.solution}
            workflow={project.workflow}
            closing={project.closing}
            github={project.github}
          />
        ))}
      </div>
    </section>

  );
};

export default ProjectsSection;
