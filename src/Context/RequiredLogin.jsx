import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { userContext } from "./AuthContext"

export default function RequiredLogin({children}){
    const location=useLocation()
    const loginUser=useContext(userContext)
   if(!loginUser.user.firstName){
   return <Navigate to='/login' state={{previousPath:location.pathname}}/>
   }
   else{
    return children;
   }

}