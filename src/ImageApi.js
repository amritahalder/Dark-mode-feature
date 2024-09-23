import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

function ImageApi() {
  const [States, setStates] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [showWeatherDetails,setShowWeatherDetails] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/data").then((response) => {
      console.log(response);
      setStates(response.data);
    });
    axios.post("http://localhost:3001/data", )
  }, []);

  const handleOption = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
    const weatherObj = States.filter(el => el.value === e.target.value)[0];
    //   {
    //     "state": "Karnataka",
    //     "degree": "25"
    //     }
    setShowWeatherDetails(weatherObj)
  };

  return (
    <div className="App">
      <h2>Amrita Halder</h2>
      <label for="cars">Select State:</label>
      <select name="cars" id="cars" onChange={handleOption} value={selectedOption}>
        {States.map((state) => (
          <option key={state} value={state.value}>
            {state.value}
          </option>
        ))}
      </select>
      {showWeatherDetails.value}<br />
      <img className='photo_size' src={showWeatherDetails.image}/>
    </div>
  )
}

export default ImageApi