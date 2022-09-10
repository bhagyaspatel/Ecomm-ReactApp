import React from 'react';
import { categories } from '../data/data';

const Category = () => {
	return (
		<div className='container-allcategory'>
			{
				categories.map((item) => {
					return <Category item={item} key={item.id} />;
				})
			}
		</div>
	);
};

export default Category;