import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { CardLinkSec, CardOverlay, CardTitle, CardText, CardSubText } from './CardLinkSection.elements';
import './CardLinkSectionStyles.css';


const CardLinkSection = ({ firstCardImg, firstCardImgAlt, firstCardTitle, firstCardSubText, secondCardImg, secondCardImgAlt, secondCardTitle, secondCardSubText, thirdCardImg, thirdCardImgAlt, thirdCardTitle, thirdCardSubText }) => {
  return (
    <>
      <CardLinkSec>
        <hr className="card-link-section-hr" />
        <Container>
          <Row>
            <Col lg={true}>              
              <Card className='furniture-detail-card'>
                <CardOverlay className='card-overlay'/>
                <Card.Img className='furniture-detail-card-img' src={firstCardImg} alt={firstCardImgAlt} />
                <CardText>
                  <CardTitle>{firstCardTitle}</CardTitle>
                  <CardSubText>{firstCardSubText}</CardSubText>
                </CardText>
              </Card>
            </Col>
            <Col lg={true}>
              <Card className='furniture-detail-card'>
              <CardOverlay className='card-overlay'/>
                <Card.Img className='furniture-detail-card-img' src={secondCardImg} alt={secondCardImgAlt} />
                <CardText>
                  <CardTitle>{secondCardTitle}</CardTitle>
                  <CardSubText>{secondCardSubText}</CardSubText>
                </CardText>
              </Card>
            </Col>
            <Col lg={true}>
              <Card className='furniture-detail-card'>
              <CardOverlay className='card-overlay'/>
                <Card.Img className='furniture-detail-card-img' src={thirdCardImg} alt={thirdCardImgAlt} />
                <CardText>
                  <CardTitle>{thirdCardTitle}</CardTitle>
                  <CardSubText>{thirdCardSubText}</CardSubText>
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