import React from 'react';
import { Link } from 'react-router-dom';
import strawberry from '../assets/seasoning.jpeg';
import '../styles/Register.css';

function ResetPassword() {
  return (
  <div className='signUp' style={{backgroundImage: `url(${strawberry})`}} >
      <div className='sign-up'>
       
        <form id='signup-form' method ='POST'>
          <h1>Reset Your password </h1>
            <label htmlFor="email">Email Address</label>
            <input type="email" required name='name' 
            placeholder='Enter your email address' />
              <button>Reset</button>
        </form>

        <div className="new-account">
          Remember Password <Link to='/signin' >Sign In</Link>
        </div>
      </div>
  </div>
  );
}

export default ResetPassword;
