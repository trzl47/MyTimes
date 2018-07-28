// libs
import React from 'react';
// components
// styles
import '../../css/header.css';

const Header = () => {
	return (
		<header className='header'>
			<figure className='logo'>
				<img src={require('../../img/img-myt-logo.png')} />
				<figcaption>My Times</figcaption>
			</figure>
			<nav>
				<a href='/#'>World</a>
				<a href='/#'>U.S.</a>
				<a href='/#'>Tech</a>
				<a href='/#'>Science</a>
			</nav>
		</header>
	);
};

export default Header;