import { Grid } from "@mui/material";
import React from "react";
import "./RoadMap.css";
import CheckIcon from "@mui/icons-material/Check";
import { Element } from "react-scroll";

export const RoadMap = () => {
  const [activeButton, setActiveButton] = React.useState(true);

  const roadMap = [
    {
      date: "Completed",
      text: "Project conceptualisation, Technical and financial analysis",
      active: true
    },
    {
      date: "Completed",
      text: "Team Formation",
      active: true
    },
    {
      date: "13.04.2022",
      text: "Discord and social media launch",
    },
    {
      date: "13.04.2022",
      text: "Marketing campaign launch",
    },
    {
      date: "TBA",
      text: "NFT sneak peek",
    },
    {
      date: "TBA",
      text: "Poker  weekly tournaments launch",
    },
    {
      date: "TBA",
      text: "Whitelist Sale",
    },
    {
      date: "TBA",
      text: "Project conceptualisation, Technical and financial analysis",
    },
    {
      date: "TBA",
      text: "Public Sale",
    },
  ];
  const roadMap2 = [
    {
      date: "TBA",
      text: "Smart contract development and audit",
    },
    {
      date: "TBA",
      text: "Building the MetaGrand Casino",
    },
    {
      date: "TBA",
      text: "Exclusive access room sneak peek",
    },
    {
      date: "TBA",
      text: "Launch party and wearables airdrop",
    },
    {
      date: "TBA",
      text: "First profit distribution",
    },
    {
      date: "TBA",
      text: "Exclusive access to a VIP room, opening party and wearables airdrop for NFT holders",
    },
    {
      date: "TBA",
      text: "NFT holders get access to the second opening party and another wearables airdrop",
    },
    {
      date: "TBA",
      text: "First community game held",
    },
    {
      date: "TBA",
      text: "MetaGrand will host a poker tournament featuring a special guest",
    },
    {
      date: "TBA",
      text: "Roadmap 3.0 announced",
    }
  ];

  const [activeRoad, setActiveRoad] = React.useState(roadMap);

  return (
   <Element className="box" name="road-map">
      <div className="roadmap-main-wrapper box-container" style={{ position: "relative" }}>
        <div className="roadmap-header-button-wrapper">
          <div className="roadmap-header">
            <h1>The Roadmap</h1>
          </div>
          <div className="roademap-button-wrapper">
            <span
              style={{
                backgroundColor: activeButton && "#4884EF",
                color: activeButton ? "white" : "#778DB9",
              }}
              onClick={() => {setActiveButton(true); setActiveRoad(roadMap)}}
            >
              Roadmap 1.0
            </span>
            <span
              style={{
                backgroundColor: !activeButton && "#4884EF",
                color: !activeButton ? "white" : "#778DB9",
              }}
              onClick={() => {setActiveButton(false); setActiveRoad(roadMap2)}}
            >
              Roadmap 2.0
            </span>
          </div>
        </div>
        <div className="roadmap-wrapper">
          <div className="roadmap-mobile-view">
            {activeRoad.map((road, index) => {
              return (
                <Grid
                  container
                  spacing={2}
                  key={index}
                  style={{ margin: "30px 0px" }}
                >
                  <Grid item xs={5} sm={5} md={5} lg={5}>
                    <div className="roadmap-stages-wrapper">
                      <span className="roadmap-stageNumber">#{index+1}</span>
                      <span className="roadmap-stageTitle">- {road.date}</span>
                    </div>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2}>
                    <div className="road-map-center-wrapper">
                      <div className="roadmap-icon-div-1">
                        <div className="roadmap-icon-div-2">
                          <div className="roadmap-icon-div-3">
                            {road.active && (
                              <div className="roadmap-icon-div-4">
                                <CheckIcon style={{ color: "white" }} className="roadmap-icon-tick"/>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      {activeRoad.length !== (index+1)  && <div className="roadmap-line"></div>}
                    </div>
                  </Grid>
                  <Grid item xs={5} sm={5} md={5} lg={5}>
                    <div className="roadmap-stage-names-wrapper">
                      <span className="roadmap-stage-names">
                        {road.text}
                      </span>
                    </div>
                  </Grid>
                </Grid>
              );
            })}
          </div>
        </div>
        <div className="ellipse-4"></div>
        <div className="ellipse-5"></div>
      </div>
      </Element>
  );
};
