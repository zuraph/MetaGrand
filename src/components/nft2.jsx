import React from "react";
import Slider from "react-slick";
import { Box, Container, Typography } from "@mui/material";
import n1 from "./img/n1.png";
import n2 from "./img/n2.png";
import n3 from "./img/n3.png";
import n4 from "./img/n4.png";
import ar1 from "./img/arrowl.png";
import ar2 from "./img/arrowr.png";
import "./nf2.css";
import { Element } from "react-scroll";

const NFt2 = () => {
  const [nextButton , setNextButton] = React.useState(()=>{

  })
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <Box>
        <img
          className={className}
          src={ar2}
          alt="prev"
          onClick={onClick}
          style={{ ...style, display: "block" , width : '10px' , height  :'10px' }}
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
  const settings1 = {
    // centerPadding: "100px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="right-arrow"/>,
    prevArrow: <SamplePrevArrow className="left-arrow"/>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          speed: 500,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          speed: 500,
          autoPlay:true
        },
      },
    ],

    // centerMode: true,
  };

  return (
    <Element className="box" name="games">
      <div className="box-container">
        <div className="game-header-group">
          <h1 className="button2">Games</h1>
          <p className="p2">
            We provide Play to Earn (free) games, traditional casinos (texas
            hold 'em, blackjack), and innovative games, where players stake
            their NFT.
          </p>
        </div>
        <div className="game-slide-wrapper">
          <Slider className="game-slick" {...settings1}>
            <div className="game-images">
              <img src={n1} alt="" />
            </div>
            <div className="game-images">
              <img src={n2} alt="" style={{ height: "110%" }} />
            </div>
            <div className="game-images">
              <img src={n3} alt="" style={{ height: "110%" }} />
            </div>
            <div className="game-images">
              <img src={n4} alt="" />
            </div>
            <div className="game-images">
              <img src={n3} alt="" style={{ height: "110%" }} />
            </div>
            {/* <Box>
              <Box component="div" className="game-box-small-image">
                <img src={n1} alt="icons"></img>
              </Box>
            </Box>
            <Box>
              <Box component="div" className="game-box-small-image">
                <img src={n2} alt="icons"></img>
              </Box>
            </Box>
            <Box>
              <Box component="div" className="game-box-small-image">
                <img src={n3} alt="icons"></img>
              </Box>
            </Box>
            <Box>
              <Box component="div" className="game-box-small-image">
                <img src={n4} alt="icons"></img>
              </Box>
            </Box> */}

            {/* <Box>
              <Box component="div" className="image_box_icons"></Box>
            </Box> */}
          </Slider>
          {/* <div className="">
            <div>
              <img src={ar1} alt="" />
            </div>
            <div>
              <img src={ar2} alt="" />
            </div>
          </div> */}
        </div>
        {/* <Box className="game-box-slick">
          
        </Box> */}
      </div>
    </Element>
  );
};

export default NFt2;
