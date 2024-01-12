import React from "react";
import style from "../navbar/Navbar.module.css";
import { useState } from "react";
import menuiconwhite from "../../assets/navbar/menu.png";
import closeicon from "../../assets/navbar/cancel.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.navContainer}>
      <nav className={style.navbar}>
        <a href="/" className={style.name}>
          Raja Mohamed
        </a>

        <div className={style.menu}>
          <img
            src={open ? closeicon : menuiconwhite}
            alt="nav icon "
            className={style.menubtn}
            onClick={() => setOpen(!open)}
          />
          <ul
            className={`${style.ulist} ${open && style.menuOpen}`}
            onClick={() => setOpen(false)}
          >
            <li>
              <a href="#heroSection">Home</a>
            </li>
            <li>
              <a href="#aboutSection">About</a>
            </li>
            <li>
              <a href="#skillSection">Skills</a>
            </li>
            <li>
              <a href="#projectSection">Projects</a>
            </li>
            <li>
              <a href="#newSkillSection">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
