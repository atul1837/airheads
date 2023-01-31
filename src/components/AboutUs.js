import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import aboutUsBanner from "../assets/aboutus/aboutUsBanner.svg";
import aboutUsBannerHover from "../assets/aboutus/aboutUsBannerHover.svg";

import team1 from "../assets/aboutus/team1.svg";
import team1Hover from "../assets/aboutus/team1Hover.svg";

import team2 from "../assets/aboutus/team2.svg";
import team2Hover from "../assets/aboutus/team2Hover.svg";
import team3 from "../assets/aboutus/team3.svg";
import team3Hover from "../assets/aboutus/team3Hover.svg";
import team4 from "../assets/aboutus/team4.svg";
import team4Hover from "../assets/aboutus/team4Hover.svg";
import team5 from "../assets/aboutus/team5.svg";
import team5Hover from "../assets/aboutus/team5Hover.svg";
import team6 from "../assets/aboutus/team6.svg";
import team6Hover from "../assets/aboutus/team6Hover.svg";
import team7 from "../assets/aboutus/team7.svg";
import team7Hover from "../assets/aboutus/team7Hover.svg";

const team = [
  {
    key: "Head Lesso Critter",
    name: "Head Lesso Critter",
    designation: "Co-Founder",
    about:
      "(Prima Buildooor): \n\nThe one who had a divine intervention of the Airheads in his dreams. Just kidding. A random chap with a not-so-random brain.",
    image: team1,
    hoverImage: team1Hover,
  },
  {
    key: "AIRine Boozey",
    name: "AIRine Boozey",
    designation: "Co-Founder",
    about:
      "(Prima Buildooor who joined after the Prima Buildooor):\n\n Well, he has the thickest skin in the game, so he must be right. This is why he is spending his nights making sure everything is in place.",
    image: team2,
    hoverImage: team2Hover,
  },
  {
    key: "DEVine Head",
    name: "DEVine Head",
    designation: "Lead Developer",
    about:
      "(Talking to computers and shit): This isn’t the first time he is doing it. Source: Trust me, bro!",
    image: team3,
    hoverImage: team3Hover,
  },
  {
    key: "shoARTy Bukminster",
    name: "shoARTy Bukminster",
    designation: "Artist",
    about:
      "(Because Existential Crisis?): Come on. The man is into comic art and IRL Air Heads. The best of both worlds.",
    image: team4,
    hoverImage: team4Hover,
  },
  {
    key: "Socella Mangro",
    name: "Socella Mangro",
    designation: "Social Media Lead",
    about: "(Get a life?): The degen shitposter. Because interns are a passè.",
    image: team5,
    hoverImage: team5Hover,
  },
  {
    key: "El Communisto",
    name: "El Communisto",
    designation: "Community Lead",
    about:
      "(Coz Politics is too Nasty for him): Master of buying high and selling low. Decided to pivot into community management once he got rekt.",
    image: team6,
    hoverImage: team6Hover,
  },
  {
    key: "g.a.d",
    name: "g.a.d",
    designation: "Website Developer",
    about:
      "(The face of it): Like literally. Whatever you see here has come out of his fingers. No Pun intended.",
    image: team7,
    hoverImage: team7Hover,
  },
];

export default function AboutUs() {
  return (
    <Box
      sx={{
        padding: "2rem",
        background: "#000",
        color: "#fff",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          marginTop: "1rem",
          marginBottom: "2.5rem",
          color: "#000",
          WebkitTextStroke: "1px #CEFF86",
          fontFamily: "kanit",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "72px",
        }}
      >
        ABOUT US
      </Typography>
      <Card sx={{ width: "80%", borderRadius: "2rem" }}>
        <CardMedia
          component="img"
          alt="about us"
          height="240"
          image={aboutUsBanner}
          onMouseOver={(e) => (e.currentTarget.src = aboutUsBannerHover)}
          onMouseLeave={(e) => (e.currentTarget.src = aboutUsBanner)}
        />
      </Card>
      <Typography
        variant="h5"
        component="h5"
        sx={{
          margin: "2.5rem 0 1rem 0",
          fontWeight: "bold",
        }}
      >
        IN A LAND FAR
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={4} spacing={4}>
          <Typography>
            <Typography variant="p" component="p">
              far away, some hippies had a cosmic vision. But then they
              encountered a downer and went back to sleep. Finding the purpose
              of your life? How about we start tomorrow?
              <br />
              <br />
              AirHeads are enlightened individuals that celebrate things as they
              are. A composed demeanour, unapologetic beingness, encompassing a
              rebel within, AirHeads only care about one thing!
              <br />
              <br />
              Expression. Freedom. Freedom of Expression. Yes. That’s the one.
              <br />
              <br />
              Mankind has evolved by expressing themselves through various
              modes. AirHeads kind of found their vibe in digital art.
            </Typography>
          </Typography>
        </Grid>
        <Grid item md={1}></Grid>
        <Grid item md={4}>
          <Typography>
            However, this evolution had the potential of going haywire. You
            could either choose the degen route by embracing a freaking cat
            personality OR you could just masquerade as a Nirvana seeking punk.
            <br />
            Alternatively, you might be into some monkey shit. Anyone? No?
            Anyway, you get the drift.
            <br />
            As Airheads, we intend to celebrate this vibrant vibe. The modern
            era way of expression. Airheads don’t judge! They mostly trip on the
            diverse creativity that leaves a
            <Typography
              variant="h5"
              component="h5"
              sx={{ color: "#CEFF86", fontWeight: "bold", textAlign: "right" }}
            >
              MARK
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      <Typography
        variant="h1"
        component="h1"
        sx={{
          marginTop: "1rem",
          marginBottom: "2.5rem",
          color: "#000",
          WebkitTextStroke: "1px #CEFF86",
          fontFamily: "kanit",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "72px",
        }}
      >
        TEAM
      </Typography>
      <Grid container spacing={2}>
        {team.map((member) => (
          <Grid item xs={12} md={4} key={member.key}>
            <Card
              raised={false}
              sx={{ boxShadow: "none", background: "#000", color: "#fff" }}
            >
              <CardMedia
                sx={{ height: 320, borderRadius: "1rem" }}
                component={"img"}
                image={member.image}
                title={member.name}
                onMouseOver={(e) => (e.currentTarget.src = member.hoverImage)}
                onMouseLeave={(e) => (e.currentTarget.src = member.image)}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {member.name}
                </Typography>
                <Typography
                  gutterBottom
                  variant="p"
                  component="div"
                  sx={{
                    color: "#FFFFF6",
                    opacity: "60%",
                  }}
                >
                  {member.designation}
                </Typography>
                <Typography variant="body2">{member.about}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
