import { Box, Typography } from "@mui/material";
import React from "react";

const SectionHeader = ({
  subtitle,
  title,
  desc,
  titleColor,
  titleAlign,
  descColor,
}) => {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "12px",
          lineHeight: "14.4px",
          letterSpacing: "3px",
          color: "#1351D8",
          textAlign: `${titleAlign ? titleAlign : "start"}`,

          "@media (max-width: 300px)": {
            fontSize: "10px",
            lineHeight: "12px",
            letterSpacing: "2px",
          },
        }}
      >
        {subtitle && subtitle}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Yantramanav",
          fontWeight: 500,
          fontSize: "45px",
          lineHeight: "42px",
          letterSpacing: "0px",
          color: `${titleColor ? titleColor : "#212529"}`,
          mt: "14px",
          mb: "16px",
          textAlign: `${titleAlign ? titleAlign : "start"}`,
          "@media (max-width: 650px)": {
            fontSize: "32px",
            lineHeight: "42px",
          },
          "@media (max-width: 420px)": {
            fontSize: "24px",
            lineHeight: "30px",
          },
        }}
      >
        {title && title}
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "21px",
          color: `${descColor ? descColor : "#1C1C1CB2"}`,
        }}
      >
        {desc && desc}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
