import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa'
import {
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer, 
  FooterLinksWrapper, 
  FooterLinkItems, 
  FooterLinkTitle, 
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocailIcons,
  SocialIconLink,
} 
  from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <>
      <FooterContainer>
        <FooterWrap>
              <SocialLogo to='/' onClick={toggleHome}>
              Terracotto Plants
              </SocialLogo>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>
                  Address
                </FooterLinkTitle>
                  <FooterLink >
                    3056 W Diversey Ave 
                    <br />
                    Chicago, IL 600647 
                  </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
              <FooterLinkTitle>
                  Store Hours
                </FooterLinkTitle>
                  <FooterLink to="/signin">contact us</FooterLink>
                  <FooterLink to="/signin">contact us</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocailIcons>
                <SocialIconLink href="//www.instagram.com/terracottoplants/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="//open.spotify.com/show/4VsESgmTcgICKJ0xXKLlFk" target="_blank" aria-label="Spotify">
                  <FaSpotify />
                </SocialIconLink>
                <SocialIconLink href="//www.youtube.com/channel/UCvxkT72U71ItRoTnKnRVV1g/videos" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
              </SocailIcons>
            </SocialMediaWrap>
          </SocialMedia>
              <WebsiteRights>© {new Date().getFullYear()} Terracotto Plants. All rights reserved. </WebsiteRights>
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
