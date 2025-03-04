import React from "react";
import Hero from "./components/hero/Hero";
import Concepts from "../../components/concepts/Concepts";
import Contact from "../../components/contact/Contact";
import Help from "../../components/help/Help";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Contact /> */}
      <Help />
    </div>
  );
};

export default Home;
