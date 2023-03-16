
import axios from "axios";

export default async function AddLoginData (data,history , authCtx) {

    console.log('Api data .......');
    console.log(data); 

    try{
        const  response = await axios({
          method: 'post',
          url: 'http://192.168.77.18:18008/users/login',

          data: {
            email : data.email,
            password : data.password,
          }
          
        });
  
        console.log('Test api response');
        console.log(response);

        console.log('this is response data token');
        console.log(response.data.token);
        authCtx.login(response.data.token);

        if(response.status === 200) {
            console.log('The response is ok');
           
          history.push('/home');
        }
        if(response.status === 201) {
          console.log('The response is ok');
         
        history.push('/home');
      }
    
      } catch(error) {
        console.log(error.message)
    
      }
      

}