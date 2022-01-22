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
  SubText
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
            <Heading lightText={false}>Terracotto</Heading>
            <Subtitle darkText={true}>3056 W Diversey Ave Chicago, IL 600647</Subtitle>
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
