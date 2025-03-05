import React from "react";
import serviceImg from "../../assets/service/service.png";
import { Stack, Typography } from "@mui/material";
import checkIcon from "../../assets/icons/check.png";

const ServiceSection = () => {
    return (
        <Stack bgcolor={"#1C1C1C"}>
            <div className="container">
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    gap={"65px"}
                    py={"120px"}
                >
                    <img src={serviceImg} alt="img" width={"560px"} />
                    <div>
                        <Typography
                            sx={{
                                fontFamily: "Yantramanav",
                                fontWeight: 700,
                                fontSize: "45px",
                                lineHeight: "45px",
                                letterSpacing: "0%",
                                color: "#fff",
                            }}
                        >
                            Nega bizning xizmatlarimiz boshqalardan yaxshiroq?
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Yantramanav",
                                fontWeight: 400,
                                fontSize: "15px",
                                lineHSeight: "22px",
                                letterSpacing: "0%",
                                color: "#FFFFFFCC",
                                mt: "30px",
                            }}
                        >
                            Biz hamma uchun bir xil yondashuvga ishonmaymiz.
                            Bizning xizmatlarimiz sizning maqsadingizga
                            erishishingizni ta'minlab, sizning maxsus
                            ehtiyojingizga mos ravishda moslashtirilgan.
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Yantramanav",
                                fontWeight: 400,
                                fontSize: "15px",
                                lineHSeight: "22px",
                                letterSpacing: "0%",
                                color: "#FFFFFFCC",
                                mt: "20px",
                            }}
                        >
                            Biz sizning bevosita loyihangizdan tashqariga
                            chiqadigan qiymatni yetkazib berishga ishonamiz.
                            Bizning xizmatlarimiz uzoq muddatli foyda keltirish
                            uchun yaratilgan.
                        </Typography>
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            gap={"50px"}
                            mt={4}
                        >
                            <Stack direction={"row"} alignItems={"center"} gap={2}>
                                <img
                                    src={checkIcon}
                                    alt="check-icon"
                                    width={"20px"}
                                />
                                <Typography color="#fff">PPD ishlab chiqish</Typography>
                            </Stack>
                            <Stack direction={"row"} alignItems={"center"} gap={2}>
                                <img
                                    src={checkIcon}
                                    alt="check-icon"
                                    width={"20px"}
                                />
                                <Typography color="#fff">PPD ishlab chiqish</Typography>
                            </Stack>
                        </Stack>
                    </div>
                </Stack>
            </div>
        </Stack>
    );
};

export default ServiceSection;
