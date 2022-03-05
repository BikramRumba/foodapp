import React from 'react';
import { Link } from 'react-router-dom';
import strawberry from '../../assets/seasoning.jpeg';
import '../register/Register';
import '../resetPassword/ResetPassword.css'

function ResetPassword() {
  return (
  <div className='resetPassword'  >
      <div className='reset'>
      <h1>Reset Your password </h1>
        <form >
            <label >Email Address</label>
            <input type="email" 
            required name='name' 
            placeholder='Enter your email address' />
              <button>Reset</button>
        </form>

        <div className="new-account">
          Remember Password <Link to='/login' >Log In</Link>
        </div>
      </div>
  </div>
  );
}

export default ResetPassword;
