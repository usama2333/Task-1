import { Fragment , useContext } from 'react';
import Signup from './components/signup/Signup';
import Login from './components/signin/Login';
import ForgotPassword from './components/forgotpassword/ForgotPassword';
import Navbar from './layout/Navbar';
import { Route, Switch , Redirect } from 'react-router-dom';
import Cards from './components/home/Cards';
import Error from './components/pages/Error';
import AuthContext from './store/auth-context';
import Navbarr from './layout/Navbarr';


function App() {

  const authCtx =  useContext(AuthContext);
  
  return (
       <Fragment>
       
       <Navbar/>
       {/* <Navbarr/> */}
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

        {authCtx.isLoggedIn && 
        <Route path='/home' exact>
         <Cards/>
        </Route>
        }

        {!authCtx.isLoggedIn && 
        <Route path='/home' exact>
        <Signup/>
        </Route>}

        <Route path='*'>
           <Error/>
       </Route>

       </Switch>
         
       </Fragment>
  );
}

export default App;
