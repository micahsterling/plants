import React from 'react';
import {
  EventsContainer,
  EventsWrapper,
  TextWrapper,
  TopLine,
  Heading,
  Calendar,
} from './EventsElements'

const Events = () => {
  return (
    <>
      <EventsContainer lightBg={true} id="events">
        <EventsWrapper>
          <TextWrapper>
            <TopLine>Events</TopLine>
            <Heading lightText={false} >Terracotto Events</Heading>
          </TextWrapper>
            <Calendar>
            <iframe style={{ 'width': '100%', }} className='cal' title="Events Calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%2333B679&ctz=America%2FChicago&showTitle=0&showPrint=0&showTabs=1&showCalendars=0&src=aHAyc3Nvc28xMWh2OWRoZXF0NmFwOGo5NzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043&color=%23A79B8E" border={0} width={800} height={550} frameBorder={0} scrolling={"no"}></iframe>
            </Calendar>
        </EventsWrapper>
      </EventsContainer>
    </>
  )
};

export default Events;
