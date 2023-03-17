
import axios from "axios";

export default async function AddLoginData (data,history , authCtx , notify) {

    try{
        const  response = await axios({
          method: 'post',
          url: 'http://192.168.77.18:18008/users/login',

          data: {
            email : data.email,
            password : data.password,
          }
          
        });

        authCtx.login(response.data.token);

        if(response.status === 200) {

          history.push('/home');
        }
        if(response.status === 201) {
         
        history.push('/home');
      }
    
      } catch(error) {
        console.log(error.message)
        notify();
    
      }
      

}