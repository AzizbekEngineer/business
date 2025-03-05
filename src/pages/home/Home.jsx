import React from "react";
import Hero from "./components/hero/Hero";
import Concepts from "../../components/concepts/Concepts";
import SectionHeader from "../../components/section-header/SectionHeader";
import Specialization from "./components/specialization/Specialization";
import img1 from "../../assets/images/concepts1.png";
import img2 from "../../assets/images/concepts2.png";
import img3 from "../../assets/images/concepts3.png";
import { Box, Stack } from "@mui/material";
import Contact from "../../components/contact/Contact";
import Partner from "./components/partner/Partner";
import Service from "./components/service/Service";
import Opportunities from "./components/opportunities/Opportunities";

const fakeData = [
  {
    id: 1,
    date: "Sep 16, 2024",
    category: "Forex",
    title:
      "Birja bozorlari bugun texnologik aktsiyalar bilan aralash notada ochildi",
    description:
      "Bizning sayohatimiz aniq tasavvurga asoslangan - sanoatni shakllantiradigan va hayotni boyitadigan o'zgartiruvchi yechimlarning boshida bo'lish. Bu qarash bizning asosiy qadriyatlarimiz: mukammallik, innovatsiya, halollik va hamkorlikda chuqur ildiz otgan.",
    image: img1, // Rasmlar uchun relative yo‘l
  },
  {
    id: 2,
    date: "Sep 16, 2024",
    category: "#sayohat",
    title: "Avtomobil sanoati elektr transportda o‘zgaruvchan yo‘lni boshladi",
    description:
      "Bizning sayohatimiz aniq tasavvurga asoslangan - sanoatni shakllantiradigan va hayotni boyitadigan o'zgartiruvchi yechimlarning boshida bo'lish. Bu qarash bizning asosiy qadriyatlarimiz: mukammallik, innovatsiya, halollik va hamkorlikda chuqur ildiz otgan.",
    image: img2,
  },
  {
    id: 3,
    date: "Sep 16, 2024",
    category: "#simply_lifestyle",
    title:
      "Sog'liqni saqlash sektori bemorlarni masofadan turib kuzatishga moslashmoqda",
    description:
      "Bizning sayohatimiz aniq tasavvurga asoslangan - sanoatni shakllantiradigan va hayotni boyitadigan o'zgartiruvchi yechimlarning boshida bo'lish. Bu qarash bizning asosiy qadriyatlarimiz: mukammallik, innovatsiya, halollik va hamkorlikda chuqur ildiz otgan.",
    image: img3,
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <Specialization />
      <Partner />
      <Service />
      <Opportunities />
      <Stack gap={"50px"} className="container">
        <SectionHeader
          subtitle={"KUNLIK YANGILIKLAR"}
          title={"Kundalik tushunchalar haqida ko'proq o'qing"}
          desc={
            "Axborot shakllanayotgan tez sur'atda dunyoda bizning kundalik yangiliklar xizmatimiz so'nggi o'zgarishlardan xabardor bo'lishdir"
          }
        />
        <Concepts data={fakeData} />
        <Contact />
      </Stack>
    </div>
  );
};

export default Home;
