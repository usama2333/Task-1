import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  username: Yup.string().min(2).max(25).required("Please enter user name"),
  country: Yup.string().min(2).max(15).required("Please enter your country"),
  phone: Yup.number().positive("Write correct").integer().min(8).required('A phone number is required'),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmpassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});