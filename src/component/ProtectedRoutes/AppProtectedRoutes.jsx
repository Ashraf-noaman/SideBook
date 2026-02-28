import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function AppProtectedRoutes({children}) {

    //const userToken = localStorage.getItem("userToken");
      let {token} = useContext(AuthContext)
    
    const navigate = useNavigate();

    useEffect(()=>{
        if(!token){
            navigate("/login")
        }
    },[navigate, token])

    return children; 
 
}
