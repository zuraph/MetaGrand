import React from "react";
import "./Partners.css";
import facebook from "../../Assets/facebook.png";
import forbes from "../../Assets/forbes.png";
import google from "../../Assets/google.png";
import amazon from "../../Assets/amazon.png";
import Slider from "react-slick/lib/slider";
import { Element } from "react-scroll";

export const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    //autoplay: false,
    speed: 8000,
    autoplaySpeed: 10,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1056,
        settings: {
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 4,
          dots: false,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
           autoplay: true,
          slidesToShow: 2.2,
          slidesToScroll: 4,
          dots: false,
          infinite: true,
        },
      },

      {
        breakpoint: 720,
        settings: {
           autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 4,
          dots: false,
          infinite: true,
        },
      },

      {
        breakpoint: 570,
        settings: {
           autoplay: true,
          centerPadding: "100px",
          slidesToShow: 1.7,
          slidesToScroll: 4,
          dots: false,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Element name="about-us" className="box">
      <div className="partner-company-wrapper box-container">
        <div className="partner-container">
          <span>Partners</span>
        </div>
        <div>
          <Slider className="sickSli abc" {...settings}>
            <div className="slick-div">
              <img src={facebook} alt="" />
            </div>
            <div className="slick-div">
              <img src={forbes} alt="" />
            </div>
            <div className="slick-div">
              <img src={amazon} alt="" />
            </div>
            <div className="slick-div">
              <img src={google} alt="" />
            </div>
          </Slider>
        </div>
      </div>
      </Element>
  );
};
