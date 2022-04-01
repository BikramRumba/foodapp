import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import '../register/Register.css';

import axiosInstance from '../../axiosInstance';
import image from '../../assets/jeri.jpeg';
//user will register through this port
// const API_BASE_REGISTER = 'https://foodhub-api.herokuapp.com/auth/register';

function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const history = useHistory();

	// we will be using context that we created to verify the login status
	const { setLoggedIn, setUser } = useContext(UserContext);

	// We will be validating user information through our backends.

	const handleSubmitRegister = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const res = await axiosInstance.post('/auth/register', {
				name,
				email,
				password,
			});

			console.log('Register data', res.data);

			setError(null);
			setLoggedIn(true);
			setUser(res.data.token);
			return history.push('/');
		} catch (error) {
			setError(error.message);
		}
		setLoading(false);
	};
	return (
		<div className='registerPage' style={{ backgroundImage: `url(${image})` }}>
			{error && <div className='error-message'>{error}</div>}
			<div className='register'>
				<form>
					<h1>Register an account </h1>
					<label>Full Name</label>

					<input
						type='text'
						name='name'
						placeholder='username'
						required
						onChange={(e) => setName(e.target.value)}
					/>

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

					<label htmlFor='nationality'> Nationality</label>
					<select name='nationality' id='nationality'>
						<option value='nepali'>Nepali</option>
						<option value='other'>Other</option>
					</select>

					<button
						disabled={loading}
						onClick={handleSubmitRegister}
						type='submit'>
						Register
					</button>
				</form>

				<div className='new-account'>
					Already have an account? <Link to='/login'>Log In</Link>
				</div>
			</div>
		</div>
	);
}

export default Register;
