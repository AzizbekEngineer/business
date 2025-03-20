import React, { useState, useEffect } from "react";
import SectionHeader from "../../../../components/section-header/SectionHeader";
import group from "../../../../assets/images/group.svg";
import picgroup1 from "../../../../assets/images/picgroup1.jfif";
import picgroup2 from "../../../../assets/images/picgroup2.jfif";
import picgroup3 from "../../../../assets/images/picgroup3.jfif";
import picgroup4 from "../../../../assets/images/picgroup4.jfif";
import Code from "../../../../components/code/Code";
import person from "../../../../assets/icons/person.svg";
import bag from "../../../../assets/icons/bag.svg";
import location from "../../../../assets/icons/location.svg";
import like from "../../../../assets/icons/like.svg";
import "./group.scss";

const teamData = [
  {
    id: 1,
    name: "Shodiyorkhon Abdivoyitov",
    img: picgroup1,
    position: "Director of Improve",
    location: "Toshkent, Chilonzor",
    experience: "6 yillik tajriba",
  },
  {
    id: 2,
    name: "Fakhriyor Begmurodov",
    img: picgroup2,
    position: "Director of Improve Bulungur",
    location: "Samarqand, Jomboy",
    experience: "8 yillik tajriba",
  },
  {
    id: 3,
    name: "Sanjar Narzullayev Botir ogli",
    img: picgroup3,
    position: "Director of Improve Okdaryo",
    location: "Farg‘ona, Marg‘ilon",
    experience: "5 yillik tajriba",
  },
  {
    id: 4,
    name: "Doston Ismoilov Baxtiyor ogli",
    img: picgroup4,
    position: "Manager of Startup Center",
    location: "Namangan, Chortoq",
    experience: "10 yillik tajriba",
  },
];

const Group = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length);
    }, 3000); // 3 soniyada ma'lumot almashadi

    return () => clearInterval(interval);
  }, []);

  const currentMember = teamData[currentIndex];

  return (
    <div className="group">
      <div className="container">
        <div className="group__top">
          <SectionHeader
            subtitle={"BIZNING JAMOA"}
            title={
              "Bizning jamoamiz jahon darajasidagi mutaxassislardan iborat"
            }
          />
          <p className="group__top__desc">
            Biz sizni konsultatsiyamiz asosini tashkil etuvchi iqtidorli
            shaxslar bilan tanishtirishdan g'ururlanamiz, ularning har biri
            o'zining noyob mahorati va boy tajribasini o'zgartiruvchi
            natijalarga olib keladi.
          </p>
        </div>
        <div className="group__content">
          <div className="group__img">
            <img src={currentMember.img} alt={currentMember.name} />
          </div>
          <Code>
            <div className="group__cards">
              <div className="group__card">
                <div className="group__icon">
                  <img src={person} alt="person icon" />
                </div>
                <h3 className="group__title">{currentMember.name}</h3>
              </div>
              <div className="group__card">
                <div className="group__icon">
                  <img src={bag} alt="bag icon" />
                </div>
                <h3 className="group__title">{currentMember.position}</h3>
              </div>
              <div className="group__card">
                <div className="group__icon">
                  <img src={location} alt="location icon" />
                </div>
                <h3 className="group__title">{currentMember.location}</h3>
              </div>
              <div className="group__card">
                <div className="group__icon">
                  <img src={like} alt="like icon" />
                </div>
                <h3 className="group__title">{currentMember.experience}</h3>
              </div>
            </div>
            <p className="group__desc">
              Doimiy rivojlanib borayotgan biznes landshaftida mustahkam va aniq
              strategiyalar sizning muvaffaqiyat sari yo'l-yo'riq ko'rsatuvchi
              vositadir. Strategic Business Solutions kompaniyasida biz oddiy
              rejalardan tashqari biznes strategiyalarini ishlab chiqishga
              ixtisoslashganmiz. Ular o'sish, innovatsiyalar, yechimlar va bu
              farovonlik uchun mustahkam rejalardir.
            </p>
          </Code>
        </div>
      </div>
    </div>
  );
};

export default Group;
