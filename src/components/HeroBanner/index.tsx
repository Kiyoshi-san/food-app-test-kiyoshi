import React from "react";
import style from "./hero-banner.module.css";

const HeroBanner = ({ image }: { image: string }) => {
  return (
    <section className={style.herobannerContainer}>
      <div
        className={style.banner}
        style={{ backgroundImage: `url(${image})` }}
      />
    </section>
  );
};

export default HeroBanner;
