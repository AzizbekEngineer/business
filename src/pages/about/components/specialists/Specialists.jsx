import {
    Box,
    Button,
    Stack,
    Grid,
    Avatar,
    Typography,
    IconButton,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import SectionHeader from "../../../../components/section-header/SectionHeader";
import spes1 from "../../../../assets/icons/spes1.svg";
import spes2 from "../../../../assets/icons/spes2.svg";
import spes3 from "../../../../assets/icons/spes3.svg";
import spes4 from "../../../../assets/icons/spes4.svg";
import spes5 from "../../../../assets/icons/spes5.svg";
import spes6 from "../../../../assets/icons/spes6.svg";
import spes7 from "../../../../assets/icons/spes7.svg";
import spes8 from "../../../../assets/icons/spes8.svg";

const Specialists = () => {
    const teamMembers = [
        {
            name: "Jennifer Lopa",
            role: "Product Designer",
            image: spes1,
            social: [
                { icon: <FacebookIcon />, link: "#" },
                { icon: <TelegramIcon />, link: "#" },
                { icon: <InstagramIcon />, link: "#" },
            ],
        },
        {
            name: "Merlin Bullock",
            role: "Business Analyst",
            image: spes2,
            social: [
                { icon: <FacebookIcon />, link: "#" },
                { icon: <TelegramIcon />, link: "#" },
                { icon: <InstagramIcon />, link: "#" },
            ],
        },
        {
            name: "Jennifer Lopa",
            role: "Front End Developer",
            image: spes3,
            social: [
                { icon: <FacebookIcon />, link: "#" },
                { icon: <TelegramIcon />, link: "#" },
                { icon: <InstagramIcon />, link: "#" },
            ],
        },
        {
            name: "Jennifer Lopa",
            role: "Back End Developer",
            image: spes4,
            social: [
                { icon: <FacebookIcon />, link: "#" },
                { icon: <TelegramIcon />, link: "#" },
                { icon: <InstagramIcon />, link: "#" },
            ],
        },
        {
            name: "Jennifer Lopa",
            role: "DevOps Engineer",
            image: spes5,
            social: [
                { icon: <FacebookIcon />, link: "#" },
                { icon: <TelegramIcon />, link: "#" },
                { icon: <InstagramIcon />, link: "#" },
            ],
        },
        {
            name: "Jennifer Lopa",
            role: "Cloud Expert",
            image: spes6,
            social: [
                { icon: <FacebookIcon />, link: "#" },
                { icon: <TelegramIcon />, link: "#" },
                { icon: <InstagramIcon />, link: "#" },
            ],
        },
        {
            name: "Jennifer Lopa",
            role: "System Engineer",
            image: spes7,
            social: [
                { icon: <FacebookIcon />, link: "#" },
                { icon: <TelegramIcon />, link: "#" },
                { icon: <InstagramIcon />, link: "#" },
            ],
        },
        {
            name: "Jennifer Lopa",
            role: "UI/UX Designer",
            image: spes8,
            social: [
                { icon: <FacebookIcon />, link: "#" },
                { icon: <TelegramIcon />, link: "#" },
                { icon: <InstagramIcon />, link: "#" },
            ],
        },
    ];
    return (
        <Box>
            <Box
                sx={{
                    margin: "40px auto",
                }}
                component={"section"}
                className="container"
            >
                <Stack
                    padding={"60px"}
                    bgcolor={"#F3F6FD"}
                    border={"1px solid #1351D81A"}
                    borderRadius={"10px"}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "1fr 250px",
                            justifyContent: "space-between",
                            gap: "20px",
                            alignItems: "center",
                        }}
                    >
                        <SectionHeader
                            subtitle={"BIZNING JAMOA"}
                            title={"Bizning professional mutaxassislarimiz"}
                            desc={
                                "Bizning jamoamiz turli sohalardagi eng yaxshi iste'dodlar, ekspertlar va ko'rgazmalilarning jamoaviy kuchidir."
                            }
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
                                Uchrashuvga yozilish
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
            <Box
                component={"section"}
                className="container"
                sx={{
                    margin: "24px auto",
                }}
            >
                <Grid container spacing={2}>
                    {teamMembers.map((member, index) => (
                        <Grid
                            item
                            xs={3}
                            key={index}
                            // sx={{ display: "grid", margin: "12px" }}
                        >
                            <Box
                                sx={{
                                    bgcolor: "#F3F6FD",
                                    borderRadius: "8px",
                                    padding: "30px 0 40px",
                                    width: "100%",
                                    textAlign: "center",
                                    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                        boxShadow: "0px 4px 20px 5px rgba(0, 0, 0, 0.06)",
                                    },
                                }}
                            >
                                <Avatar
                                    src={member.image}
                                    alt={member.name}
                                    sx={{
                                        width: 90,
                                        height: 90,
                                        mx: "auto",
                                        mb: 2,
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                        color: "#000000",
                                        fontSize: "18px",
                                        mb: 1,
                                    }}
                                >
                                    {member.name}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        color: "#1351D8",
                                        fontSize: "15px",
                                        mb: 2,
                                    }}
                                >
                                    {member.role}
                                </Typography>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    justifyContent="center"
                                    sx={{
                                        padding: "20px",
                                        width: "160px",
                                        height: "50px",
                                        margin: "0 auto",
                                        background: "#FFFFFF",
                                        borderRadius: "6px",
                                    }}
                                >
                                    {member.social.map((social, idx) => (
                                        <IconButton
                                            key={idx}
                                            href={social.link}
                                            target="_blank"
                                            sx={{
                                                color: "#1351D8",
                                                "&:hover": { color: "#0056b3" },
                                            }}
                                        >
                                            {social.icon}
                                        </IconButton>
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Specialists;
