import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import GlobalStyles from "@mui/material/GlobalStyles";
import PersonIcon from '@mui/icons-material/Person';
import logo from "../../assets/Images/logo forex.png"
import StickyFooter from "../Footer/Footer";


export default function MainPricingDashboard(props) {
  return (
    <React.Fragment>
      <Grid sx={{ height :{md : '110vh' , sm: '200vh' , xs : '270vh'} , backgroundColor: "#0f0f11" }}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <Box sx={{ flexGrow: 1, backgroundColor: "#0f0f11" }}>
          <AppBar position="static" sx={{ backgroundColor: "#0f0f11" }}>
            <Toolbar>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <span style={{ marginRight: 10 }}>
                  <img src={logo} width="30px" height="30px" style={{ border : '5px solid #ff6838' , borderRadius: 3}}/>{" "}
                </span>
                <h2> Traider</h2>
              </Grid>
              {/* <Button color="inherit">Login</Button> */}
              <PersonIcon fontSize="large" sx ={{fontSize:40 ,border : '2px solid #ff6838' , borderRadius: '50%', backgroundColor: '#ff6838'}}/>
            </Toolbar>
          </AppBar>
        </Box>

        {props.children}
      
      </Grid>
      <StickyFooter />
    </React.Fragment>
  );
}
