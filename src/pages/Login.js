import React from 'react';

const Login = () => {

	const handlesubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className='container-login'>
			<div className="form-box">
				<div className="form-title">SIGN IN</div>
				<form className='register-from'>
					<input placeholder='Email' type='email'></input>
					<input placeholder='Password' type='password'></input>
					<a href='/'>Do not remember the password?</a>
					<a href='/'>Create a new account</a>
					<button className='register-btn' type='submit' onClick={handlesubmit}>Login</button>
				</form>
			</div>
		</div>
	);
};

export default Login;