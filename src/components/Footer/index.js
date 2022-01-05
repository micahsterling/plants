import React from 'react'
import {
  FooterContainer, 
  FooterWrap, 
  FooterLinksContainer, 
  FooterLinksWrapper, 
  FooterLinkItems, 
  FooterLinkTitle, 
  FooterLink} 
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
        </FooterWrap>
      </FooterContainer>
    </>
  )
}

export default Footer
