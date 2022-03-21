import { Button, Grid } from "@mui/material";
import React from "react";
import FooterImg from "../../Assets/Footer.png";
import "./Footer.css";
import twitter from "../../Assets/twitter.png";
import ship from "../../Assets/ship.png";
import discord from "../../Assets/discord.png";
import cross from "../../Assets/cross.png";
import check from "../../Assets/check.png";
import { isEmail } from "validator";

export const Footer = () => {
  const [email, setEmail] = React.useState("");
  const [isError, setError] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [icon, setIcon] = React.useState("null");

  const OnSubmit = (e) => {
    e.preventDefault();
    if (!isEmail(email)) {
      setIcon(cross);
      setMessage("Error occurred, try again");
    } else {
      setIcon(check);
      setMessage("Thank you! Your submission has been received!");
    }
  };
  return (
    <div className="footer-body">
      <div className="main-footer" style={{ zIndex: "1000" }}>
        <div className="max-w">
          <Grid container>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <div className="footer-image-wrapper">
              <img src={FooterImg} alt="" className="footerimage" />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div className="footer-menu-wrapper">
              <span>Terms And Conditions</span>
              <span>Privacy Policy</span>
              <span>FAQ</span>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <div className="footer-form-wrapper">
              <div className="footer-icons">
                <ul>
                  <li>
                    <img src={twitter} alt="" />
                  </li>
                  <li>
                    <img src={ship} alt="" />
                  </li>
                  <li>
                    <img src={discord} alt="" />
                  </li>
                </ul>
              </div>
              <div className="footer-form">
                <div className="footer-form-inside">
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button className="subscribe-button" onClick={OnSubmit}>
                    Subscribe
                  </button>
                </div>
                <span className="submission-message">
                  <img src={icon} alt="" />
                  <span>{message}</span>
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
        </div>
      </div>
      <div className="ellipse-6"></div>
    </div>
  );
};
