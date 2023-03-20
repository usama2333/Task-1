import axios from "axios";

export default async function AddLoginData( data, history, authCtx, notify, login, setLogin ) {
  const apiUrl = process.env.REACT_APP_API_URL;
  
  try {
    const response = await axios({
      method: "post",
      url: apiUrl,

      data: {
        email: data.email,
        password: data.password,
      },
    });

    authCtx.login(response.data.token);

    if (response.status === 200 || response.status === 201) {
      history.push("/home");
      setLogin(true);
    }
  } catch (error) {
    console.log(error.message);
    setLogin(false);
    setTimeout(() => {
      setLogin(true);
    }, 6000);
    notify(error.message);
  }
}
