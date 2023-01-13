import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Switch from "@mui/material/Switch";
import MainPricingDashboard from "../MainPricingDashboard/MainPricingDashboard";
import { Link } from "react-router-dom";
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
    btn: "Try For Free",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
      "10 GB of storage",
      "Help center access",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
    btn: "Get Started Now",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Help center access",
      "Priority email support",
      "10 GB of storage",
      "Help center access",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
    btn: "Get Pro Plan",
  },
];



export default function Pricing() {
  // const classes = useStyles();
  return (
    <MainPricingDashboard>
      <Grid sx={{ backgroundColor: "#0f0f11" }}>
        {/* Hero unit */}

        {/* End hero unit */}
        <Container
          maxWidth="xl"
          component="main"
          sx={{ backgroundColor: "none", height: "100vh" }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <h1>Choose your plan</h1>
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

            <p>No charges or extra fees. Ever. </p>
            <DoneRoundedIcon  sx={ {fontSize : '15px', margin :'10px' , padding : '2px' ,  color : 'white' ,  backgroundColor: 'rgb(39,39,41)' , border : 'none' , borderRadius : '50%'}}/>

            <p>Switch plans or cancel any time. </p>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <h3>Monthly</h3>
            <Switch />
            <h3>Anually</h3>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={5}
          >
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                // sm={tier.title === "Enterprise" ? 12 : 6}
                sm={12}
                md={4}
              >
                <Card sx={{ backgroundColor: "#141415", mt: 5    , borderRadius:'15px 15px 15px 15px', }}>
                {tier.subheader === "Most popular" ? (
                    <CardHeader
                      // title={tier.title}
                      subheader={tier.subheader}
                      titleTypographyProps={{ align: "center" }}
                      subheaderTypographyProps={{
                        align: "center",
                        color: "white",
                      }}
                      sx={{
                        backgroundColor:
                          tier.subheader === "Most popular" ? "#ee6535" : null,
                          margin : 0,
                      }}
                    />
                  ) : null}

                  <CardContent
                    sx={{
                      border: "2px solid #ee6535",
                      minHeight: 450,
                      backgroundColor:
                        tier.subheader === "Most popular" ? "#181212" : null,
                        borderRadius: tier.subheader === "Most popular" ? '0px 0px 15px 15px' : '15px 15px 15px 15px',
                        border:tier.subheader === "Most popular" ? '2px solid #ee6535' : '2px solid rgb(30,30,30)',
                        // width :400
                  
                    }}
                  >
                  
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",

                        alignItems: "baseline",
                        mb: 2,
                        pl: 2,
                        pr: 2,
                      }}
                    >
                      <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        // alignItems="flex-start"
                      >
                        {" "}
                        <Grid item xs={6} md={6}>
                          <h2 style={{fontSize: '35px'}}>{tier.title}</h2>
                           <p style={{ marginTop: 0 ,fontSize: '17px'}}>
                            Free to use for 14 days
                          </p>
                        </Grid>
                        <Grid
                        xs={6}
                          md={6}
                          container
                          direction="row"
                          justifyContent="flex-end"
                          alignItems="baseline"
                        >
                          <h1 className="head">${tier.price}</h1>
                          <p>/mo</p>
                        </Grid>
                        <Link
                          to={"/setupPayment"}
                          style={{
                            width: '100%',
                            // color: "#ee6535",
                            // fontSize: 13,
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          <Button
                            type="submit"
                            // variant="contained"
                            fullWidth
                            variant={tier.buttonVariant}
                            style={{
                              // color: "#ee6535",
                              // fontSize: ,
                              textDecoration: "none",
                              fontSize: '12px',
                              height: '40px',
                              borderRadius: '7px',
                            }}
                            sx={{
                              mt: 1,
                              mb: 2,
                              backgroundColor: tier.subheader === "Most popular" ? 'none' : 'rgb(30,30,30)',
                              color: 'white',
                              border: tier.subheader === "Most popular" ? 'none' : 'rgb(30,30,30)',
                              // fontSize: 12,
                              textDecoration : 'none'
                            }}
                          >
                            {tier.btn}
                          </Button>
                        </Link>
                      </Grid>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                          <DoneRoundedIcon  sx={ {fontSize : '15px', margin :'10px' , padding : '2px' ,  color : 'rgb(255,104,56)' ,  backgroundColor: 'rgb(44,29,25)' , border : 'none' , borderRadius : '50%'}}/>

                         <Typography
                          component="li"
                          variant="subtitle1"
                          // align="center"
                          key={line}
                          sx={{
                            fontSize: 12,
                            color: "#dadada",
                            lineHeight: 0.5,
                          }}
                        >
                          
                          {line}
                        </Typography>
                      </Grid>
                       
                        
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </MainPricingDashboard>
  );
}
