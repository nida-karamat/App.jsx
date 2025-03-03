//import UserProfile from "./UserProfile";
import Todo from "./Todo";
import { useState } from "react";
 const UseStateType = () => {
    const [count, setCount]=useState<number>(0);
  return (
    <div>
        <h2>Count App</h2>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>

       <Todo/>
      {/*<UserProfile/>*/}
    </div>
  )
}
export default UseStateType;
