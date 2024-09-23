import "./App.css";
import React, { useEffect, useState } from 'react'
import WeatherDetails from './weatherDetails'
import ShowWeatherList from './ShowWeatherList'
import Color from './Color'
import ImageApi from './ImageApi'
import TodoWithApi from './TodoWithApi'
import ColorPicker from './ColorPicker'
import CheckBoxCmpnt from './CheckBoxCmpnt'
import Chart from './Chart'
import {ChartData} from './Data'
import ExtraSpaces from './ExtraSpaces'


function App() {
  // const [userData, setUserData] =useState({
  //   labels: ChartData.map((data)=> data.year),
  //   dataSets: [{
  //     label: 'User Gained',
  //     data: ChartData.map((data)=> data.userGain),
  //     backgroundColor: ['red']
  //   }]
  // })

  const [mode, setMode] = useState('light')

  const handleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor= 'grey'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor= 'pink'
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor= 'pink'
  }, [])

  return (
    <div className="App">

      {/* ##################### */}
        {/* These components are not working because these api data is changed.  */}
        {/* <WeatherDetails/>
        <ShowWeatherList/>
        <Color/>
        <ImageApi/>
        <TodoWithApi/>
        <ColorPicker/>
        <CheckBoxCmpnt/> */}
      {/* ##################### */}

      {/* <Chart chartData={userData}/> */}

      <ExtraSpaces mode={mode} handleMode={handleMode}/>
    </div>
  );
}

export default App;
