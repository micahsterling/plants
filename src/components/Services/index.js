import React from 'react'
import {ServicesContainer, ServicesH1, ServicesIcon, ServicesWrapper, ServicesCard, ServicesH2, ServicesP} from './ServicesElements'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-1.svg';
import Icon3 from '../../images/svg-1.svg'; 


const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
            <ServicesH2>Service</ServicesH2>
            <ServicesP>description of services</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
            <ServicesH2>Service 2</ServicesH2>
            <ServicesP>description of services</ServicesP>
          </ServicesCard>
          <ServicesCard>
          <ServicesIcon src={Icon3} />
            <ServicesH2>Service 3</ServicesH2>
            <ServicesP>description of services</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
