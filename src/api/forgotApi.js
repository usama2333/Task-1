
import axios from "axios";

export default async function forgotPasswordData (data,history) {

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
           
          history.replace('/login');
        }

        if(response.status === 201) {
         
          history.replace('/login');
      }
    
      } catch(error) {
        console.log(error.message)

    
      }
      

}