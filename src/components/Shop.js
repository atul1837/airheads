import { useState, useEffect } from "react";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import axios from "axios";
import { isMobile } from "react-device-detect";

const BASE_URL = process.env;

export default function Shop() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    // axios
    //   .get(`${BASE_URL}/product`)
    //   .then((response) => {
    //     setProductsData([
    //       ...response?.data?.result?.filter(
    //         (item) => !item?.categories?.includes("63e3e1d271f39d56b5f0c9eb")
    //       ),
    //     ]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // get json response from local file
    const json = require("../assets/json/newresponse.json");
    setProductsData([
      ...json?.result?.filter(
        (item) => !item?.categories?.includes("63e3e1d271f39d56b5f0c9eb")
      ),
    ]);

  }, []);

  return (
    <div className="bg-black">
      <div className={`${isMobile ? "pl-8" : "pl-16"} pt-12`}>
        <h1
          style={{
            textAlign: "left",
            marginBottom: "2rem",
            WebkitTextStroke: "1px #CEFF86",
            fontFamily: "kanit",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: isMobile ? "44px" : "72px",
            lineHeight: "80%",
          }}
        >
          SHOP
        </h1>

        <Grid container spacing={2} sx={{ width: "100%" }}>
          {productsData.map((product) => (
            <Grid item xs={12} md={6} key={product._id}>
              <Card sx={{ textAlign: "left", background: "#000" }}>
                <img
                  component="img"
                  alt="about us"
                  style={{ height: "320px" }}
                  src={product?.productImages[0]}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold", color: "#fff" }}
                  >
                    {product?.productName}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="p"
                    component="div"
                    sx={{ color: "#fff",fontFamily: "awesome",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: isMobile ? "15px" : "24px", }}
                  >
                    {product?.description}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      "&:hover": {backgroundColor: "#CEFF86"},
                      fontSize: "1rem",
                      fontWeight: "800",
                      borderRadius: ".5rem",
                      backgroundColor: "#CEFF86",
                      color: "#000",
                      padding: ".5rem 1.25rem",
                      margin: "1rem 0rem",
                      textAlign: "left",
                    }}
                  >
                    COMING SOON
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
