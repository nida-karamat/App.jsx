import {type UserInfo} from "./UserInfo";

type AdminInfo= UserInfo &{admin:string}

 function AdminInfo({name, email, age, location, admin}: AdminInfo) {
  return (
    <div>
      <h1>Admin Information</h1>
      <ul>
        <li>{name}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{JSON.stringify(location)}</li>
        <li>{admin}</li>
      </ul>
    </div>
  )
}

export default AdminInfo;















/*import {AdminInfoList} from "../types";
    
  type AdminInfoProps={
    AdminInfo:AdminInfoList;
  }
 const AdminInfo:React.FC<AdminInfoProps> = ({admin}) => {
  return (
    <div>
        <h2>Admin Information</h2>
        <p>ID:{admin.id}</p>
        <p>Name:{admin.name}</p>
        <p>Email:{admin.email}</p>
        <p>Role:{admin.role}</p>
        <p>Last Login:{admin.lastlogin}</p>
    </div>
  )
}
export default AdminInfo;*/