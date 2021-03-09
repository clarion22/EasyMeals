import React from 'react';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import SideNavigation from '../SideNavigation';
import './calendar.css'

function Calendar() {
  const events = [{title: "today's event", start: '2021-03-09T14:30:00', url: 'google.com'}, {title: 'event 2', date: "2021-03-31T19:57:00.000Z"}]

  const handleClick = (e) => {
    if (e.event.url) {
      alert("clickedlskdjf")
    } else {
      console.log('event', e)
    }
  }
  return (
    <div style={{height: '100%', bottom: 0, backgroundColor: '#f4fff8', display: 'flex'}}>
      <SideNavigation />
      <div className="calendar_wrapper">
        <FullCalendar
          defaultView='dayGridMonth'
          plugins={[dayGridPlugin]}
          events={events}
          eventClick={handleClick}
        />
      </div>
    </div>
  )
}

export default Calendar
