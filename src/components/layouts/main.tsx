import React from "react";
import Hero from "../global/hero";
import { InViewImagesGrid } from "../global/inView";
import { SpotlightBasic } from "../global/Spotlight";

type Props = {};

const Main = (props: Props) => {
  return (
    <div>
      <Hero />
      <InViewImagesGrid />
      <SpotlightBasic />
    </div>
  );
};

export default Main;
