import styled from "styled-components";

export const AdvertSection = styled.div`
  padding: 50px 50px;
  /* background-color: #dcdcdc; */
  background-color: ${({lightBg}) => (lightBg ? '#dcdcdc' : '#aeaeae91')};

  @media screen and (max-width: 450px) {
    padding: 100px 0px 100px 0px;
    background-image: url('');
    background-position: center;
  }
`;

export const Img = styled.img`
  width: 100%;

  @media screen and (max-width: 450px) {
    display: none;
  }
`;

export const ImgWrapper = styled.div`
  margin: auto;
  max-width: 1200px;
`

export const AdvertSectionHeading = styled.h1`
  text-align: center;
  color: #000000;
  font-size: 48px;
  margin-bottom: 24px;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

export const BannerText = styled.h4`
  margin: auto; 
  padding: 12px 10px;
  background-color: rgba(0, 0, 0, .5);
  color: white;
  width: 40%;
  height: 20%;
  flex-wrap: wrap;
  flex-direction: column;

  &:hover {
    transition: background-color .3s ease-in-out;
    background-color: rgba(0, 0, 0, 1);
  }

  @media screen and (max-width: 993px) {
    height: 30%;
  }

  @media screen and (max-width: 768px) {
    height: 50%;
  }

  @media screen and (max-width: 600px) {
    height: 60%;
  }

  @media screen and (max-width: 500px) {
    width: 60%;
    height: 70%
  }

  @media screen and (max-width: 450px) {
    margin: 30px 10px;  
    width: 100%;
    height: 200px;
  }
`;

export const BannerTextWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`