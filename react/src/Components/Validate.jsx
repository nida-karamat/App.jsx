import React, { useState } from 'react'
import '../validate.css';

 const Validate = () => {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")

  const [errorUserName,setErrorUserName]=useState("")
  const [errorEmail,setErrorEmail]=useState("")
  const [errorPassword,setErrorPassword]=useState("")
  const [errorConfirmPassword,setErrorConfirmPassword]=useState("")

  const [userColor,setUserColor]=useState("")
  const [emailColor,setEmailColor]=useState("")
  const [passwordColor,setPasswordColor]=useState("")
  const [confirmPasswordColor,setConfirmPasswordColor]=useState("")

  const validate=(e)=>{
   e.preventDefault()

    if(username.length>8){
      setErrorUserName("");
      setUserColor("green");
    }else{
        setErrorUserName("Please enter user name")
        setUserColor("red");
    }
  
    if(email.includes('@gmail')){
        setErrorEmail("");
        setEmailColor("green");
    }else{
        setErrorEmail("Email should have @gmail");
        setEmailColor("red");
    }
    if(password.length>8){
        setErrorPassword("");
        setPasswordColor("green");
    }else{
        setErrorPassword("Please enter Password");
        setPasswordColor("red");
    }
    if(password!="" && password==confirmPassword){
        setErrorConfirmPassword("");
        setConfirmPasswordColor("green");
    }else{
        setErrorConfirmPassword("Password didn't matched");
        setConfirmPasswordColor("red");
    }
    alert(username);
   
  }
    
  return (
    <div>
        <div className="card">
        <div className="card-image"></div>
        <form>
            <input type="text" placeholder='Enter Name' value={username} style={{borderColor: userColor}}
            onChange={(e)=>setUsername(e.target.value)}/>
            <p className='error'>{errorUserName}</p>

            <input type="text" placeholder='Email' value={email} style={{borderColor:emailColor}}
            onChange={(e=>setEmail(e.target.value))} />
            <p className='error'>{errorEmail}</p>

            <input type="password" placeholder='Password' value={password} style={{borderColor:passwordColor}}
            onChange={(e=>setPassword(e.target.value))} />
            <p className='error'>{errorPassword}</p>

            <input type="confirm password" placeholder='Confirm password' value={confirmPassword} style={{borderColor:confirmPasswordColor}}
            onChange={(e=>setConfirmPassword(e.target.value))} />
            <p className='error'>{errorConfirmPassword}</p>

            <button className='submit-btn' onClick={validate} >Submit</button>
           
        </form>
    </div>
    </div>
  )
}

export default Validate;