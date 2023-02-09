import * as React from "react";
import HeadmapImage from "../../src/assets/headmap.png";
import { isMobile } from "react-device-detect";
import headmapdesktop1 from "../../src/assets/headmapdesktop1.png";
import headmapdesktop2 from "../../src/assets/headmapdesktop2.png";
import headmapdesktop3 from "../../src/assets/headmapdesktop3.png";
import headmapdesktop4 from "../../src/assets/headmapdesktop4.png";
import headmapdesktop5 from "../../src/assets/headmapdesktop5.png";
import headmapdesktop6 from "../../src/assets/headmapdesktop6.png";
import headmapdesktop7 from "../../src/assets/headmapdesktop7.png";
import headmapdesktop8 from "../../src/assets/headmapdesktop8.png";

export default function Headmap() {

  return (
    // add HeadmapImage as backgroud image in div
    <div
      style={{
        backgroundImage: `url(${HeadmapImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      { isMobile ? (
        <></>
      ):(
        <>
          <img src={headmapdesktop1} style={{height: "18.5vw", position: "absolute", top: "25vw", left: "30vw" }} />
          <img src={headmapdesktop2} style={{height: "23.3vw", position: "absolute", top: "8vw", left: "50vw" }} />
          <img src={headmapdesktop3} style={{height: "24.5vw", position: "absolute", top: "2vw", left: "21vw" }} />
          <img src={headmapdesktop4} style={{height: "18.8vw", position: "absolute", top: "20vw", left: "78.2vw" }} />
          <img src={headmapdesktop5} style={{height: "10vw", position: "absolute", top: "4vw", left: "50vw" }} />
          <img src={headmapdesktop6} style={{height: "19.4vw", position: "absolute", top: "2vw", left: "73vw" }} />
          <img src={headmapdesktop7} style={{height: "14vw", position: "absolute", top: "33vw", left: "60.3vw" }} />
          <img src={headmapdesktop8} style={{height: "11.3vw", position: "absolute", top: "0.5vw", left: "62vw" }} />
        </>
      )}
    </div>
  );
}

