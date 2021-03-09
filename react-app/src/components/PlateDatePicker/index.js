import React, {useState, useEffect} from 'react'
import {DateTimePicker} from '@material-ui/pickers'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function PlateDatePicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  useEffect(() => {
    console.log('selected date', selectedDate.toISOString())
  }, [selectedDate])


  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  )
}

export default PlateDatePicker
