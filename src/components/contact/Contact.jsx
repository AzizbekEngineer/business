import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./contact.scss";
import SectionHeader from "../section-header/SectionHeader";
import { Button, Divider, TextField, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <ItemMain>
            <SectionHeader
              subtitle={"BIZNING JAMOA"}
              title={"Aloqaga chiqish"}
              desc={"Biz bilan outlook@gmail.com orqali bogʻlanishingiz mumkin"}
            />
            <Divider
              sx={{
                mt: "22px",
                mb: "28px",
                bgcolor: "#1C1C1C0",
              }}
            />
            <Grid container spacing={2}>
              {/* Ism */}
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    mb: "10px",
                  }}
                >
                  Ism
                </Typography>

                <CustomTextField
                  fullWidth
                  placeholder="Ism"
                  variant="outlined"
                />
              </Grid>

              {/* Familiya */}
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    mb: "10px",
                  }}
                >
                  Familiya
                </Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Familya"
                  variant="outlined"
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    mb: "10px",
                  }}
                >
                  Pochta Manzili
                </Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Pochta Manzili"
                  variant="outlined"
                />
              </Grid>

              {/* Telefon va Mamlakat */}
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    mb: "10px",
                  }}
                >
                  Telefon raqam
                </Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Telefon raqam"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    mb: "10px",
                  }}
                >
                  Mamlakat
                </Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Mamlakat"
                  variant="outlined"
                />
              </Grid>

              {/* Xabar */}
              <Grid item xs={12}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#1c1c1c",
                    mb: "10px",
                  }}
                >
                  Xabar
                </Typography>
                <CustomTextField
                  fullWidth
                  placeholder="Bizga xabar qoldiring..."
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>

              {/* Yuborish Tugmasi */}
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    fontSize: "13px",
                    fontWeight: "500",
                    bgcolor: "#1351D8",
                    color: "#fff",
                    py: "11.5px",
                    borderRadius: "6px",
                  }}
                >
                  Yuborish
                </Button>
              </Grid>
            </Grid>
          </ItemMain>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;

const ItemMain = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F3F6FD",
  padding: "60px",
  borderRadius: "10px",
  boxShadow: "none",
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#F3F6FD",
  padding: "50px",
  boxShadow: "none",
  borderRadius: "10px",
  height: "100%",
}));

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    padding: "0px",
    backgroundColor: "#fff",
    "& fieldset": {
      borderColor: "#10182833",
    },
    "&:hover fieldset": {
      borderColor: "#10182833",
    },
    "&.Mui-focused fieldset": {
      borderColor: "gray",
    },
  },
  "& .MuiInputBase-input": {
    fontSize: "13px", // Matn o‘lchami
    fontWeight: "400",
    color: "#8A7E7E",
    padding: "8px 15px", // 🔥 Paddingni olib tashlash
  },
});
