import React, { useState } from 'react';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import '@wojtekmaj/react-datetimerange-picker/dist/DateTimeRangePicker.css'
import '../styles/DateTimePicker.css'

const DateTimePicker = () => {
    const [value, onChange] = useState([new Date(), new Date()]);
    console.log(value[0].getFullYear());
  return (
    <>
        <DateTimeRangePicker onChange={onChange} value={value} />
    </>
  );
}

export default DateTimePicker