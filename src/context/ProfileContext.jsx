import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
const baseURL = import.meta.env.VITE_BASE_URL;


export const ProfileContext =  createContext();
const token = localStorage.getItem("userToken");


export default function profileContextProvider({children}) {
  const [profileData,setProfileData] = useState(null);

     async function getUserProfile(){

    let data = await axios.get(`${baseURL}/users/profile-data`,{
        headers:{
            "Authorization" : `Bearer ${token}`
        }
    })
    setProfileData(data.data.data.user)
    
}
useEffect(()=>{
  if(token){
    getUserProfile()
  }
},[token])

  return <ProfileContext.Provider value={{token,profileData}}>
  {children}  
  </ProfileContext.Provider>
}

