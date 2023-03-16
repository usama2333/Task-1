
import axios from "axios";

export default async function forgotPasswordData (data,history) {

    console.log(' Forgot password .......');
    console.log(data);
    console.log(data.email);
    console.log(data.oldpassword);
    console.log(data.newpassword);
    console.log(data.confirmpassword);
    

    try{
        const  response = await axios({
          method: 'post',
          url: 'http://192.168.77.18:18008/users/reset',
          data: {
            
            email : data.email,
            oldPassword : data.oldpassword,
            password : data.newpassword,
            confirmPassword : data.confirmpassword,

          }
          
        });
  
        if(response.status === 200) {
            console.log('The response is ok');
           
          history.replace('/login');
        }

        if(response.status === 201) {
          console.log('The response is ok');
         
          history.replace('/login');
      }
    
      } catch(error) {
        console.log(error.message)

    
      }
      

}