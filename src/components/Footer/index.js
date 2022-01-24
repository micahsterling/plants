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
  FooterText,
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
                  <FooterLink href="https://www.google.com/maps/dir//3056+W+Diversey+Ave,+Chicago,+IL+60647/@41.9322399,-87.7069416,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x880fcd7976e03411:0xf26f32d05783a912!2m2!1d-87.7047529!2d41.9322399!3e0" target="_blank" rel="noreferrer">
                    3056 W Diversey Ave 
                    <br />
                    Chicago, IL 600647 
                  </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
              <FooterLinkTitle>
                  Store Hours
                </FooterLinkTitle>
                  <FooterText >Mon-Tue: Closed</FooterText>
                  <FooterText >Wed-Thur: 11am - 7pm</FooterText>
                  <FooterText >Fri-Sat: 11am - 8pm </FooterText>
                  <FooterText >Sun: 11am - 6pm</FooterText>
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
