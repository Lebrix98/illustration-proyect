import React, { useState } from "react";
import { links } from "./links";
import "./styles.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar_container">
        <div className="navbar_content">
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={menuOpen ? "active" : ""}>
            {links.map(({ text, href }, index) => (
              <li key={index}>
                <a href={href} onClick={() => setMenuOpen(false)}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
