import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./style.css";
import Modal from "@mui/material/Modal";
import MainPricingDashboard from "../MainPricingDashboard/MainPricingDashboard";
import CloseIcon from '@mui/icons-material/Close';
import oanda from "../../assets/Images/oanda-100.png";
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height : 700,
    border: "10px solid rgb(30,30,30 , 0) !important",
  p: 4,
};


export default function SelectBroker() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setDone(true);
  };

  const [done, setDone] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <MainPricingDashboard>
        {/* modal */}
        <Modal
          open={open}
          // onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <Grid
              sx={{ backgroundColor: "#0f0f11", padding: 2, borderRadius: 2 }}
            > */}
              <Box
                sx={{
                  marginTop: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#141415",
                  borderRadius: 2,
                  border: "1px solid rgb(41, 41, 41)",
                }}
                >
                  <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  >
                <CloseIcon onClick={()=> setOpen(false)} sx={{color: 'white',margin : '15px 15px 0px 0px' }}/>

                  </Grid>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <Grid px={3} pb={3}>
                    <h1>Connect with Oanda</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente atque, iure
                    </p>
                    <Grid
                      // px={3}
                      // pb={3}
                      container
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid>
                        <h5>API key</h5>
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
                        inputProps={{
                          style: { color: "white", fontSize: 15, height:30 },
                        }}
                        className="inputField1"
                        margin="normal"
                        placeholder="Enter API key"
                        required
                        fullWidth
                        id="api"
                        type="text"
                        size="small"
                        name="api"
                        // autoComplete="email"
                      />
                      <Grid>
                        <h5>Password</h5>
                      </Grid>
                      <TextField
                
                sx={{
                  "& .MuiOutlinedInput-root ": {
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


                className="inputField1"
                margin="normal"
                placeholder="Enter password"
                required
                fullWidth
                size="small"
                name="password"
                type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff  sx={{color: 'gray'}}/> : <Visibility sx={{color: 'gray'}}/>}
                    </IconButton>
                  </InputAdornment>
                  ),
                }}
               
              />
                    </Grid>
              <Button
                //   type="submit"
                onClick={handleClose}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: "#ee6535" }}
                style={{
                  // color: "#ee6535",
                  fontSize: 13,
                  textDecoration: "none",
                  fontSize: '12px',
height: '40px',
borderRadius: '7px'}}
              >
                Done
              </Button>
                  </Grid>
                </Box>
              </Box>

            {/* </Grid> */}
          </Box>
        </Modal>

        <Grid sx={{ backgroundColor: "#0f0f11" }}>
          {/* Hero unit */}

          {/* End hero unit */}
          <Container
            maxWidth="lg"
            component="main"
            sx={{ backgroundColor: "none", height: "100vh" }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <h1>Select your broker</h1>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <p>Your membership starts as soon as you set up payment. </p>
            </Grid>

            <Container component="main" maxWidth="sm">
              <Grid sx={{ backgroundColor: "#0f0f11" }}>
                <Box
                  px={3}
                  sx={{
                    marginTop: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#141415",
                    borderRadius: 3,
                    border: "1px solid rgb(41, 41, 41 , 0.5)",
                  }}
                >
                  <Grid
                  
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid className="hover1" item  xs={5} sm={5} md={5} m={1} >
                      <p
                        style={{
                          border: "1px solid rgb(41, 40, 40 , 0.5)",
                          padding: "0px 0px",
                          // width :'100%',
                          borderRadius: 5,
                          backgroundColor: done ? "#ee6535" : null,
                        }}
                      >
                        <Grid
                          // p={2} 
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ cursor: "pointer" }}
                          onClick={handleOpen}
                        >
                          {/* <h1 onClick={handleOpen}>Oanda</h1> */}
                          <img src={oanda} width="150px" height="50px" style={{  borderRadius: 3 , margin : '20px'}} tintColor="blue"/>{" "}
                        </Grid>
                        <hr
                          style={{
                            height: 0.1,
                            borderColor: "rgb(41, 41, 41 , 0.5)",
                          }}
                        />
                        <Grid
                          className="in"
                          container
                          p={1}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          color="white"
                        >
                          Oanda

                        </Grid>
                      </p>
                    </Grid>
                    <Grid className="hover2" xs={5} sm={5} md={5} m={1}>
                      <p
                        style={{
                          border: "1px solid rgb(41, 40, 40 ,0.5)",
                          padding: "0px 0px",
                          // width :'100%',
                          borderRadius: 5,
                        }}
                      >
                        <Grid
                          // p={2}
                          container
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ cursor: "pointer" }}
                        >
                          <h1 className="h">IG</h1>
                        </Grid>
                        <hr
                          style={{
                            height: 0.1,
                            borderColor: "rgb(41, 41, 41 , 0.5)",
                          }}
                        />
                        <Grid
                          container
                          p={1}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          color="white"
                          className="in"
                        >
                          IG
                        </Grid>
                      </p>
                    </Grid>
                  </Grid>
                </Box>

                <Box
                  px={3}
                  sx={{
                    marginTop: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#141415",
                    borderRadius: 3,
                    border: "1px solid rgb(41, 41, 41)",
                  }}
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid>
                      <p style={{ margin: 0 }}>How does this work?</p>
                    </Grid>
                    <Grid>
                      <p
                        style={{
                          border: "1px solid rgb(41, 40, 40)",
                          padding: "8px 16px",
                          borderRadius: 5,
                        }}
                      >
                        Know more
                      </p>
                    </Grid>
                  </Grid>
                </Box>
                {done ? (
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      backgroundColor: "#ee6535",
                      textTransform: "capitalize",
                    }}
                     style={{
                    // color: "#ee6535",
                    fontSize: 13,
                    textDecoration: "none",
                    fontSize: '12px',
  height: '40px',
  borderRadius: '7px'
                  }}
                  >
                    Let's Get Started
                  </Button>
                ) : null}
              </Grid>

              {/* <Credit /> */}
              {/* <Paypal/> */}
            </Container>
          </Container>
        </Grid>
      </MainPricingDashboard>
    </React.Fragment>
  );
}