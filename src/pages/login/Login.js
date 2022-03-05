import React, { useContext, useState } from 'react';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import '../login/Login.css';

const API_BASE = 'https://foodhub-api.herokuapp.com';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const history = useHistory();

	const { setLoggedIn, setUser } = useContext(AuthContext);

	const handleSubmitLogIn = async (e) => {
		e.preventDefault();

		try {
			// const res = await fetch(API_BASE, {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify({
			// 		username: email,
			// 		password: password,
			// 	}),
			// });

			const res = await Axios.post(`${API_BASE}/auth/login`, {
				username: email,
				password,
			});
			console.log('login data', res.data);
			if (res.data.found) {
				console.log('The user exists, login success');
			} else {
				console.log('Invalid User');
			}
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};

	return (
		<div className='loginpage'>
			<div className='login'>
				<h1>Log In </h1>
				<form>
					<label>Email Address</label>
					<input
						type='email'
						required
						placeholder='Enter your email address'
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
