import React from "react";
import { textFooter } from "./textFooter";
import "./styles.css";

export const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_content">
          <p>{textFooter.TITLE}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
