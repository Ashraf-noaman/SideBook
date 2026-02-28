import axios from "axios";


const baseURL = import.meta.env.VITE_BASE_URL;

export async function registerUser(body){
    let data = await axios.post(`${baseURL}/users/signup`,body,{
        headers:{
            "Content-Type":"application/json"
        }
    })
    return data ;
}

export async function loginUser(body){
    let data = await axios.post(`${baseURL}/users/signin`,body,{
        headers:{
            "Content-Type":"application/json"
        }
    })
    return data ;
}


export async function ChangePass(body){
    const token = localStorage.getItem("userToken");
    let data = await axios.patch(`${baseURL}/users/change-password`,body,{
        headers:{
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`,
        }
    })
    return data ;
}







