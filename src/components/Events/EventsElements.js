import styled from "styled-components";

export const EventsContainer = styled.div`
  color: #fff;
  display: flex;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding-top: 80px;
  }
`
export const EventsWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 820px;
  width: 100%;
  padding: 0 10px;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 700px;
  }
`

export const TextWrapper = styled.div`
  display: grid;
  justify-content: start;
  margin-bottom: 1rem;

  @media screen and (min-width: 1024px) {
    margin-left: 78px;
    grid-auto-columns: minmax(auto,1fr);
    grid-template-areas: 'col1 col2';
    justify-items: end;
  }
`
export const Column1 = styled.div`
  grid-area: col1;
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
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`

export const Calendar = styled.div`
  display: flex;
  width: 850px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;

  @media screen and (max-width: 770px) {
      width: 100%;
  }
`