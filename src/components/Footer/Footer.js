import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 1,
          px: 15,
          mt: "10",
          backgroundColor: "#2b2b2c",
        }}
      >
        {/* <Container maxWidth="sm"> */}
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              md={6}
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <p>Copyright &copy; 2022 Traider. All Rights Reserved</p>
            </Grid>
            <Grid
              md={6}
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <p>T&C &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p> 
              <p>Privacy Policy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p>Help</p>
            </Grid>
          </Grid>
        {/* </Container> */}
      </Box>
    </Box>
  );
}
