import React from "react";
import Cards from "./components/cards/Cards";
import Popular from "./components/popular/Popular";
import Specialists from "./components/specialists/Specialists";
import ServiceSection from "../../components/service-section/ServiceSection";
import HelpSection from "../../components/help-section/HelpSection";
import { Box } from "@mui/material";
import Contact from "../../components/contact/Contact";

const About = () => {
  return (
    <>
      <Cards />
      <Popular />
      <Specialists />
      <ServiceSection />
      <Box
        component={"section"}
        className="container"
        sx={{ margin: "100px auto" }}
      >
        <HelpSection />
      </Box>
      <Box
        component={"section"}
        className="container"
        sx={{ margin: "100px auto" }}
      >
        <Contact />
      </Box>
    </>
  );
};

export default About;
