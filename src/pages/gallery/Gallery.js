import React from 'react';
import '../gallery/Gallery.css';
import thali from '../../assets/thali.avif';

export default function Gallery() {
	return (
		<div className='galleryPage' style={{ backgroundImage: `url(${thali})` }}>
			<div className='gallery'></div>
		</div>
	);
}
