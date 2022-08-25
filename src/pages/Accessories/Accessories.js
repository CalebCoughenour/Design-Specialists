import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { CardOptionSection, AdvertLinkSection } from "../../components";
import lightsImg from '../../images/accessories/lights.webp';
import pillowsImg from '../../images/accessories/pillows.webp';
import artImg from '../../images/accessories/art.webp';
import beddingImg from '../../images/accessories/bedding.webp';
import curtainsImg from '../../images/accessories/curtains.webp';
import storageImg from '../../images/accessories/storage.webp';

const Accessories = () => {
  return (
    <>
      <h1>Accessories</h1>
      <hr className="option-section-hr" />
      <Container>
        <Row>
          <Col lg={true}>
            <CardOptionSection
              cardImg={lightsImg}
              cardImgAlt='String of lights'
              cardTitle='Lights'
              cardPath='/'
              />
            </Col>
            <Col lg={true}>
              <CardOptionSection
              cardImg={artImg}
              cardImgAlt='Spiral made out of stained glass'
              cardTitle='Paintings/Art'
              cardPath='/'
              />
            </Col>
            <Col lg={true}>    
              <CardOptionSection
              cardImg={pillowsImg}
              cardImgAlt='Three pillows '
              cardTitle='Pillows'
              cardPath='/'
              /> 
          </Col>
        </Row>
        <Row>
          <Col lg={true}>
            <CardOptionSection
              cardImg={beddingImg}
              cardImgAlt='alt'
              cardTitle='Bedding'
              cardPath='/'
              />
            </Col>
            <Col lg={true}>
              <CardOptionSection
              cardImg={curtainsImg}
              cardImgAlt='alt'
              cardTitle='Curtains/Shades'
              cardPath='/'
              />
            </Col>
            <Col lg={true}>    
              <CardOptionSection
              cardImg={storageImg}
              cardImgAlt='alt'
              cardTitle='Storage'
              cardPath='/'
              /> 
          </Col>
        </Row>
        <hr className="bottom-option-section-hr" />
        <AdvertLinkSection />
      </Container>
    </>
  )
}

export default Accessories;