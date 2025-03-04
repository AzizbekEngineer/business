import React from "react";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import img1 from "../../assets/images/concepts1.png";
import img2 from "../../assets/images/concepts2.png";
import img3 from "../../assets/images/concepts3.png";
import "./concepts.scss";

// Ma'lumotlar massivi
const data = [
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
      "So‘g‘liq turmush tarzini moslashtirishda masofadan turib moslashuvchanlikka e’tibor beramiz",
    description:
      "Bizning sayohatimiz aniq tasavvurga asoslangan - sanoatni shakllantiradigan va hayotni boyitadigan o'zgartiruvchi yechimlarning boshida bo'lish. Bu qarash bizning asosiy qadriyatlarimiz: mukammallik, innovatsiya, halollik va hamkorlikda chuqur ildiz otgan.",
    image: img3,
  },
];

const Concepts = () => {
  return (
    <div className="concepts">
      <div className="concepts__cards">
        {data.map((item) => (
          <div key={item.id} className="concepts__card">
            <img src={item.image} alt={item.title} />
            <div className="concepts__date">
              <span>{item.date}</span>
              <span>{item.category}</span>
            </div>
            <h3 className="concepts__title">{item.title}</h3>
            <hr />
            <p className="concepts__desc">{item.description}</p>
            <button className="concepts__btn">
              <NorthEastIcon />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Concepts;
