import { Stack, Typography } from "@mui/material";
import React from "react";

const HeroSection = ({
  subtitle,
  title,
  desc,
  titleColor,
  descColor,
  titleMaxWidth,
  descMaxWidth,
}) => {
  return (
    <Stack alignItems={"center"} textAlign={"center"}>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "10px",
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
          maxWidth: `${titleMaxWidth ? titleMaxWidth : "100%"}`,
          color: `${titleColor ? titleColor : "#212529"}`,
          mt: "25px",
          mb: "20px",
          "@media (max-width: 850px)": {
            fontSize: "45px",
            lineHeight: "50px",
          },
          "@media (max-width: 500px)": {
            fontSize: "28px",
            lineHeight: "35px",
          },
        }}
      >
        {title && title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "18px",
          lineHeight: "22px",
          maxWidth: `${descMaxWidth ? descMaxWidth : "100%"}`,
          color: `${descColor ? descColor : "#1C1C1CB2"}`,
          "@media (max-width: 500px)": {
            fontSize: "16px",
            lineHeight: "18px",
          },
        }}
      >
        {desc && desc}
      </Typography>
    </Stack>
  );
};

export default HeroSection;
