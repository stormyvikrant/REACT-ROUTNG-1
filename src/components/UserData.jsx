import { useParams } from "react-router-dom"

export const UserData = ()=>{
    const { id }=  useParams();
    return<div>User Id: {id}</div>
}