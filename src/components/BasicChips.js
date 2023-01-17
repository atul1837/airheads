import * as React from "react";

import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import Avatar from "@mui/material/Avatar";

import all from "../../src/assets/all.svg";
import eth from "../../src/assets/eth.svg";
import ava from "../../src/assets/ava.svg";
import bnb from "../../src/assets/bnb.svg";
import fan from "../../src/assets/fan.svg";
import opt from "../../src/assets/opt.svg";
import pol from "../../src/assets/pol.svg";


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
