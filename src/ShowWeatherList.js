import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

function ShowWeatherList() {
  const [states, setStates] = useState([]);
  const [statesList, setStateList] = useState([]);
  const [value, setValue] = useState('')

  useEffect(() => {
    axios.get("http://localhost:3001/weather").then((response) => {
      console.log(response);
      setStates(response.data);
      setStateList(response.data);
    });
  }, []);

  const handlevalueChange = (e) => {
    setValue(e.target.value)
    const filter = statesList.filter((state) => state.state.includes(e.target.value))
    setStates(filter)
  }

  return (
    <div>
      <input type='text' value={value} onChange={handlevalueChange}/>
      <div>--------------------</div>
      {states.map((state, index) => (
        <div key={index} value={state.state}>
          {state.state}
          {state.degree}
        </div>
      ))}
    </div>
  )
}

export default ShowWeatherList