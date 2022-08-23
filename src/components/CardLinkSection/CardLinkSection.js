import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { CardLinkSec, CardOverlay, CardTitle, CardText, CardSubText, CardButton } from './CardLinkSection.elements';
import './CardLinkSectionStyles.css';


const CardLinkSection = ({ firstCardImg, firstCardImgAlt, firstCardTitle, firstCardSubText, secondCardImg, secondCardImgAlt, secondCardTitle, secondCardSubText, thirdCardImg, thirdCardImgAlt, thirdCardTitle, thirdCardSubText, firstCardButtonText, secondCardButtonText, thirdCardButtonText }) => {
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
                  <Link to="#">
                    <CardButton>
                      {firstCardButtonText}
                    </CardButton>
                  </Link>
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
                  <Link to="#">
                    <CardButton>
                      {secondCardButtonText}
                    </CardButton>
                  </Link>
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
                  <Link to="#">
                    <CardButton className='card-link-button'>
                      {thirdCardButtonText}
                    </CardButton>
                  </Link>
                </CardText>
              </Card>
            </Col>
          </Row>
        </Container>
        <hr className="bottom-card-link-section-hr" />
      </CardLinkSec>
    </>
  )
}

export default CardLinkSection;