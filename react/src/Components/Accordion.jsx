import React from 'react'
import { useState } from 'react';

 const Accordion = () => {

    const[isActive ,setIsactive]=useState(false)
  return (
    <div>
      <section className="accordian-card">
        <div className="header" onClick={()=>setIsactive(!isActive)}>
            <div>{title}</div>
            <p className="icon">{isActive ? "-" :"+"}</p>
        </div>
         <div className="content">
            {isActive && <p className='"card-info'>{content}</p>}
         </div>
      </section>
    </div>
  )
}
export default Accordion;