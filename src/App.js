
// import './App.css';

import { Fragment } from 'react';
import Signup from './authentication/Signup';
import Login from './authentication/Login';
import ForgotPassword from './authentication/ForgotPassword';
import Navbar from './layout/Navbar';
import { Route, Switch , Redirect } from 'react-router-dom';
import Cards from './components/Cards';



function App() {
  
  return (
       <Fragment>
       <Navbar/>
       <Switch>
        <Route path='/' exact>
           <Signup/>
        </Route>

        <Route path='/login' exact>
          <Login/>
        </Route>

        <Route path='/forgot' exact>
         <ForgotPassword/>
        </Route>

        <Route path='/home' exact>
         <Cards/>
        </Route>


       </Switch>
       
      
      
      
       </Fragment>
  );
}

export default App;
