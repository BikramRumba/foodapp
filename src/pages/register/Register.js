import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import strawberry from '../../assets/seasoning.jpeg';
import '../register/Register.css';
import {useAuth} from '../../contexts/AuthContext'
import { useState } from 'react';






function Register() {




  



  return (
  <div className='registerPage'  >
      
      <div className='register'>
       
        <form  >
          <h1>Register an account </h1>
            <label >Full Name</label>
           
            <input 
            type="text"
             name='name'
              placeholder='first name last name'   
              />
            
            <label  >Email Address</label>
            
            <input type="email" 
            required 
            placeholder='Enter your email address' 
            />

            <label  >Password</label>
           
            <input 
            type='password' 
            required  
            placeholder='Enter your password' 
            />
            
            <label > Password Confirmation</label>
              
              <input 
              type="password" 
              required  
              placeholder='Confirm password'   
              />
              
              <button type='submit'>Register</button>
        </form>

        <div className="new-account">
          Already have an account? <Link to='/signin' >Log In</Link>
        </div>
      </div>
  </div>
  );
}

export default Register;
