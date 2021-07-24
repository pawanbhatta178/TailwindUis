import React, {useState} from 'react'
import Datepicker from "react-datepicker";
import "./datepicker.css";


interface IDatepickerProps extends IBaseProps{
    rangePicker?: boolean|undefined;
    selected: Date;
    
}


export const DatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());

    const onChange = (date:any) => {
      setStartDate(date);
    };
  
    return (
        <Datepicker
            selected={startDate}
            onChange={onChange}
           />
    )
}

