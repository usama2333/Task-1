import React, {Fragment} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import { Container, Stack } from '@mui/system';

const Navbar = () => {
  return (
    <Fragment>
    <Container maxWidth = 'xl'>
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
          <Button sx={{color : '#FFFF;' ,  fontSize : '20px', fontFamily : 'Inter' , fontStyle : 'normal' }} color="inherit">Logout</Button>
          <Button sx={{color : '#FFFF;' , fontSize : '20px' , fontFamily : 'Inter' , fontStyle : 'normal' }} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
 
    
    </Container>
    </Fragment>
  )
}

export default Navbar
