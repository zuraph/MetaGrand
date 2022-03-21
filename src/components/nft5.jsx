import React from "react";
//import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   ExpandMoreIcon,
// } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./nft5.css";
const Nft5 = () => {
  const [activeButton, setActiveButton] = React.useState(null);

  return (
    <Box className="faq" sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} sm={12} md={6}>
          <Box className="typopar">
            <Box className="box_typo5">
              <Typography className="typo5">Frequently Asked</Typography>
              <Typography className="typo5">Questions</Typography>
            </Box>
            {/*<Box className="box_par">
              {" "}
              <Typography className="par">
                {" "}
                Have questions? Get answers to your questions from our expert
                support team 7 days a week.
              </Typography>
            </Box>*/}

            {/*<div className="frequent-wrapper">
              <button
                style={{
                  background: "rgba(244, 118, 93, 1)",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    color: "white",
                    cursor: "pointer"
                  }}
                >
                  Get in touch
                </span>
              </button>
              <span className="frequent-back-button"></span>
            </div>*/}
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={6}

          // sx={{ display: "flex", flexDirection: "row" }}
        >
          <Box className="box_accor" style={{ marginTop: "-50px" }}>
            {Array.from(Array(5)).map((_, index) => (
              <div key={index} style={{ position: "relative", marginBottom: "10px" }}>
                <Accordion
                  className="accordiann"
                  onClick={() => setActiveButton(index)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="accord-summary"
                    style={{
                      border: "1px solid #1D2B49",
                      height: "70px",
                      borderRadius: "10px",
                      borderBottom: `${activeButton === index ? "none" : "1px solid #1D2B49"}`,
                      background: `${activeButton === index ? "#1D2B49" : "transparent"}`,
                      // borderBottomRightRadius: `${
                      //   activeButton == index ? "0px" : "10px"
                      // }`,
                    }}
                  >
                    <Typography className="accor">
                      Some text goes hereSome text goes here Some text goes?and
                      we have second line here
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    style={{
                      border: "1px solid #1D2B49",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography className="acctypo">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                      blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <div
                  // style={{
                  //   width: "10px",
                  //   height: "40px",
                  //   borderRadius: "10px",
                  //   position: "absolute",
                  //   top: "15%",
                  //   padding: "1px 2px 0px",
                  //   left: "-5px",
                  //   background: activeButton == index ? "#F4765D" : "#1D2B49",
                  // }}
                  className={activeButton === index ? "divaf" : "divcl"}
                ></div>
              </div>
            ))}
            {/* 
          
            {/* <Accordion disabled>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header">
                <Typography>Disabled Accordion</Typography>
              </AccordionSummary>
            </Accordion> */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nft5;
