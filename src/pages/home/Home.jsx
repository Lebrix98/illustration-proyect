import React from "react";
import { About, Footer, Navbar, Proyect } from "./../../components";
import { Banner } from "../../atoms";
import "./styles.css";

export const Home = () => {
  return (
    <div className="grid_container">
      <header>
        <Navbar />
        <section id="0">
          <Banner />
        </section>
      </header>
      <main>
        <section id="1">
          <About />
        </section>
        <section id="2">
          <Proyect />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
