import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { CardOverlay, CardText, CardTitle, CardButton } from './CardOptionSection.elements';
import './CardOptionSectionStyles.css';

const CardOptionSection = (props) => {
  return(
    <>
      <Card className='option-card'>
        <CardOverlay />
        <Card.Img src={props.cardImg} alt={props.cardImgAlt} className='option-card-img' />
        <CardText>
          <CardTitle>{props.cardTitle}</CardTitle>
          <Link to={props.cardPath}>
            <CardButton className='option-button'>
              VIEW
            </CardButton>
          </Link>
        </CardText>
      </Card>
    </>
  )
};

CardOptionSection.propTypes = {
 title: PropTypes.string,
 cardImg: PropTypes.string,
 cardImgAlt: PropTypes.string,
 cardTitle: PropTypes.string,
 cardPath: PropTypes.string
};

export default CardOptionSection;