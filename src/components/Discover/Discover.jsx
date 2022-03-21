import { Button, Grid } from "@mui/material";
import React from "react";
import "./Discover.css";
import DiscordImage from "../../Assets/discord.png";
import Ellipse from "../../Assets/Ellipse.png";
import { Container, Row, Col } from "react-bootstrap";
import MetaImage from "../../Assets/MetaPicture.png";

export const Discover = () => {
  return (
    <div>
      <div className="discover-main-wrapper">
        <div className="left-side-discover-wrapper">
          <div className="left-side-discover">
            <h1>Discover, Collect</h1>
            <p>On the World's First & Largest NFT Marketplace</p>
            <div className="button-wrapper">
              <button>
                <img src={DiscordImage} alt="discord-image" />
                <span className="discord-text">Join Discord</span>
              </button>
              {/*<span className="discord-back-shadow"></span>*/}
            </div>
          </div>

          <div className="ellipse-shape" />
        </div>
        <div className="right-side-discover">
          <img src={MetaImage} alt="" />
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="discord-button-wrapper">
              <button className="discord-button">
                <img src={DiscordImage} alt="discord-image" />
                <span>Join Discord</span>
              </button>
              <span className="discord-button-back-box"></span>
            </div> */
}