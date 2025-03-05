import { Box, Typography } from "@mui/material";
import React from "react";

const SectionHeader = ({ subtitle, title, desc, titleColor, descColor }) => {
    return (
        <Box>
            <Typography
                sx={{
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "14.4px",
                    letterSpacing: "35%",
                    color: "#1351D8",
                    letterSpacing: "3px",
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
                    letterSpacing:'0px',
                    color: `${titleColor ? titleColor : "#212529"}`,
                    mt: "14px",
                    mb: "16px",
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
