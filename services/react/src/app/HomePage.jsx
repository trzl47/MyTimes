// libs
import React from 'react';
// components
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Secondary from './components/Secondary.jsx';
import Bites from './components/Bites.jsx';
import Footer from './components/Footer.jsx';
// styles
import '../css/homepage.css';

const HomePage = () => {
	return (
		<section className='homepage'>
			<Header />
			<Main />
			<Secondary />
			<Bites />
			<Footer />
		</section>
	);
};

export default HomePage;