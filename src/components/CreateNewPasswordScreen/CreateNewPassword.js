import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logo from "../../assets/Images/logo forex.png"
import { Link } from "react-router-dom";
import MainScreen from "../MainScreen/MainScreen";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// const theme = createTheme();

export default function CreateNewPassword() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      password: data.get("password"),
      confirmPassword: data.get("ConfirmPassword"),
    });
  };
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    confirmPassword: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
                <h1 >Create new password</h1>
                <p style={{ marginBottom: 20 }}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Impedit, iusto mollitia a consequuntur, incidunt totam
                  obcaecati repellendus unde quidem
                </p>

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

                  placeholder="Create password"
                  className="inputField"

                  size="small"
                  fullWidth
                  required
                  margin="normal"
                name="password"
            onChange={handleChange('password')}

                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
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
                      {values.showPassword ? <VisibilityOff sx={{color: 'gray'}}/> : <Visibility sx={{color: 'gray'}}/>}
                    </IconButton>
                  </InputAdornment>
                  ),
                }}
               
              />
            
                <Grid>
                  <h5>Confirm password</h5>
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


                className="inputField"
                margin="normal"
                placeholder="Re enter password"
                required
                fullWidth
                size="small"
                name="confirmPassword"
                type={values.showConfirmPassword ? 'text' : 'password'}
                value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}

                id="confirmPassword"
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
                      {values.showConfirmPassword ? <VisibilityOff sx={{color: 'gray'}}/> : <Visibility sx={{color: 'gray'}}/>}
                    </IconButton>
                  </InputAdornment>
                  ),
                }}
               
              />
                <Link
                  to={"/"}
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
