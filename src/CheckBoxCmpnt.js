import React, { useState } from 'react'

function CheckBoxCmpnt() {
  const [checkBox, setCheckBox] = useState('')

  


  const handleCheckBox = (e) => {
    setCheckBox(e.target.checked)
    console.log(e.target.checked)
  }

  return (
    <div>
      <input type='checkBox'value={checkBox} onChange={handleCheckBox}/>
      <input type='text' disabled={checkBox ? true : false}/>
      CheckBoxCmpnt
    </div>
  )
}

export default CheckBoxCmpnt