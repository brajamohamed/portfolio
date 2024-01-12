import React from "react";
import style from "./Hero.module.css";
import hero from "../../assets/hero/hero.jpg";

const Hero = () => {
  return (
    <section
      className={`container d-flex justify-content-center align-items-center ${style.heroContainer}`}
      id="heroSection"
    >
      <div className="row">
        <div className="col-lg-6 d-flex align-items-center justify-content-lg-end justify-content-center order-lg-2">
          <img src={hero} alt="hero img" className={` ${style.heroImg}`} />
        </div>
        <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center order-lg-1 mt-3">
          <h1 className={`${style.name}`}>Hi, I'm Raja</h1>
          <blockquote className={`${style.sub}`}>
            Full Stack Developer
          </blockquote>
          <p className={`${style.descText}`}>
            As a passionate Full Stack Developer, I have a strong foundation in
            &nbsp;
            <span style={{ color: "red" }}>
              MongoDB, Express.js, React.js, and Node.js.
            </span>
            &nbsp; And I am committed to staying abreast of emerging
            technologies.
          </p>
          <a href="mailto:b.rajamohamed@gmail.com" className={style.contact}>
            Contact me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
