import React from 'react';
import { categories } from '../data/data';
import CategoryItem from './CategoryItem';

const Category = () => {
	return (
		<div className='container-allcategory'>
			{
				categories.map((item) => {
					console.log(item);

					return <CategoryItem item={item} key={item.id} />;
				})
			}
		</div>
	);
};

export default Category;