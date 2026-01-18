import React from "react";
import "./styles.css";
import { textProyect } from "./textProyect";

export const Proyect = () => {
  return (
    <>
      <div className="container_proyect">
        <div className="content_proyect">
          <h1 className="proyect_title">{textProyect.TITLE}</h1>
        </div>
      </div>
    </>
  );
};

export default Proyect;
