import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logo from "../../assets/Images/logo forex.png"
import MainScreen from "../MainScreen/MainScreen";
import { Link } from "react-router-dom";

// const theme = createTheme();

export default function VerifyPhoneNumber() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      phoneNumber: data.get("phoneNumber"),
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
                <h1>Verify phone number</h1>
                <p style={{ marginBottom: 20 }}>
                  Verify your phone number for your KYC
                </p>

                <Grid>
                  <h5>Phone number</h5>
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
                  placeholder="10 digit number"
                  required
                  fullWidth
                  id="phoneNumber"
                  type="text"
                  size="small"
                  name="phoneNumber"
                  // autoComplete="email"
                />
                <Link
                  to={"/verifyPhoneOTP"}
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
