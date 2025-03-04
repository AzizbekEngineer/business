import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container container">
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& > :not(style)": { m: 1 },
            }}
          >
            <div>
              <TextField
                id="demo-helper-text-misaligned-no-helper"
                label="Ism"
              />
              <TextField
                id="demo-helper-text-misaligned-no-helper"
                label="Familya"
              />
            </div>
          </Box>
        </div>
        <div className="contact__right">
          <div className="contact__statistic"></div>
          <div className="contact__info"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
