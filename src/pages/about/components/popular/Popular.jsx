import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import SectionHeader from "../../../../components/section-header/SectionHeader";
import buildingImage from "../../../../assets/images/popular.svg";
import SectionCard from "../../../../components/section-card/SectionCard";

const Popular = () => {
  return (
    <Box component={"section"} className="container">
      <Stack
        padding={"60px"}
        bgcolor={"#F3F6FD"}
        border={"1px solid #1351D81A"}
        borderRadius={"10px"}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 210px",
            justifyContent: "space-between",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <SectionHeader
            subtitle={"KOMPANYAMIZ"}
            title={"Nima uchun kompaniyamiz juda mashhur?"}
            desc={"Sayohatingizni boshlash uchun bugun biz bilan bog'laning!"}
          />
          <Stack>
            <Button
              sx={{
                border: "none",
                borderRadius: "30px",
                background: "#1351D8",
                color: "white",
                padding: "13px 26px",
                fontSize: "13px",
              }}
            >
              Biz bilan bog’lanish
            </Button>
          </Stack>
        </Box>
        <SectionCard
          desc={
            "Bizning jamoamiz turli sohalardagi eng yaxshi iste'dodlar, professionallar, ekspertlar va vizyonerlardan iborat jamoaviy kuchdir. Mukammallikka intilish bilan bizning mutaxassislarimiz har bir loyihaga boy tajriba va bilim olib keladi. Slack-da biz mukammallikni ta'minlashga sodiqmiz. Kontseptsiyadan boshlab amalga oshirishgacha biz murosaga o'rin qoldirmasdan, sifat va mahoratning eng yuqori standartlarini saqlab qolamiz."
          }
          info1={"Boshqariladigan xizmatlar va mahsulotlar"}
          info2={"Moslashuvchanlik va moslashuvchanlik"}
          info3={"Raqobat ustunligi"}
          buildingImage={buildingImage}
        />
      </Stack>
    </Box>
  );
};

export default Popular;
