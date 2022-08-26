import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { CardOverlay, CardTitle, CardText, CardSubText, CardButton } from './CardLink.elements';
import './CardLinkStyles.css';

const CardLinkComp = (props) => {
  return (
    <>            
      <Card className='furniture-detail-card'>
        <CardOverlay className='card-overlay'/>
        <Card.Img className='furniture-detail-card-img' src={props.cardImg} alt={props.cardImgAlt} />
        <CardText>
          <CardTitle>{props.cardTitle}</CardTitle>
          <CardSubText>{props.cardSubText}</CardSubText>
          <Link to={props.linkPath}>
            <CardButton className='card-link-button'>
              BROWSE
            </CardButton>
          </Link>
        </CardText>
      </Card>
    </>
  )
};

CardLinkComp.propTypes = {
  cardImg: PropTypes.string,
  cardImgAlt: PropTypes.string,
  cardTitle: PropTypes.string,
  cardSubText: PropTypes.string,
  linkPath: PropTypes.string
};

export default CardLinkComp;