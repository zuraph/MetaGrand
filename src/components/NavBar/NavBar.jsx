import React from "react";
import Logo from "../../Assets/Logo.png";
import "./NavBar.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import * as Scroll from "react-scroll";


export const NavBar = () => {
  let Link = Scroll.Link;
  const [mobileView, setMobileView] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("about");
  const closeMenu =()=> {
    setMobileView(!mobileView)
  }
  return (
    <div style={{ marginBottom: "50px" }}>
      <div className="navbar">
        <div className="max-w nav-flex">
          <div className="brand-name-image-wrapper" onClick={()=> {setActiveLink("about"); window.scrollTo(0, 0)}}>
            <img src={Logo} alt="logo" />
          </div>
          <div className={`menu-items ${mobileView && "mobile-view-menu-items start-transition"}`}>
            <ul>
              <li
               style={{ color: "rgb(119, 141, 185)" }}>
                <Link
                  to="about-us"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                  onClick={() => {
                    setActiveLink("about");
                    closeMenu();
                  }}
                >
                  About us
                </Link>
              </li>
              {/* <li
                style={{ color: activeLink === "about" ? "white" : "#778DB9" }}
                onClick={() => setActiveLink("about")}
              >
                About us
              </li> */}
              <li
                style={{ color: activeLink === "game" ? "white" : "#778DB9" }}>
                  <Link
                  to="games"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                  onClick={() => {
                    setActiveLink("game");
                    closeMenu();
                  }}
                >Games
                </Link>
              </li>
              <li style={{color: activeLink === "utilities" ? "white" : "#778DB9"}}>
                <Link
                  to="utilities"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                  onClick={() => {
                    setActiveLink("utilities");
                    closeMenu();
                  }}
                >Utilities
                </Link>

              </li>
              <li style={{ color: activeLink === "team" ? "white" : "#778DB9" }}>
                 <Link
                  to="core-team"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                  onClick={() => {
                    setActiveLink("team");
                    closeMenu();
                  }}
                >
                  Team
                </Link>

              </li>
              <li style={{ color: activeLink === "roadmap" ? "white" : "#778DB9" }}>
                <Link
                to="road-map"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                onClick={() => {
                  setActiveLink("roadmap");
                  closeMenu();
                }}
              >Road Map
              </Link>
              </li>
              <li style={{ color: activeLink === "faq" ? "white" : "#778DB9" }}>
                  <Link
                  to="faq"
                  spy={true}
                  smooth={true}
                  duration={500}
                  activeClass="active"
                  onClick={() => {
                    setActiveLink("faq");
                    closeMenu();
                  }}
                >FAQ
                </Link>
              </li>
            </ul>
          </div>
          <IconButton
            className="mobile-toggle-button"
            onClick={() => setMobileView(!mobileView)}
            style={{ color: "white" }}
          >
            {mobileView ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          {/* <button
            className="mobile-toggle-button"
            onClick={() => setMobileView(!mobileView)}
          >
            {mobileView ? "Show" : "Not Show"}
          </button> */}
        </div>
      </div>
    </div>
  );
};
