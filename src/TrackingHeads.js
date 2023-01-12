import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import { Tabs, Tab, AppBar } from "@mui/material";

import DonutChart from "react-donut-chart";
import { bottom, left } from "@popperjs/core";
import { color, fontSize, fontWeight } from "@mui/system";

import Avatar from "@mui/material/Avatar";

import all from "../src/assets/all.svg";
import eth from "../src/assets/eth.svg";
import ava from "../src/assets/ava.svg";
import bnb from "../src/assets/bnb.svg";
import fan from "../src/assets/fan.svg";
import opt from "../src/assets/opt.svg";
import pol from "../src/assets/pol.svg";
import threenine from "../src/assets/+39.svg";
import other2 from "../src/assets/other2.svg";
import others from "../src/assets/others.svg";
import matic from "../src/assets/matic.svg";
import vgx from "../src/assets/vgx.svg";
import shib from "../src/assets/shib.svg";
import usdc from "../src/assets/usdc.svg";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// function generate(element) {
//   return [0, 1, 2, 3, 4, 5].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     })
//   );
// }

const rows = [
  ["NET WORTH", "CLAIMABLE", "TOTAL ASSETS", "TOTAL DEBDS"],
  ["$578,742,962.61", "$0", "$578,742,962.61", "$0"],
];

export function BasicChips() {
  return (
    <Stack direction="row" spacing={4}>
      <Chip
        label="All"
        variant="outlined"
        sx={{ color: "white", fontWeight: "bold", border: "1px solid #CEFF86" }}
        avatar={<Avatar alt="all" src={all} />}
      ></Chip>
      <Chip
        label="Etherum"
        variant="outlined"
        sx={{
          color: "white",
          opacity: "0.3",
          fontWeight: "bold",
          border: "1px solid #2E2E2E",
        }}
        avatar={<Avatar alt="eth" src={eth} />}
      ></Chip>
      <Chip
        label="Avalanche"
        variant="outlined"
        sx={{ color: "white", opacity: "0.3", fontWeight: "bold" }}
        avatar={<Avatar alt="ava" src={ava} />}
      ></Chip>
      <Chip
        label="BNB Chain"
        variant="outlined"
        sx={{ color: "white", opacity: "0.3", fontWeight: "bold" }}
        avatar={<Avatar alt="bnb" src={bnb} />}
      ></Chip>
      <Chip
        label="Fantom"
        variant="outlined"
        sx={{ color: "white", opacity: "0.3", fontWeight: "bold" }}
        avatar={<Avatar alt="fan" src={fan} />}
      ></Chip>
      <Chip
        label="optamasm"
        variant="outlined"
        sx={{ color: "white", opacity: "0.3", fontWeight: "bold" }}
        avatar={<Avatar alt="opt" src={opt} />}
      ></Chip>
      <Chip
        label="Polygon"
        variant="outlined"
        sx={{ color: "white", opacity: "0.3", fontWeight: "bold" }}
        avatar={<Avatar alt="poly" src={pol} />}
      ></Chip>
      <Chip
        label="+39"
        variant="outlined"
        sx={{ color: "white", opacity: "0.3", fontWeight: "bold" }}
        // avatar={<Avatar alt="+39" src={threenine} />}
      ></Chip>
    </Stack>
  );
}
export default function TrackingHeads() {
  const [value, setValue] = React.useState("one");

  const handleTabs = (e, val) => {
    setValue(val);
  };

  return (
    <div style={{ background: "#000000", padding: "2rem 3rem" }}>
      <h1
        style={{
          marginBottom: "2rem",
          WebkitTextStroke: "2px #CEFF86",
          fontFamily: "kanit",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "72px",
          lineHeight: "80%",
        }}
      >
        TRACKING HEADS
      </h1>
      <TableContainer
        sx={{
          background: "#000000",
          border: "1px solid #CEFF86",
          borderRadius: "1rem",
        }}
        component={Paper}
      >
        <Table
          sx={{
            minWidth: 650,
            marginTop: "1rem",
            marginBottom: "2rem",
          }}
          aria-label="simple table"
        >
          <TableBody>
            {rows.map((row, i) => {
              return (
                <TableRow
                  key={i}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    color: "#CEFF86",
                  }}
                >
                  {row.map((cell) => (
                    <TableCell
                      sx={{
                        color: i == 0 ? "#CEFF86" : "white",
                        fontSize: i == 0 ? "18px" : "24px",
                        borderBottom: "0px",
                        fontFamily: "kanit",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "80%",
                      }}
                      component="th"
                      scope="row"
                    >
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ width: "100%" }}>
        <Tabs
          sx={{
            "& .Mui-selected": {
              color: "#CEFF86 !important",
              textDecorationLine: "underline",
            },
            marginTop: "3.5rem",
            borderBottom: "0",
            "& .MuiTabs-indicator": {
              background: "#000000",
            },
          }}
          //   inkBarStyle={{ color: "#CEFF86" }}
          //   sx={{ marginTop: "3.5rem" }}
          value={value}
          onChange={handleTabs}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab
            value="one"
            label="Portfolio"
            sx={{
              color: "white",
            }}
          />
          <Tab value="two" label="Transactions" sx={{ color: "white" }} />
          <Tab value="three" label="Analytics" sx={{ color: "white" }} />
          <Tab value="four" label="Wallet Profiler" sx={{ color: "white" }} />
          <Tab value="five" label="NFT Profiler" sx={{ color: "white" }} />
        </Tabs>
        <TabPanel sx={{ marginTop: "3rem" }}></TabPanel>
      </Box>
    </div>
  );
}

function TabPanel() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <div>
      <BasicChips />
      <div style={{ display: "flex" }}>
        <DonutChart
          //   height={100}
          width={250}
          legend={false}
          data={[
            {
              //   label: "ETH",
              value: 44.02,
            },
            {
              //   label: "USDC",
              value: 14.11,
              //: true,
            },
            {
              //   label: "SHIB",
              value: 13.1,
              //: true,
            },
            {
              //   label: "VGX",
              value: 10.67,
              //: true,
            },
            {
              //   label: "MATIX",
              value: 4.98,
              //: true,
            },
            {
              //   label: "OTHERS",
              value: 13.12,
              //: true,
            },
          ]}
        />
        <List dense={dense}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="eth" src={eth} />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary={
                <p>
                  ETH <span className="ml-14">44.02%</span>{" "}
                </p>
              }
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="USDC" src={usdc} />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="USDC"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="SHIB" src={shib} />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="SHIB"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="VGX" src={vgx} />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="VGX"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="MATIC" src={matic} />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="MATIC"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="OTHERS" src={others} />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="OTHERS"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
        </List>

        <List dense={dense}>
          <ListItem>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="44.02%"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="14.11%"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="13.10%"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="10.67%"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="4.98%"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="13.12%"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="44.02%"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
        </List>

        <DonutChart
          //   height={100}
          width={250}
          legend={false}
          data={[
            {
              //   label: "ETH",
              value: 97.98,
            },
            {
              //   label: "AVALANCHE",
              value: 1.77,
              //: true,
            },
            {
              //   label: "BNB CHAIN",
              value: 0.21,
              //: true,
            },
            {
              //   label: "FANTOM",
              value: 0.04,
              //: true,
            },
            {
              //   label: "OPTIMISM",
              value: 0.0,
              //: true,
            },
            {
              //   label: "OTHER",
              value: 0.0,
              //: true,
            },
          ]}
        />
        <List dense={dense}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="eth" src={eth} />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="ETH"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="AVALANCHE" src={ava} />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="AVALANCHE"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="BNB CHAIN" src={bnb} />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="BNB CHAIN"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="FANTOM" src={fan} />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="FANTOM"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="OPTIMISM" src={opt} />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="OPTIMISM"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="OTHER" src={other2} />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="OTHER"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
        </List>
        <List dense={dense}>
          <ListItem>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="97.98%"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="1.77%"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="0.21%"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="0.04%"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="0.00%"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="0.00%"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ color: "#CEFF86", fontSize: "14px" }}
              disableTypography
              primary="44.02%"
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
}
