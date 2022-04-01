import React, { useContext, useRef, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import '../login/Login.css';
import axiosInstance from '../../axiosInstance';
import { UserContext } from '../../contexts/UserContext';
import image from '../../assets/jeri.jpeg';

// const API_BASE = 'https://foodhub-api.herokuapp.com';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const userRef = useRef();
	const errRef = useRef();
	const history = useHistory();
	const { setLoggedIn, setUser } = useContext(UserContext);

	const handleSubmitLogIn = async (e) => {
		e.preventDefault();
		// console.log('submit initiated');
		try {
			const res = await axiosInstance.post('/auth/login', {
				email,
				password,
			});
			console.log('login data', res.data);
			if (res.data.token) {
				setError(null);
				setLoggedIn(true);
				setUser(res.data.token);
				return history.push('/');
			} else {
				setError(res.error);
			}
		} catch (error) {
			console.log(error.response);
			setError(error.message);
		}
	};

	return (
		<div className='loginpage' style={{ backgroundImage: `url(${image})` }}>
			<div className='login'>
				<h1>Log In </h1>

				<form>
					{error && <div>{error}</div>}
					<label>Email</label>
					<input
						type='text'
						required
						placeholder='Enter your emailId'
						autoComplete='off'
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label>Password</label>
					<input
						type='password'
						required
						placeholder='Enter your password'
						onChange={(e) => setPassword(e.target.value)}
					/>

					<button onClick={handleSubmitLogIn}>Log In</button>
				</form>
				<div className='reset-password'>
					<Link to='/reset'> Forgot Password</Link>
				</div>
				<div className='new-account'>
					Create a new account? <Link to='/register'>Register</Link>
				</div>
			</div>
		</div>
	);
}

export default Login;
