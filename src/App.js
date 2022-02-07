import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

/* Importing components and pages */
import NavBar from "./components/NavBar";


import Home from "./pages/Home";
import Login from './pages/Login';
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div className="App">
    <Router>
    <NavBar/>
      <Switch>
        <Route path='/'exact component={Home} ></Route>
        <Route path='/signin'component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route path='/reset' component={ResetPassword}></Route>
      </Switch>

      <Footer/>
    </Router>

    </div>
  
  )
 
}

export default App;
