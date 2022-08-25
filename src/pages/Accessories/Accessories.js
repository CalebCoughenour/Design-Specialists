import React from 'react';
import { CardOptionSection, AdvertLinkSection } from "../../components";
import { accessoriesOptionSectionObj } from './Data'

const Accessories = () => {
  return (
    <>
      <CardOptionSection {...accessoriesOptionSectionObj} />
      <AdvertLinkSection />
    </>
  )
}

export default Accessories;