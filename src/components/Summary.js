import React from 'react';

const Summary = () => {
	return (
		<div className='container-summary'>
			<div className="title-summary">
				<h1>Order Summary</h1>
			</div>
			<div className="summary-box">
				<div className="bill-item">
					<span>Subtotal</span>
					<span>Rs. 300/-</span>
				</div>
				<div className="bill-item">
					<span>Extimated Shipping</span>
					<span>Rs. 80/-</span>
				</div>
				<div className="bill-item">
					<span>Shipping Discount</span>
					<span>Rs. -30/-</span>
				</div>
				<div className="bill-item total">
					<h3>Total</h3>
					<h3>Rs. 100/-</h3>
				</div>
			</div>
		</div>
	);
};

export default Summary;