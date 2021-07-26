import React, {useState} from 'react'
import Datepicker from "react-datepicker";
import "./datepicker.css";


interface IIntervalPickerProps extends IBaseProps{
    
}


export const IntervalPicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const onChange = (dates:any) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };
  
    return (
        <Datepicker 
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
           />
    )
}
