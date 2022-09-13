import React from 'react';

const Register = () => {

	const handlesubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className='container-register'>
			<div className="form-box">
				<div className="form-title">Create an Account</div>
				<form className='register-from'>
					<input placeholder='First Name' type='text' name='firstname'></input>
					<input placeholder='Last Name' type='text' name='lastname'></input>
					<input placeholder='Username' type='text' name='username'></input>
					<input placeholder='Email' type='email'></input>
					<input placeholder='Password' type='password'></input>
					<input placeholder='Confirm Password' type='password'></input>
					<span className='agreement'>
						By confirming an account, I consent to the processing of my personal data in accordance with the <b> <a href='https://www.clientsondemand.com/privacy-policy/?gc_id=16580834638&h_ad_id=588034936055&gclid=CjwKCAjwsfuYBhAZEiwA5a6CDAzLRHN_c__mJ8RFHUjXVg9r1JmPnzE2tjf3iJhSFV31Yd6jiMHlqhoCxB0QAvD_BwE'>PRIVACY POLICY </a></b>
					</span>
					<button className='register-btn' type='submit' onClick={handlesubmit}>Create</button>
				</form>
			</div>
		</div>
	);
};

export default Register;