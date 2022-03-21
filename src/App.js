import { Discover } from "./components/Discover/Discover";
import { NavBar } from "./components/NavBar/NavBar";
import Nft from "./components/nft";
import { Partners } from "./components/Partners/Partners";
import Nft2 from "./components/nft2";
import Nft3 from "./components/nft3";
import Nft4 from "./components/nft4";
import Nft5 from "./components/nft5";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ellipse1 from "./components/EllipseShapes/Ellipse1";
import Ellipse2 from "./components/EllipseShapes/Ellipse2";
import { Utility } from "./components/Utility/Utility";
import { Footer } from "./components/Footer/Footer";
import "./App.css";
import { RoadMap } from "./components/RoadMap/RoadMap";
const App = () => {
  return (
    <>
      <div style={{ position: "relative", overflow: "hidden" }}>
        <Ellipse1 />

        <NavBar />
        <Discover />
        <Partners />
        {/* <Ellipse2 /> */}
        <div className="adjust-main">
          <div className="app-ellipse-2"/>
          <Nft />
          <Nft2 />

          <Utility />
          <Nft3 />
          <Nft4 />
          <RoadMap />
        </div>

        <Nft5 />
        <Footer />
      </div>
    </>
  );
};

export default App;
