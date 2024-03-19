"use client";
import { React, useEffect, useState } from "react";
import anime from "animejs";
import Image from "next/image";
import { leagueSpartan } from "../font/font";

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const Loader = anime.timeline({
      complete: () => finishLoading(),
    });

    Loader.add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
    })
    .add({
        targets: "#logo",
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
    })
    .add({
        targets: "#logo",
        delay: 0,
        scale: 1,
        duration: 500,
        easing: "easeInOutExpo",
    })
    .add({
        targets: "#logo",
        delay: 0,
        scale: 1.25,
        duration: 500,
        easing: "easeInOutExpo",
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className="bg-[#ebd0b9] flex flex-col h-screen items-center justify-center"
      isMounted={isMounted}
    >
      <Image id="logo" src="/images/logo.png" alt="" width={100} height={100} />
      <p className={`${leagueSpartan.className} text-sm text-[#e89bb0]`}>gladys li 2024 portfolio</p>
    </div>
  );
};

export default SplashScreen;
