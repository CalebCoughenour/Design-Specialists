import React from 'react';
import '../../App.css';
import AdvertLinkSection  from '../../components/AdvertLinkSection/AdvertLinkSection';
import CardLinkSection from '../../components/CardLinkSection/CardLinkSection';
import { PhotoCarousel } from '../../components/index';
import { homeCardObjOne } from './Data';

const Home = () => {
  return (
    <>
      <PhotoCarousel />
      <CardLinkSection {...homeCardObjOne} />
      <AdvertLinkSection />
    </>
  )
}

export default Home;