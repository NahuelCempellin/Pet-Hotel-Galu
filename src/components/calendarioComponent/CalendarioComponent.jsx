import React from 'react'
import { useSelector } from 'react-redux'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const CalendarioComponent = () => {

    const{theme}=useSelector(state=> state)
    const events = [
        { title: 'Meeting', start: new Date() }
      ]


  return (
    <div className={`${theme? "text-blue-900" : "text-zinc-50"}`}>
      
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        weekends={false}
        events={events}
        eventContent={renderEventContent}
      />
    </div>
  )
}

function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

export default CalendarioComponent