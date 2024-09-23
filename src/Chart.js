import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {chart as chartJS} from 'chart.js/auto'


function Chart({chartData}) {
  return (
    <>
    <div style={{width: 700}}>
      <Bar data={chartData} />
    </div>
    </>
  )
}

export default Chart