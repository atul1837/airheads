import * as React from "react";
import HeadmapImage from "../../src/assets/headmap.jpg";

export default function SneakerHeads() {

  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center h-screen">
      <h1
          className="text-center"
          style={{
            marginBottom: "1rem",
            WebkitTextStroke: "2px #CEFF86",
            fontFamily: "kanit",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "72px",
            lineHeight: "80%",
          }}
        >
          SNEAKER HEADS
        </h1>
        <p className="text-xl text-[#CEFF86]">Coming Soon</p>
      </div>
    </div>
  );
}

