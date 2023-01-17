import * as React from "react";
import DonutChart from "react-donut-chart";
import Avatar from "@mui/material/Avatar";
import eth from "../../src/assets/eth.svg";
import ava from "../../src/assets/ava.svg";
import bnb from "../../src/assets/bnb.svg";
import fan from "../../src/assets/fan.svg";
import opt from "../../src/assets/opt.svg";
import other2 from "../../src/assets/other2.svg";
import others from "../../src/assets/others.svg";
import matic from "../../src/assets/matic.svg";
import vgx from "../../src/assets/vgx.svg";
import shib from "../../src/assets/shib.svg";
import usdc from "../../src/assets/usdc.svg";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { BasicChips } from "./BasicChips";

export default function Portfolio() {
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