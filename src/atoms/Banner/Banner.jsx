import React from "react";
import { imgBanner } from "../../assets";
import { textBanner } from "./text";
import "./styles.css";

export const Banner = () => {
  return (
    <>
      <div className="banner_container">
        <div className="banner_content">
          <img className="banner_img" src={imgBanner} alt="Banner" />

          <div className="banner_text">
            <h1>{textBanner.NAME}</h1>
            <p>{textBanner.PROFESION}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
