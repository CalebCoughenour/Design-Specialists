import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { CardLinkComp } from '../index.js';;
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
                cardImg='https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                cardImgAlt='blurred image of furniture'
                cardTitle='Designs'
                cardSubText='Take A Look At All The Different Styles'
                linkPath='/designs'
              />
            </Col>
            <Col lg={true}>
              <CardLinkComp 
                cardImg='https://images.pexels.com/photos/982614/pexels-photo-982614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                cardImgAlt='blurred image of furniture'
                cardTitle='Accessories'
                cardSubText='Pillows, Lighting, Decor & More!'
                linkPath='//accessories'
              />
            </Col>
            <Col lg={true}>
              <CardLinkComp 
                cardImg='https://images.pexels.com/photos/895227/pexels-photo-895227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                cardImgAlt='blurred image of furniture'
                cardTitle='Sets'
                cardSubText='Bedroom, Living Room, Dining Room'
                linkPath='/designs'
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