import React from 'react';
import AdvertLinkSection  from '../../components/AdvertLinkSection/AdvertLinkSection';
import CardLinkSection from '../../components/CardLinkSection/CardLinkSection';
import { PhotoCarousel } from '../../components/index';
import '../../App.css';

const Home = () => {
  return (
    <>
      <PhotoCarousel />
      <CardLinkSection />
      <AdvertLinkSection />
    </>
  )
}

export default Home;