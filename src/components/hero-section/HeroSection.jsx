import { Stack, Typography } from "@mui/material";
import React from "react";

const HeroSection = ({ subtitle, title, desc, titleColor, descColor }) => {
  return (
    <Stack alignItems={"center"} textAlign={"center"}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "14.4px",
          letterSpacing: "35%",
          color: "#1351D8",
          letterSpacing: "1px",
          padding: "10px 20px",
          backgroundColor: "#1351D81A",
          borderRadius: "10px",
        }}
      >
        {subtitle && subtitle}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Yantramanav",
          fontWeight: 500,
          fontSize: "75px",
          lineHeight: "66px",
          color: `${titleColor ? titleColor : "#212529"}`,
          mt: "25px",
          mb: "20px",
        }}
      >
        {title && title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "18px",
          lineHeight: "22px",
          color: `${descColor ? descColor : "#1C1C1CB2"}`,
        }}
      >
        {desc && desc}
      </Typography>
    </Stack>
  );
};

export default HeroSection;
