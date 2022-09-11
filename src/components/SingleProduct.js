import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import React from 'react';

const SingleProduct = ({ item }) => {
	const { img } = item;

	let r = (Math.random() * (247 - 213)) + 213;
	let g = (Math.random() * (247 - 213)) + 213;
	let b = (Math.random() * (247 - 213)) + 213;

	let color = `${r},${g},${b}`;
	console.log(color);
	return (
		<div className='container-product' style={{ backgroundColor: `rgb(${color})` }}>
			<div className="circle"></div>
			<img src={img} />
			<div className="info-card">
				<div className="icon"><ShoppingCartCheckoutOutlined /> </div>
				<div className="icon"><SearchOutlined /> </div>
				<div className="icon"><FavoriteBorderOutlined /> </div>
			</div>
		</div>
	);
};

export default SingleProduct;