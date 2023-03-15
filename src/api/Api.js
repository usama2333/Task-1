
import axios from "axios";

export default async function AddInputData (data,history) {

    console.log('Api data .......');
    console.log(data);
    console.log(data.name);
    console.log(data.email);
    console.log( data.username);
    console.log(data.phone);
    console.log(data.country);
    console.log(data.confirmpassword);
    
    

    try{
        const  response = await axios({
          method: 'post',
          url: 'http://192.168.77.18:18055/api/user/signup',
          Payload: {
            name : data.name,
            email : data.email,
            userName : data.username,
            phoneNumber : data.phone,
            password : data.password,
            country : data.country,
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