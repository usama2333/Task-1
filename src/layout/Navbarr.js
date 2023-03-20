
// import React , {Fragment, useContext} from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import { useHistory } from 'react-router-dom';
// import AuthContext from '../store/auth-context';


// const pages = ["Home", "profile"];

// const Navbarr = () => {

//     const [anchorElNav, setAnchorElNav] = React.useState(null);
 

//     const authCtx = useContext(AuthContext);
//     const isLoggedIn = authCtx.isLoggedIn;
  
//      const history = useHistory();
//      const loginHandler = () => {
//        history.replace('/login')
//      }
  
//      const logoutHandler = () => {
//       authCtx.logout();
//       history.replace('/')
//     }
  
//     const homeHandler = () => {
  
//       history.replace('/home')
//     }
  
//     const handleOpenNavMenu = (event) => {
//       setAnchorElNav(event.currentTarget);
//     };
   
  
//     const handleCloseNavMenu = () => {
//         history.replace('/home')
//       setAnchorElNav(null);
//     };
  
//   return (
//     <Fragment>
//     <Container maxWidth = 'xl' >
//     <Box sx={{ml : '30px'}} >
  
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//         <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ display : {xl : 'flex',lg : 'flex' , md : 'flex' , sm : 'none' , xs : 'none'} }}
//           >
//             <MenuIcon />
//           </IconButton>
         
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
           
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "inter",
//               fontWeight: 700,
//               color: "inherit",
//               textDecoration: "none"
//             }}
//           >
//              <Box sx={{display : 'flex'}}>
         
//             <Typography sx={{color : '#FFFF;' , fontSize : '28px' , fonWeight : 700 , fontFamily : 'Inter' , fontStyle : 'normal' }}>
//                 Code
//             </Typography>
//             <Typography sx={{color : '#40CAF5;' , fontSize : '28px' , fonWeight : 700 , fontFamily : 'Inter' , fontStyle : 'normal'}}>
//                 It
//             </Typography>
//             <Typography sx={{color : '#40CAF5;' , fontSize : '28px' , fonWeight : 700 ,}}>
//                 .
//             </Typography>
           
//          </Box>
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left"
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left"
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
              
//               sx={{display: { xs: "block", md: "none" },color : '#FFFF;' , fontSize : '20px' , fontFamily : 'Inter' , fontStyle : 'normal' }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Button onClick={homeHandler} >
//                     {page}
//                   </Button>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
          
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
            
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "Inter",
//               fontWeight: 700,
//               color: "inherit",
//               textDecoration: "none"
//             }}
//           >
//         <Box sx={{display : 'flex'}}>
         
//          <Typography sx={{color : '#FFFF;' , fontSize : '28px' , fonWeight : 700 , fontFamily : 'Inter' , fontStyle : 'normal' }}>
//              Code
//          </Typography>
//          <Typography sx={{color : '#40CAF5;' , fontSize : '28px' , fonWeight : 700 , fontFamily : 'Inter' , fontStyle : 'normal'}}>
//              It
//          </Typography>
//          <Typography sx={{color : '#40CAF5;' , fontSize : '28px' , fonWeight : 700 ,}}>
//              .
//          </Typography>
        
//       </Box>
//           </Typography>

          
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, display: "block", color : '#FFFF;' , fontSize : '20px' , fontFamily : 'Inter' , fontStyle : 'normal'  }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           {isLoggedIn &&  <Button onClick={logoutHandler} sx={{color : '#FFFF;' , fontSize : '20px' , fontFamily : 'Inter' , fontStyle : 'normal' }} color="inherit">Logout</Button>}
//           {!isLoggedIn &&  <Button onClick={loginHandler} sx={{color : '#FFFF;' , fontSize : '20px' , fontFamily : 'Inter' , fontStyle : 'normal' }} color="inherit">Login</Button>}
          
//         </Toolbar>
//       </Container>
//     </AppBar>
//     </Box>
//     </Container>
//     </Fragment>
//   )
// }

// export default Navbarr
