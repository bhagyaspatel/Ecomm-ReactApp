import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import { sliderItems } from '../data/data';
import React, { useEffect, useState } from 'react';

const Slider = () => {

	const [index, setIndex] = useState(0);

	useEffect(() => {
		let timer = setInterval(() => {
			setIndex((index + 1 + sliderItems.length) % sliderItems.length);
		}, 3000);

		return () => clearInterval(timer);
	}, [index]);

	return (
		<div className='container-slider'>
			<button className="arrow" style={{ left: 10 }} onClick={() => setIndex((index - 1 + sliderItems.length) % sliderItems.length)} >
				<ArrowBackIosOutlined />
			</button>

			<div className="wrapper-slider">
				{
					sliderItems.map((item, currIndex) => {

						let slideType = 'allSlides';

						const { id, img, title, desc, bg } = item;

						if (currIndex === index)
							slideType = 'activeSlide';

						else if (currIndex === (index + 1) % sliderItems.length)
							slideType = 'nextSlide';

						// console.log("active index and class", index, currIndex);
						// console.log(item.title);

						return (
							<article className={slideType} key={id} style={{ backgroundColor: `${bg}` }}>
								<div className="imageContainer">
									<img src={img} alt="shopping img" />
								</div>
								<div className="infoContainer">
									<h1 className="title">{title}</h1>
									<p className="description">{desc}</p>
									<button className="btn">Shop now</button>
								</div>
							</article>
						);
					})
				}

			</div>
			<button className="arrow" style={{ right: 10 }} onClick={() => setIndex((index + 1) % sliderItems.length)} >
				<ArrowForwardIosOutlined />
			</button>
		</div>
	);
};

export default Slider;