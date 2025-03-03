import { Button } from 'bootstrap'
import React from 'react'

 const Buttons = (onClickhandler,value,title) => {
  return (
    <button onClick={onClickhandler} value={value} className='btn'>
      {title}
    </button>
  )
}
export default Buttons;