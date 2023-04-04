import { Typography, Button } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React, { Fragment, useState , useContext } from "react";
import TextField from "@mui/material/TextField";
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
import { ToastContainer, toast } from "react-toastify";
import AuthContext from "../../store/auth-context";
import "react-toastify/dist/ReactToastify.css";
import {sign , inputBox , developersText,buttonSignUp , learnCoding ,secondPortionBox ,  
  learnCodingText, boxes,robotSx, leranCodingBox,stackDirection, roundImg} from '../../styles/style';

const initialValues = {
  email: "",
  oldpassword: "",
  newpassword: "",
  confirmpassword: "",
};

const notifyy = (error) => toast(error);

const Signup = () => {

  const [login , setLogin] = useState(true);
  const [test, setTest] = useState("password");
  const history = useHistory();
  const authCtx =  useContext(AuthContext);
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
      initialValues: initialValues,
      validationSchema: forgotSchema,
      onSubmit: (values, action) => {
        forgotPasswordData(values, notifyy,history,login , setLogin);
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
          width:"100%" ,
          height : '530px',
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize : 'contain , contain'
        }}
      >
        <Stack direction={stackDirection}spacing={19}>
          <Box sx={{ flexGrow: 1, ml: {lg : "30px" , md : '0px'} }}>
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={{  xs: "36px" }}
              >
                <Box
                  sx={{
                    mt: { lg: "170.5px", md: "0px" },
                  }}
                >
                  <Typography
                  sx={sign}
                  >
                    Forget/Reset Password
                  </Typography>
                </Box>
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
                            sx={{ color: values.email ? "black" : "#B0B0B0" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />

                  {errors.email && touched.email ? (
                    <Typography variant="p" color="red" sx={{fontSize : '14px'}}>
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
                          <Box
                            sx={{ width: "0px", height: "0px", ml : '-20px' , mt : '-20px' }}
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

                  {errors.oldpassword && touched.oldpassword ? (
                    <Typography variant="p" color="red" sx={{fontSize : '14px'}}>
                      {errors.oldpassword}
                    </Typography>
                  ) : null}
                </Box>

                <Box
                 sx={inputBox}
                >
                  <TextField
                   size="small"
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
                          <Box
                            sx={{ width: "0px", height: "0px", ml : '-20px' , mt : '-20px' }}
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
                  {errors.newpassword && touched.newpassword ? (
                    <Typography variant="p" color="red" sx={{fontSize : '14px'}}>
                      {errors.newpassword}
                    </Typography>
                  ) : null}
                </Box>

                <Box
               sx={inputBox}
                >
                  <TextField
                   size="small"
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
                          <Box
                            sx={{ width: "0px", height: "0px", ml : '-20px' , mt : '-20px' }}
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
                  {errors.confirmpassword && touched.confirmpassword ? (
                    <Typography variant="p" color="red" sx={{fontSize : '14px'}}>
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
                    Reset Password
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
                    Reset Password
                  </Button>
                }
                </Box>
              </Stack>
            </form>
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
                  component="img"
                  key={box.id}
                  sx={roundImg}
                  alt={box.title}
                  src={box.content}
                ></Box>
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
