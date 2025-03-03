  export type UserInfo={
    name:string;
    email:string;
    age:number;
    location:string[];
    

  }

  
   const UserInfo = ({name, email, age, location}:UserInfo) => {
    return (
      <div>
        <h1>User Information</h1>
        <ul>
          <li>{name}</li>
          <li>{email}</li>
          <li>{age}</li>
          <li>{JSON.stringify(location)}</li>
        </ul>
      </div>
    )
  }
  export default UserInfo;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*import {Info} from "../types";

  type userInfoProp={
    user:info;
  }
  const UserInfo :React.FC<userInfoProp>= ({user}) => {
  return (
    <div>
        <h2>User Information</h2 >
        <p>ID:{user.id}</p>
        <p>User:{user.name}</p>
        <p>Email:{user.email}</p>
    </div>
  )
}

export default UserInfo;*/