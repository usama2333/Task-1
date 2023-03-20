import axios from "axios";

export default async function AddInputData(data, history, notify ) {
  try {
    const response = await axios({
      method: "post",
      url: "http://192.168.77.18:18008/users/signup",
      data: {
        name: data.name,
        email: data.email,
        userName: data.username,
        phoneNumber: data.phone,
        password: data.password,
        country: data.country,
        confirmPassword: data.confirmpassword,
      },
    });

    if (response.status === 200 || response.status === 201) {
      history.replace("/login");
    }
  } catch (error) {
    console.log(error.message);
   
    notify(error.message);
  }
}
