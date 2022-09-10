import { Search } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { grey } from '@mui/material/colors';
import React from 'react';

const Navbar = () => {
	return (
		<div className='container'>
			<div className="wrapper">
				<div className="left">
					<div className="language">
						EN
					</div>
					<div className="searchContainer">
						<input className='input'></input>
						<Search style={{ color: "gray", fontSize: 16 }} />
					</div>
				</div>
				<div className="center">
					<h2>LOGO.</h2>
				</div>
				<div className="right">
					<div className="menuItem">Register</div>
					<div className="menuItem">Sign In</div>
					<div className="menuItem">
						<Badge badgeContent={4} color="primary">
							<ShoppingCartOutlinedIcon />
						</Badge>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;