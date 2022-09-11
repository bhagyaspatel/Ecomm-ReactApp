import { Email, Facebook, Instagram, LinkedIn, Phone, Room } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
	return (
		<div className='container-footer'>
			<div className="left-footer">
				<h1>LOGO.</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente sint inventore provident atque fuga molestias molestiae vitae consequuntur laboriosam iusto quidem, excepturi saepe? Sed, nulla! Animi veritatis debitis quibusdam tempora. </p>
				<div className="socials">
					<LinkedIn className='social-icons' style={{ backgroundColor: '#0862BB', color: 'white', height: '50', width: '50', padding: '1px' }} />
					<Instagram className='social-icons' style={{ backgroundColor: '#9533EC', color: 'white', height: '50', width: '50', padding: '1px' }} />
					<Facebook className='social-icons' style={{ backgroundColor: '#0260D7', color: 'white', height: '50', width: '50', padding: '1px' }} />
				</div>
			</div>
			<div className="center-footer">
				<h3>Useful links</h3>
				<ul className='links-ui'>
					<li>Home</li>
					<li>Cart</li>
					<li>Man Fashion</li>
					<li>Woman Fashion</li>
					<li>Kids Fashion</li>
					<li>My Account</li>
					<li>My Orders</li>
					<li>Wishlist</li>
				</ul>
			</div>
			<div className="right-footer">
				<h3>Contact</h3>
				<div className="contact-info">
					<p>
						<Phone style={{ marginRight: '20' }} />
						+91 8780632527
					</p>
					<p>
						<Email style={{ marginRight: '20' }} />
						bhagyaspatel0911@gmail.com
					</p>
					<p>
						<Room style={{ marginRight: '20' }} />
						Ramaiah Institute of Technology, Bangalore
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;