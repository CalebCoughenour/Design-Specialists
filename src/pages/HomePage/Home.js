import React from 'react';
import '../../App.css';
import { Row, Col, Container } from 'react-bootstrap';
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