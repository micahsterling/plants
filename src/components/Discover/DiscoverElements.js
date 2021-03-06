import styled from 'styled-components'

export const DiscoverContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
`
export const DiscoverWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 20px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    padding: 90px 0 0 0;
  }
  @media screen and (min-width: 770px) {
    align-items: start;
    padding-top: 80px;
  }
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto,1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`
export const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 20px;
  font-size: 20px;
  line-height: 24px;
  font-weight: ${({bold}) => (bold ? '600' : '0')};
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
  text-decoration: none;
`

export const SubTextContainer = styled.div`
  display: grid;
  gap: .5rem;
  grid-template-columns: .3fr auto;
`
export const SubText = styled.p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const Link = styled.a`
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
  text-decoration: none;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
  @media screen and (max-width: 768px) {
    color: #01bf71;
  }
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`
export const Img = styled.img`
  width: 80%;
  margin: 0 0 10px;
  padding-right: 0;
  @media screen and (min-width: 770px) {
    padding-top: 145px;
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`