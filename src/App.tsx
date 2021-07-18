import React, { useState } from 'react';
import { Dropdown } from "./components/Dropdown";
import Select, { components } from "react-select";
import { AiFillCaretDown } from "react-icons/ai";

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <AiFillCaretDown />
    </components.DropdownIndicator>
  );
};


function App() {

  const customStyles = {

    option: (provided: any, { data, isDisabled, isFocused, isSelected }: any) => ({
      ...provided,
      backgroundColor: isSelected ? "#555555" : (isFocused ? "#999999" : null),
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none"
    })
  }

  const options = [
    { value: "The Crownlands" },
    { value: "Iron Islands" },
    { value: "The North" },
    { value: "The Reach" },
    { value: "The Riverlands" },
    { value: "The Vale" },
    { value: "The Westerlands" },
    { value: "The Stormlands" }
  ];


  const [region, setRegion] = useState(options[0]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const onchangeSelect = (item: any) => {
    setCurrentCountry(null);
    setRegion(item);
  };

  return (
    <div className="App">
      <Select
        styles={customStyles}
        value={region}
        onChange={onchangeSelect}
        options={options}
        components={{ DropdownIndicator }}
        getOptionValue={(option: any) => option.value}
        getOptionLabel={(option: any) => option.value}
      />
    </div>
  );

}

export default App;
