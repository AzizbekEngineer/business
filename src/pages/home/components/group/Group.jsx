import React from "react";
import SectionHeader from "../../../../components/section-header/SectionHeader";
import group from "../../../../assets/images/group.svg";
import Code from "../../../../components/code/Code";
import person from "../../../../assets/icons/person.svg";
import bag from "../../../../assets/icons/bag.svg";
import location from "../../../../assets/icons/location.svg";
import like from "../../../../assets/icons/like.svg";
import "./group.scss";

const Group = () => {
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
          <p className="group__desc">
            Biz sizni konsultatsiyamiz asosini tashkil etuvchi iqtidorli
            shaxslar bilan tanishtirishdan g'ururlanamiz, ularning har biri
            o'zining noyob mahorati va boy tajribasini o'zgartiruvchi
            natijalarga olib keladi.
          </p>
        </div>
        <div className="group__content">
          <div className="group__img">
            <img src={group} alt="" />
          </div>
          <Code>
            <div className="group__cards">
              <div className="group__card">
                <div className="group__icon">
                  <img src={person} alt="" />
                </div>
                <h3 className="group__title">Munisa Rizayeva</h3>
              </div>
              <div className="group__card">
                <div className="group__icon">
                  <img src={bag} alt="" />
                </div>
                <h3 className="group__title">Bosh Muharrir</h3>
              </div>
              <div className="group__card">
                <div className="group__icon">
                  <img src={location} alt="" />
                </div>
                <h3 className="group__title">Toshkent, Chilonzor</h3>
              </div>
              <div className="group__card">
                <div className="group__icon">
                  <img src={like} alt="" />
                </div>
                <h3 className="group__title">6 yillik tajriba</h3>
              </div>
            </div>
            <p className="group__desc">
              Doimiy rivojlanib borayotgan biznes landshaftida mustahkam va aniq
              strategiyalar sizning muvaffaqiyat sari yo'l-yo'riq ko'rsatuvchi
              vositadir. Strategic Business Solutions kompaniyasida biz oddiy
              rejalardan tashqari biznes strategiyalarini ishlab chiqishga
              ixtisoslashganmiz. Ular o'sish, innovatsiyalar, yechimlar va bu
              farovonlik uchun mustahkam rejalardir. Strategic Business
              Solutions kompaniyasida.
            </p>
          </Code>
        </div>
      </div>
    </div>
  );
};

export default Group;
