import React, {Fragment , useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, Stack } from '@mui/system';
import { useHistory } from 'react-router-dom';
import AuthContext from '../store/auth-context';
import Vector from '../assests/images/Vector.png'
import { code , it } from './style';

const Navbar = () => {

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

   const history = useHistory();
   const loginHandler = () => {
     history.replace('/login')
   }

   const logoutHandler = () => {
    authCtx.logout();
    history.replace('/')
  }

  return (
    <Fragment>

    <Container maxWidth = 'xl' sx={{position : 'relative' }} >
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" sx={{backgroundColor : 'transparent' , boxShadow : 'none' , pl : '20px'}}>
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Stack
         direction='row'
         alignItems='center'
         
        >
            
         <Box sx={{display : 'flex' ,justifyContent : 'center' , alignItems : 'center' }}>
         
      
         <Box
            sx={{width : '22px' , height : '22px' , mr : '12px'}}
            component="img"
            alt="Pic 1" src={Vector}
          />
            <Typography sx={code}>
                Code
            </Typography>
            <Typography sx={it}>
                It
            </Typography>
            <Typography sx={code}>
                .
            </Typography>
         
           
         
         </Box>

         </Stack>
          </Typography>
          {isLoggedIn && 
          <Button variant='contained' sx={{fontSize : '12px'}}  onClick={logoutHandler} color="primary">Logout</Button>}
          {!isLoggedIn &&
          <Button variant='contained' sx={{fontSize : '12px'}}  onClick={loginHandler}  color="primary">Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
 
    
    </Container>
    </Fragment>
  )
}

export default Navbar
