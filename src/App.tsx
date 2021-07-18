import React, { useState } from 'react';
import { Dropdown } from "./components/Dropdown";




function App() {



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




  return (
    <div className="App">
      <Dropdown options={options} />
    </div>
  );

}

export default App;
