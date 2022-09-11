import React from 'react';
import { popularProducts } from '../data/data';
import SingleProduct from './SingleProduct';

const Products = () => {
	return (
		<div className='container-allproducts'>
			{
				popularProducts.map((item) => {
					return <SingleProduct item={item} key={item.id} />;
				})
			}
		</div>
	);
};

export default Products;