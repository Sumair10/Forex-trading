import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logo from "../../assets/Images/logo forex.png"
import edit from "../../assets/Icons/write.png";
import OtpInput from "react-otp-input";
import MainScreen from "../MainScreen/MainScreen";
import { Link } from "react-router-dom";



export default function ForgotPasswordVeriftOTP() {
  const [otp, setOtp] = useState("");
  // const classes = useStyles();
  const handleChange = (otp) => setOtp(otp);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      otp: otp,
    });
  };

  return (
    <MainScreen>
    <Grid
      className="leftSide"
      
      xs={12}
      sm={12}
      md={6}
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
                <h1>Verify OTP</h1>
                <p style={{ marginBottom: 20 }}>
                  Enter the OTP sent to this email address
                  <Grid
                    container
                    direction="row"
                    // justifyContent="center"
                    alignItems="center"
                  >
                    <p style={{ color: "#ee6535", margin: 0 }}>
                      sumairzahid123@gmail.com &nbsp;
                    </p>

                    <Link
                      to="/forgotPassword"
                      variant="body2"
                      underline="none"
                      sx={{ color: "#ee6535", fontSize: 13 }}
                    >
                      <span>
                        <img src={edit} width="12px" height="12px" />{" "}
                      </span>
                    </Link>
                  </Grid>
                </p>

              <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  {" "}
                  <p
                    style={{
                      color: "rgb(196, 194, 194)",
                      fontSize: "12px",
                      marginBottom: 5,
                    }}
                  >
                    Verify OTP
                  </p>
                  <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="center"
            direction="column"
          >
           
          </Grid> 
                  <OtpInput
                    value={otp}
                    onChange={handleChange}
                    numInputs={6}
                    color="white"
                    separator={
                      <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    }
                    inputStyle={{
                      // padding: "22px 26px",
                      border: "1px solid rgb(61, 61, 61)",
                      backgroundColor: "#141415",
                      borderRadius: "3px",
                      color: "white",
                      // textColor: "white",
                      // fontSize: "45px",
                      outline: "#ee6535",

                      width: "3.5rem",
                      height: "3.8rem",
                      margin: "-1px",
                      fontSize: "2rem",
                      borderRadius: 6,
                      border: "1px solid rgb(61, 61, 61 , 0.3)"
                    }}
                    focusStyle={{
                      // border: "1px solid rgb(61, 61, 61)",,
                      // border:'none'
                      outline: "#ee6535",
                    }}
                    isInputNum={true}
                  />
                </Grid>
                <Link
                  to={"/createNewPassword"}
                  style={{
                    color: "#ee6535",
                    fontSize: 13,
                    textDecoration: "none",
                  }}
                >
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#ff6838" , textTransform:'none' , fontWeight :'normal'}}
                  >
                    Continue
                  </Button>
                </Link>
              </Box>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                  <Grid
                   container
                   direction="row"
                   justifyContent="center"
                   alignItems="center"
                   
                >
                  <Link
                    to={""}
                    style={{
                      textDecoration: "none",
                      color: "#ee6535",
                      fontSize: 13,
                    }}
                  >
                    Resend OTP
                  </Link>
                </Grid>
                
              
              </Grid>
            </Grid>

            <Grid>
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
