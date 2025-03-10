import React, { useEffect } from "react";
import Cards from "./components/cards/Cards";
import Popular from "./components/popular/Popular";
import Specialists from "./components/specialists/Specialists";
import ServiceSection from "../../components/service-section/ServiceSection";
import HelpSection from "../../components/help-section/HelpSection";
import { Box, Typography } from "@mui/material";
import Contact from "../../components/contact/Contact";
import HeroSection from "../../components/hero-section/HeroSection";
import Partner from "../home/components/partner/Partner";

const About = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Box>
      <Box
        component="section"
        className="container"
        sx={{ margin: "100px auto" }}
      >
        <HeroSection
          title={
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "18px", md: "24px", lg: "52px" },
                textAlign: "center",
              }}
            >
              Bizning kompaniyamiz eng yaxshi gorizont texnologik echimlarni
              taqdim etadi
            </Typography>
          }
          subtitle={"Kompaniya"}
          desc={
            "Innovatsiyalarning o'zgaruvchan kuchini va dinamika bilan uzluksiz yechimlarni his eting. Bizning sayohatimiz yechimni yetkazib berish bilan tugamaydi."
          }
        />
      </Box>
      <Cards />
      <Partner />
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
    </Box>
  );
};

export default About;
