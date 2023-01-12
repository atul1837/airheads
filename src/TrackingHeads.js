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

const rows = [
  ["NET WORTH", "CLAIMABLE", "TOTAL ASSETS", "TOTAL DEBDS"],
  ["$578,742,962.61", "$0", "$578,742,962.61", "$0"],
];

export function BasicChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="ALL" />
      <Chip label="Etherum" variant="outlined" />
      <Chip label="Avalanche" variant="outlined" />
      <Chip label="BNB Chain" variant="outlined" />
      <Chip label="Fantom" variant="outlined" />
      <Chip label="optamasm" variant="outlined" />
      <Chip label="Polygon" variant="outlined" />
      <Chip label="+39" variant="outlined" />
    </Stack>
  );
}
export default function TrackingHeads() {
  const [value, setValue] = React.useState("one");

  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <div>
      <h1>TRACKING HEADS</h1>;
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {row.map((cell) => (
                  <TableCell component="th" scope="row">
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleTabs}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="one" label="Portfolio" />
          <Tab value="two" label="Transactions" />
          <Tab value="three" label="Analytics" />
          <Tab value="four" label="Wallet Profiler" />
          <Tab value="five" label="NFT Profiler" />
        </Tabs>
        <TabPanel></TabPanel>
      </Box>
    </div>
  );
}

function TabPanel() {
  return (
    <div>
      <BasicChips />
      <DonutChart
        data={[
          {
            label: "ETH",
            value: 44.02,
          },
          {
            label: "USDC",
            value: 14.11,
            //: true,
          },
          {
            label: "SHIB",
            value: 13.1,
            //: true,
          },
          {
            label: "VGX",
            value: 10.67,
            //: true,
          },
          {
            label: "MATIX",
            value: 4.98,
            //: true,
          },
          {
            label: "OTHERS",
            value: 13.12,
            //: true,
          },
        ]}
      />
      ;
      <DonutChart
        data={[
          {
            label: "ETH",
            value: 97.98,
          },
          {
            label: "AVALANCHE",
            value: 1.77,
            //: true,
          },
          {
            label: "BNB CHAIN",
            value: 0.21,
            //: true,
          },
          {
            label: "FANTOM",
            value: 0.04,
            //: true,
          },
          {
            label: "OPTIMISM",
            value: 0.0,
            //: true,
          },
          {
            label: "OTHER",
            value: 0.0,
            //: true,
          },
        ]}
      />
      ;
    </div>
  );
}
