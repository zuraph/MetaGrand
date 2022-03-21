import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Nav from "react-bootstrap/Nav";
// import React, { Component } from "react";
import Slider from "react-slick";
import { Box, Container, Typography } from "@mui/material";
import one from "./img/1.png";
import two from "./img/2.png";
import three from "./img/3.png";
import ar1 from "./img/arrowl.png";
import ar2 from "./img/arrowr.png";
import "./nft.css";
import { display, margin } from "@mui/system";

const Nft = () => {
  //   const settings = {
  //     dots: false,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: true,
  //   };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    console.log("props", props);
    return (
      <Box>
        <img
          className={className}
          src={ar2}
          alt="prev"
          onClick={onClick}
          style={{ ...style, display: "block" }}
        ></img>
      </Box>
    );
  };
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <Box>
        <img
          className={className}
          src={ar1}
          alt="Next"
          onClick={onClick}
          style={{ ...style, display: "block" }}
        ></img>
      </Box>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 2,
          dots: false,
          infinite: true,
          speed: 500,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          arrows: false,
          speed: 500,
        },
      },
    ],

    // centerMode: true,
  };

  return (
    <>
      <div
        className="project-body"
        style={{marginTop: "4rem" }}
      >
        <div className="heading-container">
          <div className="heading-button">About Us</div>
        </div>
        <div className="div">
          <p className="p">
            We are highly-experienced doxxed team from backgrounds in land-based and online casinos, crypto casinos, blockchain games, and smart contract development. We are building a gigantic casino brand, MetaGrand, that we’ll launch in all metaverses. In MetaGrand, NFT holders share 50% of the casino’s profits in $MGC on a monthly basis.
          </p>
          <p className="p">
            MetaGrand is a DAO-governed metaverse casino powered by Players who earn $GrandCoin rewards for playing games. We provide Play to Earn (P2E) games, traditional and innovative casino games, where players stake their NFT.
          </p>
        </div>
        <Slider className="project-slick" {...settings}>
          <div
            style={{ border: "1px solid white" }}
            className="project-images image_box_icons"
          >
            <img src={one} alt="" />
          </div>
          <div
            style={{ border: "1px solid white" }}
            className="project-images image_box_icons"
          >
            <img src={two} alt="" />
          </div>
          <div
            style={{ border: "1px solid white" }}
            className="project-images image_box_icons"
          >
            <img src={three} alt="" />
          </div>
          <div
            style={{ border: "1px solid white" }}
            className="project-images image_box_icons"
          >
            <img src={two} alt="" />
          </div>
          {/* <Box className="slick-slide-box">
            <Box component="div" className="image_box_icons"></Box>
          </Box> */}
          {/* <Box className="slick-slide-box">
            <Box
              style={{ width: "300px", margin: "0px 20px" }}
              component="div"
              className="image_box_icons"
            ></Box>
          </Box> */}
        </Slider>
        <div className="project-ellipse"></div>
        <div className="project-blur-ellipse"></div>
      </div>
    </>
  );
};

export default Nft;

{
  /* <Box>
          <Container>
            <Box>
              <Slider className="project-slick" {...settings}>
                <div>
                  <img src={one} alt="" />
                </div>
                <div>
                  <img src={two} alt="" />
                </div>
                <div>
                  <img src={three} alt="" />
                </div>

                <Box className="slick-slide-box">
                  <Box component="div" className="image_box_icons">
                    <img
                      className="image-icon"
                      src={two}
                      alt="icons"
                    ></img>
                  </Box>
                </Box>
                <Box className="slick-slide-box">
                  <Box
                    style={{ width: "300px", margin: "0px 20px" }}
                    component="div"
                    className="image_box_icons"
                  >
                    <img className="image-icon" src={one} alt="icons"></img>
                  </Box>
                
                </Box>
              </Slider>
            </Box>
          </Container>
        </Box> */
}
