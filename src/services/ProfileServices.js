import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;


export async function getMyPosts(userId){
    const token = localStorage.getItem("userToken");
    let data = await axios.get(`${baseURL}/users/${userId}/posts`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
    return data ;
}