import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { CardOptionSect, CardOverlay, CardText, CardTitle, CardSubText, CardButton, CardOptionTitle } from './CardOptionSection.elements';
import './CardOptionSectionStyles.css';

const CardOptionSection = () => {
  return(
    <>
      <CardOptionSect>
        <CardOptionTitle>Designs</CardOptionTitle>
        <hr className="option-section-hr" />
        <Container>
          <Row>
          <Col lg={true}>
              <Card className='option-card'>
                <CardOverlay />
                <Card.Img src='https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='photo' className='option-card-img' />
                <CardText>
                  <CardTitle>Hello</CardTitle>
                  <CardSubText>Hello</CardSubText>
                  <Link to="#">
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
                <Card.Img src='https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='photo' className='option-card-img' />
                <CardText>
                  <CardTitle>Hello</CardTitle>
                  <CardSubText>Hello</CardSubText>
                  <Link to="#">
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
                <Card.Img src='https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='photo' className='option-card-img' />
                <CardText>
                  <CardTitle>Hello</CardTitle>
                  <CardSubText>Hello</CardSubText>
                  <Link to="#">
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
                <Card.Img src='https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='photo' className='option-card-img' />
                <CardText>
                  <CardTitle>Hello</CardTitle>
                  <CardSubText>Hello</CardSubText>
                  <Link to="#">
                    <CardButton className='option-button'>
                      VIEW
                    </CardButton>
                  </Link>
                </CardText>
              </Card>
            </Col><Col lg={true}>
              <Card className='option-card'>
                <CardOverlay />
                <Card.Img src='https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='photo' className='option-card-img' />
                <CardText>
                  <CardTitle>Hello</CardTitle>
                  <CardSubText>Hello</CardSubText>
                  <Link to="#">
                    <CardButton className='option-button'>
                      VIEW
                    </CardButton>
                  </Link>
                </CardText>
              </Card>
            </Col><Col lg={true}>
              <Card className='option-card'>
                <CardOverlay />
                <Card.Img src='https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='photo' className='option-card-img' />
                <CardText>
                  <CardTitle>Hello</CardTitle>
                  <CardSubText>Hello</CardSubText>
                  <Link to="#">
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