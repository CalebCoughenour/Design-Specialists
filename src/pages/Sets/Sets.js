import React from 'react';
import { CardOptionSection, AdvertLinkSection } from "../../components/index.js";
import { setsOptionSectionObj, advertLinkObj } from './Data'

const Sets = () => {
  return (
    <>
      <CardOptionSection {...setsOptionSectionObj} />
      <AdvertLinkSection {...advertLinkObj}/>
    </>
  )
}

export default Sets;