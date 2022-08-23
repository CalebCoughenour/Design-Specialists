import styled from "styled-components";



export const CardLinkSec = styled.div`
  padding: 200px 0;
  background-color: #aeaeae91;

  @media screen and (max-width: 1000px) {
    padding: 180px 0;
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  
`;

export const CardText = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Georgia, serif;
`;

export const CardTitle =  styled.h1`
  font-size: 2em;
  font-weight: 900;
`

export const CardSubText = styled.p`
  margin: 0.25em 10px 5px 10px;
  font-size: 1.2em;
  
`