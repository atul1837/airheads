import * as React from "react";
import { isMobile } from "react-device-detect";
import HomeImage from "../../src/assets/homeNew.jpg";

import HomeImage1 from "../../src/assets/homeNft1.png"
import HomeImage2 from "../../src/assets/homeNft2.png"
import HomeImage3 from "../../src/assets/homeNft3.png"
import HomeImage4 from "../../src/assets/homeNft4.png"
import HomeImage5 from "../../src/assets/homeNft5.png"
import HomeImage6 from "../../src/assets/homeNft6.png"
import HomeImage7 from "../../src/assets/homeNft7.png"
import HomeImage8 from "../../src/assets/homeNft8.png"
import HomeImage9 from "../../src/assets/homeNft9.png"
import HomeImage10 from "../../src/assets/homeNft10.png"
import HomeImage11 from "../../src/assets/homeNft11.png"
import HomeImage12 from "../../src/assets/homeNft12.png"
import HomeImage13 from "../../src/assets/homeNft13.png"
import HomeImage14 from "../../src/assets/homeNft14.png"
import HomeImage15 from "../../src/assets/homeNft15.png"
import HomeImage16 from "../../src/assets/homeNft16.png"
import HomeImage17 from "../../src/assets/homeNft17.png"
import crystal1 from "../../src/assets/headmapdesktop4.png"
import crystal2 from "../../src/assets/headmapdesktop7.png"

const imageData = [
  {
    img: {
      src: HomeImage1,
      // webp: HomeImage1Webp,
      alt: "HomeImage1",
      style: {
        height: isMobile ? "14vw" : "7vw",
        position: "absolute",
        top: isMobile ? "100vw" : "22vw",
        left: isMobile ? "70vw" : "79vw",
      },
    },
  },
  {
    img: {
      src: isMobile? crystal2   : HomeImage2,
      alt: "HomeImage2",
      style: {
        height: isMobile ? "25vw" : "5vw",
        position: "absolute",
        top: isMobile ? "73vw" : "20vw",
        left: isMobile ? "40vw" : "23vw",
      },
    },
  },
  {
    img: {
      src: HomeImage3,
      alt: "HomeImage3",
      style: {
        height: isMobile ? "33vw" : "17vw",
        position: "absolute",
        top: isMobile ? "90vw" : "20vw",
        left: isMobile ? "11vw" : "44vw",
        zIndex: "100"
      },
    },
  },
  {
    img: {
      src: HomeImage4,
      // webp: HomeImage1Webp,
      alt: "HomeImage4",
      style: {
        height: isMobile ? "21vw" : "15vw",
        position: "absolute",
        top: isMobile ? "127vw" : "30vw",
        left: isMobile ? "10vw" : "20vw",
      },
    },
  },
  {
    img: {
      src: HomeImage5,
      // webp: HomeImage5Webp,
      alt: "HomeImage5",
      style: {
        height: isMobile ? "30vw" : "10vw",
        position: "absolute",
        top: isMobile ? "150vw" : "-2vw",
        left: isMobile ? "60vw" : "50vw",
      },
    },
  },
  {
    img: {
      src: HomeImage6,
      // webp: HomeImage6Webp,
      alt: "HomeImage6",
      style: {
        height: isMobile ? "11vw" : "5vw",
        position: "absolute",
        top: isMobile ? "120vw" : "48vw",
        left: isMobile ? "65vw" : "72vw",
      },
    },
  },
  {
    img: {
      src: HomeImage7,
      // webp: HomeImage7Webp,
      alt: "HomeImage7",
      style: {
        height: isMobile ? "18vw" : "9vw",
        position: "absolute",
        top: isMobile ? "135vw" : "8vw",
        left: isMobile ? "42vw" : "80vw",
      },
    },
  },
  {
    img: {
      src: HomeImage8,
      // webp: HomeImage8Webp,
      alt: "HomeImage8",
      style: {
        height: isMobile ? "20vw" : "11vw",
        position: "absolute",
        top: isMobile ? "186vw" : "7vw",
        left: isMobile ? "62vw" : "56vw",
      },
    },
  },
  {
    img: {
      src: HomeImage9,
      // webp: HomeImage9Webp,
      alt: "HomeImage9",
      style: {
        height: isMobile ? "15vw" : "7.2vw",
        position: "absolute",
        top: isMobile ? "48vw" : "46vw",
        left: isMobile ? "42vw" : "31vw",
      },
    },
  },
  {
    img: {
      src: HomeImage10,
      // webp: HomeImage10Webp,
      alt: "HomeImage10",
      style: {
        height: isMobile ? "21vw" : "8vw",
        position: "absolute",
        top: isMobile ? "20vw" : "10vw",
        left: isMobile ? "53vw" : "38vw",
      },
    },
  },
  {
    img: {
      src: HomeImage11,
      // webp: HomeImage11Webp,
      alt: "HomeImage11",
      style: {
        height: isMobile ? "40vw" : "14vw",
        position: "absolute",
        top: isMobile ? "175vw" : "35vw",
        left: isMobile ? "11vw" : "70vw",
      },
    },
  },
  {
    img: {
      src: HomeImage12,
      // webp: HomeImage12Webp,
      alt: "HomeImage12",
      style: {
        height: isMobile ? "21vw" : "10vw",
        position: "absolute",
        top: isMobile ? "54vw" : "-5vw",
        left: isMobile ? "64vw" : "70vw",
      },
    },
  },
  {
    img: {
      src: isMobile? crystal1   : HomeImage13,
      // webp: HomeImage13Webp,
      alt: "HomeImage13",
      style: {
        height: isMobile ? "21vw" : "9vw",
        position: "absolute",
        top: isMobile ? "168vw" : "31vw",
        left: isMobile ? "35vw" : "39vw",
      },
    },
  },
  {
    img: {
      src: HomeImage14,
      // webp: HomeImage14Webp,
      alt: "HomeImage14",
      style: {
        height: isMobile ? "30vw" : "14vw",
        position: "absolute",
        top: isMobile ? "90vw" : "23vw",
        left: isMobile ? "50vw" : "62.9vw",
        zIndex: "99"
      },
    },
  },
  {
    img: {
      src: isMobile? crystal2   : HomeImage15,
      // webp: HomeImage15Webp,
      alt: "HomeImage15",
      style: {
        height: isMobile ? "28vw" : "9vw",
        position: "absolute",
        top: isMobile ? "130vw" : "42vw",
        left: isMobile ? "66vw" : "91.3vw",
      },
    },
  },
  {
    img: {
      src: HomeImage16,
      // webp: HomeImage16Webp,
      alt: "HomeImage16",
      style: {
        height: isMobile ? "20vw" : "8vw",
        position: "absolute",
        top: isMobile ? "60vw" : "46vw",
        left: isMobile ? "11vw" : "50vw",
      },
    },
  },
  {
    img: {
      src: HomeImage17,
      // webp: HomeImage17Webp,
      alt: "HomeImage17",
      style: {
        height: isMobile ? "20vw" : "9vw",
        position: "absolute",
        top: isMobile ? "29vw" : "1vw",
        left: isMobile ? "11vw" : "25vw",
      },
    },
  },
];

export default function Home() {
  
  React.useEffect(() => {
    // get all the images
    const images = document.querySelectorAll(".home-images");
    // transform3d these image on mouse move
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      images.forEach((img, idx) => {
        img.style.transform = `translate3d(${x * (idx + 1)}px, ${
          y * (idx + 1)
        }px, 0)`;
      });
    }
    );
  }, []);

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
    >
      (
        <>
        {imageData.map((data, i) => (
          <>
            <picture>
              <source srcSet={data.img.webp} />
              <img
                className="home-images"
                alt={data.img.alt}
                src={data.img.src}
                style={data.img.style}
              />
            </picture>
          </>
        ))}
        </>
      )

    </div>
  );
}
