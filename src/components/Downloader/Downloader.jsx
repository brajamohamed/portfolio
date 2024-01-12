import React from "react";
import style from "./Downloader.module.css";
import downloader from "../../assets/down-arrow.png";
import { useState } from "react";
const Downloader = () => {
  const [download, setDownload] = useState(false);
  const handleDownload = () => {
    if (download === true) {
      alert("You've already donwloaded it..");
      return;
    }
    const link = document.createElement("a");
    link.href = "../../assets/Resume.pdf";
    link.download = "Raja-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownload(true);
  };
  return (
    <div
      className={`d-flex flex-column align-items-center p-3 ${
        style.container
      } ${download && "bg-success"}`}
      type="button"
      onClick={handleDownload}
    >
      <img src={downloader} alt="download icon" className={style.img} />
      <span className={style.resume}>{download ? "Thanks" : "Resume"}</span>
    </div>
  );
};

export default Downloader;
