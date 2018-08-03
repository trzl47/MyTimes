// libs
import React from 'react';
// components
// styles
import '../../css/footer.css';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='info'>
				<span className='title'>MY Times</span>
				<nav>
					<span><a href='/#'>World</a></span>
					<span><a href='/#'>U.S.</a></span>
					<span><a href='/#'>Tech</a></span>
					<span><a href='/#'>Science</a></span>
				</nav>
			</div>
			<div className='copyright'>© 2016, My Times (A Division of Codecademy bite)</div>
		</footer>

	);
};

export default Footer;