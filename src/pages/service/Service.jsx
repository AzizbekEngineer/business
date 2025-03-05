import { Box } from "@mui/material";
import React from "react";
import HeroSection from "../../components/hero-section/HeroSection";
import buildingImage from "../../assets/images/serviceHero.svg";
import SectionCard from "../../components/section-card/SectionCard";
import Comments from "./components/comments/Comments";
import Consulting from "./components/consulting/Consulting";
import ServiceSection from "../../components/service-section/ServiceSection";
import Contact from "../../components/contact/Contact";

const Service = () => {
  return (
    <Box>
      <Box
        component={"section"}
        className="container"
        sx={{ margin: "100px auto" }}
      >
        <HeroSection
          title={"Sizni eng yaxshi yechimlar va yordam bilan kuchaytiradi"}
          subtitle={"BIZNING TARIFLAR"}
          desc={
            "Joylinks kompaniyasida biz har qanday ehtiyojingizni qondirish uchun ajoyib yechimlar va doimiy yordam taqdim etishga sodiqmiz."
          }
        />
      </Box>
      <Box
        component={"section"}
        className="container"
        sx={{ margin: "100px auto" }}
        padding={"0 60px 60px"}
        bgcolor={"#F3F6FD"}
        border={"1px solid #1351D81A"}
        borderRadius={"10px"}
      >
        <SectionCard
          desc={
            "Bizning jamoamiz turli sohalardagi eng yaxshi iste'dodlar, professionallar, ekspertlar va vizyonerlardan iborat jamoaviy kuchdir. Mukammallikka intilish bilan bizning mutaxassislarimiz har bir loyihaga boy tajriba va bilim olib keladi. Slack-da biz mukammallikni ta'minlashga sodiqmiz. Kontseptsiyadan boshlab amalga oshirishgacha biz murosaga o'rin qoldirmasdan, sifat va mahoratning eng yuqori standartlarini saqlab qolamiz."
          }
          info1={"Boshqariladigan xizmatlar va mahsulotlar"}
          info2={"Moslashuvchanlik va moslashuvchanlik"}
          info3={"Raqobat ustunligi"}
          buildingImage={buildingImage}
        />
      </Box>
      <Comments />
      <Consulting />
      <ServiceSection />
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

export default Service;
