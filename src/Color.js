import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Color() {
  const [colorList, setColorList] = useState([]);
  const [color, setColor] = useState('');

  useEffect(() => {
    axios.get("http://localhost:3001/colors").then((response) => {
      console.log(response.data);
      setColorList(response.data);
    });
  }, []);

  const handleColor = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  };

  return (
    <div>
      <label for="cars">Select State:</label>
      <select
        name="cars"
        id="cars"
        onChange={handleColor}
        value={color}
      >
        {colorList.map((el, index) => (
          <option key={index} value={el.value}>
            {el.value}
          </option>
        ))}
      </select>
      <div style={{ fontSize: '22px', backgroundColor: color }}>
        {color}
      </div>
    </div>
  );
}

export default Color;
