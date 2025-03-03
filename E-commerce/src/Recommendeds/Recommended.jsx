import React from 'react'
import './Recommended.css';
import Buttons from '../Components/Buttons';
 const Recommended = ( {handleClick} ) => {
  return (
    <div>
      <h1 className='recommended-title'>Recommended</h1>
      <div className="recommended-flex">
        <Buttons onClickHandler={handleClick} value="" title="All Product"/>
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike"/>
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas"/>
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma"/>
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans"/>
        
      </div>
    </div>
  )
}

export default Recommended;