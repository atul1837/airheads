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
import { Fab, Button, Typography, Menu, MenuItem } from "@mui/material";
import { CaretDownFilledIcon, DiscordIcon, TwitterIcon } from "../icons";

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
  const [activePage, setActivePage] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsMenuOpen(!isMenuOpen);
  }

  const handleClose = (event) => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (pages && pages.length) {
      setActivePage(pages[0]);
    }
  }, []);

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
          }}
        >
          Connect wallet
        </Button>
        <img src={sideBarDrake} alt="drake" className="px-12" />
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
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 0 }}
      >
        {activePage && activePage.component}
      </Box>
    </Box>
  );
}
