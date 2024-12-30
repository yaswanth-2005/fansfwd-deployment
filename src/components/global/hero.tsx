"use client";
import React, { useEffect, useRef, useState } from "react";
import TypingAnimation from "../ui/typing-animation";
import RINGS from "vanta/dist/vanta.rings.min";

type Props = {};

const Hero = (props: Props) => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <div>
        <div ref={myRef} className="w-full h-screen absolute -z-50 "></div>
        <div>
          <div className="text-white text-9xl text-center flex items-center justify-center w-full z-index z-10 h-screen font-bold ">
            <h1>From you to Your</h1>
          </div>
          {/* <TypingAnimation className="text-white text-9xl text-center flex items-center justify-center w-full z-index z-10 h-screen">
            Fans.
          </TypingAnimation> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
