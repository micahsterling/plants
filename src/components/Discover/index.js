import React from 'react'
import img from '../../images/storeFront.JPG'
import {
  DiscoverContainer,
  DiscoverWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  SubText,
  Link
} from './DiscoverElements'

const Discover = () => {
  return (
    <>
    <DiscoverContainer lightBg={true} id="discover">
      <DiscoverWrapper>
        <InfoRow >
          <Column1>
          <TextWrapper>
            <TopLine>Discover</TopLine>
            <Heading lightText={false} >Terracotto Plants</Heading>
            <Subtitle>
              <Link href="https://www.google.com/maps/dir//3056+W+Diversey+Ave,+Chicago,+IL+60647/@41.9322399,-87.7069416,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x880fcd7976e03411:0xf26f32d05783a912!2m2!1d-87.7047529!2d41.9322399!3e0" target="_blank" rel="noreferrer" darkText={true}>3056 W Diversey Ave Chicago, IL 60647 </Link>
            </Subtitle>
            
            <Subtitle darkText={true}>Hours:</Subtitle>
              <SubText darkText={true}>Monday: Closed </SubText> 
              <SubText darkText={true}>Tuesday: Closed </SubText> 
              <SubText darkText={true}>Wednesday: 11am - 7pm </SubText> 
              <SubText darkText={true}>Thursday: 11am - 7pm </SubText> 
              <SubText darkText={true}>Friday: 11am - 8pm </SubText> 
              <SubText darkText={true}>Saturday: 11am - 8pm </SubText> 
              <SubText darkText={true}>Sunday: 11am - 6pm </SubText> 
          </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt="Front of shop" />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </DiscoverWrapper>
    </DiscoverContainer>
  </>
  )
}

export default Discover
