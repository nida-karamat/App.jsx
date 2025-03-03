import React from 'react'

 const EventHandling = () => {
    const handleClick=(e: React.MouseEvent<HTMLButtonElement>)=>{
      console.log("buttonEvent!" ,e.currentTarget)
    }

    const handleMouseEvent=(e: React.MouseEvent<HTMLDivElement>)=>{
        console.log("Mouse Event" , e.currentTarget)
    }
  return (
    <div onMouseEnter={handleMouseEvent}>
        <h2>Event handling</h2>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default EventHandling;
