import React from 'react';
import { AboutSection, AdvertLinkSection } from "../../components";
import { advertLinkObj } from './Data'

const Accessories = () => {
  return (
    <>
      <AboutSection />
      <AdvertLinkSection {...advertLinkObj} />
    </>
  )
}

export default Accessories;