import React from 'react';
import AboutImage from '../../assets/roti.jpeg';
import '../aboutUs/AboutUs.css';

export default function AboutUs() {
	return (
		<div className='about'>
			<div
				className='aboutTop'
				style={{ backgroundImage: `url(${AboutImage})` }}>
				{' '}
			</div>
			<div className='aboutBottom'>
				<h1>About Us</h1>
				<p>
					This website is designed using React. JavasScript and CSS are the two
					languages that used a lot while building this website. This website
					has used React router dom version 5.2.0. React Router Dom makes
					routing possible and smooth in React. There are new version released
					six months ago. I have used material UI websites. Material UI expand
					the power of react by providing different icons and features to make
					the website even more beautiful and informative. It makes easy to
					navigate through different sections. I learn to build this website
					from Skillful Learner Community from youtube.
				</p>
			</div>
		</div>
	);
}
