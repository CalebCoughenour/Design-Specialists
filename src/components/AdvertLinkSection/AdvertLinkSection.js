import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { AdvertSection, AdvertSectionHeading, Img, ImgWrapper, BannerText, BannerTextWrapper } from './AdvertLinkSection.elements';
import photo from '../../images/couch-banner.webp';

const AdvertLinkSection = ({advertAlt, advertHeading, bannerText}) => {
  return(
    <>
      <AdvertSection>
        <Container>
          <AdvertSectionHeading>{advertHeading}</AdvertSectionHeading>
          <Link to="#">
            <ImgWrapper>
              <Card>
                <Img src={photo} alt={advertAlt}/>
                <BannerTextWrapper>
                  <BannerText>{bannerText}</BannerText>
                </BannerTextWrapper>
              </Card>
            </ImgWrapper>
          </Link>
        </Container>
      </AdvertSection>
    </>
  )
};

export default AdvertLinkSection;

