import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { CardOptionSection, AdvertLinkSection } from "../../components/index.js";
import kitchenPhoto from '../../images/sets/kitchen.webp';
import bedroomPhoto from '../../images/sets/bedroom.webp';
import livingRoomPhoto from '../../images/sets/living-room.webp';
import '../../App.css';

const Sets = () => {
  return (
    <>
      <h1>Furniture Sets</h1>
      <hr className='styled-hr' />
      <Container>
        <Row>
          <Col lg={true}>
            <CardOptionSection 
              cardImg={kitchenPhoto}
              cardImgAlt='Modern design kitchen with granite countertops, modern appliances and matching blue cabinents'
              cardTitle='Kitchen Sets'
              cardPath='/'
            />
          </Col>
          <Col lg={true}>
            <CardOptionSection 
              cardImg={bedroomPhoto}
              cardImgAlt='Bed room with simplistic theme '
              cardTitle='Bedroom Sets'
              cardPath='/'
            />
          </Col>
          <Col lg={true}>
            <CardOptionSection 
              cardImg={livingRoomPhoto}
              cardImgAlt='Kitchen and dining room with modern furniture design'
              cardTitle='Living Room Sets'
              cardPath='/'
            />
          </Col>
        </Row>
      </Container>
      <hr className='bottom-styled-hr' />
      <AdvertLinkSection />
    </>
  )
}

export default Sets;