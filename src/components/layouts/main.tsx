"use client";

import React from "react";
import Hero from "../global/hero";
import { InViewImagesGrid } from "../global/inView";
import SpotlightBasic from "../global/Spotlight";
import { Button } from "../ui/button";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import SpotifyStyleCarousel from "../global/spotify-style-carousel";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

type Props = {};

const Main = (props: Props) => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-5">
      <motion.nav
        initial={{
          top: -200,
          opacity: 0,
          backdropFilter: "blur(0px)", // Start with no blur
          WebkitBackdropFilter: "blur(0px)", // For Safari
        }}
        animate={{
          top: 0,
          opacity: 1,
          backdropFilter: "blur(10px)", // Add blur when visible
          WebkitBackdropFilter: "blur(10px)", // For Safari
        }}
        transition={{
          duration: 0.8, // Adjust the duration of the animation
          ease: "easeOut", // Add a smooth easing effect
        }}
        className="p-5 sticky top-0 px-8 z-10 " // Adjust background for visibility
      >
        <div className="border-blue-500 border-2 p-3 rounded-full flex flex-row w-full justify-between z-10 text-white backdrop-blur-lg items-center">
          <span className="items-center font-bold px-3 h-fit text-xl">
            Fans Fwd
          </span>
          <div className="flex justify-between gap-3 items-center w-1/3">
            <ul className="flex flex-1 justify-around">
              <li onClick={() => router.push("/")}>Home</li>
              <li>Pricing</li>
              <li>Features</li>
              <li>
                <Button
                  className="bg-[#1d4ed8] text-white"
                  onClick={() => router.push("/creator")}
                >
                  Become a Creator
                </Button>
              </li>
            </ul>
            <SignedOut>
              <div className="border-blue-500 border-2 p-3 rounded-full">
                <SignInButton />
              </div>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </motion.nav>
      <Hero />
      <div className="min-h-screen p-5">
        <InViewImagesGrid />
      </div>
      {/* <div className="min-h-screen p-5">
        <SpotlightBasic />
      </div> */}
      <div className="min-h-screen p-5">
        <SpotifyStyleCarousel />
      </div>
    </div>
  );
};

export default Main;
