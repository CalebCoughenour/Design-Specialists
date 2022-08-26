import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { AboutSec, BannerTextWrapper, BannerText } from './AboutSection.elements';
import banner from '../../images/about/about-banner.webp';
import './AboutSectionStyles.css';

const AboutSection = () => {
  return(
    <>
      <AboutSec>
        <Container>
          <Card>
            <BannerTextWrapper>
              <BannerText>ABOUT US</BannerText>
            </BannerTextWrapper>
            <img src={banner} alt='Two chairs in an office' />
          </Card>
          <br></br>
          <Row>
          <h2 className="who-we-are-hr">Who we are</h2>
          </Row>
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