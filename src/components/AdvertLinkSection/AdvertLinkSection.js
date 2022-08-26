import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { AdvertSection, AdvertSectionHeading, Img, ImgWrapper, BannerText, BannerTextWrapper } from './AdvertLinkSection.elements';
import photo from '../../images/advert/couch-banner.webp';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../../App.css';

const AdvertLinkSection = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  return(
    <>
        <AdvertSection>
          <Container>
            <AdvertSectionHeading>Choose From Our Carefully Selected Designs</AdvertSectionHeading>
            <Link to="/designs">
              <div data-aos='fade-up'>
                <ImgWrapper>
                  <Card>
                    <Img src={photo} alt='View all designs written on a banner displaying a couch'/>
                    <BannerTextWrapper>
                      <BannerText>View All Designs</BannerText>
                    </BannerTextWrapper>
                  </Card>
                </ImgWrapper>
              </div>
            </Link>
          </Container>
          <hr className="bottom-styled-hr" style={{ marginBottom: '0px' }}/>
        </AdvertSection>
    </>
  )
};

export default AdvertLinkSection;

