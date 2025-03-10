import { Box, Grid2, Stack } from "@mui/material";
import React from "react";
import SectionHeader from "../../../../components/section-header/SectionHeader";
import "./specialization.scss";
import strategy from "../../../../assets/icons/strategy.svg";
import agensy from "../../../../assets/icons/agensy.svg";
import optimization from "../../../../assets/icons/optimization.svg";
import analysis from "../../../../assets/icons/analysis.svg";
import specialization from "../../../../assets/images/specialization.svg";
import Code from "../../../../components/code/Code";
import NorthEastIcon from "@mui/icons-material/NorthEast";

const Specialization = () => {
  return (
    <Box
      component={"section"}
      className="container"
      sx={{
        padding: "40px 0 0",
      }}
    >
      <Stack
        padding={"60px"}
        bgcolor={"#F3F6FD"}
        border={"1px solid #1351D81A"}
        borderRadius={"10px"}
        sx={{
          "@media (max-width: 640px)": {
            padding: "40px 30px",
          },
        }}
      >
        <SectionHeader
          subtitle={"IXTISOSLASHTIRISH"}
          title={"Bizning kompaniyamiz siz uchun nima qilishi kerak"}
        />
        <Box className="specialization">
          <div className="specialization__cards">
            <div className="specialization__card">
              <div className="specialization__icon">
                <img src={strategy} alt="" />
              </div>
              <span>Business strategy</span>
            </div>
            <div className="specialization__card">
              <div className="specialization__icon">
                <img src={agensy} alt="" />
              </div>
              <span>Marketing agensy</span>
            </div>
            <div className="specialization__card">
              <div className="specialization__icon">
                <img src={optimization} alt="" />
              </div>
              <span>Process Optimization</span>
            </div>
            <div className="specialization__card">
              <div className="specialization__icon">
                <img src={analysis} alt="" />
              </div>
              <span>Marketing Analysis</span>
            </div>
            <div className="specialization__card">
              <div className="specialization__icon">
                <img src={optimization} alt="" />
              </div>
              <span>Process Optimization</span>
            </div>
            <div className="specialization__card">
              <div className="specialization__icon">
                <img src={analysis} alt="" />
              </div>
              <span>Marketing Analysis</span>
            </div>
          </div>
          <div className="specialization__box">
            <div className="specialization__left">
              <img src={specialization} alt="" />
            </div>
            <Code>
              <div className="specialization__info">
                <div className="specialization__info__icon">
                  <img src={analysis} alt="" />
                </div>
                <span>Marketing Analysis</span>
              </div>
              <p className="specialization__desc">
                Doimiy rivojlanib borayotgan biznes landshaftida mustahkam va
                aniq strategiyalar sizning muvaffaqiyat sari yo'l-yo'riq
                ko'rsatuvchi vositadir. Strategic Business Solutions
                kompaniyasida biz oddiy rejalardan tashqari biznes
                strategiyalarini ishlab chiqishga ixtisoslashganmiz.
                <br />
                Ular o'sish, innovatsiyalar, yechimlar va bu farovonlik uchun
                mustahkam rejalardir.
              </p>
              <button className="specialization__btn">
                <NorthEastIcon />
              </button>
            </Code>
          </div>
        </Box>
      </Stack>
    </Box>
  );
};

export default Specialization;
