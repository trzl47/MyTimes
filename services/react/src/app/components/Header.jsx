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
				<span><a href='/#'>World</a></span>
				<span><a href='/#'>U.S.</a></span>
				<span><a href='/#'>Tech</a></span>
				<span><a href='/#'>Science</a></span>
			</nav>
		</header>
	);
};

export default Header;