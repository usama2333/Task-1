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




const Signup = () => {
  return (
    <Fragment>

      <Container  maxWidth = 'xl' sx={{backgroundImage: `url(${background})`, backgroundRepeat : 'no-repeat'  }}>
      
         <Stack
         direction={{md : 'column' , lg : 'row'}}
         spacing={19}
         >
            
       <Box sx={{flexGrow : 1 , ml : '30px'  }}>

         

     <Stack
     spacing='30px'
     >
    
    <Box sx={{mt : {lg :'230.5px' , md : '110px' , sm : '70px'}, mb : '37px'}}>
            <Typography sx={{color : '#1A3447',fontWeight : 600 , fontSize : '36px' , lineHeight : '44px' , fontFamily : 'Inter' , fontStyle : 'normal'}}>
                Forget/Reset Password 
            </Typography>
         </Box>
     <Box
        sx={{ color : '#B0B0B0', backgroundColor : '#FFFFFF',  boxSizing : 'border-box',width: 'auto',height : '60px', }}
       >
       <TextField  fullWidth label="E-mail" id="fullWidth"  InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                 <EmailIcon sx={{color : '#B0B0B0'}}/>      
            </InputAdornment>
          ),
        }}/>
     </Box>


     <Box
    sx={{ color : '#1A3447', backgroundColor : '#FFFFFF', width: 'auto',height : '60px', boxSizing : 'border-box' }}
       >
       <TextField fullWidth label="Old Password" id="fullWidth"  InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                 <VisibilityIcon sx={{color : '#B0B0B0'}}/>
            </InputAdornment>
          ),
        }}/>
     </Box>


     
     <Box
    sx={{ color : '#1A3447', backgroundColor : '#FFFFFF', width: 'auto',height : '60px', boxSizing : 'border-box' }}
       >
       <TextField fullWidth label="New Password" id="fullWidth"  InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                 <VisibilityIcon sx={{color : '#B0B0B0'}}/>
            </InputAdornment>
          ),
        }}/>
     </Box>

     
     <Box
    sx={{ color : '#1A3447', backgroundColor : '#FFFFFF', width: 'auto',height : '60px', boxSizing : 'border-box' }}
       >
       <TextField fullWidth label="Confirm Password" id="fullWidth"  InputProps={{
          endAdornment: (
            <InputAdornment position="end">
                 <VisibilityIcon sx={{color : '#B0B0B0'}}/>
            </InputAdornment>
          ),
        }}/>
     </Box>
     </Stack>
     <Typography sx={{mt : '17px' , mb : '27px',color : '#1A3447' , fontFamily : 'Inter', fontSize : '18px' , fontStyle : 'italic' , lineHeight : '22px' , display : 'flex' , justifyContent : 'flex-end'}}>
        Forgot Password ?
     </Typography>


     <Box>
     <Button sx={{mb : '15px',height : '60px',width : '100%' , backgroundColor : '#1A3447'}} size='large' variant="contained">Reset Password</Button>
     </Box>

   
</Box>
            {/* Second portion starts here */}


            <Box sx={{flexGrow : 1 , backgroundColor : '#E8FFFE', zIndex : '-10000', width : {lg : '658px', md : 'auto' , sm : 'auto'}, px : '40px'}}>
                
                <Box sx={{mt : {lg : '163px' , md : '140px' , sm : '90px'}}}>
                    <Typography sx={{color : '#1A3447' , fontFamily : 'Inter' , fontStyle : 'normal' , fontSize : '64px' , fontWeight : 700 , lineHeight : '70px'}}>
                    Learn Coding in 
                    a Better Way With 
                    Expert.
                    </Typography>
                </Box>

                <Box sx={{mt : '40px'}}>
                    <Typography sx={{color : 'rgba(26, 52, 71, 0.7);' , fontFamily : 'Inter' , fontStyle : 'normal' , fontSize :{lg : '17px' , sm : '25px'} , fontWeight : 500 , lineHeight : { lg :'21px' , sm : '34px'}}}>
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
                    
                    alt="Pic 1"
                    src={robot}
                  />

                {/* <Stack sx={{position : 'relative'}}>

                <Box
                    component="img"
                    sx={{
                        //    display : {lg : 'block' , sm : 'none'},
                           position : 'absolute',
                           top : '-60px',
                           left : { md :'70px' , sm : '-30px'},
                        //    display : 'flex',
                        //    justifyContent : 'center',
                        //    alignItems : 'center'
                       }}
                    alt="Pic 1"
                    src={robot}
                  />

                </Stack> */}

                

            </Box>
           

         </Stack>
      </Container>
      
    </Fragment>
  )
}

export default Signup
