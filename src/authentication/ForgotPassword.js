import { Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import Button from '@mui/material/Button';
import React, {Fragment} from 'react';
import TextField from '@mui/material/TextField';
import pic1 from '../assests/images/pic1.png';
import pic2 from '../assests/images/pic2.png';
import pic3 from '../assests/images/pic3.png';
import robot from '../assests/images/robot.png';
import background from '../assests/images/background.png';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useFormik } from 'formik';
import { forgotSchema } from '../schema/forgot';

const initialValues = {
    
    email : "",
    oldpassword : "",
    newpassword : "",
    confirmpassword : ""
  
  }


const Signup = () => {


    const {values , errors , touched , handleBlur , handleChange , handleSubmit} = useFormik({
        initialValues : initialValues,
        validationSchema : forgotSchema,
        onSubmit : (values , action, ) => {
    
          // AddInputData(values);
    
         console.log('forgot password..............................');
         console.log(values);
          
          
          
        }
      })


  return (
    <Fragment>

      <Container  maxWidth = 'xl' sx={{backgroundImage: `url(${background})`, backgroundRepeat : 'no-repeat'  }}>
      
         <Stack
         direction={{md : 'column' , lg : 'row'}}
         spacing={19}
         >
            
       <Box sx={{flexGrow : 1 , ml : '30px'  }}>

         
       <form onSubmit={handleSubmit}> 
     <Stack
        spacing= {{lg : '30px' , md : '25px' , sm : '20px' , xs : '20px'} }
     >
    
    <Box sx={{mt :{ lg: '230.5px' , md : '90px' , sm : '70px' , xs : '50px'}, mb : '37px'}}>
            <Typography sx={{color : '#1A3447',fontWeight : 600 , fontSize : '36px' , lineHeight : '44px' , fontFamily : 'Inter' , fontStyle : 'normal'}}>
                Forget/Reset Password 
            </Typography>
         </Box>
     <Box
        sx={{ color : '#B0B0B0',  boxSizing : 'border-box',width: 'auto',height : '60px', }}
       >
       <TextField  fullWidth label="E-mail" id="email" name = 'email'

        onChange={handleChange} 
        onBlur={handleBlur}
        value={values.email}

         InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                 <EmailIcon sx={{color : '#B0B0B0'}}/>      
            </InputAdornment>
          ),
        }}/>

     { errors.email && touched.email ? (<Typography variant='p' color='red'>{errors.email}</Typography>) : null}
     </Box>


     <Box
    sx={{ color : '#1A3447', width: 'auto',height : '60px', boxSizing : 'border-box' }}
       >
       <TextField fullWidth label="Old Password" id="oldpassword" name = "oldpassword"

        onChange={handleChange} 
        onBlur={handleBlur}
        value={values.oldpassword}
       
         InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                 <VisibilityIcon sx={{color : '#B0B0B0'}}/>
            </InputAdornment>
          ),
        }}/>

        { errors.oldpassword && touched.oldpassword ? (<Typography variant='p' color='red'>{errors.oldpassword}</Typography>) : null}
     </Box>


     
     <Box
    sx={{ color : '#1A3447',  width: 'auto',height : '60px', boxSizing : 'border-box' }}
       >
       <TextField fullWidth label="New Password" id="newpassword" name= "newpassword"
          onChange={handleChange} 
        onBlur={handleBlur}
        value={values.newpassword}
       
         InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                 <VisibilityIcon sx={{color : '#B0B0B0'}}/>
            </InputAdornment>
          ),
        }}/>
        { errors.newpassword && touched.newpassword ? (<Typography variant='p' color='red'>{errors.newpassword}</Typography>) : null}
     </Box>

     
     <Box
    sx={{ color : '#1A3447',  width: 'auto',height : '60px', boxSizing : 'border-box' }}
       >
       <TextField fullWidth label="Confirm Password" id="confirmpassword" name = "confirmpassword" 
       
       onChange={handleChange} 
        onBlur={handleBlur}
        value={values.confirmpassword}

        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                 <VisibilityIcon sx={{color : '#B0B0B0'}}/>
            </InputAdornment>
          ),
        }}/>
         { errors.confirmpassword && touched.confirmpassword ? (<Typography variant='p' color='red'>{errors.confirmpassword}</Typography>) : null}
     </Box>

     <Box>
     <Button sx={{mb : '15px',height : '60px',width : '100%' , backgroundColor : '#1A3447', fontSize : '18px' , lineHeight : '22px' , fontWeight : 500}} size='large' variant="contained" type = 'submit'>Reset Password</Button>
     </Box>

     </Stack>

     </form>

   
</Box>
            {/* Second portion starts here */}


            <Box sx={{flexGrow : 1 , backgroundColor : '#E8FFFE', zIndex : '-10000', width : {lg : '525px', md : 'auto' , sm : 'auto'}, px : '40px'}}>
                
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

                <Box
                    component="img"
                    sx={{mb : '10px',display : 'inline-block' ,  mt : '-60px' , ml : {lg : '90px' , md : '200px', sm : '50px' , xs : '-60px'} }}
                    alt="Pic 1"
                    src={robot}
                  />

                

            </Box>
           

         </Stack>
      </Container>
      
    </Fragment>
  )
}

export default Signup
