import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { CardOptionSection, AdvertLinkSection } from "../../components";
import lightsImg from '../../images/accessories/lights.webp';
import pillowsImg from '../../images/accessories/pillows.webp';
import artImg from '../../images/accessories/art.webp';
import beddingImg from '../../images/accessories/bedding.webp';
import curtainsImg from '../../images/accessories/curtains.webp';
import storageImg from '../../images/accessories/storage.webp';
import '../../App.css';

const Accessories = () => {
  return (
    <>
      <div className="sets-section">
        <h1 className='section-title'>Accessories</h1>
        <hr className="styled-hr" />
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
                cardImgAlt='Three pillows on a couch with a blanket draped over one of the pillows'
                cardTitle='Pillows'
                cardPath='/'
              /> 
            </Col>
          </Row>
          <Row>
            <Col lg={true}>
              <CardOptionSection
                cardImg={beddingImg}
                cardImgAlt='A bed with a pink and white theme'
                cardTitle='Bedding'
                cardPath='/'
              />
            </Col>
            <Col lg={true}>
              <CardOptionSection
                cardImg={curtainsImg}
                cardImgAlt='A window with curtains opened to the side'
                cardTitle='Curtains/Shades'
                cardPath='/'
              />
            </Col>
            <Col lg={true}>    
              <CardOptionSection
                cardImg={storageImg}
                cardImgAlt='A living room with cabinents, shelves and drawers used for storage'
                cardTitle='Storage'
                cardPath='/'
              /> 
            </Col>
          </Row>
          <hr className="bottom-styled-hr" />
        </Container>
      </div>
      <AdvertLinkSection />
    </>
  )
}

export default Accessories;