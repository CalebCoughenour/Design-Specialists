import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { AboutSec, BannerTextWrapper, BannerText, AboutTextSection, AboutTextTitle, Img, AboutParagraph, Video, VideoSection } from './AboutSection.elements';
import banner from '../../images/about/about-banner.webp';
import ourStory from '../../images/about/two-people.webp';
import './AboutSectionStyles.css';

const AboutSection = () => {
  return(
    <>
      <AboutSec>
        <Container>
          <Card style={{ marginBottom: '50px' }}>
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
              <AboutTextSection>
                <Container>
                  <Img src={ourStory} alt='Two people sitting at a table with a laptop in front of them' />
                  <AboutTextTitle>Our Story</AboutTextTitle>
                  <AboutParagraph>
                    <strong>Lorem ipsum dolor</strong>, sit amet consectetur adipisicing elit. Aliquid perspiciatis sit ratione consectetur numquam commodi eum optio rerum quisquam. Consequuntur ab maiores quasi nesciunt saepe. Tempore minus, vitae expedita voluptatibus consequuntur consequatur nesciunt rerum suscipit. Ipsum, minima distinctio at id eaque reiciendis unde perspiciatis repellat, exercitationem, voluptatem beatae? Alias ad vero dolorum in laudantium cupiditate doloribus minima voluptates, aliquid, ab molestias nesciunt deleniti animi vel ea pariatur nulla a magni excepturi rem iusto corrupti magnam mollitia distinctio! Praesentium ipsum consectetur in libero dolor dignissimos delectus reprehenderit rerum, nisi deserunt quam eius ex, blanditiis distinctio nobis pariatur fuga? Distinctio culpa accusamus magnam necessitatibus in unde ea modi eius eum vitae. 
                  </AboutParagraph>
                  <AboutParagraph>
                    <strong>Blanditiis alias sint</strong>, voluptates consequuntur ea esse sequi, nemo ullam laudantium quis eaque id asperiores molestiae consequatur quasi, nulla libero cupiditate. Odio cumque, nam temporibus quaerat, quibusdam ratione fugit dolorem aliquid totam saepe soluta dolore officia tenetur vitae dolor ipsam recusandae molestias sint reprehenderit? Totam excepturi ratione quas a adipisci sed sequi officiis accusantium minus quod enim cum illo, velit doloribus rerum laborum asperiores amet doloremque tempore delectus, blanditiis explicabo facilis tenetur. Minima asperiores minus eius odit sint nam amet enim. Non minima consectetur ipsam omnis odio quod magni rerum officia.
                  </AboutParagraph>
                  <Video src='https://assets.mixkit.co/videos/preview/mixkit-pan-shot-of-the-interior-of-a-hotel-room-4198-large.mp4' autoPlay muted loop />
                  <AboutParagraph>
                    <strong>Blanditiis alias sint</strong>, voluptates consequuntur ea esse sequi, nemo ullam laudantium quis eaque id asperiores molestiae consequatur quasi, nulla libero cupiditate. Odio cumque, nam temporibus quaerat, quibusdam ratione fugit dolorem aliquid totam saepe soluta dolore officia tenetur vitae dolor ipsam recusandae molestias sint reprehenderit? Totam excepturi ratione quas a adipisci sed sequi officiis accusantium minus quod enim cum illo, velit doloribus rerum laborum asperiores amet doloremque tempore delectus, blanditiis explicabo facilis tenetur. Minima asperiores minus eius odit sint nam amet enim. Non minima consectetur ipsam omnis odio quod magni rerum officia.
                  </AboutParagraph>
                </Container>
              </AboutTextSection>
            </Col>
          </Row>
        </Container>
      </AboutSec>
    </>
  )
};

export default AboutSection;