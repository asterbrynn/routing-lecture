import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { getAllArtists } from '../../artist-service';

class Artists extends Component {
	constructor(props) {
		super(props);
		this.state = {
			artists: []
		}
	}
	componentDidMount() {
		let artists = getAllArtists();
		this.setState({
			artists
		})
	}
	render() {
		const artistData = this.state.artists.map( (a, index) => (
			<Link to={`/artist/${a.id}`} key={index}>
				<li>{a.name}</li>
			</Link>
		))
		return (
			<div>
				<h1>Artists</h1>
				<ul>{artistData}</ul>
			</div>
		)
	}
}

export default Artists