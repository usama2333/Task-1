
import axios from "axios";

export default async function forgotPasswordData (data,history) {

    console.log(' Forgot password .......');
    console.log(data);
    

    try{
        const  response = await axios({
          method: 'post',
          url: 'http://192.168.77.18:18055/api/user/signup',
          Payload: {
            
            email : data.email,
            oldPassword : data.oldpassword,
            password : data.password,
            confirmPassword : data.confirmpassword,

          }
          
        });
  
        if(response.status === 200) {
            console.log('The response is ok');
           
        //   history.push('/login');
        }
    
      } catch(error) {
        console.log(error.message)
    
      }
      

}