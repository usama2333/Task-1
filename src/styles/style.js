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
    fontSize: "26px",
    lineHeight: "44px",
    fontFamily: "Inter",
    fontStyle: "normal",
    
  }

  export const inputBox = {
    color: "#B0B0B0",
    backgroundColor: "#FFFFFF",
    width: { xl: "600px", lg: "470px", md: "auto" },
    height: "30px",
    boxSizing: "border-box",
  }

  export const inputHafBox = {
    color: "#1A3447",
    backgroundColor: "#FFFFFF",
    width: "48%",
    // height: "60px",
    boxSizing: "border-box",
    mb : '-10px'
  }

  export const buttonSignUp = {
    height: "40px",
    width: {
      xl: "600px",
      lg: "470px",
      md: "100%",
      sm: "100%",
      xs: "100%",
    },
    backgroundColor: "#1A3447",
    fontSize: "16px",
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
    
     mt: { lg: "120px", md: "120px", sm: "100px", xs: "80px" } 
  }

  export const learnCoding = {
    color: "#1A3447",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: { lg: "50px", md: "54px", sm: "50px", xs: "38px" },
    fontWeight: { lg: "700", md: "700", sm: "600", xs: "600" },
    lineHeight: {lg : '55px' , md : '70px' , sm : '60px' , xs : '50px' },
  }

  export const learnCodingText = {
    color: "rgba(26, 52, 71, 0.7);",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: { lg: "15px", sm: "25px", xs: "22px" },
    fontWeight: 500,
    lineHeight: { lg: "18px", sm: "34px" },
  }

  export const roundImg =  {
    width: "20px",
    height: "20px",
    borderRadius: "999px",
    border: " solid #FFFFFF",
  }

  export const developersText = {
     ml: "30px",
     mt: "5px",
     color: "rgba(26, 52, 71, 0.7);",
     fontFamily: "Inter",
     fontStyle: "normal",
     fontSize: "15px",
     fontWeight: 500,
     lineHeight: "18px",
  }

  export const alreadyAccount = {
    color: "#464646",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontSize: "14px",
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
    width : { xs : '300px', sm : '450px', md : '450px', lg : '300px'}  
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