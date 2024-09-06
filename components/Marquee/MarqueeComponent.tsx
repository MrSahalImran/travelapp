import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeImages from "./MarqueeImages";

const MarqueeComponent = () => {
  return (
    <section>
      <Marquee>
        <MarqueeImages />
        <MarqueeImages />
      </Marquee>
    </section>
  );
};

export default MarqueeComponent;
