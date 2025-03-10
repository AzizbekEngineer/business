import React, { useState } from "react";
import accordion from "../../../assets/icons/accordion.svg";
import "./accordion.scss";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const panels = [
    {
      title: "Sizning kompaniyangiz nima beradi?",
      content:
        "Can you assist with recovery planning? Yes, we provide IT training tailored to your business needs. Our training programs cover various IT aspects, including high-end software usage, cybersecurity, and more.",
    },
    {
      title: "Sizning kompaniyangiz nima beradi?",
      content: "Boshqa xizmatlar yoki ma'lumotlar bu yerda bo'lishi mumkin.",
    },
    {
      title: "Sizning kompaniyangiz nima beradi?",
      content: "Uchinchi panel uchun kontent.",
    },
    {
      title: "Sizning kompaniyangiz nima beradi?",
      content: "To'rtinchi panel uchun kontent.",
    },
    {
      title: "Sizning kompaniyangiz nima beradi?",
      content: "Beshinchi panel uchun kontent.",
    },
    {
      title: "Sizning kompaniyangiz nima beradi?",
      content: "Uchinchi panel uchun kontent.",
    },
    {
      title: "Sizning kompaniyangiz nima beradi?",
      content: "To'rtinchi panel uchun kontent.",
    },
    {
      title: "Sizning kompaniyangiz nima beradi?",
      content: "Beshinchi panel uchun kontent.",
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      <div className="accordion__cards">
        {panels.map((panel, index) => (
          <div className="accordion__card" key={index}>
            <div
              className={`accordion-header ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <div className="accordion__icon">
                <img src={accordion} alt="" />
              </div>
              <h3> {panel.title}</h3>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">{panel.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
