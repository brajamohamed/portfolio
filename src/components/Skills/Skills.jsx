import style from "./Skills.module.css";

import React from "react";

const Skills = () => {
  return (
    <div className="container">
      <h1 className={`text-center mb-5 ${style.title}`}>Skills</h1>
      <div className="row d-flex justify-content-center">
        <div className="card mb-3 col-lg-4">
          <h4 className={`card-title mt-3 text-center ${style.cardTitle}`}>
            Front End Development
          </h4>
          <div className="card-body">
            <p className={style.cardDesc}>
              As a Front end developer, I'm capable of building responsive and
              scalable websites.
            </p>
          </div>
          <div className="card-footer bg-white">
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <span className={`badge  ${style.badge}`}>HTML5</span>
              <span className={`badge ${style.badge}`}>CSS3</span>
              <span className={`badge ${style.badge}`}>JavaScript</span>
              <span className={`badge ${style.badge}`}>Bootstrap</span>
              <span className={`badge ${style.badge}`}>React</span>
              <span className={`badge ${style.badge}`}>Redux</span>
            </div>
          </div>
        </div>
        <div className="card mb-3 col-lg-4">
          <h4 className={`card-title mt-3 text-center ${style.cardTitle}`}>
            Back End Development
          </h4>
          <div className="card-body">
            <p className={style.cardDesc}>
              As a Back end developer, I'm capable of building fast and
              optimised back-end systems and APIs.
            </p>
          </div>
          <div className="card-footer bg-white">
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <span className={`badge ${style.badge}`}>Express.js</span>
              <span className={`badge ${style.badge}`}>Node.js</span>
            </div>
          </div>
        </div>
        <div className="card mb-3 col-lg-4">
          <h4 className={`card-title mt-3 text-center ${style.cardTitle}`}>
            Database
          </h4>
          <div className="card-body">
            <p className={style.cardDesc}>
              As a database enthusiast, I excel in designing robust and
              efficient SQL and NoSQL database systems.
            </p>
          </div>
          <div className="card-footer bg-white">
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <span className={`badge ${style.badge}`}>MongoDb</span>
              <span className={`badge ${style.badge}`}>MySql</span>
            </div>
          </div>
        </div>
        <div className="card mb-3 col-lg-3">
          <h4 className={`card-title mt-3 text-center ${style.cardTitle}`}>
            Tools
          </h4>
          <div className="card-body">
            <p className={style.cardDesc}>
              As a skilled developer, I leverage a diverse toolkit of
              cutting-edge technologies to streamline development processes and
              enhance project outcomes.
            </p>
          </div>
          <div className="card-footer bg-white">
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <span className={`badge ${style.badge}`}>VS Code</span>
              <span className={`badge ${style.badge}`}>Postman</span>
              <span className={`badge ${style.badge}`}>Git</span>
              <span className={`badge ${style.badge}`}>GitHub</span>
            </div>
          </div>
        </div>
        <div className="card mb-3 col-lg-3">
          <h4 className={`card-title mt-3 text-center ${style.cardTitle}`}>
            3rd Party Libraries
          </h4>
          <div className="card-body">
            <p className={style.cardDesc}>
              As a developer, I use advanced tools to make the development
              process smoother and improve project results. I stay updated on
              the latest technologies to ensure I deliver high-quality and
              up-to-date solutions.
            </p>
          </div>
          <div className="card-footer bg-white">
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <span className={`badge ${style.badge}`}>
                react-beautiful-dnd
              </span>
              <span className={`badge ${style.badge}`}>Swiper.js </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
