import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { CardOptionSection } from "../../components";
import modernImg from '../../images/designs/modern.webp';
import antiqueImg from '../../images/designs/antique.webp';
import retroImg from '../../images/designs/retro.webp';
import coastalImg from '../../images/designs/coastal.webp';
import minimalistImg from '../../images/designs/minimalist.webp';
import traditionalImg from '../../images/designs/traditional.webp';
import '../../App.css';

const Designs = () => {
  return (
    <>
      <h1>Designs</h1>
      <hr className='styled-hr' />
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
              cardImgAlt='Vinyl record player next to a radio on a storage shelf'
              cardTitle='Retro Designs'
              cardPath='/'
            />
          </Col>
        </Row>
        <Row>
          <Col lg={true}>
            <CardOptionSection
              cardImg={coastalImg}
              cardImgAlt='A living room with a couch, tapestry, two chairs and a center table'
              cardTitle='Coastal Designs'
              cardPath='/'
            />
          </Col>
          <Col lg={true}>
            <CardOptionSection
              cardImg={minimalistImg}
              cardImgAlt='A bedroom with a desk that has a painting above it and a chair in front of it, next to a large bed with drapes'
              cardTitle='Minimalist Designs'
              cardPath='/'
            />
          </Col>
          <Col lg={true}>
            <CardOptionSection
              cardImg={traditionalImg}
              cardImgAlt='A dining room with a large wooden table surrounded by chairs next to an open kitchen'
              cardTitle='Traditional'
              cardPath='/'
            />
          </Col>
        </Row>
      </Container>
      <hr className='bottom-styled-hr' />
    </>
  )
}

export default Designs;