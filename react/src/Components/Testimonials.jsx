import React from 'react'
import { useState } from 'react';
import '../Testimonials.css';

 const Testimonials = () => {
    const[currentIndex, setCurrentIndex]=useState(0);

    const testimonials=[
      {
        quote:"This is the best product.I've ever used!",
        author:"nida karamat",
      },
      {
        quote:"I highly recommmend this product to everyone!",
        author:"john smith",
      },
      {
        quote:"This product has completely changed my life",
        author:"HuXn WEbDev",
      },
    ];

    const handlePrevClick=()=>{
      setCurrentIndex(
        (currentIndex+testimonials.length-1 )%testimonials.length
      )
    }
    
    const handleNextClick=()=>{
      setCurrentIndex(
        (currentIndex+testimonials.length+1 )%testimonials.length
      )
    }  
  return (
   <div className="testimonials">
     <div className="testimonials-quote">
      {testimonials[currentIndex].quote}
     </div>
     <div className="testimonials-author">
     {testimonials[currentIndex].author}
     </div>
     <testimonials className="testimonials-nav">
     <button onClick={handlePrevClick}>Prev</button>
     <button onClick={handleNextClick}>Next</button>
   </testimonials>
   </div>
  )
}

export default Testimonials;