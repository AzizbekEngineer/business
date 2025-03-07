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
          margin: { xs: "20px auto", md: "40px auto" },
          padding: { xs: "20px auto", md: "60px auto" },
        }}
        component={"section"}
        className="container"
      >
        <Stack
          bgcolor={"#F3F6FD"}
          border={"1px solid #1351D81A"}
          borderRadius={"10px"}
          padding={{ xs: "30px", md: "60px" }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 250px" },
              gap: "20px",
              alignItems: "center",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <SectionHeader
              subtitle={"BIZNING JAMOA"}
              title={"Bizning professional mutaxassislarimiz"}
              desc={
                "Bizning jamoamiz turli sohalardagi eng yaxshi iste'dodlar, ekspertlar va ko'rgazmalilarning jamoaviy kuchidir."
              }
              sx={{
                textAlign: { xs: "center", md: "left" },
                "& .subtitle": { fontSize: { xs: "12px", md: "16px" } },
                "& .title": {
                  fontSize: { xs: "16px", md: "32px" },
                  fontWeight: "bold",
                },
                "& .desc": { fontSize: { xs: "12px", md: "16px" } },
              }}
            />
            <Stack justifyContent={{ xs: "center", md: "flex-start" }}>
              <Button
                sx={{
                  border: "none",
                  borderRadius: "30px",
                  background: "#1351D8",
                  color: "white",
                  padding: { xs: "10px 20px", md: "13px 26px" },
                  fontSize: { xs: "12px", md: "13px" },
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
        sx={{ margin: "24px auto" }}
      >
        <Grid container spacing={2}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box
                sx={{
                  bgcolor: "#F3F6FD",
                  borderRadius: "8px",
                  padding: { xs: "20px 0 30px", md: "30px 0 40px" },
                  width: "100%",
                  textAlign: "center",
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
                    width: { xs: 70, md: 90 },
                    height: { xs: 70, md: 90 },
                    mx: "auto",
                    mb: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#000000",
                    fontSize: { xs: "16px", md: "18px" },
                    mb: 1,
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#1351D8",
                    fontSize: { xs: "14px", md: "15px" },
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
                    padding: "15px",
                    width: { xs: "140px", md: "160px" },
                    height: { xs: "40px", md: "50px" },
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
                        fontSize: { xs: "18px", md: "20px" },
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
