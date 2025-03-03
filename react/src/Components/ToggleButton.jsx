import React from 'react'
import {useState} from "react";
import '../ToggleButton.css';
 const ToggleButton = () => {
    const [backgroundColor, setBackgroundColor]=useState("white");
    const [textColor,setTextColor]= useState("#1b1b1b");
    const [buttonStyle,setButtonStyle]=useState("white");

    const handleClick=()=>{
        setBackgroundColor(backgroundColor==="white" ? "#1b1b1b" : "white");
        setTextColor(textColor==="#1b1b1b" ? "#ffa31a" :"#1b1b1b");
        setButtonStyle(backgroundColor==="white" ? "#1b1b1b" : "white");
    }
  return (
    <div>
        <section style={{backgroundColor, color:textColor,}}>
            <button onClick={handleClick} style={
                {buttonStyle, color:textColor, border:'2px ,solid ${textColor}'}    
            }>
              {backgroundColor==="#1b1b1b" ? "Black Theme" :"White Theme"}
            </button>
            <section className='Content'>
            <h1>welcome to my new web application</h1>
        </section>
        </section>
        
    </div>
  )
}
  export default ToggleButton; 