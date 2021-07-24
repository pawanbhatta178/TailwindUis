import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "./datepicker.css";


export const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const onChange = (dates:any) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };
  
    return (
        <DatePicker selected={startDate}
        onChange={onChange}
       startDate={startDate}
       endDate={endDate}
             selectsRange
       
           />
    )
}
