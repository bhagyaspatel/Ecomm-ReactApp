import React, { useState } from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import OrderDetail from '../components/OrderDetail';
import Summary from '../components/Summary';
import { popularProducts } from '../data/data';

const Cart = () => {

	return (
		<div>
			<Navbar />
			<Announcement />
			<div className="container-cart">
				<div className="title-cart"><h1>Your Bag</h1></div>
				<div className="top">
					<button className='cart-btn'>Continue Shopping</button>
					<div className="cart-text">
						<div className="text">Shopping Bag (2)</div>
						<div className="text">Your Wishlist (0)</div>
					</div>
					<button className='cart-btn'>Checkout Now</button>
				</div>
				<div className="bottom">
					<div className="items">
						{
							popularProducts.map((item) => {
								return (
									<div>
										<OrderDetail key={item.id} item={item} />
										<hr></hr>
									</div>
								);

							})
						}
					</div>
					<div className="summary">
						<Summary />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Cart;