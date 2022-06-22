import React from 'react'
import img from '../../images/img3.JPG'
import {
  InfoContainer, 
  InfoWrapper, 
  InfoRow, 
  Column1, 
  TextWrapper, 
  TopLine, 
  Heading, 
  Subtitle, 
  Column2, 
  ImgWrap, 
  Img,
} from './AboutElements'

const About = () => {
  return (
    <>
      <InfoContainer lightBg={false} id='about'>
        <InfoWrapper>
          <InfoRow imgStart={false}>
            <Column1>
            <TextWrapper>
              <TopLine>About</TopLine>
              <Heading lightText={true}>Terracotto Plants</Heading>
              <Subtitle darkText={false}>Neighborhood houseplant store with good vibes and knowledgeable staff</Subtitle>
              <Subtitle darkText={false}>We have an assortment of plants to liven up your home including low light tollerant, succulants, air plants, and even terrariums. You can also find large plants and the occasional rare plant.</Subtitle>
              {/* <BtnWrap>
                <Button to='home'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dark2={dark2 ? 1 : 0}>
                  {buttonLable}
                </Button>
              </BtnWrap> */}
            </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt='plants' />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default About

