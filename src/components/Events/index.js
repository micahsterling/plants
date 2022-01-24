import React from 'react';
import { TopLine, InfoRow, Column1, Column2, TextWrapper, Heading, Subtitle } from '../Discover/DiscoverElements';
import {
  EventsContainer,
  EventsWrapper,
} from './EventsElements'

const Events = () => {
  return (
    <>
      <EventsContainer lightBg={true} id="events">
        <EventsWrapper>
        <InfoRow >
          <Column1>
          <TextWrapper>
            <TopLine>Events</TopLine>
            <Heading lightText={false} >Terracotto Events</Heading>
            <Subtitle darkText={true}>Coming Soon</Subtitle>
          </TextWrapper>
          </Column1>
          <Column2>
          </Column2>
        </InfoRow>
        </EventsWrapper>
      </EventsContainer>
    </>
  )
};

export default Events;
