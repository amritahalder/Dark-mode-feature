import React, { useState } from 'react'
import { SketchPicker } from 'react-color';

function ColorPicker() {
  const [background, setBackground] = useState("#fff")
  const [color, setColor] = useState('')

  const handleChangeComplete = (color) => {
    setBackground(color.hex );
    console.log(color.hex)
    setColor(color.hex)
  }

  


  return (
    <>
      <div>ColorPicker</div>
      <div className='wrapper'>
        <SketchPicker
          color={background }
          onChangeComplete={handleChangeComplete}
        />
        <div className='color_Preview' style={{fontSize: "20px", background : color}}>
          {color}
        </div>
      </div>
    </>
  )
}

export default ColorPicker