import React, { useContext, useState } from 'react'
import FriendReq from '../FriendReq/FriendReq'
import SideBare from '../Sidebar/SideBare'
import { Button, Input } from '@heroui/react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useForm } from 'react-hook-form';
import { changePassword } from '../../Lib/validationSchemas/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangePass } from '../../services/authServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function ChangePassword() {
    const [showPassword,setShowPassword] = useState(false)
      const [showNewPassword,setShowNewPassword] = useState(false)
      const [showNewRePassword,setShowNewRePassword] = useState(false)
        const navigate = useNavigate();
    let {setToken} = useContext(AuthContext)
          

     let {register,handleSubmit,formState:{errors}} = useForm({
        mode:"onChange",
        resolver:zodResolver(changePassword),
        defaultValues:{
          password:"",
          newPassword:"",
          confirmPassword:""
        }
    
      });

function handleLogOut() {
    localStorage.removeItem("userToken")
    setToken(null)
  };
      async function submit(data) {
  try {
    let response = await ChangePass({
      password: data.password,
      newPassword: data.newPassword,
    });
    toast.success(response.message || "Password changed successfully");
    handleLogOut()
    navigate("/login")
  } catch (error) {
    let errorMessage =
      error.message ||
      error.response?.data?.message ||
      error.response?.data?.error;
    toast.error(errorMessage);
  }
}

  return (
    <>
    <div className="">
        <div className="container pt-5 ">
          <div className='grid grid-cols-4'>
            <div className='col-span-1 hidden lg:block'>
              <SideBare/>
            </div>
            <div className='col-span-4 xl:col-span-2'>
            <h2 className='text-2xl mt-4 mb-4'>Change Password</h2>
           <Input isInvalid={errors.password} errorMessage ={errors.password?.message} {...register("password")} label="Old Password" type={showPassword ? "text" : "password"} variant='bordered' className='pb-4'
                       endContent = {showPassword ? <FaEyeSlash className='text-3xl cursor-pointer' onClick={()=>setShowPassword(!showPassword)}/>: <FaEye className='text-3xl cursor-pointer' onClick={()=>setShowPassword(!showPassword)} />}
            />
            <Input isInvalid={errors.newPassword} errorMessage ={errors.newPassword?.message} {...register("newPassword")} label="New-Password" type={showNewPassword ? "text" : "password"} variant='bordered' className='pb-4'
            endContent = {showNewPassword ? <FaEyeSlash className='text-3xl cursor-pointer' onClick={()=>setShowNewPassword(!showNewPassword)}/>: <FaEye className='text-3xl cursor-pointer' onClick={()=>setShowNewPassword(!showNewPassword)} />}
                />
            <Input isInvalid={errors.confirmPassword} errorMessage ={errors.confirmPassword?.message} {...register("confirmPassword")} label="Confirm New-Password" type={showNewRePassword ? "text" : "password"} variant='bordered' className='pb-4'
            endContent = {showNewRePassword ? <FaEyeSlash className='text-3xl cursor-pointer' onClick={()=>setShowNewRePassword(!showNewRePassword)}/>: <FaEye className='text-3xl cursor-pointer' onClick={()=>setShowNewRePassword(!showNewRePassword)} />}
                /> 
            <Button onClick={handleSubmit(submit)} className='bg-blue-500 text-white'>Change Password</Button>

            </div>
            <div className='col-span-1 hidden lg:block'>
              <FriendReq/>
            </div>
          </div>
        </div>
        
     
      </div>
      
    </>
  )
}
