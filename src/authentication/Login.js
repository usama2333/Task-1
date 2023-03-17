import { Typography , InputAdornment , Button, TextField} from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import React, {Fragment , useContext} from 'react';
import pic1 from '../assests/images/pic1.png';
import pic2 from '../assests/images/pic2.png';
import pic3 from '../assests/images/pic3.png';
import robot from '../assests/images/robot.png';
import background from '../assests/images/background.png';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import { loginSchema } from '../schema/loginschema';
import AddLoginData from '../api/loginApi';
import AuthContext from '../store/auth-context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const initialValues = {
   
    email : "",
    password : "",
  
  }

  const notify = () => toast("Login Failed"); 

const Signup = () => {

  const authCtx = useContext(AuthContext);

    const history = useHistory();

    const logoutHandler = () => {
        history.replace('/');
    }

    const forgotHandler = () => {
        history.replace('/forgot');
    }


    const {values , errors , touched , handleBlur , handleChange , handleSubmit} = useFormik({
        initialValues : initialValues,
        validationSchema : loginSchema,
        onSubmit : (values , action, ) => {
    
          AddLoginData(values, history , authCtx , notify);
    
         console.log('Login details here ......');
         console.log(values);
          
          
        }
      })

   
  return (
    <Fragment>

      <Container  maxWidth = 'xl' sx={{width : {lg : '100%' , md : '90%' , sm : '90%' , xs : '100%'}, backgroundImage: `url(${background})`, backgroundRepeat : 'no-repeat'  }}>
      
         <Stack
         direction={{md : 'column' , lg : 'row'}}
         spacing={19}
         >
            
       <Box sx={{flexGrow : 1 , ml : '30px'   }}>

         
       <Box sx={{mt :{ lg: '230.5px' , md : '90px' , sm : '70px' , xs : '50px'}, mb : '44px'}}>
            <Typography sx={{color : '#1A3447',fontWeight : 600 , fontSize : '36px' , lineHeight : '44px' , fontFamily : 'Inter' , fontStyle : 'normal'}}>
                Login 
            </Typography>
         </Box>


       <form onSubmit={handleSubmit}> 
     <Stack 
     spacing= {{lg : '30px' , md : '25px' , sm : '20px' , xs : '20px'} }
     >
    
     <Box
        sx={{ color : 'red',  boxSizing : 'border-box',width: {xl : 'auto',lg : '470px' , md : 'auto'},height : '60px', }}
       >
       <TextField  fullWidth label="E-mail" id="email" name = 'email' 

        onChange={handleChange} 
        onBlur={handleBlur}
        value={values.email}
       
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                 <EmailIcon sx={{color : values.email ? 'black': '#B0B0B0'}}/>      
            </InputAdornment>
          ),
        }}/>
         { errors.email && touched.email ? (<Typography variant='p' color='red'>{errors.email}</Typography>) : null}
     </Box>
    


     <Box
    sx={{ color : '#1A3447', width: {xl : 'auto',lg : '470px' , md : 'auto'},height : '60px', boxSizing : 'border-box' }}
       >
       <TextField fullWidth label="Password" id="password" name = 'password' type="password"

        onChange={handleChange} 
        onBlur={handleBlur}
        value={values.password} 
       
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                 <VisibilityIcon sx={{color :values.password ? 'black': '#B0B0B0'}}/>
            </InputAdornment>
          ),
        }}/>
        { errors.password && touched.password ? (<Typography variant='p' color='red'>{errors.password}</Typography>) : null}
     </Box>
     
     </Stack>

     

     <Typography sx={{width: {xl : '100%',lg : '470px' , md : '100%', sm : '100%' , xs : '100%'} ,mt : '7px' , mb : '7px',fontStyle : 'italic' , lineHeight : '22px' , display : 'flex' , justifyContent : 'flex-end'}}>
        <Button sx={{fontStyle : 'italic',color : '#1A3447' }} onClick={forgotHandler}>
        Forgot Password ?
        </Button>
       
     </Typography>
     

     <Box>
     <Button sx={{height : '60px',width: {xl : '100%',lg : '470px' , md : '100%', sm : '100%' , xs : '100%'} , backgroundColor : '#1A3447' , fontSize : '18px' , lineHeight : '22px' , fontWeight : 500 , textTransform : 'capitalize'}} size='large' variant="contained"  type='submit'>Login</Button>
     </Box>
    </form>

     
     <Stack
      direction='row'
      sx={{justifyContent : 'center' , alignItems : 'center' , mt : '15px' }}
     >
        <Typography sx={{color : '#464646',fontFamily : 'Inter' , fontStyle : 'normal' , fontSize : '16px'}}>
        Don't have an account?
        </Typography>
        <Button onClick={logoutHandler}  sx={{textTransform : 'capitalize' , fontWeight : 'bold' , fontSize : '16px'}}>
        Register
        </Button>
     </Stack>


    
        
</Box>
            {/* Second portion starts here */}


            <Box sx={{flexGrow : 1 , backgroundColor : '#E8FFFE', zIndex : '-10000', width : {lg : '558px', md : 'auto' , sm : 'auto'}, px : '40px'}}>
                
                <Box sx={{mt : {lg : '163px' , md : '120px' , sm : '70px' , xs : '40px'}}}>
                    <Typography sx={{color : '#1A3447' , fontFamily : 'Inter' , fontStyle : 'normal' , fontSize : {lg : '64px' , md : '64px' , sm : '64px' , xs : '54px'} , fontWeight : 700 , lineHeight : '70px'}}>
                    Learn Coding in 
                    a Better Way With 
                    Expert.
                    </Typography>
                </Box>

                <Box sx={{mt : '40px'}}>
                    <Typography sx={{color : 'rgba(26, 52, 71, 0.7);' , fontFamily : 'Inter' , fontStyle : 'normal' , fontSize :{lg : '17px' , sm : '25px' , xs : '22px'} , fontWeight : 500 , lineHeight : { lg :'21px' , sm : '34px'}}}>
                    Learn coding from scratch with best mentor and become expert in the next day! Supportive community, lots of expert will help you to improve your coding skill.
                    </Typography>
                </Box>

                

                <Stack 
                sx={{mt : '50px'}}
                direction='row'
                spacing={-1}
                >
                <Box
                    component="img"
                    sx={{
                            width : '30px' , height : '30px' , borderRadius : '999px' ,  border:' solid #FFFFFF'
                       }}
                    alt="Pic 1"
                    src={pic1}
                  />

                <Box
                    component="img"
                    sx={{
                            width : '30px' , height : '30px' , borderRadius : '999px' ,  border:' solid #FFFFFF'
                       }}
                    alt="Pic 1"
                    src={pic2}
                  />

                <Box
                    component="img"
                    sx={{
                            width : '30px' , height : '30px' , borderRadius : '999px' ,  border:' solid #FFFFFF'
                       }}
                    alt="Pic 1"
                    src={pic3}
                  />

                <Box
                    component="img"
                    sx={{
                            width : '30px' , height : '30px' , borderRadius : '999px' ,  border:' solid #FFFFFF'
                       }}
                    alt="Pic 1"
                    src={pic1}
                  />

                  <Box >
                    <Typography sx={{ml : '30px' , mt : '5px', color : 'rgba(26, 52, 71, 0.7);' , fontFamily : 'Inter' , fontStyle : 'normal' , fontSize : '17px' , fontWeight : 500 , lineHeight : '21px'}}>
                        3K+ developers joined us, now it's your turn
                    </Typography>
                  </Box>

                </Stack>

                <Box sx={{display : 'flex' , justifyContent : 'center', alignItems : 'center'}}>
                <Box
                    component="img"
                    sx={{mb : '10px',display : 'inline-block' ,  mt : '-60px'  }}
                    alt="Pic 1"
                    src={robot}
                  />  
                </Box>

            </Box>
           

         </Stack>
      </Container>
      <ToastContainer />
    </Fragment>
  )
}

export default Signup
