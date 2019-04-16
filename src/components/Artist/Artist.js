import React from 'react';
// import 
import {getArtist} from '../../artist-service';

const Artist = (props) => {
	const artist = getArtist(props.match.params.id);
	return(
		<div>
			<h3>{artist.name}</h3>
			<img style={{height: '250px'}} src={artist.image} alt={artist.name}/>
		</div>
	)
}

export default Artist