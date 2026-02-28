import * as z from "zod";

export const regSchema = z.object({
  name: z.string().nonempty("Name is Required").min(3,"chars not less than 3").max(25,"chars not exceed 25"),
  email: z.string().nonempty("Email is Required").email("email is not valid"),
  password:z.string().nonempty("Password is required").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    {message: "Password must be 8-14 characters and contain lowercase letters and numbers only"}),
  rePassword:z.string().nonempty("rePassword is required"),
  dateOfBirth:z.string().nonempty("date Of Birth is required").refine((date)=>{
    let currentYear = new Date().getFullYear();
    let ageYear = new Date(date).getFullYear();
    let age = currentYear - ageYear ;
    return age >= 18 ;
  },"Age not allowed less than 18 Years Old"),
  gender:z.string().nonempty("Gender is required")

}).refine((data)=>data.password === data.rePassword ,{
    path:["rePassword"],
    message:"Password Not Match"
})


export const loginSchema = z.object({
  email: z.string().nonempty("Email is Required").email("email is not valid"),
  password:z.string().nonempty("Password is required").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    {message: "Password must be 8-14 characters and contain lowercase letters and numbers only"}),
})

export const changePassword = z.object({
  password:z.string().nonempty("Old Password is required"),
  newPassword:z.string().nonempty("Password is required").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    {message: "Password must be 8-14 characters and contain lowercase letters and numbers only"}),
  confirmPassword:z.string().nonempty("confirm Password is required")
}).refine((data)=>data.newPassword === data.confirmPassword ,{
    path:["confirmPassword"],
    message:"Password Not Match"
})

