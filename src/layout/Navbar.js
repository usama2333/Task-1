import React, {Fragment , useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import { Container, Stack } from '@mui/system';
import { useHistory } from 'react-router-dom';
import AuthContext from '../store/auth-context';

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

  const homeHandler = () => {

    history.replace('/home')
  }


  return (
    <Fragment>
    <Container maxWidth = 'xl' >
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
            
         <Box sx={{display : 'flex'}}>
         <Box sx={{mt: '8px' , mr: '6px' , display: {lg : 'flex', md : 'flex' , sm : 'flex', xs : 'none'}}}> <CodeIcon/></Box>
            <Typography sx={{color : '#FFFF;' , fontSize : '28px' , fonWeight : 700 , fontFamily : 'Inter' , fontStyle : 'normal' , display: {lg : 'flex', md : 'flex' , sm : 'flex', xs : 'none'}}}>
                Code
            </Typography>
            <Typography sx={{color : '#40CAF5;' , fontSize : '28px' , fonWeight : 700 , fontFamily : 'Inter' , fontStyle : 'normal' , display: {lg : 'flex', md : 'flex' , sm : 'flex', xs : 'none'}}}>
                It
            </Typography>
            <Typography sx={{color : '#40CAF5;' , fontSize : '28px' , fonWeight : 700 , display: {lg : 'flex', md : 'flex' , sm : 'flex', xs : 'none'}}}>
                .
            </Typography>
            <Button onClick={homeHandler} sx={{ ml : '22px', color : '#FFFF;' ,  fontSize : '20px', fontFamily : 'Inter' , fontStyle : 'normal' }} color="inherit">Home</Button>
         </Box>

         </Stack>
          </Typography>
          {isLoggedIn && 
          <Button onClick={logoutHandler} sx={{color : '#FFFF;' ,  fontSize : '20px', fontFamily : 'Inter' , fontStyle : 'normal' }} color="inherit">Logout</Button>}
          {!isLoggedIn &&
          <Button onClick={loginHandler} sx={{color : '#FFFF;' , fontSize : '20px' , fontFamily : 'Inter' , fontStyle : 'normal' }} color="inherit">Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
 
    
    </Container>
    </Fragment>
  )
}

export default Navbar
