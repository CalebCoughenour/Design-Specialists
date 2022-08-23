import React from 'react';
import { AdvertSection, Img, ImgWrapper } from './AdvertLinkSection.elements';

const AdvertLinkSection = (advertAlt, advertSrc) => {
  return(
    <>
      <AdvertSection>
        <ImgWrapper>
          <img src={advertSrc} alt="alt" />

        </ImgWrapper>
      </AdvertSection>
    </>
  )
};

export default AdvertLinkSection;

