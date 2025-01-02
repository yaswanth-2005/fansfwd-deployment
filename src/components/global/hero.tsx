"use client";
import React, { useEffect, useRef, useState } from "react";
import TypingAnimation from "../ui/typing-animation";
import RINGS from "vanta/dist/vanta.rings.min";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "../ui/badge";

type Props = {};

const Hero = (props: Props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      if (myRef && myRef.current)
        setVantaEffect(
          RINGS({
            el: myRef?.current,
          })
        );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const MotionBadge = motion(Badge);
  return (
    <div className="w-full h-screen bg-black">
      {/* <div ref={myRef} className="w-full absolute h-full -z-10" /> */}
      <div className="h-full w-full p-5 flex-col flex">
        <div className="flex h-full w-full flex-1 justify-center pt-16 flex-col items-center gap-3">
          <MotionBadge className="px-16 py-2 flex items-center justify-center bg-blue-900/40 border-2 rounded-full border-blue-900">
            forward your fans
          </MotionBadge>
          <motion.h1
            className="text-9xl font-bold text-white w-2/3 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="text-blue-700" variants={itemVariants}>
              Streamline
            </motion.span>
            <motion.span variants={itemVariants}>your </motion.span>
            <motion.span variants={itemVariants}>fans.</motion.span>
          </motion.h1>
          <div className="my-auto justify-self-end flex items-center flex-col gap-3">
            <span>Scroll down</span>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: 20 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "2rem",
              }}
            >
              <ArrowDown />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
