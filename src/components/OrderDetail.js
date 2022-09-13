import React, { useState } from 'react';
import { Add, Remove } from '@mui/icons-material';


const OrderDetail = ({ item }) => {

	const { img } = item;
	const [quantity, setQuantity] = useState(1);

	if (quantity < 0) {
		setQuantity(0);
	}

	return (
		<div className='orderDetails'>
			<div className="img-container">
				<img src={img} />
			</div>
			<div className="info-container">
				<span><b>Product:</b>Levis Jeans</span>
				<span><b>ID:</b>Levis Jeans</span>
				<span className='color-circle' style={{ backgroundColor: 'blue' }}></span>
				<span><b>Size:</b>37.5</span>
			</div>
			<div className="price-container">
				<div className="price-tag">
					<b>Price:</b>Rs. 30/-
				</div>
				<div className="add">
					<Remove style={{ cursor: 'pointer', border: '1px solid black' }} onClick={() => setQuantity(quantity - 1)} />
					<div className="quantity">{quantity}</div>
					<Add style={{ cursor: 'pointer', border: '1px solid black' }} onClick={() => setQuantity(quantity + 1)} />
				</div>
			</div>
		</div>
	);
};

export default OrderDetail;