import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { CardOptionSect, CardOverlay, CardText, CardTitle, CardButton, CardOptionTitle } from './CardOptionSection.elements';
import './CardOptionSectionStyles.css';

const CardOptionSection = ({ optionCardTitle, firstCardImg, firstCardAlt, firstCardTitle, firstCardLink, secondCardImg, secondCardAlt, secondCardTitle,  secondCardLink, thirdCardImg, thirdCardAlt, thirdCardTitle, thirdCardLink, fourthCardImg, fourthCardAlt, fourthCardTitle,  fourthCardLink, fifthCardImg, fifthCardAlt, fifthCardTitle, fifthCardLink, sixthCardImg, sixthCardAlt, sixthCardTitle, sixthCardLink }) => {
  return(
    <>
      <CardOptionSect>
        <CardOptionTitle>{optionCardTitle}</CardOptionTitle>
        <hr className="option-section-hr" />
        <Container>
          <Row>
          <Col lg={true}>
              <Card className='option-card'>
                <CardOverlay />
                <Card.Img src={firstCardImg} alt={firstCardAlt} className='option-card-img' />
                <CardText>
                  <CardTitle>{firstCardTitle}</CardTitle>
                  <Link to={firstCardLink}>
                    <CardButton className='option-button'>
                      VIEW
                    </CardButton>
                  </Link>
                </CardText>
              </Card>
            </Col>
            <Col lg={true}>
              <Card className='option-card'>
                <CardOverlay />
                <Card.Img src={secondCardImg} alt={secondCardAlt} className='option-card-img' />
                <CardText>
                  <CardTitle>{secondCardTitle}</CardTitle>
                  <Link to={secondCardLink}>
                    <CardButton className='option-button'>
                      VIEW
                    </CardButton>
                  </Link>
                </CardText>
              </Card>
            </Col>            
            <Col lg={true}>
              <Card className='option-card'>
                <CardOverlay />
                <Card.Img src={thirdCardImg} alt={thirdCardAlt} className='option-card-img' />
                <CardText>
                  <CardTitle>{thirdCardTitle}</CardTitle>
                  <Link to={thirdCardLink}>
                    <CardButton className='option-button'>
                      VIEW
                    </CardButton>
                  </Link>
                </CardText>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={true}>
              <Card className='option-card'>
                <CardOverlay />
                <Card.Img src={fourthCardImg} alt={fourthCardAlt} className='option-card-img' />
                <CardText>
                  <CardTitle>{fourthCardTitle}</CardTitle>
                  <Link to={fourthCardLink}>
                    <CardButton className='option-button'>
                      VIEW
                    </CardButton>
                  </Link>
                </CardText>
              </Card>
            </Col>
            <Col lg={true}>
              <Card className='option-card'>
                <CardOverlay />
                <Card.Img src={fifthCardImg} alt={fifthCardAlt} className='option-card-img' />
                <CardText>
                  <CardTitle>{fifthCardTitle}</CardTitle>
                  <Link to={fifthCardLink}>
                    <CardButton className='option-button'>
                      VIEW
                    </CardButton>
                  </Link>
                </CardText>
              </Card>
            </Col>
            <Col lg={true}>
              <Card className='option-card'>
                <CardOverlay />
                <Card.Img src={sixthCardImg} alt={sixthCardAlt} className='option-card-img' />
                <CardText>
                  <CardTitle>{sixthCardTitle}</CardTitle>
                  <Link to={sixthCardLink}>
                    <CardButton className='option-button'>
                      VIEW
                    </CardButton>
                  </Link>
                </CardText>
              </Card>
            </Col>
          </Row>
        </Container>
        <hr className="bottom-option-section-hr" />
      </CardOptionSect>
    </>
  )
};

export default CardOptionSection;