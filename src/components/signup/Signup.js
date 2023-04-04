import { Typography, TextField, Button, InputAdornment } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { Fragment, useState , useContext } from "react";
import robot from "../../assests/images/robot.png";
import background from "../../assests/images/background.png";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import { useFormik } from "formik";
import { signUpSchema } from "../../schema/index";
import { useHistory } from "react-router-dom";
import AddInputData from "../../api/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../store/auth-context";

import {sign,inputBox,inputHafBox,developersText,alreadyAccount,buttonSignUp,learnCoding,leranCodingBox,
  secondPortionBox,learnCodingText, robotSx,stackDirection,roundImg,boxes} from "../../styles/style";

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
  country: "",
  password: "",
  confirmpassword: "",
};

const notify = (error) => toast(error);

const Signup = () => {
  const [test, setTest] = useState("password");
  const [test1, setTest1] = useState("password");

  const authCtx =  useContext(AuthContext);
  const history = useHistory();

  const loginHandler = () => {
    history.replace("./login");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        AddInputData(values, history, notify);
      },
    });
  const testfun = () => {
    setTest((pre) => (pre == "text" ? "password" : "text"));
  };
  const testfun1 = () => {
    setTest1((pre) => (pre == "text" ? "password" : "text"));
  };

  return (
    <Fragment>
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          height : '530px',
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain , contain",
        }}
      >
        <Stack
          direction={stackDirection}
          spacing={19}
        >
          <Box sx={{ flexGrow: 1, ml: {lg : "30px" , md : '0px'} }}>
            <Box
              sx={{
                mt: { lg: "110.5px", md: "0px" },
                mb: "30px",
              }}
            >
              <Typography sx={sign}>Sign Up</Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={{ lg: "26px", md: "25px", sm: "20px", xs: "20px" }}
              >
                <Box sx={inputBox}>
                  <TextField
                   size="small"
                    fullWidth
                    label="Name"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonIcon
                            sx={{ color: values.name ? "black" : "B0B0B0" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.name && touched.name ? (
                    <Typography variant="p" color="red">
                      {errors.name}
                    </Typography>
                  ) : null}
                </Box>

                <Box sx={inputBox}>
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
                            sx={{ color: values.email ? "black" : "#B0B0B0" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.email && touched.email ? (
                    <Typography variant="p" color="red">
                      {errors.email}
                    </Typography>
                  ) : null}
                </Box>

                <Box sx={inputBox}>
                  <TextField
                   size="small"
                    fullWidth
                    label="User-name"
                    id="username"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PersonIcon
                            sx={{ color: values.username ? "black" : "B0B0B0" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.username && touched.username ? (
                    <Typography variant="p" color="red">
                      {errors.username}
                    </Typography>
                  ) : null}
                </Box>

                <Stack
                  sx={{ width: { xl: "600px", lg: "470px", md: "auto" } }}
                  direction="row"
                  justifyContent={"space-between"}

                  //  spacing={4}
                >
                  <Box sx={inputHafBox}>
                    <TextField
                     size="small"
                      fullWidth
                      label="Phone number"
                      id="phone"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    {errors.phone && touched.phone ? (
                      <Typography variant="p" color="red">
                        {errors.phone}
                      </Typography>
                    ) : null}
                  </Box>

                  <Box sx={inputHafBox}>
                    <TextField
                     size="small"
                      fullWidth
                      label="Country"
                      id="country "
                      name="country"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.country}
                    />
                    {errors.country && touched.country ? (
                      <Typography variant="p" color="red">
                        {errors.country}
                      </Typography>
                    ) : null}
                  </Box>
                </Stack>

                <Box sx={inputBox}>
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
                            sx={{ width: "0px", height: "0px", mt: "-20px", ml : '-20px' }}
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
                    <Typography variant="p" color="red">
                      {errors.password}
                    </Typography>
                  ) : null}
                </Box>

                <Box sx={inputBox}>
                  <TextField
                   size="small"
                    fullWidth
                    label="Confirm password"
                    type={test1}
                    id="confirmpassword"
                    name="confirmpassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmpassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Box
                            sx={{ width: "0px", height: "0px", ml: "-20px" , mt : '-20px' }}
                            onClick={testfun1}
                            width="small"
                          >
                            {test1 === "text" ? (
                              <VisibilityIcon
                                sx={{
                                  color: values.confirmpassword
                                    ? "black"
                                    : "#B0B0B0",
                                }}
                              />
                            ) : (
                              <VisibilityOffIcon
                                sx={{
                                  color: values.confirmpassword
                                    ? "black"
                                    : "#B0B0B0",
                                }}
                              />
                            )}
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                  />
                  {errors.confirmpassword && touched.confirmpassword ? (
                    <Typography variant="p" color="red">
                      {errors.confirmpassword}
                    </Typography>
                  ) : null}
                </Box>

                <Box>
                {!authCtx.isLoggedIn && 
                  <Button
                    sx={buttonSignUp}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Sign Up
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
                    Sign Up
                  </Button>
                }
                </Box>
              </Stack>
            </form>

            <Stack
              direction="row"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                mt: "15px",
              }}
            >
              <Typography sx={alreadyAccount}>
                Already have an account?
              </Typography>
              <Button
                onClick={loginHandler}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Log In
              </Button>
            </Stack>
          </Box>
          {/* Second portion starts here */}

          <Box sx={secondPortionBox}>
            <Box sx={leranCodingBox}>
              <Typography sx={learnCoding}>
                Learn Coding in a Better Way With Expert.
              </Typography>
            </Box>

            <Box sx={{ mt: "20px" }}>
              <Typography sx={learnCodingText}>
                Learn coding from scratch with best mentor and become expert in
                the next day! Supportive community, lots of expert will help you
                to improve your coding skill.
              </Typography>
            </Box>

            <Stack sx={{ mt: "20px" }} direction="row" spacing={-1}>

              {boxes.map((box) => (
                <Box
                  component="img"
                  key={box.id}
                  sx={roundImg}
                  alt={box.title}
                  src={box.content}
                ></Box>
              ))}

              <Box>
                <Typography sx={developersText}>
                  3K+ developers joined us, now it's your turn
                </Typography>
              </Box>
            </Stack>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pb : '0px'
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
