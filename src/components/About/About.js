import React from 'react';
import {Link} from 'react-router-dom';

const About = ({children}) => (
	<div>
		<h1>About</h1>
		<Link to='/about/story'>Our Story</Link>
		<Link to='/about/faq'>Frequently Asked Questions</Link>
		{children}
	</div>
)

export default About