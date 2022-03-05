import React from 'react'
import '../gallery/Gallery.css'
import seasoning from '../../assets/seasoning.jpeg'

export default function Gallery() {
  return (
    <div className='galleryPage'  style={{backgroundImage: `url(${seasoning})` }}>
      <div className='gallery'>

      </div>
    </div>
  )
}
