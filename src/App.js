import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";


/* Importing components and pages */
import NavBar from "./components/navbar/NavBar";
import AboutUs from "./pages/aboutUs/AboutUs";
import Gallery from "./pages/gallery/Gallery";
import Footer from "./components/footer/Footer";

import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Register from "./pages/register/Register";
import ResetPassword from "./pages/resetPassword/ResetPassword";

function App() {
  return (
    <div className="App">
   
    <Router>
      
    <NavBar/>
      <Switch>
      <AuthContextProvider>
        <Route path='/'exact component={Home} ></Route>
        <Route path='/login'component={Login}></Route>
        <Route path='/about' component = {AboutUs}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/reset' component={ResetPassword}></Route>
        <Route path='/gallery' component ={Gallery}></Route>
        </AuthContextProvider>
      </Switch>

      <Footer/>
      
    </Router>

    </div>
  
  )
 
}

export default App;
