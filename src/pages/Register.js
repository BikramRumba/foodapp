import React from 'react';
import { Link } from 'react-router-dom';
import strawberry from '../assets/seasoning.jpeg';
import '../styles/Register.css';

function Login() {
  return (
  <div className='signUp' style={{backgroundImage: `url(${strawberry})`}} >
      <div className='sign-up'>
       
        <form id='signup-form' method ='POST'>
          <h1>Sign Up </h1>
            <label htmlFor="name" >Full Name</label>
            <input type="text"  name='name' placeholder='first name last name'/>
            <label htmlFor="email">Email Address</label>
            <input type="email" required name='name' 
            placeholder='Enter your email address' />

            <label htmlFor="password" >Password</label>
            <input type='password' required placeholder='Enter your password'/>
            <label htmlFor="password-confirm"> Password Confirmation</label>
              <input type="password" required placeholder='Confirm password'/>
              
              <button>Sign Up</button>
        </form>

        <div className="new-account">
          Already have an account? <Link to='/signin' >Sign In</Link>
        </div>
      </div>
  </div>
  );
}

export default Login;
