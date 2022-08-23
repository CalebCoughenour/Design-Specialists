import React from 'react';
import '../../App.css';
import CardLinkSection from '../../components/CardLinkSection/CardLinkSection';
import { PhotoCarousel } from '../../components/index';
import { homeCardObjOne } from './Data';

const Home = () => {
  return (
    <>
      <PhotoCarousel />
      <CardLinkSection {...homeCardObjOne} />
    </>
  )
}

export default Home;