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
        sx={{
          color: "white",
          fontWeight: "bold",
          border: "1px solid #CEFF86",
          width: "80px",
        }}
        avatar={<Avatar alt="all" src={all} />}
      ></Chip>
      <Chip
        label="Etherum"
        variant="outlined"
        sx={{
          color: "white",
          width: "120px",
          fontWeight: "bold",
          border: "1px solid #2E2E2E",
        }}
        avatar={<Avatar alt="eth" src={eth} />}
      ></Chip>
      <Chip
        label="Avalanche"
        variant="outlined"
        sx={{
          color: "white",
          border: "1px solid #2E2E2E",
          fontWeight: "bold",
          width: "120px",
        }}
        avatar={<Avatar alt="ava" src={ava} />}
      ></Chip>
      <Chip
        label="BNB Chain"
        variant="outlined"
        sx={{
          color: "white",
          border: "1px solid #2E2E2E",
          fontWeight: "bold",
          width: "120px",
        }}
        avatar={<Avatar alt="bnb" src={bnb} />}
      ></Chip>
      <Chip
        label="Fantom"
        variant="outlined"
        sx={{
          color: "white",
          border: "1px solid #2E2E2E",
          fontWeight: "bold",
          width: "120px",
        }}
        avatar={<Avatar alt="fan" src={fan} />}
      ></Chip>
      <Chip
        label="Optamasm"
        variant="outlined"
        sx={{
          color: "white",
          border: "1px solid #2E2E2E",
          fontWeight: "bold",
          width: "120px",
        }}
        avatar={<Avatar alt="opt" src={opt} />}
      ></Chip>
      <Chip
        label="Polygon"
        variant="outlined"
        sx={{
          color: "white",
          border: "1px solid #2E2E2E",
          fontWeight: "bold",
          width: "120px",
        }}
        avatar={<Avatar alt="poly" src={pol} />}
      ></Chip>
      <Chip
        label="+39"
        variant="outlined"
        sx={{
          color: "white",
          border: "1px solid #2E2E2E",
          fontWeight: "bold",
          width: "50px",
        }}
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
              marginBottom: "25px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
          <Tab
            value="two"
            label="Transactions"
            sx={{
              color: "white",
              marginBottom: "25px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
          <Tab
            value="three"
            label="Analytics"
            sx={{
              color: "white",
              marginBottom: "25px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
          <Tab
            value="four"
            label="Wallet Profiler"
            sx={{
              color: "white",
              marginBottom: "25px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
          <Tab
            value="five"
            label="NFT Profiler"
            sx={{
              color: "white",
              marginBottom: "25px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "55px",
        }}
      >
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
          colors={[
            "#4D58FF",
            "#4BF9FF",
            "#FCED69",
            "#BD6CFC",
            "#FA8803",
            "#999999",
          ]}
          strokeColor=""
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
                  <span style={{ width: "100px", display: "inline-block" }}>
                    ETH
                  </span>
                  <span className="ml-14">44.02%</span>
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
              primary={
                <p>
                  <span style={{ width: "100px", display: "inline-block" }}>
                    USDC
                  </span>
                  <span className="ml-14">14.11%</span>
                </p>
              }
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
              primary={
                <p>
                  <span style={{ width: "100px", display: "inline-block" }}>
                    SHIB
                  </span>
                  <span className="ml-14">13.10%</span>
                </p>
              }
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
              primary={
                <p>
                  <span style={{ width: "100px", display: "inline-block" }}>
                    VGX
                  </span>
                  <span className="ml-14">10.67%</span>
                </p>
              }
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
              primary={
                <p>
                  <span style={{ width: "100px", display: "inline-block" }}>
                    MATIC
                  </span>
                  <span className="ml-14">4.98%</span>
                </p>
              }
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
              primary={
                <p>
                  <span style={{ width: "100px", display: "inline-block" }}>
                    OTHERS
                  </span>
                  <span className="ml-14">13.12%</span>
                </p>
              }
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
          colors={["#4D58FF", "#FA8803"]}
          strokeColor=""
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
                  <span style={{ width: "100px", display: "inline-block" }}>
                    ETH
                  </span>
                  <span className="ml-14">97.98%</span>{" "}
                </p>
              }
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
              primary={
                <p>
                  <span style={{ width: "100px", display: "inline-block" }}>
                    AVALANCHE
                  </span>
                  <span className="ml-14">1.77%</span>{" "}
                </p>
              }
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
              primary={
                <p>
                  <span style={{ width: "100px", display: "inline-block" }}>
                    BNB CHAIN
                  </span>
                  <span className="ml-14">0.21%</span>{" "}
                </p>
              }
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
              primary={
                <p>
                  <span style={{ width: "100px", display: "inline-block" }}>
                    FANTOM
                  </span>
                  <span className="ml-14">0.04%</span>{" "}
                </p>
              }
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
              primary={
                <p>
                  <span style={{ width: "100px", display: "inline-block" }}>
                    OPTIMISM
                  </span>
                  <span className="ml-14">00.00%</span>{" "}
                </p>
              }
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
              primary={
                <p>
                  <span style={{ width: "100px", display: "inline-block" }}>
                    OTHER
                  </span>
                  <span className="ml-14">00.00%</span>{" "}
                </p>
              }
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
}
