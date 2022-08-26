import styled from "styled-components";

export const AboutSec = styled.div`
  padding: 100px 0;
  background-color: #dcdcdc;
`;

export const Title = styled.h1`
  font-family: Brush Script MT;
  font-size: 50px;
  text-align: center;
`

export const BannerText = styled.h1`
  margin: auto; 
  padding: 12px 10px;
  background-color: rgba(0, 0, 0, .9);
  color: white;
  width: 40%;
  height: 20%;
  flex-wrap: wrap;
  flex-direction: column;

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
  }

  @media screen and (max-width: 350px) {
    font-size: 20px;
  }

  @media screen and (max-width: 300px) {
    font-size: 15px;
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

  @media screen and (max-width: 770px) {
    height: 80%;
  }

  @media screen and (max-width: 600px) {
    height: 70%;
  }
`;

export const AboutTextSection = styled.div`
  padding: 100px 0px;
`;

export const AboutTextTitle = styled.h1`
  text-align: center;
  text-decoration: underline;

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;

export const Img = styled.img`
  margin-right: 20px;
  float: left;

  @media screen and (max-width: 770px) {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    width: 40%;
  }
`;

export const AboutParagraph = styled.p`
  margin-left: 5px;
  font-size: 24px;
  text-align: left;

  @media screen and (max-width: 770px) {
    font-size: 20px;
  }
`;

export const Video = styled.video`
  margin-top: 10px;
  margin-right: 20px;
  float: left;
  background: #dcdcdc;
  width: 50%;
  height: 50%;
`;