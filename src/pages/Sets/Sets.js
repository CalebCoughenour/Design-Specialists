import React from 'react';
import { CardOptionSection, AdvertLinkSection } from "../../components/index.js";
import { setsOptionSectionObj } from './Data'

const Sets = () => {
  return (
    <>
      <CardOptionSection {...setsOptionSectionObj} />
      <AdvertLinkSection />
    </>
  )
}

export default Sets;