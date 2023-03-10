import * as React from "react";
// import HomeImage from "../../src/assets/staking.png";
// import Button from "@mui/material/Button";
import stakingBackground from "../../src/assets/stakingBackground.png";
import { isMobile } from "react-device-detect";

export default function Staking() {
  return (
    <div
      style={{
        backgroundImage: `url(${stakingBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <h1 style={{
          marginBottom: "2rem",
          WebkitTextStroke: "2px #CEFF86",
          fontFamily: "kanit",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: isMobile ? "44px" : "72px" ,
          lineHeight: "80%",
        }} >Coming Soon</h1>
        </div>
      </div>
    </div>
    // <div
    //   style={{
    //     backgroundImage: `url(${HomeImage})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     height: "100vh",
    //     backgroundColor: "#0D0A11",
    //   }}
    //   className="flex"
    // >
    //   <div className="m-auto border border-[#CEFF86] px-10 py-6 rounded-3xl text-center">
    //     <h1
    //       className="text-center"
    //       style={{
    //         marginBottom: "1rem",
    //         WebkitTextStroke: "2px #CEFF86",
    //         fontFamily: "kanit",
    //         fontStyle: "normal",
    //         fontWeight: "700",
    //         fontSize: "72px",
    //         lineHeight: "80%",
    //       }}
    //     >
    //       STAKE HEADS
    //     </h1>
    //     <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
    //     <div className="flex justify-around my-12 text-white">
    //         <div>
    //             <h3 className="pb-2 text-[16px] font-[700]">Total Staked</h3>
    //             <h1 className="text-[36px] font-[700]">X/X</h1>
    //         </div>
    //         <div>
    //             <h3 className="pb-2 text-[16px] font-[700]">Min value locked</h3>
    //             <h1 className="text-[36px] font-[700]">$X</h1>
    //         </div>
    //     </div>
    //     <Button
    //       variant="contained"
    //       className="m-auto text-center"
    //       sx={{
    //         letterSpacing: ".001rem",
    //         width: "90%",
    //         textTransform: "none",
    //         fontSize: ".75rem",
    //         fontWeight: "800",
    //         borderRadius: ".5rem",
    //         backgroundColor: "#CEFF86",
    //         color: "#000",
    //       }}
    //     >
    //       Connect wallet
    //     </Button>
    //   </div>
    // </div>
  );
}
