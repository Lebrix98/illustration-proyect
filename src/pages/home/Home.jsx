import React from "react";
import { Footer, Navbar } from "./../../components";
import "./styles.css";
import { Banner } from "../../atoms";

export const Home = () => {
  return (
    <div className="grid_container">
      <header>
        <Navbar />
        <section id="0">
          <Banner />
        </section>
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
