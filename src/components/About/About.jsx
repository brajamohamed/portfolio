import style from "./About.module.css";
import profilePic from "../../assets/about/man.jpg";
import React from "react";

const About = () => {
  return (
    <div
      className={`container d-flex flex-column justify-content-center align-items-center gap-5 ${style.container}`}
      id="aboutSection"
    >
      <h1 className={`${style.title}`}>About Me</h1>
      <div className={`row ${style.row}`}>
        <div className="col-lg-6  d-none d-lg-flex justify-content-start align-items-center mb-3">
          <img src={profilePic} alt="about me pic" className={style.pic} />
        </div>
        <div className="col-lg-6">
          <div className={style.description}>
            I'm Raja Mohamed, a passionate MERN stack developer based on
            Pudukkottai, Tamilnadu. <br />
            <br />
            As a MERN stack developer, I bring a comprehensive skill set to the
            table, proficient in MongoDB, Express.js, React, and Node.js. With a
            passion for crafting dynamic and responsive web applications, I
            specialize in seamlessly connecting front-end and back-end
            technologies. My expertise spans the entire development lifecycle,
            from database design to user interface implementation, ensuring that
            each project I undertake is not just functional but also
            user-friendly and scalable. I'm eager to contribute my skills to
            innovative and impactful projects, I thrive in the dynamic world of
            MERN stack development.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
