import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

/* Importing components and pages */
import NavBar from "./components/NavBar";


import Home from "./pages/Home";
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
    <Router>
    <NavBar/>
      <Switch>
        <Route path='/'exact component={Home} ></Route>
        <Route path='/signin'component={Login}></Route>
      </Switch>

      <Footer/>
    </Router>

    </div>
  
  )
 
}

export default App;
