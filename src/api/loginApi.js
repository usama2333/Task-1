
import axios from "axios";

export default async function AddLoginData (data,history) {

    console.log('Api data .......');
    console.log(data); 

    try{
        const  response = await axios({
          method: 'post',
          url: 'http://182.176.169.225/:18008/users/login',
          Payload: {
            email : data.email,
            password : data.password,
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