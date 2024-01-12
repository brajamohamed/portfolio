import React from "react";
import style from "./Skills.module.css";
import html from "../../assets/skills/html5.png";
import css from "../../assets/skills/css3.png";
import javascript from "../../assets/skills/javascript.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import react from "../../assets/skills/react.png";
import nodejs from "../../assets/skills/nodejs.png";
import express from "../../assets/skills/express.png";
import mongodb from "../../assets/skills/mongodb_leaf.png";
import mysql from "../../assets/skills/mysql.png";
import git from "../../assets/skills/git.png";
import github from "../../assets/skills/github.png";

const Skills = () => {
  const skillSet = {
    frontend: [
      ["HTML", html],
      ["CSS", css],
      ["JavaScript", javascript],
      ["Bootstrap", bootstrap],
      ["React", react],
    ],
    backend: [
      ["Node JS", nodejs],
      ["Express JS", express],
    ],
    database: [
      ["MongoDB", mongodb],
      ["MySql", mysql],
    ],
  };
  const frontend = skillSet.frontend.map((skill, index) => {
    console.log(skill[0]);
    return (
      <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center">
        <div key={index} className={`p-4 ${style.skill}`}>
          <img src={skill[1]} alt={`${skill[0]} logo`} className={style.logo} />
        </div>
        <span className="mt-2">{skill[0]}</span>
      </div>
    );
  });
  const backend = skillSet.backend.map((skill, index) => {
    console.log(skill[0]);
    return (
      <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center">
        <div key={index} className={`p-4 ${style.skill}`}>
          <img src={skill[1]} alt={`${skill[0]} logo`} className={style.logo} />
        </div>
        <span className="mt-2">{skill[0]}</span>
      </div>
    );
  });
  const db = skillSet.database.map((skill, index) => {
    console.log(skill[0]);
    return (
      <div className="col-lg-2 col-md-3 col-sm-4 d-flex flex-column align-items-center">
        <div key={index} className={`p-4 ${style.skill}`}>
          <img src={skill[1]} alt={`${skill[0]} logo`} className={style.logo} />
        </div>
        <span className="mt-2">{skill[0]}</span>
      </div>
    );
  });
  return (
    <div
      className={`container d-flex flex-column justify-content-center ${style.container}`}
      id="skillSection"
    >
      <h1 className={`text-center ${style.title}`}>Skills</h1>
      <div className="row d-flex border rounded-5 p-3 gap-2 mt-3 mx-1">
        <h5 className="text-center text-danger">Front-end</h5>
        <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
          {frontend}
        </div>
      </div>
      <div className="row d-flex border rounded-5 p-3 gap-2 mt-3 mx-1 ">
        <h5 className="text-center text-danger">Back-end</h5>
        <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
          {backend}
        </div>
      </div>
      <div className="row d-flex border rounded-5 p-3 gap-2 mt-3 mx-1">
        <h5 className="text-center text-danger">Database</h5>
        <div className="d-flex flex-wrap gap-3 justify-content-center align-items-center">
          {db}
        </div>
      </div>
    </div>
  );
};

export default Skills;

{
  /* <img src={html} alt="html logo" />
        <img src={css} alt="html logo" />
        <img src={bootstrap} alt="bootstrap logo" />
        <img src={react} alt="react logo" />
        <img src={nodejs} alt="nodejs logo" />
        <img src={express} alt="express logo" />
        <img src={mongodb} alt="mongodb logo" />
        <img src={mysql} alt="mysql logo" /> */
}
