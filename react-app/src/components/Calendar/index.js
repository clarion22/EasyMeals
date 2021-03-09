import React from 'react';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import SideNavigation from '../SideNavigation';
import './calendar.css'

function Calendar() {
  const events = [{title: "today's event", date: new Date()}]
  return (
    <div style={{height: '100%', bottom: 0, backgroundColor: '#f4fff8', display: 'flex'}}>
      <SideNavigation />
      <div className="calendar_wrapper">
        <FullCalendar
          defaultView='dayGridMonth'
          plugins={[dayGridPlugin]}
          events={events}
        />
      </div>
    </div>
  )
}

export default Calendar
