import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function AUthProtectedRoutes({children}) {

    //const userToken = localStorage.getItem("userToken");
          let {token} = useContext(AuthContext)
    
    const navigate = useNavigate();

    useEffect(()=>{
        if(token){
            navigate("/")
        }
    },[navigate, token])
    return children; 
 
}