import React from "react";
import style from "./Contact.module.css";
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
  const skillSet = [
    ["HTML", html],
    ["CSS", css],
    ["JavaScript", javascript],
    ["Bootstrap", bootstrap],
    ["React", react],
    ["Node JS", nodejs],
    ["Express JS", express],
    ["MongoDB", mongodb],
    ["MySql", mysql],
    ["Git", git],
    ["GitHub", github],
  ];

  const skills = skillSet.map((skill, index) => {
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
      id="newSkillSection"
    >
      <h1 className={`text-center ${style.title}`}>Skills</h1>
      <div className="row d-flex border rounded-5 py-5 gap-2 mt-3 mx-1 justify-content-center">
        {skills}
      </div>
    </div>
  );
};

export default Skills;
