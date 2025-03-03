import { useState } from "react";

interface UserProfileState {
  name: string;
  age: number;
  email: string;
}

const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfileState>({
    name: "",
    age: 0,
    email: "",
  });

  const updateName=(name: string)=> {
    setProfile((prevProfile)=>({...prevProfile,name})); 
  }
  const updateAge =(age: string)=>{
    setProfile((prevProfile)=>({...prevProfile, age: +age})); 
  }

  const updateEmail=(email:string)=>{
    setProfile((prevProfile)=>({...prevProfile,email})); 
  }

  return (
    <div>
      <h2>user information</h2>
      <input
        type="text"
        placeholder="name"
        value={profile.name}
        onChange={(e) => updateName(e.target.value)}
      />
       <input
        type="number"
        placeholder="age"
        value={profile.age>0 ? profile.name :  ''}
        onChange={(e) => updateAge(e.target.value)}
      />
       <input
        type="email"
        placeholder="email"
        value={profile.email}
        onChange={(e) => updateEmail(e.target.value)}
      />
       <h3>Profile summary</h3>
       <p>Name:{profile.name}</p>
       <p>Age:{profile.age}</p>
       <p>Email:{profile.email}</p>
    </div>
  );
};

export default UserProfile;
