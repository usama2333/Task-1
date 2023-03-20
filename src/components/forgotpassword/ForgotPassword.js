import { Typography, Button } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { Fragment, useState } from "react";
import TextField from "@mui/material/TextField";
import pic1 from "../../assests/images/pic1.png";
import pic2 from "../../assests/images/pic2.png";
import pic3 from "../../assests/images/pic3.png";
import robot from "../../assests/images/robot.png";
import background from "../../assests/images/background.png";
import InputAdornment from "@mui/material/InputAdornment";

import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { forgotSchema } from "../../schema/forgot";
import forgotPasswordData from "../../api/forgotApi";
import { useHistory } from "react-router-dom";

const initialValues = {
  email: "",
  oldpassword: "",
  newpassword: "",
  confirmpassword: "",
};

const Signup = () => {
  const [test, setTest] = useState("password");

  const history = useHistory();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: forgotSchema,
      onSubmit: (values, action) => {
        forgotPasswordData(values, history);
      },
    });

  const testfun = () => {
    setTest((pre) => (pre == "text" ? "password" : "text"));
  };

  return (
    <Fragment>
      <Container
        maxWidth="xl"
        sx={{
          width:"100%" ,
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize : 'contain , contain'
        }}
      >
        <Stack direction={{ md: "column-reverse", sm : 'column-reverse' , xs : 'column-reverse' ,lg: "row" }}spacing={19}>
          <Box sx={{ flexGrow: 1, ml: "30px" }}>
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={{ lg: "30px", md: "25px", sm: "20px", xs: "20px" }}
              >
                <Box
                  sx={{
                    mt: { lg: "230.5px", md: "0px" },
                  }}
                >
                  <Typography
                    sx={{
                      mb: "37px",
                      color: "#1A3447",
                      fontWeight: 600,
                      fontSize: "36px",
                      lineHeight: "44px",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                    }}
                  >
                    Forget/Reset Password
                  </Typography>
                </Box>
                <Box
                  sx={{
                    color: "#B0B0B0",
                    boxSizing: "border-box",
                    width: {
                      xl: "600px",
                      lg: "470px",
                      md: "100%",
                      sm: "100%",
                      xs: "100%",
                    },
                    height: "60px",
                  }}
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
                  sx={{
                    color: "#1A3447",
                    width: {
                      xl: "600px",
                      lg: "470px",
                      md: "100%",
                      sm: "100%",
                      xs: "100%",
                    },
                    height: "60px",
                    boxSizing: "border-box",
                  }}
                >
                  <TextField
                    fullWidth
                    label="Old Password"
                    id="oldpassword"
                    name="oldpassword"
                    type={test}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.oldpassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            sx={{ width: "0px", height: "0px", mr: "-20px" }}
                            onClick={testfun}
                            width="small"
                          >
                            {test == "text" ? (
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

                  {errors.oldpassword && touched.oldpassword ? (
                    <Typography variant="p" color="red">
                      {errors.oldpassword}
                    </Typography>
                  ) : null}
                </Box>

                <Box
                  sx={{
                    color: "#1A3447",
                    width: {
                      xl: "600px",
                      lg: "470px",
                      md: "100%",
                      sm: "100%",
                      xs: "100%",
                    },
                    height: "60px",
                    boxSizing: "border-box",
                  }}
                >
                  <TextField
                    fullWidth
                    label="New Password"
                    id="newpassword"
                    name="newpassword"
                    type={test}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.newpassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            sx={{ width: "0px", height: "0px", mr: "-20px" }}
                            onClick={testfun}
                            width="small"
                          >
                            {test == "text" ? (
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
                  {errors.newpassword && touched.newpassword ? (
                    <Typography variant="p" color="red">
                      {errors.newpassword}
                    </Typography>
                  ) : null}
                </Box>

                <Box
                  sx={{
                    color: "#1A3447",
                    width: {
                      xl: "600px",
                      lg: "470px",
                      md: "100%",
                      sm: "100%",
                      xs: "100%",
                    },
                    height: "60px",
                    boxSizing: "border-box",
                  }}
                >
                  <TextField
                    fullWidth
                    label="Confirm Password"
                    id="confirmpassword"
                    name="confirmpassword"
                    type={test}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmpassword}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button
                            sx={{ width: "0px", height: "0px", mr: "-20px" }}
                            onClick={testfun}
                            width="small"
                          >
                            {test == "text" ? (
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
                  {errors.confirmpassword && touched.confirmpassword ? (
                    <Typography variant="p" color="red">
                      {errors.confirmpassword}
                    </Typography>
                  ) : null}
                </Box>

                <Box>
                  <Button
                    sx={{
                      mb: "15px",
                      height: "60px",
                      width: {
                        xl: "600px",
                        lg: "470px",
                        md: "100%",
                        sm: "100%",
                        xs: "100%",
                      },
                      backgroundColor: "#1A3447",
                      fontSize: "18px",
                      lineHeight: "22px",
                      fontWeight: 500,
                      textTransform: "capitalize",
                    }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Reset Password
                  </Button>
                </Box>
              </Stack>
            </form>
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
                sx={{
                  color: "#1A3447",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontSize: { lg: "64px", md: "64px", sm: "54px", xs: "40px" },
                  fontWeight: { lg: "700", md: "700", sm: "600", xs: "600" },
                  lineHeight: {lg : '70px' , md : '70px' , sm : '60px' , xs : '55px' },
                }}
              >
                Learn Coding in a Better Way With Expert.
              </Typography>
            </Box>

            <Box sx={{ mt: "40px" }}>
              <Typography
                sx={{
                  color: "rgba(26, 52, 71, 0.7);",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontSize: { lg: "17px", sm: "25px", xs: "22px" },
                  fontWeight: 500,
                  lineHeight: { lg: "21px", sm: "34px" },
                }}
              >
                Learn coding from scratch with best mentor and become expert in
                the next day! Supportive community, lots of expert will help you
                to improve your coding skill.
              </Typography>
            </Box>

            <Stack sx={{ mt: "50px" }} direction="row" spacing={-1}>
              <Box
                component="img"
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "999px",
                  border: " solid #FFFFFF",
                }}
                alt="Pic 1"
                src={pic1}
              />

              <Box
                component="img"
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "999px",
                  border: " solid #FFFFFF",
                }}
                alt="Pic 1"
                src={pic2}
              />

              <Box
                component="img"
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "999px",
                  border: " solid #FFFFFF",
                }}
                alt="Pic 1"
                src={pic3}
              />

              <Box
                component="img"
                sx={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "999px",
                  border: " solid #FFFFFF",
                }}
                alt="Pic 1"
                src={pic1}
              />

              <Box>
                <Typography
                  sx={{
                    ml: "30px",
                    mt: "5px",
                    color: "rgba(26, 52, 71, 0.7);",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                    fontSize: "17px",
                    fontWeight: 500,
                    lineHeight: "21px",
                  }}
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
                sx={{ mb: "10px", display: "inline-block", mt: "-60px"  , width : { xs : '300px', sm : '450px', md : '450px', lg : '450px'  } }}
                alt="Pic 1"
                src={robot}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Fragment>
  );
};

export default Signup;
