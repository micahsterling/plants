import React from 'react'
import {ServicesContainer,TextWrapper, Column1, TopLineContainer, ServicesH1, ServicesIcon, ServicesWrapper, ServicesCard, ServicesH2, } from './ServicesElements'
import { TopLine } from '../About/AboutElements';
import Icon1 from '../../images/consultation.jpeg';
import Icon2 from '../../images/plant.svg';
import Icon3 from '../../images/Ceramic-Pot.jpeg'; 


const Services = () => {
  return (
    <ServicesContainer id="services">
      <TextWrapper>
        <Column1>
        <TopLineContainer>
          <TopLine>Services</TopLine>
        </TopLineContainer>
        <ServicesH1>Our Services</ServicesH1>
        </Column1>
      </TextWrapper>

      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
            <ServicesH2>In Home Consultation</ServicesH2>
            {/* <ServicesP>description of services</ServicesP> */}
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
            <ServicesH2>Repotting Plants</ServicesH2>
            {/* <ServicesP>description of services</ServicesP> */}
          </ServicesCard>
          <ServicesCard>
          <ServicesIcon src={Icon3} />
            <ServicesH2>Drilling holes in pots</ServicesH2>
            {/* <ServicesP>description of services</ServicesP> */}
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
