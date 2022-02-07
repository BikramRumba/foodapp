import React from 'react';
import {Form, Button, Card} from 'react-bootstrap';
import strawberry from '../assets/seasoning.jpeg';
import '../styles/Login.css';

function Login() {
  return (
  <div className='register' style={{backgroundImage: `url(${strawberry})`}} >
      <div className='middle'>
       
        <form id='signin-form' method ='POST'>
          <h1>Sign In</h1>
            <label htmlFor="email">Email Address</label>
            <input type="email" required name='name' 
            placeholder='Enter your email address' />

            <label htmlFor="password" >Password</label>
            <input type='password' required placeholder='Enter your password'/>
              
              <button>Sign In</button>
        </form>
        <div className="reset-password">
          Forgot Password?
        </div>
        <div className="new-account">
          Create a new account? Signup
        </div>
      </div>
  </div>
  );
}

export default Login;
