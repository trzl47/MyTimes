// libs
import React from 'react';
// components
// styles
import '../../css/main.css';

const Main = () => {
	return (
		<section className='main'>
			<article className='headline'>
				<figure className='story-img'>
					<figcaption>
						<a href='/#'>Mother of Three Buys Tuna Steak at Phish Concert. Leaves, 'Feeling Funny.'</a>
					</figcaption>
				</figure>
				<main className='content'>
					<p className='narrative'>
						MONUMENT VALLEY, AZ - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec nisl at augue dapibus dignissim. Nunc condimentum rutrum metus, ac eleifend lacus viverra nec. Proin ultrices egestas diam sed mollis. Nulla sapien massa, dictum vitae est et, pellentesque rutrum risus. Nunc volutpat, metus ac rutrum tempus, orci nisi porttitor dolor, sit amet luctus metus est ut mauris. Quisque vulputate nisl vitae massa rhoncus, at sagittis elit accumsan. Etiam tempus, lorem quis blandit imperdiet, enim dui lobortis tortor, sit amet lobortis arcu ex id odio. Nam fermentum nulla et eros bibendum, sed ullamcorper massa scelerisque. Vestibulum aliquet placerat leo a hendrerit. Nulla non sagittis neque. Nullam sit amet fringilla massa...
					</p>
				</main>
			</article>
			<article className='story story2'>
				<main className='content'>
					<h2 className='title'>Orca Spends Vacation at Land World Puget</h2>
					<p className='narrative'>
						PUGET, SO - Sed felis elit, faucibus et ipsum vel, vehicula ultrices purus. Sed congue odio vitae malesuada rhoncus. Integer vitae nisi pulvinar ante accumsan...
					</p>
				</main>
			</article>
			<article className='story story3'>
				<figure className='story-img'>
					<figcaption>
						<a href='/#'>Earth Spins Backwards for 2017</a>
					</figcaption>
				</figure>
			</article>
			<article className='story story4'>
				<main className='content'>
					<h2 className='title'>Burger for Breakfast: How Early is too Early?</h2>
					<p className='narrative'>
						New York, NY - et malesuada fames ac ante ipsum primis in faucibus. Pellentesque id quam facilisis, ultrices ante ut, rutrum enim. Praesent eu nisl erat...
					</p>
				</main>
			</article>
			<article className='story story5'>
				<figure className='story-img'>
					<figcaption>
						<a href='/#'>Research Shows Cameras Erase Memory</a>
					</figcaption>
				</figure>
			</article>
		</section>
	);
};

export default Main;