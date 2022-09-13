import React from 'react';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const ProducltList = () => {
	return (
		<div>
			<Navbar />
			<Announcement />
			<div className="title-filter">
				<h2>Dresses</h2>
			</div>
			<div className="container-filter">
				<div className="filter">
					<h4>Filter Products:</h4>
					<select className='filter-dropdown'>
						<option selected disabled>Color</option>
						<option>White</option>
						<option>Black</option>
						<option>Red</option>
						<option>Blue</option>
						<option>White</option>
					</select>
					<select className='filter-dropdown'>
						<option selected disabled>Size</option>
						<option>XS</option>
						<option>S</option>
						<option>M</option>
						<option>L</option>
						<option>XL</option>
					</select>
				</div>
				<div className="filter">
					<h4>Sort Products:</h4>
					<select className='filter-dropdown'>
						<option selected>Newest</option>
						<option>Price(asc)</option>
						<option>Price(desc)</option>
					</select>
				</div>
			</div>
			<Products />
			<Newsletter />
			<Footer />
		</div>
	);
};

export default ProducltList;