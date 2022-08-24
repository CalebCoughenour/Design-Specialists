import React from 'react';
import { Button } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FooterContainer, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, SocialIcon } from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
        <FooterLinksItems>
            <FooterLinkTitle>Services</FooterLinkTitle>
            <FooterLink to='/designs'>Designs</FooterLink>
            <FooterLink to='/'>Room Sets</FooterLink>
            <FooterLink to='/'>Accessories</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/'>Our Story</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>FAQ</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>Customer Service</FooterLink>
            <FooterLink to='/'>Email Address</FooterLink>
            <FooterLink to='/'>Call Representative</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            Interior Designers
          </SocialLogo>
          <SocialIcons>
          <SocialIconLink href='/' target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href={'//www.youtube.com'} target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer;