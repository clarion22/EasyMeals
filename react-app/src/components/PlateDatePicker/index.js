import React, {useState, useEffect} from 'react'
import {DateTimePicker} from '@material-ui/pickers'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function PlateDatePicker({setPickedDate}) {
  const [selectedDate, handleDateChange] = useState(new Date());

  const handleDates = (e) => {
    handleDateChange(e)
    setPickedDate(e)
  }


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker value={selectedDate} onChange={(e) => handleDates(e)} />
    </MuiPickersUtilsProvider>
  )
}

export default PlateDatePicker
