import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
  return <nav>
       
        <ul className='list'>
        <h1>FoodHuB</h1>
       
            <Link to='/login' >Login</Link>
            <Link to={'/register'}>Register</Link>
            <Link>Gallery</Link> 
            <Link>About Us</Link>
        </ul>
  </nav>;
}

export default NavBar;

