import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import '../register/Register.css';

//user will register through this port
const API_BASE_REGISTER = 'https://foodhub-api.herokuapp.com/auth/register';

function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const history = useHistory();

	// we will be using context that we created to verify the login status
	const { setLoggedIn, setUser } = useContext(AuthContext);

	// We will be validating user information through our backends.

	const handleSubmitRegister = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const res = await fetch(API_BASE_REGISTER, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: name, //pasing the name,email and password from the form(frontend)
					email: email,
					password: password,
				}),
			});
			console.log(res);

			const data = await res.json();
			console.log('Successfuld', data);

			if (!res.ok) {
				setError(data.error);
			}

			if (res.ok) {
				setError(null);
				setLoggedIn(true);
				setUser(data);
				return history.push('/login');
			}
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className='registerPage'>
			{error && <div>{error}</div>}
			<div className='register'>
				<form onSubmit={handleSubmitRegister}>
					<h1>Register an account </h1>
					<label>Full Name</label>

					<input
						type='text'
						name='name'
						placeholder='first name last name'
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

					<label> Password Confirmation</label>

					<input
						type='password'
						required
						placeholder='Confirm password'
						onChange={(e) => setPasswordConfirm(e.target.value)}
					/>

					<button
						disabled={loading}
						//</form>onClick={handleSubmitRegister}
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
