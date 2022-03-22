//import { experimentalStyled as styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
//import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Mar from "./img/Mar.png";
import im2 from "./img/im2.png";
import im3 from "./img/im3.png";
import im4 from "./img/im4.png";
import im5 from "./img/im5.png";
import im6 from "./img/im6.png";
import im7 from "./img/im7.png";
import im8 from "./img/im8.png";
import Vec1 from "./img/Vec1.png";
import Vec2 from "./img/Vec2.png";
//import Vec3 from "./img/Vec3.png";
import insta2 from "../Assets/insta2.png";
import { Box, Typography } from "@mui/material";
import "./nft4.css";
import React, { useEffect } from "react";
//import ReactDOM from "react-dom";
import { Element } from "react-scroll";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const Nft4 = () => {
  const [showMore, setShowMore] = React.useState(false);
  const [windowDimension, setWindowDimensions] = React.useState("");

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());
    console.log(getWindowDimensions());
  }, []);
  const arr = [
    {
      img: Mar,
      name: "Martha Brown",
      Designation: "Graphic Designer",
    },
    {
      img: im2,
      name: "Lasha Giorgadze",
      Designation: "Graphic Designer",
    },
    {
      img: im3,
      name: "Linda Delson",
      Designation: "Social Media Manager",
    },
    {
      img: im4,
      name: "Linda Delson",
      Designation: "Position",
    },
    {
      img: im5,
      name: "Martha Brown",
      Designation: "Graphic Designer",
    },
    {
      img: im6,
      name: "Martha Brown",
      Designation: "Graphic Designer",
    },
    {
      img: im7,
      name: "Martha Brown",
      Designation: "Social Media Manager",
    },
    {
      img: im8,
      name: "Martha Brown",
      Designation: "Position",
    },
  ];

  const ShowPeople = () => {
    return arr
      .filter((person, index) => {
        if (windowDimension.width <= 600) {
          if (!showMore) {
            if (index < 4) {
              return person;
            }
          } else {
            return person;
          }
        } else {
          return person;
        }
        return person
      })
      .map((person, index) => {
        return (
          <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
            <div className="dv" style={{ position: "relative" }}>
              <Box
                className="team-slide-box team_image_box_icons"
                sx={{ marginBottom: "139px" }}
              >
                <Box component="div" className="team_image_box_icons">
                  <img
                    className="team-image"
                    src={person.img}
                    alt="icons"
                  ></img>
                </Box>
                <Box className="type-slick"></Box>
              </Box>
              <div className="mar">
                <Box>
                  <Typography className="typo">{person.name}</Typography>
                  <span className="spn">{person.Designation}</span>
                </Box>
                <Box className="im">
                  <img className="imm" src={Vec1} alt="" />
                  <img className="imm" src={Vec2} alt="" />
                  <img src={insta2} alt="" />
                </Box>
              </div>
            </div>
          </Grid>
        );
      });
  };

  return (
    <>
      <Element id="core-team" className="box" name="core-team">
        <div className="box-container">
          <h1 className="button3" style={{marginBottom: '30px'}}>Core Team</h1>

          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "block",
              },
            }}
          >
            <Grid
              container
              spacing={4}
              // columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {ShowPeople()}
              {/* <Box> */}
              {/* {arr.map((person, index) => (
                  <Grid item xs={12} sm={6} md={3} lg={3} key={person}>
                    <div className="dv" style={{ position: "relative" }}>
                      <Box
                        className="team-slide-box team_image_box_icons"
                        sx={{ marginBottom: "139px" }}
                      >
                        <Box component="div" className="team_image_box_icons">
                          <img
                            className="team-image"
                            src={person.img}
                            alt="icons"
                          ></img>
                        </Box>
                        <Box className="type-slick"></Box>
                      </Box>
                      <div class="mar">
                        <Box>
                          <Typography class="typo">{person.name}</Typography>
                          <span className="spn">{person.Designation}</span>
                        </Box>
                        <Box className="im">
                          <img className="imm" src={Vec1} alt="" />
                          <img className="imm" src={Vec2} alt="" />
                          <img src={insta2} alt="" />
                        </Box>
                      </div>
                    </div>
                  </Grid>
                ))
                } */}
              {/* </Box> */}
            </Grid>
            <div
              className="see-more-members-wrapper"
              // style={{ display: showMore ? "none" : "block" }}
            >
              <span
                style={{ display: showMore ? "none" : "block" }}
                onClick={() => {
                  setShowMore(true);
                }}
              >
                See More Team Members
              </span>
            </div>
          </Box>
        </div>
      </Element>
    </>
  );
};

export default Nft4;
