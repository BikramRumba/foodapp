import React from 'react';
import { Link } from 'react-router-dom';
import strawberry from '../../assets/seasoning.jpeg';
import '../login/Login.css';

function Login() {
  return (
  <div className='loginpage'   >
      <div className='login'>
      <h1>Log In </h1>
        <form  >
          
            <label >Email Address</label>
            <input type="email" 
            required 
            placeholder='Enter your email address' />

            <label >Password</label>
            <input type='password'
             required
              placeholder='Enter your password'/>
              
              <button>Log In</button>
        </form>
        <div className="reset-password">
         <Link to='/reset' > Forgot Password</Link>
        </div>
        <div className="new-account">
          Create a new account? <Link to='/register' >Register</Link>
        </div>
      </div>
  </div>
  );
}

export default Login;
