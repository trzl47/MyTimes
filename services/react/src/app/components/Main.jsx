// libs
import React from 'react';
// components
// styles
import '../../css/main.css';

const Main = () => {
	return (
		<section className='main'>
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
		</section>
	);
};

export default Main;