import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { CardLinkSec, CardOverlay, CardTitle, CardText, CardSubText } from './CardLinkSection.elements';
import './CardLinkSectionStyles.css';


const CardLinkSection = () => {
  return (
    <>
      <CardLinkSec>
        <hr className="card-link-section-hr" />
        <Container>
          <Row>
            <Col lg={true}>              
              <Card className='furniture-detail-card'>
                <CardOverlay className='card-overlay'/>
                <Card.Img className='furniture-detail-card-img' src='https://images.pexels.com/photos/945688/pexels-photo-945688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='background-img' />
                <CardText>
                  <CardTitle>Designs</CardTitle>
                  <CardSubText>Take A Look At All The Different Styles</CardSubText>
                </CardText>
              </Card>
            </Col>
            <Col lg={true}>
              <Card className='furniture-detail-card'>
              <CardOverlay className='card-overlay'/>
                <Card.Img className='furniture-detail-card-img' src='https://images.pexels.com/photos/982614/pexels-photo-982614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='background-img' />
                <CardText>
                  <CardTitle>Accessories</CardTitle>
                  <CardSubText>Take A Look At All The Different Styles</CardSubText>
                </CardText>
              </Card>
            </Col>
            <Col lg={true}>
              <Card className='furniture-detail-card'>
              <CardOverlay className='card-overlay'/>
                <Card.Img className='furniture-detail-card-img' src='https://images.pexels.com/photos/895227/pexels-photo-895227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='background-img' />
                <CardText>
                  <CardTitle>Furniture Sets</CardTitle>
                  <CardSubText>Take A Look At All The Different Styles</CardSubText>
                </CardText>
              </Card>
            </Col>
          </Row>
        </Container>
      </CardLinkSec>
    </>
  )
}

export default CardLinkSection;