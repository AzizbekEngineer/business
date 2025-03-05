import React from "react";
import SectionHeader from "../../../../components/section-header/SectionHeader";
import CheckIcon from "@mui/icons-material/Check";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import service1 from "../../../../assets/images/service1.svg";
import service2 from "../../../../assets/images/service2.svg";
import service3 from "../../../../assets/images/service3.svg";
import service4 from "../../../../assets/images/service4.svg";
import service5 from "../../../../assets/images/service5.svg";
import service6 from "../../../../assets/images/service6.svg";

import "./service.scss";

const Service = () => {
  const servicesData = [
    {
      id: 1,
      title: "Market Research",
      image: service1,
      description: "Stay ahead of the curve.In-depth market analysis",
    },
    {
      id: 2,
      title: "Photography",
      image: service2,
      description: "Stay ahead of the curve in-depth market analysis.",
    },
    {
      id: 3,
      title: "Change Management",
      image: service3,
      description: "Stay ahead of the curve in-depth market analysis.",
    },
    {
      id: 4,
      title: "Branding",
      image: service4,
      description: "Stay ahead of the curve in-depth market analysis.",
    },
    {
      id: 5,
      title: "Market Researching",
      image: service5,
      description:
        "Success requires a proactive strategic approach to business development.",
      points: ["Customized Growth", "Market Penetration"],
    },
    {
      id: 6,
      title: "Business Consulting",
      image: service6,
      description:
        "Success requires a proactive strategic approach to business development.",
      points: ["Customized Growth", "Market Penetration"],
    },
  ];
  return (
    <div className="service">
      <div className="container">
        <div className="service__top">
          <SectionHeader
            subtitle={"BIZNING XIZMATLAR"}
            title={"Biz eng yaxshi xizmatlarni taqdim etamiz"}
            desc={
              "Bizning konsalting jarayonimiz sizning joriy infratuzilmangizni, ish oqimlaringizni va og'riqli nuqtalaringizni to'liq baholash bilan boshlanadi."
            }
            titleColor={"#FFFFFF"}
            descColor={"#FFFFFFCC"}
          />
          <button className="service__btn">
            <span>Batafsil ma'lumot</span>
            <NorthEastIcon />
          </button>
        </div>
        <div className="service__cards__top">
          {servicesData.slice(0, 4).map((el) => (
            <div className="service__card__top" key={el.id}>
              <img src={el.image} alt="" />
              <h3 className="service__title">{el.title}</h3>
              <div className="service__card__info">
                <p className="service__card__desc">{el.description}</p>
                <button className="service__card__btn">
                  <NorthEastIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="service__cards__bottom">
          {servicesData.slice(4, 6).map((el) => (
            <div className="service__card__bottom" key={el.id}>
              <img src={el.image} alt="" />
              <div className="service__card__infos">
                <h3 className="service__subtitle">{el.title}</h3>
                <p className="service__card__desc">{el.description}</p>
                <ul className="service__card__items">
                  <li className="service__card__item">
                    <button className="service__card__item__btn">
                      <CheckIcon />
                    </button>
                    <span className="service__card__desc">{el.points[0]}</span>
                  </li>
                  <li className="service__card__item">
                    <button className="service__card__item__btn">
                      <CheckIcon />
                    </button>
                    <span className="service__card__desc">{el.points[1]}</span>
                  </li>
                </ul>
                <button className="service__card__info__btn service__card__btn">
                  <NorthEastIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="service__back"></div>
    </div>
  );
};

export default Service;
