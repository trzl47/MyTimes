// libs
import React from 'react';
// components
// import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';
// styles
// import '../css/homepage.css';

const HomePage = () => {
	return (
		<section className='homepage'>
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
		<div className='content'>
			<div className='column large'>
				<div className='lead-story'>
					<div className='image-content'>
						<span>Mother of Three Buys Tuna Steak at Phish Concert. Leaves, 'Feeling Funny.'</span>
					</div>
					<p className='narrative'>MONUMENT VALLEY, AZ - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec nisl at augue dapibus dignissim. Nunc condimentum rutrum metus, ac eleifend lacus viverra nec. Proin ultrices egestas diam sed mollis. Nulla sapien massa, dictum vitae est et, pellentesque rutrum risus. Nunc volutpat, metus ac rutrum tempus, orci nisi porttitor dolor, sit amet luctus metus est ut mauris. Quisque vulputate nisl vitae massa rhoncus, at sagittis elit accumsan. Etiam tempus, lorem quis blandit imperdiet, enim dui lobortis tortor, sit amet lobortis arcu ex id odio. Nam fermentum nulla et eros bibendum, sed ullamcorper massa scelerisque. Vestibulum aliquet placerat leo a hendrerit. Nulla non sagittis neque. Nullam sit amet fringilla massa.</p>
				</div>
				<div className='stories'>
					<div className='story'>
						<div className='text-content'>
							<h2>Orca Spends Vacation at Land World Puget</h2>
							<p className='narrative'> PUGET, SO - Sed felis elit, faucibus et ipsum vel, vehicula ultrices purus. Sed congue odio vitae malesuada rhoncus. Integer vitae nisi pulvinar ante accumsan...</p>
						</div>
						<div className='fall-cancelled image-content'>
							<span>Earth Spins Backwards for 2017</span>
						</div>
					</div>
					<div className='story'>
						<div className='text-content'>
							<h2>Burger for Breakfast: How Early is too Early?</h2>
							<p className='narrative'>Mew York, MYâInterdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque id quam facilisis, ultrices ante ut, rutrum enim. Praesent eu nisl erat.</p>
						</div>
						<div className='pop-culture image-content'>
							<span>Research Shows Cameras Erase Memory</span>
						</div>
					</div>
				</div>
			</div>
			<div className='column medium'>
				<div className='story'>
					<div className='text-content'>
						<h2>FBI Finds Action Star Guilty of False Advertising</h2>
						<p className='narrative'>WASHINGTON DC- Donec luctus sem augue, rutrum posuere orci aliquam sed. Nam vitae aliquam lectus. Sed tempor tortor est, nec sagittis eros tincidunt sed. Morbi venenatis condimentum sem, vitae sollicitudin turpis pulvinar eget. Morbi pellentesque consectetur mi id auctor. Phasellus tincidunt orci mauris, placerat pharetra urna fringilla vitae. Morbi eget rutrum urna. Cras condimentum augue ut ante sollicitudin interdum. Pellentesque cursus dolor at tincidunt cursus. Vestibulum blandit aliquam felis...</p>
					</div>
				</div>
				<div className='story'>
					<div className='cat-ceo image-content'>
						<span>Cats in Control-Is It a Thing?</span>
					</div>
					<p className='narrative'>BROOKLYN, NY- In molestie nulla sodales sit amet. Proin vulputate, ipsum porta aliquam commodo, nunc nibh tincidunt lorem, vel consectetur neque mi vel neque. Mauris ultricies, nulla scelerisque sollicitudin lobortis, dui est sodales sapien, a vestibulum velit diam eget felis. Vivamus dignissim lacinia dolor, quis commodo tellus pellentesque in.</p>
				</div>
			</div>
			<div className='column small'> &#10;
				<img className='cookie' src={require('../img/img-news-bite.png')} />
				<div className='news-bites'>
					<h3>NEWS BITES</h3>
					<span className='bite'>Cat Emoji Goes Viral</span>
					<span className='bite'>Buy Youtube Views</span>
					<span className='bite'>Home Business Advertising Ideas</span>
					<span className='bite'>Advertising Internet Online</span>
					<span className='bite'>Illustration in Marketing Materials</span>
					<span className='bite'>Finally a Top Secret Way You Can</span>
				</div>
			</div>
		</div>
		<footer>
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
		</section>
	);
};

export default HomePage;