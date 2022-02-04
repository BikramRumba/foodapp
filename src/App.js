import { BrowserRouter as Router, Switch, Route } from "react-router-dom";






import Register from "./components/Register";
import NavBar from "./components/NavBar";
import image from '../src/image/food.png'
import Login from "./components/Login";

function App() {
  return (
    < >
     
    <div   >
 
     
    <Router>
   
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
    </Switch>

    <div  style={{backgroundImage: `url(${image})`,
       backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
          }}> <h1>
            <NavBar/>
          </h1>

       
     </div>
  
     </Router>
    
   
    </div>
  
    </>
  );
}

export default App;
