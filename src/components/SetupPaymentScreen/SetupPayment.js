import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./style.css";
import Credit from "./Credit";
import Paypal from "./Paypal";
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import MainPricingDashboard from "../MainPricingDashboard/MainPricingDashboard";

export default function SetupPayment(props) {
  const [credit, setCredit] = useState(true);
  const [debit, setDebit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <React.Fragment>
      <MainPricingDashboard>
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
              <h1>Set up your payment</h1>
            </Grid>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <p>Your membership starts as soon as you set up payment. </p>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
                        <DoneRoundedIcon  sx={ {fontSize : '15px', margin :'10px' , padding : '2px' ,  color : 'white' ,  backgroundColor: 'rgb(39,39,41)' , border : 'none' , borderRadius : '50%'}}/>

              <p>No commitments, cancel any time. </p>
              <DoneRoundedIcon  sx={ {fontSize : '15px', margin :'10px' , padding : '2px' ,  color : 'white' ,  backgroundColor: 'rgb(39,39,41)' , border : 'none' , borderRadius : '50%'}}/>

              <p> Cancel online any time</p>
            </Grid>

            <Container component="main" maxWidth="xs">
              <Box
                px={3}
                sx={{
                  marginTop: 3,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  backgroundColor: "#141415",
                  borderRadius: 2,
                  border: "1px solid rgb(41, 41, 41 , 0.3)",
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item md={6} sm={6} xs={6}>
                    {" "}
                    <Button
                      fullWidth
                      variant={credit ? "contained" : "outlined"}
                      sx={{ fontSize: 12,
                        border : credit ?null : 'none' ,
                      color:'white',
                    textTransform: 'none',
                    fontWeight : 400
                    }}
                      onClick={() => {
                        setDebit(false);
                        setCredit(true);
                      }}
                    >
                      Credit or Debit Card
                    </Button>
                  </Grid>
                  <Grid item md={6} sm={6} xs={6}>
                    {" "}
                    <Button
                      fullWidth
                      variant={debit ? "contained" : "outlined"}
                      sx={{ fontSize: 12, m: 1 ,
                      border : debit ?null : 'none' ,
                      color:'white',
                      textTransform: 'none',
                    fontWeight : 400

                      }}
                      onClick={() => {
                        setDebit(true);
                        setCredit(false);
                      }}
                    >
                      PayPal{" "}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
              {/* {props.children} */}
              {credit ? <Credit /> : <Paypal />}
            </Container>
          </Container>
        </Grid>
      </MainPricingDashboard>
    </React.Fragment>
  );
}

