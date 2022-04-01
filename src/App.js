import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserContextProvider from './contexts/UserContext';

/* Importing components and pages */
import NavBar from './components/navbar/NavBar';
import AboutUs from './pages/aboutUs/AboutUs';
import Gallery from './pages/gallery/Gallery';
import Footer from './components/footer/Footer';

import Restaurants from './pages/restaurants/Restaurants';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ResetPassword from './pages/resetPassword/ResetPassword';
import User from './pages/user/User';
import Search from './pages/search/Search';

function App() {
	return (
		<div className='App'>
			<Router>
				<UserContextProvider>
					<NavBar />
					<Switch>
						<Route path='/' exact component={Home}></Route>
						<Route path='/login' component={Login}></Route>
						<Route path='/about' component={AboutUs}></Route>
						<Route path='/register' component={Register}></Route>
						<Route path='/reset' component={ResetPassword}></Route>
						<Route path='/gallery' component={Gallery}></Route>
						<Route path='/user' component={User}></Route>
						<Route path='/restaurants' component={Restaurants}></Route>
						<Route path='/search' component={Search}></Route>
					</Switch>
				</UserContextProvider>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
