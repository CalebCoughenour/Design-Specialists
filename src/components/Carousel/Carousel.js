import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../images/carousel/bookshelves-lamp-painting-desk.webp';
import slide2 from '../../images/carousel/bedroom-panoramic.webp';
import slide3 from '../../images/carousel/couch-pillows-coffee-table.webp';
import slide4 from '../../images/carousel/desk-with-chair.webp';
import slide5 from '../../images/carousel/modern-living-room.webp';
import './CarouselStyles.css';
import 'react-responsive-carousel/lib/styles/carousel.css';

const PhotoCarousel = () => {
  return (
    <>
    <Carousel infiniteLoop autoPlay>
      <div className="carousel-image">
        <img src={slide1} alt="A room decorated with a hanging painting, lamp and some items on a dresser in between two bookshelves" />
      </div>
      <div className="carousel-image">
        <img src={slide2} alt="second slide" />
      </div>
      <div className="carousel-image">
        <img src={slide3} alt="third slide" />
      </div>
      <div className="carousel-image">
        <img src={slide4} alt="fourth slide" />
      </div>
      <div className="carousel-image">
        <img src={slide5} alt="fifth slide" />
      </div>
    </Carousel>    
    </>
  )
}

export default PhotoCarousel;