import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { CardOptionSection } from "../../components";
import modernImg from '../../images/designs/modern.webp';
import antiqueImg from '../../images/designs/antique.webp';
import retroImg from '../../images/designs/retro.webp';
import coastalImg from '../../images/designs/coastal.webp';
import minimalistImg from '../../images/designs/minimalist.webp';
import traditionalImg from '../../images/designs/traditional.webp';

const Designs = () => {
  return (
    <>
      <h1>Designs</h1>
      <hr className='option-section-hr/' />
      <Container>
        <Row>
          <Col lg={true}>
            <CardOptionSection
              cardImg={modernImg}
              cardImgAlt='Kitchen and dining room with modern furniture design'
              cardTitle='Modern Designs'
              cardPath='/'
            />
          </Col>
          <Col lg={true}>
            <CardOptionSection
              cardImg={antiqueImg}
              cardImgAlt='A room with antique shelves, tables, lights and storage'
              cardTitle='Antiques'
              cardPath='/'
            />
          </Col>
          <Col lg={true}>
            <CardOptionSection
              cardImg={retroImg}
              cardImgAlt='String of lights'
              cardTitle='Retro Designs'
              cardPath='/'
            />
          </Col>
        </Row>
        <Row>
          <Col lg={true}>
            <CardOptionSection
              cardImg={coastalImg}
              cardImgAlt='String of lights'
              cardTitle='Coastal Designs'
              cardPath='/'
            />
          </Col>
          <Col lg={true}>
            <CardOptionSection
              cardImg={minimalistImg}
              cardImgAlt='String of lights'
              cardTitle='Minimalist Designs'
              cardPath='/'
            />
          </Col>
          <Col lg={true}>
            <CardOptionSection
              cardImg={traditionalImg}
              cardImgAlt='String of lights'
              cardTitle='Traditional'
              cardPath='/'
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Designs;