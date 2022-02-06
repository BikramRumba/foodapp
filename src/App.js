import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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


    </Router>

    </div>
  
  )
 
}

export default App;
