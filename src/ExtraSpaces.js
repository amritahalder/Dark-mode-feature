import React, { useState } from "react";
import Navbar from './Navbar'

function ExtraSpaces(props) {
  const [textValue, setTextValue] = useState("");
  // const [mode, setMode] = useState('white');

  // const handleMode = () => {
  //   setMode('dark');
  // };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleExtraSpeces = () => {
    let newText = textValue.split(/[ ] + /);
    setTextValue(newText.join(" "));
  };

  const handleCopy = () => {
    var text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    console.log(text.value);
  };

  return (
    <>
      <div 
        className={`bg-${props.mode} container`}
        style={{
          marginTop: "50px",
          padding: "20px"
        }}
      >
        {/* <Navbar/> */}
        
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.handleMode}
            style={{
              width: "75px",
              height: "34px"
            }}
          />
        </div>
        <div 
          className="container"
          style={{
            width: '800px'
          }}
        >
          <div 
            className={`text-${props.mode === "light" ? "dark" : "light"}`}
            style={{
              fontSize: "30px",
              textAlign: 'left',
              marginBottom: '10px'
            }}
          >
            Write something in the Text area
          </div>
          <textarea
            className="from-control"
            value={textValue}
            onChange={handleTextChange}
            id="myText"
            rows={8}
            cols={100}
          ></textarea>
          <div
            style={{
              margin: '10px 0 ',
              textAlign: 'left'
            }}
          >
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleExtraSpeces}
            >
              Remove extra spaces
            </button>
            <button 
              className="btn btn-primary mx-3" 
              type="button" 
              onClick={handleCopy}
            >
              Copy Text
            </button>
          </div>
        </div>
        {/* <input type='text' placeholder='Enter Some Text' /> */}
      </div>
    </>
  );
}

export default ExtraSpaces;
