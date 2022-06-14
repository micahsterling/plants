import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 830px;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1200px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`

export const TextWrapper = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto,1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`
export const Column1 = styled.div`
  margin: auto;
  margin-bottom: 60px;
  padding-top: 60px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding-top: 90px;
    margin-bottom: 40px;
  }
`
export const TopLineContainer = styled.div`
  justify-content: center;
  align-items: center;
`
export const ServicesH1= styled.h1`
  font-size: 2.5rem;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer
  }
`

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`