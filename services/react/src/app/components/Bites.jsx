// libs
import React from 'react';
// components
// styles
import '../../css/bites.css';

const Bites = () => {
	return (
		<section className='bites'>
			<img className='cookie' src={require('../../img/img-news-bite.png')} />
			<div className='news-bites'>
				<h3>NEWS BITES</h3>
				<span className='bite'>Cat Emoji Goes Viral</span>
				<span className='bite'>Buy Youtube Views</span>
				<span className='bite'>Home Business Advertising Ideas</span>
				<span className='bite'>Advertising Internet Online</span>
				<span className='bite'>Illustration in Marketing Materials</span>
				<span className='bite'>Finally a Top Secret Way You Can</span>
			</div>
		</section>
	);
};

export default Bites;