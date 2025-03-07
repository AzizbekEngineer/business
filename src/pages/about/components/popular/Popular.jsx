import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import SectionHeader from "../../../../components/section-header/SectionHeader";
import buildingImage from "../../../../assets/images/popular.svg";
import SectionCard from "../../../../components/section-card/SectionCard";

const Popular = () => {
  return (
    <Box component={"section"} className="container">
      <Stack
        sx={{
          padding: { xs: "20px", sm: "40px", md: "60px" },
          bgcolor: "#F3F6FD",
          border: "1px solid #1351D81A",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 210px" },
            gap: "30px",
            alignItems: "center",
          }}
        >
          <SectionHeader
            subtitle={"KOMPANIYAMIZ"}
            title={
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "28px", md: "32px" },
                  fontWeight: "bold",
                }}
              >
                Nima uchun kompaniyamiz juda mashhur?
              </Typography>
            }
            desc={"Sayohatingizni boshlash uchun bugun biz bilan bog'laning!"}
          />
          <Stack sx={{ textAlign: { xs: "center", sm: "left" } }}>
            <Button
              sx={{
                border: "none",
                borderRadius: "30px",
                background: "#1351D8",
                color: "white",
                padding: "13px 26px",
                fontSize: "13px",
                width: { xs: "100%", sm: "auto" },
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
