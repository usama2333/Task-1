import { Typography, InputAdornment, Button, TextField } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { Fragment, useContext, useState } from "react";
import robot from "../../assests/images/robot.png";
import background from "../../assests/images/background.png";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { loginSchema } from "../../schema/loginschema";
import AddLoginData from "../../api/loginApi";
import AuthContext from "../../store/auth-context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {sign , inputBox , forgotPassword, developersText, alreadyAccount,
  buttonSignUp , boxes, robotSx,stackDirection, learnCoding,leranCodingBox ,secondPortionBox, learnCodingText ,  roundImg} from '../../styles/style';
  
const initialValues = {
  email: "",
  password: "",
};

const notify = (error) => toast(error);

const Signup = () => {
  
  const authCtx = useContext(AuthContext);
  const [test, setTest] = useState("password");
  const [login , setLogin] = useState(true);

  const history = useHistory();

  const logoutHandler = () => {
    history.replace("/");
  };

  const forgotHandler = () => {
    history.replace("/forgot");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        AddLoginData(values, history, authCtx, notify , login , setLogin );
      },
    });

  const testfun = () => {
    setTest((pre) => (pre === "text" ? "password" : "text"));
  };

  return (
    <Fragment>
      <Container
        maxWidth="xl"
        sx={{
          width: '100%',
          height : '530px',
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize : 'contain , contain'
        }}
      >
        <Stack direction={stackDirection} spacing={19}>
          <Box sx={{ flexGrow: 1, ml: {lg : "30px" , md : '0px'} }}>
            <Box
              sx={{
                mt: { lg: "200.5px", md: "0px" },
                mb: "44px",
              }}
            >
              <Typography
                sx={sign}
              >
                Login 
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <Stack
                spacing={{ xs: "36px" }}
              >
                <Box
                  sx={inputBox}
                >
                  <TextField
                  size="small"
                    fullWidth
                    label="E-mail"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon
                            sx={{ color: values.email ? "black" : "#B0B0B0", }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.email && touched.email ? (
                    <Typography sx={{mt : '22px' , fontSize : '14px'}}  variant="p" color="red">
                      {errors.email}
                    </Typography>
                  ) : null}
                </Box>

                <Box
                 sx={inputBox}
                >
                  <TextField
                  size="small"
                    fullWidth
                    label="Password"
                    id="password"
                    name="password"
                    type={test}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Box
                            sx={{ width: "0px", height: "0px", ml : '-20px', mt : '-20px' }}
                            onClick={testfun}
                            width="small"
                          >
                            {test === "text" ? (
                              <VisibilityIcon
                                sx={{
                                  color: values.password ? "black" : "#B0B0B0",
                                }}
                              />
                            ) : (
                              <VisibilityOffIcon
                                sx={{
                                  color: values.password ? "black" : "#B0B0B0",
                                }}
                              />
                            )}
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.password && touched.password ? (
                    <Typography  variant="p" color="red" sx={{fontSize : '14px'}}>
                      {errors.password}
                    </Typography>
                  ) : null}
                </Box>
              </Stack>

              <Typography
                sx={forgotPassword}
              >
                <Button
                  sx={{ fontStyle: "italic", color: "#1A3447", fontSize :'11px' }}
                  onClick={forgotHandler}
                >
                  Forgot Password ?
                </Button>
              </Typography>

              <Box>
              {!authCtx.isLoggedIn && 
                <Button
                
                  sx={buttonSignUp}
                  size="small"
                  variant="contained"
                  type="submit"
                >
                  Login
                </Button>
              }

              {authCtx.isLoggedIn && 
                <Button
                disabled
                sx={buttonSignUp}
                  size="large"
                  variant="contained"
                  type="submit"
                >
                  Login
                </Button>
              }


              </Box>

            </form>

            <Stack
              direction="row"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                mt: "10px",
              }}
            >
              <Typography
              sx={alreadyAccount}
              >
                Don't have an account?
              </Typography>
              <Button
                onClick={logoutHandler}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                Register
              </Button>
            </Stack>
          </Box>

          {/* Second portion starts here */}

          <Box
            sx={secondPortionBox}
          >
            <Box
              sx={leranCodingBox}
            >
              <Typography
               sx={learnCoding}
              >
                Learn Coding in a Better Way With Expert.
              </Typography>
            </Box>

            <Box sx={{ mt: "20px" }}>
              <Typography
              sx={learnCodingText}
              >
                Learn coding from scratch with best mentor and become expert in
                the next day! Supportive community, lots of expert will help you
                to improve your coding skill.
              </Typography>
            </Box>

            <Stack sx={{ mt: "20px" }} direction="row" spacing={-1}>

            {boxes.map((box) => (
                <Box
                  component='img'
                  key={box.id}
                  sx={roundImg}
                  alt = {box.title}
                  src = {box.content}
                > 
                </Box>
              ))}

              <Box>
                <Typography
               sx={developersText}
                >
                  3K+ developers joined us, now it's your turn
                </Typography>
              </Box>
            </Stack>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pb :'0px'
              }}
            >
              <Box
                component="img"
                sx={robotSx}
                alt="Pic 1"
                src={robot}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default Signup;
