import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function WeatherDetails() {
  const [States, setStates] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [showWeatherDetails,setShowWeatherDetails] = useState([])


  useEffect(() => {
    axios.get("http://localhost:3001/weather").then((response) => {
      console.log(response);
      setStates(response.data);
    });
  }, []);

  const handleOption = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
    const weatherObj = States.filter(el => el.state === e.target.value)[0];
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
          <option key={state} value={state.state}>
            {state.state}
          </option>
        ))}
      </select>
      {showWeatherDetails.state}<br />
      {showWeatherDetails.degree}
    </div>
  );
}

export default WeatherDetails;
