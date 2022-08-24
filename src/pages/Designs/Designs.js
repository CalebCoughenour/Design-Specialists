import React from 'react';
import { CardOptionSection } from "../../components";
import { designOptionSectionObj } from './Data'

const Designs = () => {
  return (
    <>
      <CardOptionSection {...designOptionSectionObj} />
    </>
  )
}

export default Designs;