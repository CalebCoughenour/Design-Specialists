import React from 'react';
import { CardOptionSection, AdvertLinkSection } from "../../components";
import { accessoriesOptionSectionObj, advertLinkObj } from './Data'

const Accessories = () => {
  return (
    <>
      <CardOptionSection {...accessoriesOptionSectionObj} />
      <AdvertLinkSection {...advertLinkObj}/>
    </>
  )
}

export default Accessories;