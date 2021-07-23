import React, { useState } from 'react';
import { Listbox } from "./components/Listbox";
import { Switch } from "./components/Switch";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Label = ({ label }: any) => {
  return <div>{label}</div>;
}



function App() {
  const [switchOn, setSwitchOn] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates:any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const options = [
    { value: "The Crownland" },
    { value: "Iron Islands" },
    { value: "The North" },
    { value: "The Reach" },
    { value: "The Riverlands" },
    { value: "The Vale" },
    { value: "The Westerlands" },
    { value: "The Stormlands" }
  ];

  const onSwitchToggle = () => {
    setSwitchOn(!switchOn)
  }

  return (
    <>
      <div className="App ">
        <Listbox options={options} defaultValue={null} placeholder={"Select one"} isMulti />
        <Switch onChange={onSwitchToggle} enabled={switchOn} label={Label({ label: "Are you available?" })} />
        <div>
        
        <DatePicker   selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
          />
            <div>HGe</div>
        </div>
   
      </div>
      </>
  );

}

export default App;
