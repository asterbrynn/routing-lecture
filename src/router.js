import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About/About';
import Story from './components/About/Story';
import FAQ from './components/About/FAQ';
import Artists from './components/Artist/Artists';
import Artist from './components/Artist/Artist';

export default (
	<Switch>
		<Route exact path="/" component={Home}/>
		<Route path="/about" component={() => (
			<About>
				<Switch>
					<Route path="/about/story" component={Story}/>
					<Route path="/about/faq" component={FAQ}/>
				</Switch>
			</About>
		)}/>
		<Route path="/artists" component={Artists}/>
		<Route path="/artist/:id" component={Artist}/>
	</Switch>
)