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
import headmapdesktop1Webp from "../../src/assets/headmapdesktop1.webp";
import headmapdesktop2Webp from "../../src/assets/headmapdesktop2.webp";
import headmapdesktop3Webp from "../../src/assets/headmapdesktop3.webp";
import headmapdesktop4Webp from "../../src/assets/headmapdesktop4.webp";
import headmapdesktop5Webp from "../../src/assets/headmapdesktop5.webp";
import headmapdesktop6Webp from "../../src/assets/headmapdesktop6.webp";
import headmapdesktop7Webp from "../../src/assets/headmapdesktop7.webp";
import headmapdesktop8Webp from "../../src/assets/headmapdesktop8.webp";

import { Card, CardContent, Typography } from "@mui/material";

export default function Headmap() {
  const [hoveredImage, setHoveredImage] = React.useState(null);

  const imageData = [
    {
      img: {
        src: headmapdesktop1,
        webp: headmapdesktop1Webp,
        alt: "headmapdesktop1",
        style: {
          height: isMobile ? "22.5vw" : "18.5vw",
          position: "absolute",
          top: isMobile ? "137vw" : "25vw",
          left: isMobile ? "11vw" : "30vw",
        },
      },
      hover: {
        style: {
          position: "absolute",
          width: "40vw",
          top: "25vw",
          left: "30vw",
        },
        heading: "Tracker Heads:",
        description:
          "Builders are here Build. We have identified a major problem across the web3 ecosystem and tried to solve it via our Tracker Heads. Tracking heads is a state-of-the-art portfolio tracker which helps you sort and organise all your multiple wallets into one clean/organised system. Keeping a track of your buy/sell price on excel? Not anymore! Are you even a true degen if you don’t have holdings that are spread across multiple wallets? Yeah. We get it. It’s a significant pain to manage the entire show. Tracking heads is on its way to rescue you. Oh, did we mention that Tracking Heads is a smart mofo? It’s not only tracking your NFTs but learning about it from the internet to generate suggestions about selling them at the right time!",
      },
      card: {
        style: {
          top: !isMobile && "55%",
          left: !isMobile && "8%",
        },
      },
    },
    {
      img: {
        src: headmapdesktop2,
        webp: headmapdesktop2Webp,
        alt: "headmapdesktop2",
        style: {
          height: isMobile ? "27.3vw" : "23.3vw",
          position: "absolute",
          top: isMobile ? "83vw" : "8vw",
          left: isMobile ? "25vw" : "50vw",
        },
      },

      hover: {
        style: {
          position: "absolute",
          width: "40vw",
          top: isMobile ? "79" : "25vw",
          left: isMobile ? "34" : "30vw",
        },
        heading: "Community:",
        description:
          "Co-Creation is a core value of a true AirHead. Our community and its interests will always lead this project. The AirHead Community is a home to hundreds of thousands of developers, technologists, designers, users, holders and enthusiasts. Our goal is to create a community of holders who are passionate about our project and dedicated to its success, and we plan to achieve this by consistently delivering high-quality products and providing transparent information. We believe that by fostering a strong sense of community and trust, we can ensure the long-term success and growth of Airheads.",
      },
      card: {
        style: {
          top: !isMobile && "45%",
          left: !isMobile && "30%",
        },
      },
    },
    {
      img: {
        src: headmapdesktop3,
        webp: headmapdesktop3Webp,
        alt: "headmapdesktop3",
        style: {
          height: isMobile ? "28.5vw" : "24.5vw",
          position: "absolute",
          top: isMobile ? "37vw" : "2vw",
          left: isMobile ? "11vw" : "21vw",
        },
      },
      hover: {
        style: {
          position: "absolute",
          width: "40vw",
          top: "25vw",
          left: "30vw",
        },
        heading: "SNEAKER HEADS:",
        description:
          "With great power comes great responsibility. Which is why, we want to take it a step further and set an example for once and all. We’ll kickstart this journey in the pre-mint phase. We will be building out custom handcrafted and the most worn shoe of the generation, the Nike Air Force 1 '07 low-top white sneakers. These sneakers would resonate with the our theme and celebrate the top projects of Solana. Not only will this help us reach the heart of the Solana NFT community, but it will also serve as a token of appreciation for this most dynamic art form. Not a holder of DeGods, OkayBears or Cets ? More variations coming soon.... With a limited supply, Sneaker Heads are available to purchase with $SOL , $DUST and more. Each Purchase also comes with an exclusive OG Spot for our Air Heads Mint.",
      },
      card: {
        style: {
          top: !isMobile && "20%",
          left: !isMobile && "10%",
        },
      },
    },
    {
      img: {
        src: headmapdesktop4,
        webp: headmapdesktop4Webp,
        alt: "headmapdesktop4",
        style: {
          height: isMobile ? "22.8vw" : "18.8vw",
          position: "absolute",
          top: isMobile ? "30vw" : "20vw",
          left: isMobile ? "69.2vw" : "78.2vw",
        },
      },
      hover: {
        style: {
          position: "absolute",
          width: "40vw",
          top: "25vw",
          left: "30vw",
        },
        heading: "Shop Heads:",
        description:
          "Well, didn’t you always want an artform that can be embraced and adored at the same time? Your wish is our command. Shop Heads is an exclusive merchandise for our beloved Air Heads. You can use your $PAINT to take home the quirkiest merch that defines your personality. AirHead can’t be contained in the boundaries of a digital space. So we will soon launch our pop up stores around the world in different locations to raise awareness about the project and reach a further audience. Say what? That’s tapping into some fresh Normies to bring them onto the web3 space. The Air Heads shop has been up and running since the start of the project. The items available on the shop as well as our website are - Hoodies - Tshirts - Shorts - Track pants",
      },
      card: {
        style: {
          top: !isMobile && "20%",
          left: !isMobile && "30%",
        },
      },
    },
    {
      img: {
        src: headmapdesktop5,
        webp: headmapdesktop5Webp,
        alt: "headmapdesktop5",
        style: {
          height: isMobile ? "14vw" : "10vw",
          position: "absolute",
          top: isMobile ? "48vw" : "4vw",
          left: isMobile ? "47vw" : "50vw",
        },
      },
      hover: {
        style: {
          position: "absolute",
          width: "40vw",
          top: "25vw",
          left: "30vw",
        },
        heading: "Air Job Portal:",
        description:
          "We at Airheads aim to revolutionize the freelancing industry by creating a job portal specifically for Web 3 users. Our focus is on connecting highly-skilled developers, artists, UI/UX designers, and other Web 3-centric professionals with employers who are looking for top talent. Our goal is to make it easier for Web 3 professionals to connect with potential employers, and for employers to find and hire the best talent in the industry. By offering a cutting-edge solution for the freelancing industry, Airheads is poised to make a big impact and bring the benefits of Web 3 to the forefront.",
      },
      card: {
        style: {
          top: !isMobile && "9%",
          left: !isMobile && "7%",
        },
      },
    },
    {
      img: {
        src: headmapdesktop6,
        webp: headmapdesktop6Webp,
        alt: "headmapdesktop6",
        style: {
          height: isMobile ? "23.4vw" : "19.4vw",
          position: "absolute",
          top: isMobile ? "78vw" : "2vw",
          left: isMobile ? "71vw" : "73vw",
        },
      },
      hover: {
        style: {
          position: "absolute",
          width: "40vw",
          top: "25vw",
          left: "30vw",
        },
        heading: "$PAINT Staking:",
        description:
          "All Airhead holders can stake their NFTs start earning $PAINT per day. I’ll drink to that. Wait. It’s not over yet. As an extension to the staking system, we would also shower some love in the form of Degen Gambling for our community. This is going to be a degnerate form of gambling to get a sneaky multiple that will decide the fate of your $PAINT for the next two weeks. This multiple could be 0.25x, 0.5x, 0.75x, 1x, 1.25x, 1.5x and 2x. But there's a catch....",
      },
      card: {
        style: {
          top: !isMobile && "25%",
          left: !isMobile && "30%",
        },
      },
    },
    {
      img: {
        src: headmapdesktop7,
        webp: headmapdesktop7Webp,
        alt: "headmapdesktop7",
        style: {
          height: isMobile ? "18vw" : "14vw",
          position: "absolute",
          top: isMobile ? "116vw" : "33vw",
          left: isMobile ? "57.3vw" : "60.3vw",
        },
      },
      hover: {
        style: {
          position: "absolute",
          width: "40vw",
          top: "25vw",
          left: "30vw",
        },
        heading: "Airverse:",
        description:
          "Because of the denounced degens we are, we decided to take it out of the world. Literally. Airverse is a dedicated Metaverse for AirHeads. We’ll reveal more on it when the time is ripe.",
      },
      card: {
        style: {
          top: !isMobile && "75%",
          left: !isMobile && "35%",
        },
      },
    },
    {
      img: {
        src: headmapdesktop8,
        webp: headmapdesktop8Webp,
        alt: "headmapdesktop8",
        style: {
          height: isMobile ? "15.3vw" : "11.3vw",
          position: "absolute",
          top: isMobile ? "21.5vw" : "0.5vw",
          left: isMobile ? "56vw" : "62vw",
        },
      },
      hover: {
        style: {
          position: "absolute",
          width: "40vw",
          top: "25vw",
          left: "30vw",
        },
        heading: "The Air Club:",
        description:
          "Airheads plans to build a real-life nightclub that plans to use web 3 to create a unique and exciting experience for its patrons. The club plans to incorporate Solana and other currencies and reward users for participating in events and parties. This innovative approach to nightlife will bring attention and attract new investors and patrons to the club, further solidifying its place as a leader in the entertainment industry. By offering a cutting-edge experience and rewarding its patrons for their loyalty, Airheads is poised to make a big impact in the world of nightlife.",
      },
      card: {
        style: {
          top: !isMobile && "20%",
          left: !isMobile && "20%",
        },
      },
    },
  ];

  return (
    // add HeadmapImage as backgroud image in div
    <div
      style={{
        backgroundColor: "#000",
        backgroundImage: `url(${HeadmapImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      (
      <>
        {imageData.map((data, i) => (
          <>
            <picture>
              <source srcSet={data.img.webp} />
              <img
                alt={data.img.alt}
                src={data.img.src}
                style={data.img.style}
                onMouseEnter={() => setHoveredImage(i)}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </picture>
            <Card
              sx={{
                width: isMobile ? "80%" : "45vw",
                background: "#0D0A11",
                textAlign: "left",
                border: "2px solid #CEFF86",
                borderRadius: "2rem",
                zIndex: "9999",
                position: "relative",
                top: data.card.style.top,
                left: data.card.style.left,
                margin: isMobile && "auto",
                display: hoveredImage === i ? "inherit" : "none",
                pointerEvents: "none",
              }}
            >
              <CardContent sx={{ padding: "1rem 2.5rem" }}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    marginTop: "1rem",
                    marginBottom: "1.5rem",
                    color: "#000",
                    WebkitTextStroke: "1px #CEFF86",
                    fontFamily: "kanit",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "28px",
                    textTransform: "uppercase",
                  }}
                >
                  {data.hover.heading}
                </Typography>
                <Typography
                  gutterBottom
                  variant="p"
                  component="div"
                  sx={{
                    color: "#fff",
                    fontSize: "1.1rem",
                    fontFamily: "awesome",
                    fontStyle: "normal",
                    fontWeight: "500",
                  }}
                >
                  {data.hover.description}
                </Typography>
              </CardContent>
            </Card>
          </>
        ))}
      </>
      )
    </div>
  );
}
