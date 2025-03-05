import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import SectionHeader from "../../../../components/section-header/SectionHeader";
import buildingImage from "../../../../assets/images/popular.svg";

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
        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src={buildingImage}
            alt="Company Building"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Stack spacing={2} sx={{ color: "#333" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "15px",
                color: "#1C1C1CE6",
                lineHeight: "25px",
                fontWeight: "400",
                mb: 2,
              }}
            >
              Bizning jamoamiz turli sohalardagi eng yaxshi ixtiolar,
              professionalar, ekspertlar va vizionerlardan iborat jamoaviy
              kuchdir. Mukammallikka intilish bilan bizning mutaxassislarimiz
              har bir loyiha boy tajriba va bilim keladi. Slack-da biz
              mukammallikni ta‘minlashga sodiqmiz. Kontseptizdan boshlab amalga
              oshirishgacha biz murojaat o‘rin qoldirmasdan, sifat va mahorating
              eng yuqori standartlarini saqlab qolamiz.
            </Typography>
            <Box
              sx={{
                border: "1px solid #D9D9D9DD",
                margin: "30px 0",
              }}
            ></Box>
            <Stack
              sx={{
                color: "#007bff",
                display: "flex",
                gap: "50px",
                flexDirection: "row",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "#1C1C1CE6",
                  fontSize: "15px",
                  fontWeight: "500",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    marginRight: 8,
                    color: "white",
                    width: "15px",
                    height: "15px",
                    background: "#1351D8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    fontSize: "12px",
                  }}
                >
                  ✔
                </span>
                Boshqariladigan xizmatlar va mahsulotlar
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#1C1C1CE6",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    marginRight: 8,
                    color: "white",
                    width: "15px",
                    height: "15px",
                    background: "#1351D8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    fontSize: "12px",
                  }}
                >
                  ✔
                </span>
                Moslashuvchanlik va moslashuvchanlik
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#1C1C1CE6",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    marginRight: 8,
                    color: "white",
                    width: "15px",
                    height: "15px",
                    background: "#1351D8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    fontSize: "12px",
                  }}
                >
                  ✔
                </span>
                Raqobat ustunligi
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Popular;
