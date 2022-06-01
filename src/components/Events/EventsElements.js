import styled from "styled-components";

export const EventsContainer = styled.div`
  color: #fff;
  display: flex;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
export const EventsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 820px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  /* padding: 0 24px; */
  justify-content: center;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 100px;
  /* padding-bottom: 5px; */
  padding-left: 15px; 
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
  /* margin-bottom: 24px; */
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Calendar = styled.div`
  display: flex;
  width: 850px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  /* padding: 0 24px; */
  justify-content: center;

  @media screen and (max-width: 770px) {
      width: 100%;
  }
`