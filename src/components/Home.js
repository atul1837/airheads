import * as React from "react";
import HomeImage from "../../src/assets/home.webp";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${HomeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    ></div>
  );
}
