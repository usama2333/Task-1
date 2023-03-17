import { Fragment , useContext } from 'react';
import Signup from './authentication/Signup';
import Login from './authentication/Login';
import ForgotPassword from './authentication/ForgotPassword';
import Navbar from './layout/Navbar';
import { Route, Switch , Redirect } from 'react-router-dom';
import Cards from './components/Cards';
import Error from './pages/Error';
import AuthContext from './store/auth-context';
import Navbarr from './layout/Navbarr';


function App() {

  const authCtx =  useContext(AuthContext);
  
  return (
       <Fragment>
       
       {/* <Navbar/> */}
       <Navbarr/>
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
        </Route>}

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
