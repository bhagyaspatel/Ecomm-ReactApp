import React from 'react';

const CategoryItem = ({ img, title }) => {
	return (
		<div className='container-category'>
			<img src={img} />
			<div className="info">
				<h2>{title}</h2>
				<button className='btn-shop'>Shop now</button>
			</div>
		</div>
	);
};

export default CategoryItem;