// @ts-ignore

"use client";

import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.rings.min";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <main ref={myRef} className="w-full h-screen"></main>;
}
