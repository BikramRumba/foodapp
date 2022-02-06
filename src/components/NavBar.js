import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/pie.jpeg'
import '../styles/NavBar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function NavBar() {
const[openLinks, setOpenLinks] =useState(false);

function toggleClick (){
  setOpenLinks(!openLinks)
}

  return (
        <div className="navbar">
           <div className="leftSide" id={openLinks ? "open":"close"}>
            <Link to='/'>
            <img src={logo}/>
            </Link>
              <Link to='/' >
              FoodHuB
              </Link>
              {/* Creating adiv for small screen size */}
              <div className="hiddenLinks">
              <Link to='/signin' >Sign In</Link>
              <Link to='/about' >About Us</Link>
              <Link to='/gallery' >Gallery</Link>
              </div>
           </div>
           <div className="rightSide">
              <Link to='/signin' >Sign In</Link>
              <Link to='/about' >About Us</Link>
              <Link to='/gallery' >Gallery</Link>
              <button onClick={toggleClick}> 
              <ReorderIcon/>
              </button>
           </div>
           
        </div>
  );
}

export default NavBar;

