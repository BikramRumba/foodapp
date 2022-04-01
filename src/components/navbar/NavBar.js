import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/pie.jpeg';
import '../navbar/NavBar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import { UserContext } from '../../contexts/UserContext';

function NavBar() {
	const [openLinks, setOpenLinks] = useState(false);
	const { loggedIn, setLoggedIn, setUser } = useContext(UserContext);
	function toggleClick() {
		setOpenLinks(!openLinks);
	}
	function LogOutButton() {
		setLoggedIn(false);

		setUser(null);
	}
	return (
		<main className='navbar'>
			<Link className='leftSide' to='/'>
				<img alt='logo' src={logo} />
				FoodHuB
			</Link>
			{/* FOr mobile view */}
			{loggedIn ? (
				Link(
					<div id={openLinks ? 'open' : 'close'}>
						<div className='hiddenLinks'>
							<Link onClick={LogOutButton} to='/'>
								Log Out
							</Link>
							<Link to='/about'>About Us</Link>
							<Link to='/gallery'>Gallery</Link>
						</div>
					</div>
				)
			) : (
				<div id={openLinks ? 'open' : 'close'}>
					<div className='hiddenLinks'>
						<Link to='/login'>Log In</Link>
						<Link to='/about'>About Us</Link>
						<Link to='/gallery'>Gallery</Link>
					</div>
				</div>
			)}
			{loggedIn ? (
				<div className='rightSide'>
					<Link onClick={LogOutButton} to='/'>
						Log Out
					</Link>
					<Link to='/about'>About Us</Link>
					<Link to='/gallery'>Gallery</Link>
					<button onClick={toggleClick}>
						<ReorderIcon />
					</button>
				</div>
			) : (
				<div className='rightSide'>
					<Link to='/login'>Log In</Link>
					<Link to='/about'>About Us</Link>
					<Link to='/gallery'>Gallery</Link>
					<button onClick={toggleClick}>
						<ReorderIcon />
					</button>
				</div>
			)}
		</main>
	);
}

export default NavBar;
