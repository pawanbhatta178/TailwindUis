import React, { useState } from 'react';
import { Datepicker } from './components/Datepicker';
import { Listbox } from "./components/Listbox";
import { Switch } from "./components/Switch";


const Label = ({ label }: any) => {
  return <div>{label}</div>;
}



function App() {
  const [switchOn, setSwitchOn] = useState(false);

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
        <Datepicker/>
      </div>
      </>
  );

}

export default App;
