import React, { useContext, useState } from 'react'
import {Alert, Input} from "@heroui/react";
import {DatePicker} from "@heroui/react";
import {Select, SelectItem} from "@heroui/react";
import {Button} from "@heroui/react";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../../../Lib/validationSchemas/authSchema';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { loginUser } from '../../../../services/authServices';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../context/AuthContext';






export default function Login() {
 
  const [showPassword,setShowPassword] = useState(false)
  const navigate = useNavigate();
  let {setToken} = useContext(AuthContext)


  let {register,handleSubmit,formState:{errors,isSubmitting}} = useForm({
    mode:"onChange",
    resolver:zodResolver(loginSchema),
    defaultValues:{
      email:"",
      password:""
    }

  });
  
  async function submit(data){
    try {
    let response = await loginUser(data);
    console.log(response);
    // save in local storage
    localStorage.setItem("userToken",response.data.data.token)
    setToken(response.data.data.token)
    toast.success(response.data.message)
    navigate("/");
    } catch (error) {
      let errorMessage = error.message || error.response?.data?.message || error.response?.data?.error ;
      console.log(errorMessage);
      toast.error(errorMessage)
    }
    
  }
  return (
    <>
      <form className='w-3xl mx-auto' onSubmit={handleSubmit(submit)}>
        <h2 className='text-3xl font-bold my-2'>Welcome to Our Social Media</h2>
        <h2 className='text-3xl font-bold my-2'>Login Form</h2>
        <p className='text-gray-500 text-lg font-semibold my-3'>Please Fill In This Form To Login</p>

        <div className='form-body'>
            <Input isInvalid={errors.email} errorMessage ={errors.email?.message} {...register("email")} label="Email" type="email" variant='bordered' className='pb-4'/>
            <Input isInvalid={errors.password} errorMessage ={errors.password?.message} {...register("password")} label="Password" type={showPassword ? "text" : "password"} variant='bordered' className='pb-4'
            endContent = {showPassword ? <FaEyeSlash className='text-3xl cursor-pointer' onClick={()=>setShowPassword(!showPassword)}/>: <FaEye className='text-3xl cursor-pointer' onClick={()=>setShowPassword(!showPassword)} />}
            />
            <Button isLoading={isSubmitting} type="submit" color="primary" className='w-full'>Login</Button>
        </div>
        <p className='text-center tex-lg font-bold mt-2'>Already Have not An Account
           <Link className="text-blue-500" to="/register"> Register</Link>
        </p>

      </form>
    </>
  )
}
