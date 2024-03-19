'use client';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import { NextUIProvider } from "@nextui-org/react";


export default function Home() {
  return (
    <NextUIProvider>
    <main className="flex min-h-screen flex-col bg-[#ebd0b9]">
      <Navbar />
      <div className="container mx-auto px-12 py-20">
        <HeroSection />
      </div>
      <div>
        <ExperienceSection />
      </div>
      <div className="py-20">
      <ProjectsSection />
      </div>
      <div>
      <EmailSection />
      </div>
    </main>
    </NextUIProvider>
  );
}


