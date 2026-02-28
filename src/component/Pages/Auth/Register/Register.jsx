import React, { useState } from 'react'
import {Alert, Input} from "@heroui/react";
import {DatePicker} from "@heroui/react";
import {Select, SelectItem} from "@heroui/react";
import {Button} from "@heroui/react";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { regSchema } from '../../../../Lib/validationSchemas/authSchema';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { registerUser } from '../../../../services/authServices';
import { toast } from 'react-toastify';






export default function Register() {
 
  const [showPassword,setShowPassword] = useState(false)
  const [showRePassword,setShowRePassword] = useState(false)
  //const [successMessage,setSuccessMessage] = useState("")
  //const [errorMessage,setErrorMessage] = useState("")
  const navigate = useNavigate();


  let {register,handleSubmit,formState:{errors,isSubmitting}} = useForm({
    mode:"onChange",
    resolver:zodResolver(regSchema),
    defaultValues:{
      name:"",
      email:"",
      password:"",
      rePassword:"",
      dateOfBirth:"",
      gender:""
    }

  });
  
  async function submit(data){
    try {
    //setSuccessMessage("")
    //setErrorMessage("")
    let response = await registerUser(data);
    console.log(response);
    toast.success(response.data.message)
    //setSuccessMessage(response.data.message)
    navigate("/login");
    } catch (error) {
      let errorMessage = error.message || error.response?.data?.message || error.response?.data?.error ;
      console.log(errorMessage);
      toast.error(errorMessage)
      //setErrorMessage(errorMessage)

    }
    
  }
  return (
    <>
      <form className='w-3xl mx-auto' onSubmit={handleSubmit(submit)}>
       { /* {successMessage &&   <Alert color="success" title={successMessage} />}*/}
        {/*{errorMessage &&   <Alert color="danger" title={errorMessage} />} */}
        <h2 className='text-3xl font-bold my-2'>Welcome to Our Social Media</h2>
        <h2 className='text-3xl font-bold my-2'>Registration Form</h2>
        <p className='text-gray-500 text-lg font-semibold my-3'>Please Fill In This Form To Create An Account</p>

        <div className='form-body'>
            <Input isInvalid={errors.name} errorMessage ={errors.name?.message} {...register("name")} label="Name" type="text" variant='bordered' className='pb-4'/>
            <Input isInvalid={errors.email} errorMessage ={errors.email?.message} {...register("email")} label="Email" type="email" variant='bordered' className='pb-4'/>
            <Input isInvalid={errors.password} errorMessage ={errors.password?.message} {...register("password")} label="Password" type={showPassword ? "text" : "password"} variant='bordered' className='pb-4'
            endContent = {showPassword ? <FaEyeSlash className='text-3xl cursor-pointer' onClick={()=>setShowPassword(!showPassword)}/>: <FaEye className='text-3xl cursor-pointer' onClick={()=>setShowPassword(!showPassword)} />}
            />
            <Input isInvalid={errors.rePassword} errorMessage ={errors.rePassword?.message} {...register("rePassword")} label="Re-Password" type={showRePassword ? "text" : "password"} variant='bordered' className='pb-4'
            endContent = {showRePassword ? <FaEyeSlash className='text-3xl cursor-pointer' onClick={()=>setShowRePassword(!showRePassword)}/>: <FaEye className='text-3xl cursor-pointer' onClick={()=>setShowRePassword(!showRePassword)} />}
            />
            <div className="flex items-center justify-between gap-2">
              <Input isInvalid={errors.dateOfBirth} errorMessage ={errors.dateOfBirth?.message}  {...register("dateOfBirth")} type='date' label="Birth date" variant='bordered' className='pb-4'/>
              <Select isInvalid={errors.gender} errorMessage ={errors.gender?.message} {...register("gender")} variant='bordered' className='pb-4' label="Select a Gender">
                <SelectItem key={"male"} >Male </SelectItem>
                <SelectItem key={"female"} >Female </SelectItem>
            </Select>
            </div>
            <Button isLoading={isSubmitting} type="submit" color="primary" className='w-full'>Register</Button>
        </div>
        <p className='text-center tex-lg font-bold mt-2'>Already Have An Account
           <Link className="text-blue-500" to="/login"> Login</Link>
        </p>

      </form>
    </>
  )
}
