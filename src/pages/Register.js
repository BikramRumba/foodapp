import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import strawberry from '../assets/seasoning.jpeg';
import '../styles/Register.css';
import {useAuth} from '../contexts/AuthContext'
import { useState } from 'react';






function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {signup} =useAuth();
  const [error, setError] =useState('');
  const [loading, setLoading] =useState(false);




  async function handleSubmit(e) {
    e.preventDefault()
    
    if(passwordRef.current.value !==
      passwordConfirmRef.current.value){
        return setError('Passwords do not match')
      }
        try{
          setError('')
          setLoading(true)
          await signup(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
        }catch{
          setError('Failed to create an account');
        }
        setLoading(false)
    
  }
  



  return (
  <div className='signUp' style={{backgroundImage: `url(${strawberry})`}} >
      
      <div className='sign-up'>
       
        <form id='signup-form' onSubmit={handleSubmit} >
          <h1>Sign Up </h1>
            <label htmlFor="name" >Full Name</label>
            <input type="text" ref={nameRef} name='name' placeholder='first name last name'/>
            <label htmlFor="email" >Email Address</label>
            <input type="email" ref={emailRef} required name='name' 
            placeholder='Enter your email address' />

            <label htmlFor="password" >Password</label>
            <input type='password' required ref={passwordRef} placeholder='Enter your password'/>
            <label htmlFor="password-confirm"> Password Confirmation</label>
              <input type="password" required  ref={passwordConfirmRef} placeholder='Confirm password'/>
              
              <button disabled={loading} type='submit'>Sign Up</button>
        </form>

        <div className="new-account">
          Already have an account? <Link to='/signin' >Sign In</Link>
        </div>
      </div>
  </div>
  );
}

export default Register;
