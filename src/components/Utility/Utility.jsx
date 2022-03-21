import React from "react";
import "./Utility.css";
import line1 from "../../Assets/line1.png";
import bigline from "../../Assets/bigline.png";
import horizontalLine from "../../Assets/horizontalLine.png";
import MetaPicture from "../../Assets/MetaPicture.png";
import utilitypicture from "../../Assets/utilitypicture.svg";
import utilbg from "../../Assets/utility-bg.png";
import nftVisual from "../../Assets/nft-visual.svg"

export const Utility = () => {
  return (
    <div name="utilities" className="main-utility-wrapper" style={{ zIndex: 10, position: "relative" }}>
      <div className="box-container">
        <div className="utility-first-part-wrapper">
          <button>Utility</button>
          <p>
            We provide Play to Earn (free) games, traditional casinos (texas hold
            'em, blackjack), and innovative games, where players stake their NFT.
          </p>
        </div>
        <div className="utilitypicture-Wrapper">
          <div className="utility-wrapper">
            <ul className="util-buttons">
              <li>House Edge</li>
              <li>Rakeback</li>
              <li>Referral Commissions</li>
              <li>Exclusive Access</li>
              <li>Play To Earn P2E</li>
            </ul>
            <div className="nft-visual">
              <img src={nftVisual} style={{ width: "100%" }} alt="" />
            </div>
          </div>
        </div>

        <div className="mobile-view">
          <div className="mobile-view-upperpart">
            <div className="mobile-utility">Utility</div>
            <p>
              We provide Play to Earn (free) games, traditional casinos (texas
              hold 'em, blackjack), and innovative games, where players stake
              their NFT.
            </p>
          </div>

          <div className="mobile-view-roadmap" style={{ zIndex: 100 }}>
            <div className="mobile-view-stage-containers vertical-line" style={{ marginBottom: "5px" }}>
              <span>House Edge</span>
            </div>
            <div className="mobile-double-span-in-row horizontal-line">
              <span className="mobile-view-stage-containers">Rakeback</span>
              <span className="mobile-view-stage-containers">Referral Commissions</span>
            </div>
            <div className="mobile-double-span-in-row horizontal-line">
              <div className="mobile-view-stage-containers double-span">
                <span>Exclusive</span>
                <span>Access</span>
              </div>
              <div className="mobile-view-stage-containers double-span">
                <span>Play To Earn</span>
                <span>P2E</span>
              </div>
            </div>
            <div className="mobile-meta">
              <img src={MetaPicture} alt="" />
            </div>
          </div>
        </div>
        <div className="ellipse-3"></div>
        <div className="utility-blur-3"></div>
      </div>
      {/* <div className="utility-second-part-wrapper"> */}
      {/* <div className="utilities-wrapper">
          <ul>
            <li className="utility-house">
              <div className="utility-name-container">
                <span>House %</span>
              </div>
            </li>
            <li className="utility-raceback">
              <div className="utility-name-container">
                <span>Rakeback %</span>
              </div>
            </li>
            <li className="utility-referrals">
              <div className="utility-name-container refferal-longline">
                <span>Referrals %</span>
              </div>
            </li>
            <li className="utility-exclusive">
              <div className="utility-name-container">
                <span>Exclusive</span>
                <span>Access</span>
              </div>
            </li>
            <li className="utility-earn">
              <div className="utility-name-container">
                <span>Play To Earn/</span>
                <span>Free Chips</span>
              </div>
            </li>
          </ul>
          <div className="utility-lines-wrapper">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
            <div className="line-long-5"></div>
          </div>

          <div className="meta-image">
            <img src={MetaPicture} alt="" />
          </div>
        </div> */}

      {/* <div className="active-button-1"></div>
        <div className="active-button-2"></div>
        <div className="active-button-3"></div>
        <div className="active-button-4"></div>
        <div className="active-button-5"></div> */}

      {/* for mobile view
       */}
      {/* <div className="mobile-view-largeline"></div>
        <div className="mobile-view-line1"></div>
        <div className="mobile-view-line2"></div> */}

      {/* <div className="mobile-active-button-1"></div>
        <div className="mobile-active-button-2"></div>
        <div className="mobile-active-button-3"></div>
        <div className="mobile-active-button-4"></div>
        <div className="mobile-active-button-5"></div> */}
      {/* </div> */}
    </div>
  );
};


