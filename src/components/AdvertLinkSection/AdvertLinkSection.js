import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { AdvertSection, AdvertSectionHeading, Img, ImgWrapper, BannerText, BannerTextWrapper } from './AdvertLinkSection.elements';
import photo from '../../images/couch-banner.webp';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AdvertLinkSection = ({ advertAlt, advertHeading, bannerText }) => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  return(
    <>
        <AdvertSection>
          <Container>
            <AdvertSectionHeading>{advertHeading}</AdvertSectionHeading>
            <Link to="/designs">
              <div data-aos='fade-up'>
                <ImgWrapper>
                  <Card>
                    <Img src={photo} alt={advertAlt}/>
                    <BannerTextWrapper>
                      <BannerText>{bannerText}</BannerText>
                    </BannerTextWrapper>
                  </Card>
                </ImgWrapper>
              </div>
            </Link>
          </Container>
        </AdvertSection>
    </>
  )
};

export default AdvertLinkSection;

