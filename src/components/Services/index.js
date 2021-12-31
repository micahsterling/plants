import React from 'react'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}>
            <ServicesH1>Service</ServicesH1>
            <ServicesP>description of services</ServicesP>
          </ServicesIcon>
          <ServicesIcon src={Icon2}>
            <ServicesH1>Service 2</ServicesH1>
            <ServicesP>description of services</ServicesP>
          </ServicesIcon>
          <ServicesIcon src={Icon3}>
            <ServicesH1>Service 3</ServicesH1>
            <ServicesP>description of services</ServicesP>
          </ServicesIcon>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
