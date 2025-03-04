import { Box, Grid2, Stack } from "@mui/material";
import React from "react";
import SectionHeader from "../../../../components/section-header/SectionHeader";

const Specialization = () => {
    return (
        <Box component={"section"} className="container">
            <Stack
                padding={'60px'}
                bgcolor={"#F3F6FD"}
                border={"1px solid #1351D81A"}
                borderRadius={'10px'}
            >
                <SectionHeader
                    subtitle={"IXTISOSLASHTIRISH"}
                    title={"Bizning kompaniyamiz siz uchun nima qilishi kerak"}
                />
            </Stack>
        </Box>
    );
};

export default Specialization;
