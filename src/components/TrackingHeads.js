import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Portfolio from "./Portfolio";
import { Tabs, Tab } from "@mui/material";
import Transactions from "./Transactions";
import NftProfiler from "./NftProfiler";

const rows = [
  ["NET WORTH", "CLAIMABLE", "TOTAL ASSETS", "TOTAL DEBDS"],
  ["$578,742,962.61", "$0", "$578,742,962.61", "$0"],
];

export default function TrackingHeads() {
  const [value, setValue] = React.useState("portfolio");

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
            value="portfolio"
            label="Portfolio"
            sx={{
              color: "white",
              marginBottom: "25px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
          <Tab
            value="transactions"
            label="Transactions"
            sx={{
              color: "white",
              marginBottom: "25px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
          <Tab
            value="analytics"
            label="Analytics"
            sx={{
              color: "white",
              marginBottom: "25px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
          <Tab
            value="wallet-profiler"
            label="Wallet Profiler"
            sx={{
              color: "white",
              marginBottom: "25px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
          <Tab
            value="nft-profiler"
            label="NFT Profiler"
            sx={{
              color: "white",
              marginBottom: "25px",
              textTransform: "none",
              fontWeight: "bold",
            }}
          />
        </Tabs>

        {value == "portfolio" && <Portfolio sx={{ marginTop: "3rem" }}></Portfolio>}
        {value == "transactions" && <Transactions className="white" sx={{ marginTop: "3rem" }}></Transactions>}
        {value == "nft-profiler" && <NftProfiler sx={{ marginTop: "3rem" }}></NftProfiler>}

      </Box>
    </div>
  );
}

