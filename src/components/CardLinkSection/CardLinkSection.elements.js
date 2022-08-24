import styled from "styled-components";



export const CardLinkSec = styled.div`
  padding: 150px 0;
  background-color: #aeaeae91;

  @media screen and (max-width: 1000px) {
    padding: 120px 0;
  }
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, .6);
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
  color: #fff;

  @media screen and (min-width: 1200px) {
    &:hover {
      transition: color .3s ease-in-out;
      color: lightgray;
    } 
  }
`;

export const CardTitle =  styled.h1`
  font-size: 2em;
  font-weight: 900;
`

export const CardSubText = styled.p`
  margin: 0.25em 10px 5px 10px;
  font-size: 1.2em;
`

export const CardButton = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: 1px solid white;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: #fff;

  &:hover {
    background-color: rgba(0, 0, 0, .8);
    transition: background-color .2s ease-in-out
  }

@media screen and (max-width: 960px) {
  width: 100%;
}
`