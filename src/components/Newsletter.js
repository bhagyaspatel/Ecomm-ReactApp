import React from 'react';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Newsletter = () => {
	return (
		<div className='container-news'>
			<div className="text">
				<h1>Newsletter</h1>
				<p>Get timely updates from your favourite products</p>
			</div>
			<form className='form-data'>
				<input type='email' />
				<button>
					<SendRoundedIcon />
				</button>
			</form>
		</div>
	);
};

export default Newsletter;