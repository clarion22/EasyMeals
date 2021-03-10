import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {loadUserEvents} from '../../store/calendar';

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from '@fullcalendar/timegrid'
import SideNavigation from '../SideNavigation';
import './calendar.css'

function Calendar() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const plateEvents = useSelector(state => Object.values(state.calendar));
  const events = [{title: "today's event", start: '2021-03-09T14:30:00', url: 'google.com'}]
  const [loaded, setLoaded] = useState(false)
  const handleClick = (e) => {
    if (e.event.url) {
      alert("clickedlskdjf")
    } else {
      console.log('event', e)
    }
  }

  useEffect(() => {
    if(sessionUser) dispatch(loadUserEvents(sessionUser.id))
  }, [dispatch])

  useEffect(() => {
    if (plateEvents.length) setLoaded(true)
  }, [plateEvents.length])


  return (
    <div style={{height: '100%', bottom: 0, backgroundColor: '#f4fff8', display: 'flex'}}>
      <SideNavigation />
      <div className="calendar_wrapper">
        <FullCalendar
          defaultView='dayGridMonth'
          plugins={[dayGridPlugin, timeGridPlugin]}
          events={plateEvents}
          eventClick={handleClick}
          headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
        />
      </div>
    </div>
  )
}

export default Calendar
