import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import sideBarLogo from "../assets/sidebar_logo.svg";
import sideBarDrake from "../assets/sidebar_drake.svg";
import drakeAudioPlayed from "../assets/drakeAudioPlayed.png";
import drakeAudioPlayedWebp from "../assets/drakeaudioplayed.webp";

import {
  Fab,
  Button,
  Typography,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { CaretDownFilledIcon, DiscordIcon, TwitterIcon } from "../icons";
import { isMobile } from "react-device-detect";
import passionfruitAudio from "../assets/audio/passionfruit.mp3";

const drawerWidth = 290;

const socialIcons = [
  {
    key: "discord",
    icon: <DiscordIcon />,
  },
  {
    key: "twitter",
    icon: <TwitterIcon />,
  },
];

export default function SideBar({ pages, extraPages }) {
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [activePage, setActivePage] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [musicPlay, setMusicPlay] = useState(false);

  // const audio = new Audio(passionfruitAudio);

  useEffect(() => {
    if (musicPlay) {
      const audio = document.getElementById("sound");
      audio.play();
    } else {
      const audio = document.getElementById("sound");
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    }
  }, [musicPlay]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (pages && pages.length) {
      setActivePage(pages[0]);
    }
  }, []);

  if (isMobile)
    return (
      <>
        <AppBar
          position="static"
          sx={{
            color: "#CEFF86",
            backgroundColor: "#120328",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img className="my-4 h-10" src={sideBarLogo} alt="logo" />
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ mr: 2 }}
              onClick={() => setIsMobileDrawerOpen(true)}
            >
              - MENU
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              color: "#CEFF86",
              backgroundColor: "#120328",
              padding: "1rem",
            },
          }}
          open={isMobileDrawerOpen}
          anchor="right"
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img className="my-4 h-10" src={sideBarLogo} alt="logo" />
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ mr: 2 }}
              onClick={() => setIsMobileDrawerOpen(false)}
            >
              CLOSE
            </Typography>
          </Toolbar>

          <List sx={{ paddingBottom: 0, marginTop: 4 }}>
            {pages.map((page, i) => (
              <ListItem key={page.key} disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{ margin: "0", fontSize: ".8rem" }}
                    disableTypography
                    className="text-center font-semibold"
                    primary={page.heading}
                    onClick={() => setActivePage(page)}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Button
            sx={{ fontSize: ".8rem", fontWeight: 600, paddingTop: ".25rem" }}
            className="mt-0"
            variant="primary"
            onClick={handleClick}
          >
            MORE <CaretDownFilledIcon />
          </Button>
          {extraPages && (
            <Menu
              sx={{
                left: "52px",
                "& .MuiMenu-paper": {
                  backgroundColor: "#000",
                  borderRadius: "1.5rem",
                  border: "1.5px solid #CEFF86",
                  color: "#CEFF86",
                },
              }}
              open={isMenuOpen}
              onClose={handleClose}
              anchorEl={anchorEl}
            >
              {extraPages.map((page, i) => (
                <MenuItem
                  key={page.key}
                  value={page.heading}
                  onClick={() => {
                    setActivePage(page);
                    setIsMenuOpen(false);
                  }}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      style: {
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        textAlign: "center",
                      },
                    }}
                  >
                    {page.heading}
                  </ListItemText>
                </MenuItem>
              ))}
            </Menu>
          )}

          <div className="flex justify-center mt-8">
            {socialIcons.map((sc) => (
              <Fab
                key={sc.key}
                size="small"
                href="https://twitter.com/AirHeadsNFT_"
                target="_blank"
                sx={{
                  padding: ".1rem",
                  margin: ".25rem",
                  borderRadius: ".75rem",
                  backgroundColor: "#CEFF86",
                }}
              >
                {sc.icon}
              </Fab>
            ))}
          </div>
          <Button
            variant="contained"
            disabled
            sx={{
              letterSpacing: ".001rem",
              textTransform: "none",
              fontSize: ".75rem",
              fontWeight: "800",
              borderRadius: ".5rem",
              backgroundColor: "#CEFF86",
              color: "#000",
              margin: "2rem 3rem 4rem 3rem",
              pointerEvents: "none",
            }}
          >
            Connect wallet
          </Button>
          <picture>
            <source srcSet={musicPlay ? drakeAudioPlayedWebp : sideBarDrake} />
            <img
              onClick={() => setMusicPlay(!musicPlay)}
              src={musicPlay ? drakeAudioPlayed : sideBarDrake}
              alt="drake"
              className="px-12"
              style={{ cursor: "pointer" }}
            />
          </picture>
          <audio
            id="sound"
            controls
            style={{ display: "none" }}
            src={passionfruitAudio}
          ></audio>
          <div className="text-center mt-12" style={{ fontSize: ".6rem" }}>
            <Typography
              className="underline"
              variant="p"
              component="p"
              sx={{
                color: "#D0D8AF",
              }}
            >
              Terms and Conditions
            </Typography>
            <Typography
              className="underline"
              variant="p"
              component="p"
              sx={{
                color: "#D0D8AF",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ marginTop: "1rem", color: "#D0D8AF" }}
            >
              {`@${new Date().getFullYear()}, AIR HEADS`}
            </Typography>
          </div>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 0, backgroundColor: "#000" }}
        >
          {activePage && activePage.component}
        </Box>
      </>
    );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            color: "#CEFF86",
            backgroundColor: "#120328",
            padding: "1rem",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <img className="my-5 h-14" src={sideBarLogo} alt="logo" />
        <List sx={{ paddingBottom: 0 }}>
          {pages.map((page, i) => (
            <ListItem key={page.key} disablePadding>
              <ListItemButton>
                <ListItemText
                  sx={{ margin: "0", fontSize: ".8rem" }}
                  disableTypography
                  className="text-center font-semibold"
                  primary={page.heading}
                  onClick={() => setActivePage(page)}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button
          sx={{ fontSize: ".8rem", fontWeight: 600, paddingTop: ".25rem" }}
          className="mt-0"
          variant="primary"
          onClick={handleClick}
        >
          MORE <CaretDownFilledIcon />
        </Button>
        {extraPages && (
          <Menu
            sx={{
              left: "52px",
              "& .MuiMenu-paper": {
                backgroundColor: "#000",
                borderRadius: "1.5rem",
                border: "1.5px solid #CEFF86",
                color: "#CEFF86",
              },
            }}
            open={isMenuOpen}
            onClose={handleClose}
            anchorEl={anchorEl}
          >
            {extraPages.map((page, i) => (
              <MenuItem
                key={page.key}
                value={page.heading}
                onClick={() => {
                  setActivePage(page);
                  setIsMenuOpen(false);
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    style: {
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textAlign: "center",
                    },
                  }}
                >
                  {page.heading}
                </ListItemText>
              </MenuItem>
            ))}
          </Menu>
        )}

        <div className="flex justify-center mt-8">
          {socialIcons.map((sc) => (
            <Fab
              key={sc.key}
              size="small"
              href="https://twitter.com/AirHeadsNFT_"
              target="_blank"
              sx={{
                padding: ".1rem",
                margin: ".25rem",
                borderRadius: ".75rem",
                backgroundColor: "#CEFF86",
              }}
            >
              {sc.icon}
            </Fab>
          ))}
        </div>
        <Button
          variant="contained"
          sx={{
            letterSpacing: ".001rem",
            textTransform: "none",
            fontSize: ".75rem",
            fontWeight: "800",
            borderRadius: ".5rem",
            backgroundColor: "#CEFF86",
            color: "#000",
            margin: "2rem 3rem 4rem 3rem",
            pointerEvents: "none",
          }}
        >
          Connect wallet
        </Button>
        <picture>
          <source srcSet={musicPlay ? drakeAudioPlayedWebp : sideBarDrake} />
          <img
            onClick={() => setMusicPlay(!musicPlay)}
            src={musicPlay ? drakeAudioPlayed : sideBarDrake}
            alt="drake"
            className="px-12"
            style={{ cursor: "pointer" }}
          />
        </picture>
        <audio
          id="sound"
          controls
          style={{ display: "none" }}
          src={passionfruitAudio}
        ></audio>
        <div className="text-center mt-12" style={{ fontSize: ".6rem" }}>
          <Typography
            className="underline"
            variant="p"
            component="p"
            sx={{
              color: "#D0D8AF",
            }}
          >
            Terms and Conditions
          </Typography>
          <Typography
            className="underline"
            variant="p"
            component="p"
            sx={{
              color: "#D0D8AF",
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{ marginTop: "1rem", color: "#D0D8AF" }}
          >
            {`@${new Date().getFullYear()}, AIR HEADS`}
          </Typography>
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#000", p: 0 }}>
        {activePage && activePage.component}
      </Box>
    </Box>
  );
}
