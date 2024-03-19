import React from "react";
import Image from "next/image";
import { DMserif, leagueSpartan } from "../font/font";


const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center pb-5">
          <p
            className={`${leagueSpartan.className} text-[#383432] mb-4 text-2xl lg:pl-8 md:text-2xl lg:text-3xl font-extrabold`}
          >
            Hi, my name is <span className="bellabooFont">Gladys</span><br />
            I automate tasks and create stuff with code
           
          </p>
          
         
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/images/portf.jpeg"
            alt="avatar"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default HeroSection;