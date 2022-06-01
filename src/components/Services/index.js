import React from 'react'
import {ServicesContainer,TextWrapper, TopLineContainer, ServicesH1, ServicesIcon, ServicesWrapper, ServicesCard, ServicesH2, ServicesP} from './ServicesElements'
import { TopLine } from '../About/AboutElements';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/svg-1.svg'; 


const Services = () => {
  return (
    <ServicesContainer id="services">
      <TextWrapper>

      <TopLineContainer>
        <TopLine>Services</TopLine>
      </TopLineContainer>
      <ServicesH1>Our Services</ServicesH1>
      </TextWrapper>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
            <ServicesH2>In Home Consultation</ServicesH2>
            <ServicesP>description of services</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
            <ServicesH2>Repotting Plants</ServicesH2>
            <ServicesP>description of services</ServicesP>
          </ServicesCard>
          <ServicesCard>
          <ServicesIcon src={Icon3} />
            <ServicesH2>Drilling holes in pots</ServicesH2>
            <ServicesP>description of services</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
