
// import './App.css';

import { Fragment } from 'react';
import Signup from './authentication/Signup';
import Login from './authentication/Login';
import ForgotPassword from './authentication/ForgotPassword';
import Navbar from './layout/Navbar';


function App() {
  
  return (
       <Fragment>
       <Navbar/>
      {/* <Signup/> */}
       {/* <Login/> */}
       <ForgotPassword/>
       </Fragment>
  );
}

export default App;
