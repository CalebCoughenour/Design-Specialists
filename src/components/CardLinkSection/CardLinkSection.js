import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { CardLinkComp } from '../index.js';
import card1Img from '../../images/card-link-section/couches-with-lights.webp';
import card2Img from '../../images/card-link-section/couch-with-pillows.webp';
import card3Img from '../../images/card-link-section/pink-couch.webp';
import './CardLinkSectionStyles.css';
import '../../App.css';

const CardLinkSection = () => {
  return (
    <>
      <div className="card-link-section">
        <hr className="styled-hr" />
        <Container>
          <Row>
            <Col lg={true}>
              <CardLinkComp 
                cardImg={card1Img}
                cardImgAlt='A couch and chair with lights dangling above'
                cardTitle='Designs'
                cardSubText='Take A Look At All The Different Styles'
                linkPath='/designs'
              />
            </Col>
            <Col lg={true}>
              <CardLinkComp 
                cardImg={card2Img}
                cardImgAlt='A couch that is covered in pillows, with pillows overflowing on to the floor and rug'
                cardTitle='Accessories'
                cardSubText='Pillows, Lighting, Decor & More!'
                linkPath='/accessories'
              />
            </Col>
            <Col lg={true}>
              <CardLinkComp 
                cardImg={card3Img}
                cardImgAlt='A pink couch with decorative throw pillows and a mirrow hanging above'
                cardTitle='Sets'
                cardSubText='Bedroom, Living Room, Dining Room'
                linkPath='/sets'
              />
            </Col>
          </Row>
        </Container>
        <hr className="bottom-styled-hr" />
      </div>
    </>
  )
};

export default CardLinkSection;