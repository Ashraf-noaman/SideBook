import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout'
import NewFeed from './component/Pages/NewFeed/NewFeed'
import PostDetails from './component/Pages/PostDetails/PostDetails'
import UserPost from './component/Pages/UserPost/UserPost'
import NotFound from './component/Pages/NotFound/NotFound'
import AuthLayout from './Layouts/AuthLayout/AuthLayout'
import Login from './component/Pages/Auth/Login/Login'
import Register from './component/Pages/Auth/Register/Register'
import AppProtectedRoutes from './component/ProtectedRoutes/AppProtectedRoutes'
import AUthProtectedRoutes from './component/ProtectedRoutes/AuthProtectedRoutes'
import Profile from './component/Profile/Profile'
import ChangePassword from './component/ChangePassword/ChangePassword'


export default function App() {
  const router = createBrowserRouter([
    {path:'/',element:<MainLayout/>,children:[
      {index:true , element :<AppProtectedRoutes> <NewFeed/> </AppProtectedRoutes> },
      {path: 'post/:id' , element : <AppProtectedRoutes> <PostDetails/> </AppProtectedRoutes> },
      {path: 'UserPost' , element :<AppProtectedRoutes><UserPost/></AppProtectedRoutes>},
      {path: 'profile' , element :<AppProtectedRoutes><Profile/></AppProtectedRoutes>},
      {path: 'changePassword' , element :<AppProtectedRoutes><ChangePassword/></AppProtectedRoutes>},
      {path: '*' , element :<NotFound/>},
    ]},
    {path :'/',element:<AuthLayout/>,children:[
      {path:'Login',element:<AUthProtectedRoutes> <Login/> </AUthProtectedRoutes> },
      {path:'Register',element:<AUthProtectedRoutes> <Register/> </AUthProtectedRoutes> },
    ]}
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
