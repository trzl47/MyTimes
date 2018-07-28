// libs
import React from 'react';
// components
// styles
import '../../css/bites.css';

const Bites = () => {
	return (
		<section className='bites'>
			<img className='cookie' src={require('../../img/bite.png')} />
			<div className='news-bites'>
				<h3>NEWS BITES</h3>
				<a href='/#' className='bite'>Cat Emoji Goes Viral</a>
				<a href='/#' className='bite'>Buy Youtube Views</a>
				<a href='/#' className='bite'>Home Business Advertising Ideas</a>
				<a href='/#' className='bite'>Advertising Internet Online</a>
				<a href='/#' className='bite'>Illustration in Marketing Materials</a>
				<a href='/#' className='bite'>Finally a Top Secret Way You Can</a>
			</div>
		</section>
	);
};

export default Bites;