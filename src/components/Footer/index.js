import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import {
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer, 
  FooterLinksWrapper, 
  FooterLinkItems, 
  FooterLinkTitle, 
  FooterLink,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
} 
  from './FooterElements'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>
                  About us
                </FooterLinkTitle>
                  <FooterLink to="/signin">About us</FooterLink>
                  <FooterLink to="/signin">About us</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                  <FooterLink to="/signin">contact us</FooterLink>
                  <FooterLink to="/signin">contact us</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              Plants
            </SocialLogo>
            <WebsiteRights>Plants {new Date().getFullYear()} All rights reserved</WebsiteRights>
            <SocailIcons>
              <SocialIconLink href="//" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="//www/youtube.com/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocailIcons>
          </SocialMediaWrap>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
