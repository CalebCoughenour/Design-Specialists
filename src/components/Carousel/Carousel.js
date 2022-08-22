import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import '../../App.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

const PhotoCarousel = () => {
  return (
    <>
    <Carousel infiniteLoop autoPlay>
      <div className="image">
        <img src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="first slide" />
      </div>
      <div className="image">
        <img src="https://images.pexels.com/photos/115747/pexels-photo-115747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="second slide" />
      </div>
      <div className="image">
        <img src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="third slide" />
      </div>
      <div className="image">
        <img src="https://images.pexels.com/photos/198272/pexels-photo-198272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="first slide" />
      </div>
    </Carousel>    
    </>
  )
}

export default PhotoCarousel;