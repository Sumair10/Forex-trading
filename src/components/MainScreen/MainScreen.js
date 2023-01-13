import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import "./style.css";
import { Typography } from "@mui/material";

export default function MainScreen(props) {


  console.log("props", props);

  return (
    <Grid
      container
      component="main1"
      sx={{ minHeight: "100vh", backgroundColor: "#0f0f11", color: "white" }}
    >
      <CssBaseline />
      <Grid
        item
        // xs={1}
        sm={false}
        md={4}
        lg={5.5}
        sx={{
          display: { sm: "none", md: "block" },
          backgroundImage: "url(/Images/orange.webp)",
          backgroundRepeat: "no-repeat",
          margin: 6,

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#ee6535",
        }}
      >
        <Grid
          sx={{
            height: "80vh",
            padding: 2,
          }}
          container
          direction="column"
          justifyContent="space-between"
        >
          <Grid >
            {" "}
            {/* <h1 className="leftHeading"> */}
            <Typography
              
              sx={{
                color: "white",
                fontWeight: "bolder",
                fontSize: { lg: 25, md: 20, sm: 30, xs: 22 },
                px: { lg: 8, md: 5, sm: 5, xs: 2 },
                pt: 3,
              }}
            >
              AI Driven Spread Trading{" "}
              <Typography
                // display="inline"
                sx={{
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: { lg: 35, md: 25, sm: 30, xs: 30 },
                }}
              >
                balancing profit with purpose spread trading reinvented
              </Typography>
            
            </Typography>
            {/* </h1> */}
          </Grid>
          <Grid>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bolder",
                fontSize: { lg: 20, md: 15, sm: 30, xs: 15 },
                px: { lg: 8, md: 5, sm: 5, xs: 2 },
                pt: 3,
              }}
            >
              Equities, Forex, Bonds, Indices, Commodities
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {props.children}
    
    </Grid>
  );
}
