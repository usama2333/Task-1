import { Typography } from '@mui/material';
import { Box, Container, Stack } from '@mui/system';
import Button from '@mui/material/Button';
import React, {Fragment} from 'react';
import Vector from '../assests/images/Vector.png';
import TextField from '@mui/material/TextField';
import dott from '../assests/images/dot1.png';
import dot2 from '../assests/images/dot2.png';
import msg from '../assests/images/msg.png';
import eye from '../assests/images/eye.png';
import pic1 from '../assests/images/pic1.png';
import pic2 from '../assests/images/pic2.png';
import pic3 from '../assests/images/pic3.png';
import robot from '../assests/images/robot.png';
import background from '../assests/images/background.png';
import InputAdornment from '@mui/material/InputAdornment';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';



const Signup = () => {
  return (
    <Fragment>

      <Container  maxWidth = 'xl' sx={{backgroundImage: `url(${background})`, backgroundRepeat : 'no-repeat' }}>
      <Box sx={{ flexGrow: 1 , ml : '30px'}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Stack
         direction='row'
         alignItems='center'
         
        >
            
         <Box sx={{display: 'flex'}}>
         <Box sx={{mt: '8px' , mr: '6px'}}> <CodeIcon/></Box>
            <Typography sx={{color : '#FFFF;' , fontSize : '28px' , fonWeight : 700 , fontFamily : 'Inter' , fontStyle : 'normal'}}>
                Code
            </Typography>
            <Typography sx={{color : '#40CAF5;' , fontSize : '28px' , fonWeight : 700 , fontFamily : 'Inter' , fontStyle : 'normal'}}>
                It
            </Typography>
            <Typography sx={{color : '#40CAF5;' , fontSize : '28px' , fonWeight : 700}}>
                .
            </Typography>
         </Box>

         </Stack>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
 

      
         <Stack
         direction={{md : 'column' , lg : 'row'}}
         spacing={19}
         >
            
       <Box sx={{flexGrow : 1 , ml : '30px'}}>

        


         <Box sx={{mt : '110.5px', mb : '44px'}}>
            <Typography sx={{color : '#1A3447',fontWeight : 600 , fontSize : '36px' , lineHeight : '44px' , fontFamily : 'Inter' , fontStyle : 'normal'}}>
                Sign Up
            </Typography>
         </Box>


         
  <Stack
  spacing='30px'
  >
    <Box
    sx={{
       backgroundColor : '#FFFFFF',
        color : '#1A3447',
        width: 'auto',
        height : '60px',
        // border : '2px solid #1A3447',
        borderRadius : '5px',
        boxSizing : 'border-box',
        
        }}
       >
       <TextField fullWidth label="name" id="fullWidth"  InputProps={{
          endAdornment: (
            <InputAdornment position="end">
            <Stack
              direction='column' 
            >
                 <img sx={{height : '9.4px' , width : '9.5px'}} src={dott}/>
                 <img src={dot2}/>
                
            </Stack>
          
              
            </InputAdornment>
          ),
        }}/>
     </Box>

     <Box
    sx={{
        color : '#B0B0B0',
        backgroundColor : '#FFFFFF',
        width: 'auto',
        height : '60px',
        // border : '2px solid #1A3447',
        borderRadius : '5px',
        boxSizing : 'border-box',
        
        }}
       >
       <TextField  fullWidth label="E-mail" id="fullWidth"  InputProps={{
          endAdornment: (
            <InputAdornment position="end">
            <Stack
              direction='column' 
            >
                 <img src={msg}/>
            </Stack>
          
              
            </InputAdornment>
          ),
        }}/>
     </Box>


     <Box
    sx={{
        color : '#1A3447',
        backgroundColor : '#FFFFFF',
        width: 'auto',
        height : '60px',
        // border : '2px solid #1A3447',
        borderRadius : '5px',
        boxSizing : 'border-box',
        // maxWidth: '100%',
        }}
       >
       <TextField fullWidth label="User-name" id="fullWidth"  InputProps={{
          endAdornment: (
            <InputAdornment position="end">
            <Stack
              direction='column' 
            >
                 <img sx={{height : '9.4px' , width : '9.5px'}} src={dott}/>
                 <img src={dot2}/>
            </Stack>
          
              
            </InputAdornment>
          ),
        }}/>
     </Box>

    <Stack
     direction='row'
     spacing={4}
    >    
     <Box
    sx={{
        color : '#1A3447',
        backgroundColor : '#FFFFFF',
        width: 'auto',
        height : '60px',
        // border : '2px solid #1A3447',
        borderRadius : '5px',
        boxSizing : 'border-box',
        // maxWidth: '100%',
        }}
       >
       <TextField fullWidth label="Phone number" id="fullWidth"  />
     </Box>

     <Box
    sx={{
        color : '#1A3447',
        backgroundColor : '#FFFFFF',
        width: 'auto',
        height : '60px',
        // border : '2px solid #1A3447',
        borderRadius : '5px',
        boxSizing : 'border-box',
        // maxWidth: '100%',
        }}
       >
       <TextField fullWidth label="Country" id="fullWidth"  />
     </Box>
     </Stack>

     <Box
    sx={{
        color : '#1A3447',
        backgroundColor : '#FFFFFF',
        width: 'auto',
        height : '60px',
        // border : '2px solid #1A3447',
        borderRadius : '5px',
        boxSizing : 'border-box',
        // maxWidth: '100%',
        }}
       >
       <TextField fullWidth label="Password" id="fullWidth"  InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              
                 <img src={eye}/>   
            </InputAdornment>
          ),
        }}/>
     </Box>


     <Box
    sx={{
        color : '#1A3447',
        backgroundColor : '#FFFFFF',
        width: 'auto',
        height : '60px',
        // border : '2px solid #1A3447',
        borderRadius : '5px',
        boxSizing : 'border-box',
        // maxWidth: '100%',
        }}
       >
       <TextField fullWidth label="Confirm password" id="fullWidth"  InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              
                 <img src={eye}/>   
            </InputAdornment>
          ),
        }}/>
     </Box>

     <Box>
     <Button sx={{height : '60px',width : '100%' , backgroundColor : '#1A3447'}} size='large' variant="contained">Sign Up</Button>
     </Box>

     <Box sx={{display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}>
        <Button sx={{  mb :{ lg : '60px' , md : '30px'}, color : '#464646',fontFamily : 'Inter' , fontStyle : 'normal' , fontSize : '16px' }}>
        Already have an account? Log In 
        </Button>
     </Box>



    </Stack>
        


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

                <Stack sx={{position : 'relative'}}>

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

                </Stack>

                

            </Box>
           

         </Stack>
      </Container>
      
    </Fragment>
  )
}

export default Signup
