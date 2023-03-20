import { Typography, TextField, Button, InputAdornment } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { Fragment, useState } from "react";
import pic1 from "../../assests/images/pic1.png";
import pic2 from "../../assests/images/pic2.png";
import pic3 from "../../assests/images/pic3.png";
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
import {sign , inputBox , inputHafBox , developersText, alreadyAccount,
   buttonSignUp , learnCoding , learnCodingText ,  roundImg} from '../../styles/style';


const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
  country: "",
  password: "",
  confirmpassword: "",
};

const notify = () => toast("SignuP Failed");

const Signup = () => {
  const [test, setTest] = useState("password");
  const [test1, setTest1] = useState("password");

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
          width:'100%',
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize : 'contain , contain'
        }}
      >
        <Stack direction={{ md: "column-reverse", sm : 'column-reverse' , xs : 'column-reverse' ,lg: "row" }} spacing={19}>
          <Box sx={{ flexGrow: 1, ml: "30px" }}>
            <Box
              sx={{
                mt: { lg: "110.5px", md: "0px" },
                mb: "44px",
              }}
            >
              <Typography
                sx={sign}
              >
                Sign Up
              </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={{ lg: "30px", md: "25px", sm: "20px", xs: "20px" }}
              >
                <Box
                 sx={inputBox}
                >
                  <TextField
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

                <Box
                  sx={inputBox}
                >
                  <TextField
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

                <Box
                 sx={inputBox}
                >
                  <TextField
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
                  <Box
                    sx={inputHafBox}
                  >
                    <TextField
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

                  <Box
                    sx={inputHafBox}
                  >
                    <TextField
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

                <Box
                sx={inputBox}
                >
                  <TextField
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
                          <Button
                            sx={{ width: "0px", height: "0px", mr: "-20px" }}
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
                          </Button>
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

                <Box
               sx={inputBox}
                >
                  <TextField
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
                          <Button
                            sx={{ width: "0px", height: "0px", mr: "-20px" }}
                            onClick={testfun1}
                            width="small"
                          >
                            {test1 === "text" ? (
                              <VisibilityIcon
                                sx={{
                                  color: values.confirmpassword ? "black" : "#B0B0B0",
                                }}
                              />
                            ) : (
                              <VisibilityOffIcon
                                sx={{
                                  color: values.confirmpassword ? "black" : "#B0B0B0",
                                }}
                              />
                            )}
                          </Button>
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
                  <Button
                    sx={buttonSignUp}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Sign Up
                  </Button>
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
              <Typography
                sx={alreadyAccount}
              >
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

          <Box
            sx={{
              flexGrow: 1,
              backgroundColor: "#E8FFFE",
              zIndex: "-10000",
              width: { lg: "558px", md: "auto", sm: "auto" },
              px: "40px",
            }}
          >
            <Box
              sx={{ mt: { lg: "163px", md: "120px", sm: "100px", xs: "80px" } }}
            >
              <Typography
                sx={learnCoding}
              >
                Learn Coding in a Better Way With Expert.
              </Typography>
            </Box>

            <Box sx={{ mt: "40px" }}>
              <Typography
                sx={learnCodingText}
              >
                Learn coding from scratch with best mentor and become expert in
                the next day! Supportive community, lots of expert will help you
                to improve your coding skill.
              </Typography>
            </Box>

            <Stack sx={{ mt: "50px" }} direction="row" spacing={-1}>
              <Box
                component="img"
                sx={roundImg}
                alt="Pic 1"
                src={pic1}
              />

              <Box
                component="img"
                sx={roundImg}
                alt="Pic 1"
                src={pic2}
              />

              <Box
                component="img"
                sx={roundImg}
                alt="Pic 1"
                src={pic3}
              />

              <Box
                component="img"
                sx={roundImg}
                alt="Pic 1"
                src={pic1}
              />

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
              }}
            >
              <Box
                component="img"
                sx={{ mb: "10px", display: "inline-block", mt: "-60px", width : { xs : '300px', sm : '450px', md : '450px', lg : '450px'  } }}
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
