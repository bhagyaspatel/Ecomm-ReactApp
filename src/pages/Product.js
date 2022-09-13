import React, { useState } from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';

const Product = () => {

	const [quantity, setQuantity] = useState(1);

	if (quantity < 0) {
		setQuantity(0);
	}

	return (
		<div>
			<Navbar />
			<Announcement />
			<div className="container-productPage">
				<div className="product-imageContainer">
					<img src='https://cdn.shopify.com/s/files/1/0504/3054/1978/files/skinny_side_800x_3bf3b08b-9e85-4c17-be45-36770b97b296_600x.png?v=1643699170'></img>
				</div>
				<div className="product-infoContainer">
					<div className="title">
						Denim
					</div>
					<div className="description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam perspiciatis qui, dolores labore nam id error repellendus, quis sapiente harum maiores odit vitae et earum nemo alias autem itaque quia.
					</div>
					<div className="price">Rs 200/-</div>
					<div className="filter">
						<div className='color-options'>
							<span>Color: </span>
							<span className='color-circle' style={{ backgroundColor: 'blue' }}></span>
							<span className='color-circle' style={{ backgroundColor: 'black' }}></span>
							<span className='color-circle' style={{ backgroundColor: 'grey' }}></span>
						</div>
						<select className='filter-dropdown' style={{ marginLeft: '0', margin: '2rem 2rem 0 0' }}>
							<option selected disabled>Size</option>
							<option>XS</option>
							<option>S</option>
							<option>M</option>
							<option>L</option>
							<option>XL</option>
						</select>
					</div>
					<div className="add">
						<Remove style={{ cursor: 'pointer', border: '1px solid black' }} onClick={() => setQuantity(quantity - 1)} />
						<div className="quantity">{quantity}</div>
						<Add style={{ cursor: 'pointer', border: '1px solid black' }} onClick={() => setQuantity(quantity + 1)} />
					</div>
					<button className='add-btn'>Add To Cart</button>
				</div>
			</div>
			<Newsletter />
			<Footer />
		</div>
	);
};

export default Product;