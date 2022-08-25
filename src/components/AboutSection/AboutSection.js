import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { AboutSec, Img } from './AboutSection.elements';
import banner from '../../images/about-banner.webp';
import './AboutSectionStyles.css';

const AboutSection = () => {
  return(
    <>
      <AboutSec>
        <Container>
          <Card>
            <Card.Img src={banner} alt='Two chairs in an office' />
          </Card>
          <hr className="about-section-hr" />
          <Row>
            <Col md={true}>
              
            </Col>
          </Row>
        </Container>
      </AboutSec>
    </>
  )
};

export default AboutSection;