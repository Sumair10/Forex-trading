import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../SigninScreen/style.css";
import facebook from "../../assets/Icons/facebook.png";
import google from "../../assets/Icons/google.png";
import linkedin from "../../assets/Icons/linkedin.png";
import logo from "../../assets/Images/logo forex.png"
import warning from "../../assets/Icons/warning1.png";
import MainScreen from "../MainScreen/MainScreen";

export default function PreSignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };

  return (
    <MainScreen>
      <Grid
        className="leftSide"
      
        
        xs={12}
        sm={12}
        md={5}
        lg={5.5}
        sx={{ padding: 5, paddingRight: {lg: 15 ,md : 0, sm : 0 }}}
        square
        container
  direction="row"
  justifyContent="center"
  alignItems="center"
      >
        <Box
          sx={{
            mx: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* </Grid> */}

          <Grid
            container
            direction="column"
            justifyContent="space-between"
            sx={{ height: "88vh" }}
          >
            <Grid>
              {" "}
             <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 , width : { md: 450 , sm : 450 , xs : 450} , }}
              >
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
                <h1><Grid sx={{fontSize: {xs: 25 , sm : 30 , md:35 , lg: 40}}}>Start investing with UK's largest brokerages</Grid></h1>
                <p style={{ marginBottom: 20 }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit,
                </p>

                <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{ border: 0.5, borderColor: "#8c2522", marginBottom: 3 }}
              >
                <Grid
                  md={2}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <img
                    src={warning}
                    width="35px"
                    height="35px"
                    style={{backgroundColor :'rgb(140,37,34, 0.3)' , padding : 5 , borderRadius:'50%'}}
                    
                  />
                </Grid>
                <Grid
                  md={10}
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{
                    pr: 5,
                  }}
                >
                  <p style={{}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Imped itdolor sit amet consectetur. Impedit,
                  </p>
                </Grid>
              </Grid>

                <Grid>
                  <h5>Email address</h5>
                </Grid>
                <TextField
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": {
                        borderColor: "rgb(39, 39, 39)",
                      },
                    },
                    "& .MuiOutlinedInput-root:hover": {
                      "& > fieldset": {
                        borderColor: "rgb(39, 39, 39)",
                      },
                    },
                  }}
                  inputProps={{ style: { color: "white",fontSize: 15 , height:30 } }}


                  
                  className="inputField"
                  margin="normal"
                  placeholder="Enter email address"
                  required
                  fullWidth
                  id="email"
                  size="small"
                  name="email"
                  autoComplete="email"
                />
                <Link
                  to="/verifyEmailOTP"
                  style={{
                    color: "#ee6535",
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  {" "}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#ff6838" , textTransform:'none' , fontWeight :'normal'}}
                  >
                    Continue
                  </Button>
                </Link>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <p>Or continue with this social profile</p>
                </Grid>
                <Grid container direction="row" justifyContent="center">
                  <span className="icon">
                    <img src={google} width="25px" height="25px" />
                  </span>
                  <span className="icon">
                    <img src={facebook} width="25px" height="25px" />
                  </span>
                  <span className="icon">
                    <img src={linkedin} width="25px" height="25px" />{" "}
                  </span>
                </Grid>
              </Box>
            </Grid>
            <Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p style={{ color: "rgb(209, 209, 209)" }}>
                  Already have an account? &nbsp;
                </p>

                <Link
                  to="/"
                  style={{
                    color: "#ee6535",
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  Sign In
                </Link>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p>Copyright &copy; 2022 Traider. All Rights Reserved</p>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </MainScreen>
  );
}
