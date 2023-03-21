import pic1 from "../assests/images/pic1.png";
import pic2 from "../assests/images/pic2.png";
import pic3 from "../assests/images/pic3.png";


export const boxes = [
    { id: 1, title: "pic1", content: pic1 },
    { id: 2, title: "pic2", content: pic2 },
    { id: 3, title: "pic3", content: pic3 },
    { id: 4, title: "pic4", content: pic1 },
  ];

  export const stackDirection = {
    md: "column-reverse", 
    sm : 'column-reverse' , 
    xs : 'column-reverse' ,
    lg: "row"
  }
  
 export const sign ={
    color: "#1A3447",
    fontWeight: 600,
    fontSize: "36px",
    lineHeight: "44px",
    fontFamily: "Inter",
    fontStyle: "normal",
    
  }

  export const inputBox = {
    color: "#B0B0B0",
    backgroundColor: "#FFFFFF",
    width: { xl: "600px", lg: "470px", md: "auto" },
    height: "60px",
    boxSizing: "border-box",
  }

  export const inputHafBox = {
    color: "#1A3447",
    backgroundColor: "#FFFFFF",
    width: "48%",
    height: "60px",
    boxSizing: "border-box",
  }

  export const buttonSignUp = {
    height: "60px",
    width: {
      xl: "600px",
      lg: "470px",
      md: "100%",
      sm: "100%",
      xs: "100%",
    },
    backgroundColor: "#1A3447",
    fontSize: "18px",
    lineHeight: "22px",
    fontWeight: 500,
    textTransform: "capitalize",
   
  }

  export const secondPortionBox = {
    flexGrow: 1,
    backgroundColor: "#E8FFFE",
    zIndex: "-10000",
    width: { lg: "558px", md: "auto", sm: "auto" },
    px: "40px",
  }

  export const leranCodingBox = {
    
     mt: { lg: "163px", md: "120px", sm: "100px", xs: "80px" } 
  }

  export const learnCoding = {
    color: "#1A3447",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: { lg: "64px", md: "64px", sm: "54px", xs: "40px" },
    fontWeight: { lg: "700", md: "700", sm: "600", xs: "600" },
    lineHeight: {lg : '70px' , md : '70px' , sm : '60px' , xs : '55px' },
  }

  export const learnCodingText = {
    color: "rgba(26, 52, 71, 0.7);",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: { lg: "17px", sm: "25px", xs: "22px" },
    fontWeight: 500,
    lineHeight: { lg: "21px", sm: "34px" },
  }

  export const roundImg =  {
    width: "30px",
    height: "30px",
    borderRadius: "999px",
    border: " solid #FFFFFF",
  }

  export const developersText = {
     ml: "30px",
     mt: "5px",
     color: "rgba(26, 52, 71, 0.7);",
     fontFamily: "Inter",
     fontStyle: "normal",
     fontSize: "17px",
     fontWeight: 500,
     lineHeight: "21px",
  }

  export const alreadyAccount = {
    color: "#464646",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: "16px",
  }

  export const code = {
    fontWeight : 'bold',
    color : '#1A3447', 
    fontSize : '28px' , 
    fonWeight : 700 , 
    fontFamily : 'Inter' , 
    fontStyle : 'normal' 
  }
  
  export const it = { 
    fontWeight : 'bold',
    color : '#40CAF5', 
    fontSize : '28px' , 
    fonWeight : 700 , 
    fontFamily : 'Inter' , 
    fontStyle : 'normal'
  
  }

  export const forgotPassword = {
    width: {
        xl: "600px",
        lg: "470px",
        md: "100%",
        sm: "100%",
        xs: "100%",
      },
      mt: "7px",
      mb: "7px",
      fontStyle: "italic",
      lineHeight: "22px",
      display: "flex",
      justifyContent: "flex-end",
  }

  export const robotSx =  {
    mb: "10px", display: "inline-block", mt: "-60px"  ,
    width : { xs : '300px', sm : '450px', md : '450px', lg : '450px'}  
  }

  export const errorCon = {
    backgroundColor : '#984646', 
    width : '100%' , 
    height : '650px' , 
    backgroundSize : 'cover'
  }

  export const errorBox = {
    display : 'flex' , 
    justifyContent : 'center' , 
    alignItems : 'center'
  }