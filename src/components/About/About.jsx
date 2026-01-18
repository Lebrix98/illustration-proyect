import React from "react";
import { textAbout } from "./textAbout";
import { iconLeft, iconRight } from "../../assets";
import "./styles.css";

export const About = () => {
  return (
    <>
      <div className="container_about">
        <section className="icon">
          <img src={iconRight} alt="Icono Ilustradora" />
        </section>
        <div className="content_about">
            <h1 className="about_title">{textAbout.TITLE}</h1>
            <div className="about_text">
              <p className="first">{textAbout.FIRST_TEXT}</p>
              <p className="second">{textAbout.SECOND_TEXT}</p>
          </div>
        </div>
        <section className="icon">
          <img src={iconLeft} alt="Icono Ilustradora" />
        </section>
      </div>
    </>
  );
};

export default About;
