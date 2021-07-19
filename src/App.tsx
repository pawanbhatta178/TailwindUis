import React, { useState } from 'react';
import { Listbox } from "./components/Listbox";




function App() {

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



  return (
    <>
      <div className="App ">
        <Listbox options={options} defaultValue={options[0]} />
      </div>
    </>
  );

}

export default App;
