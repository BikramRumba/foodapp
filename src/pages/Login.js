import React from 'react';
import { Link } from 'react-router-dom';
import strawberry from '../assets/seasoning.jpeg';
import '../styles/Login.css';

function Login() {
  return (
  <div className='register' style={{backgroundImage: `url(${strawberry})`}} >
      <div className='middle'>
       
        <form id='signin-form' method ='POST'>
          <h1>Sign In to Order</h1>
            <label htmlFor="email">Email Address</label>
            <input type="email" required name='name' 
            placeholder='Enter your email address' />

            <label htmlFor="password" >Password</label>
            <input type='password' required placeholder='Enter your password'/>
              
              <button>Sign In</button>
        </form>
        <div className="reset-password">
         <Link to='/reset' > Forgot Password</Link>
        </div>
        <div className="new-account">
          Create a new account? <Link to='/register' >Signup</Link>
        </div>
      </div>
  </div>
  );
}

export default Login;
