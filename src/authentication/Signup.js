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
import PersonIcon from '@mui/icons-material/Person';
import { useFormik } from 'formik';
import { signUpSchema } from '../schema/index';
import { useHistory } from 'react-router-dom';
import AddInputData from '../api/Api';



const initialValues = {
  name : "",
  username : "",
  email : "",
  phone : "",
  country : "",
  password : "",
  confirmpassword : ""

}



const Signup = () => {

  const history = useHistory();

  const loginHandler = () => {
    history.replace('./login');
}


  const {values , errors , touched , handleBlur , handleChange , handleSubmit} = useFormik({
    initialValues : initialValues,
    validationSchema : signUpSchema,
    onSubmit : (values , action, ) => {

      AddInputData(values,history);

    //  console.log('test..............................');
    //  console.log(values);
       
    }
  })


  return (
    <Fragment>

      <Container  maxWidth = 'xl' sx={{backgroundImage: `url(${background})`, backgroundRepeat : 'no-repeat'  }}>
      
         <Stack
         direction={{md : 'column' , lg : 'row'}}
         spacing={19}
         >
            
       <Box sx={{flexGrow : 1 , ml : '30px'}}>

         <Box sx={{mt :{ lg: '110.5px' , md : '90px' , sm : '70px' , xs : '50px'}, mb : '44px'}}>
            <Typography sx={{color : '#1A3447',fontWeight : 600 , fontSize : '36px' , lineHeight : '44px' , fontFamily : 'Inter' , fontStyle : 'normal'}}>
                Sign Up
            </Typography>
         </Box>
  <form onSubmit={handleSubmit}> 
     <Stack
      spacing= {{lg : '30px' , md : '25px' , sm : '20px' , xs : '20px'} }
     >

  
    <Box
     sx={{ color : '#B0B0B0', backgroundColor : '#FFFFFF', width: 'auto',height : '60px', boxSizing : 'border-box' }}
       >
       <TextField fullWidth label="name" id="name" name = 'name'

         onChange={handleChange} 
         onBlur={handleBlur}
         value={values.name}
       
         InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                 <PersonIcon sx={{color : 'B0B0B0' }}/>
            </InputAdornment>
          ),
        }}/>
        { errors.name && touched.name ? (<Typography variant='p' color='red'>{errors.name}</Typography>) : null}
     </Box>

     <Box
        sx={{ color : '#B0B0B0', backgroundColor : '#FFFFFF',  boxSizing : 'border-box',width: 'auto',height : '60px', }}
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
    sx={{ color : '#1A3447', backgroundColor : '#FFFFFF', width: 'auto',height : '60px', boxSizing : 'border-box' }}
       >
       <TextField fullWidth label="User-name" id="username" name = 'username' 

        onChange={handleChange} 
        onBlur={handleBlur}
        value={values.username}
       
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
          
                 <PersonIcon sx={{color : 'B0B0B0'}}/>
              
            </InputAdornment>
          ),
        }}/>
        { errors.username && touched.username ? (<Typography variant='p' color='red'>{errors.username}</Typography>) : null}
     </Box>

    <Stack
     direction='row'
     spacing={4}
    >    
     <Box
    sx={{ color : '#1A3447', backgroundColor : '#FFFFFF', width: 'auto',height : '60px', boxSizing : 'border-box' }}
       >
       <TextField fullWidth label="Phone number" id="phone" name = 'phone'

        onChange={handleChange} 
        onBlur={handleBlur}
        value={values.phone}
       
       
         />
         { errors.phone && touched.phone ? (<Typography variant='p' color='red'>{errors.phone}</Typography>) : null}
     </Box>

     <Box
    sx={{ color : '#1A3447', backgroundColor : '#FFFFFF', width: 'auto',height : '60px', boxSizing : 'border-box' }}
       >
       <TextField fullWidth label="Country" id="country " name = "country"

         onChange={handleChange} 
        onBlur={handleBlur}
        value={values.country}

         />
         { errors.country && touched.country ? (<Typography variant='p' color='red'>{errors.country}</Typography>) : null}
     </Box>
     </Stack>

     <Box
    sx={{ color : '#1A3447', backgroundColor : '#FFFFFF', width: 'auto',height : '60px', boxSizing : 'border-box' }}
       >
       <TextField fullWidth label="Password" id="password" name = 'password'

        onChange={handleChange} 
        onBlur={handleBlur}
        value={values.password} 

         InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                 <VisibilityIcon sx={{color : '#B0B0B0'}}/>
            </InputAdornment>
          ),
        }}/>
        { errors.password && touched.password ? (<Typography variant='p' color='red'>{errors.password}</Typography>) : null}
     </Box>


     <Box
   sx={{ color : '#1A3447', backgroundColor : '#FFFFFF', width: 'auto',height : '60px', boxSizing : 'border-box' }}
       >
       <TextField fullWidth label="Confirm password" id="confirmpassword" name = 'confirmpassword' 
       
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
     <Button sx={{height : '60px',width : '100%' , backgroundColor : '#1A3447' , fontSize : '18px' , lineHeight : '22px' , fontWeight : 500}} size='large' variant="contained" type='submit'>Sign Up</Button>
     </Box>

     </Stack>
     </form>

     <Box sx={{display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
        <Button onClick={loginHandler} sx={{  mb :{ lg : '60px' , md : '50px' , sm : '40px' , xs : '30px'}, color : '#464646',fontFamily : 'Inter' , fontStyle : 'normal' , fontSize : '16px' }}>
        Already have an account? Log in 
        </Button>
     </Box>

   
        
</Box>
            {/* Second portion starts here */}


            <Box sx={{flexGrow : 1 , backgroundColor : '#E8FFFE', zIndex : '-10000', width : {lg : '658px', md : 'auto' , sm : 'auto'}, px : '40px'}}>
                
                <Box sx={{mt : {lg : '163px' , md : '120px' , sm : '70px' , xs : '40px'}}}>
                    <Typography sx={{color : '#1A3447' , fontFamily : 'Inter' , fontStyle : 'normal' , fontSize : {lg : '64px' , md : '64px' , sm : '64px' , xs : '54px'}  , fontWeight : 700 , lineHeight : '70px'}}>
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
