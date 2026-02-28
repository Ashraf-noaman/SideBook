import React, { useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Input,
  Badge,
  Skeleton,
} from "@heroui/react";
import logo from "../../assets/navbar/slogo.jpg";
import { RiMessage2Fill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from './../../context/ProfileContext';


export default function NavbarCom() {
  const navigate = useNavigate();
  let {setToken} = useContext(AuthContext)
  let {profileData} = useContext(ProfileContext)
  
  function handelLogout(){
    localStorage.removeItem("userToken");
    setToken(null)
    
  }
  return (
    <>
      <Navbar maxWidth="xl2" className="pt-2 ">
        <NavbarBrand onClick={() => navigate("/")} className="cursor-pointer">
          <img src={logo} alt="logo" width={40} />
          <p className="font-bold pl-2 text-blue-500">Sidebook</p>
        </NavbarBrand>
        <NavbarBrand>
          <Input className="h-1 justify-center " fullWidth ={true} radius="full" label="Search" />
        </NavbarBrand>
        <NavbarContent as="div" justify="end">
          <Badge color="default" content="5" >
          <div className="flex justify-center items-center bg-blue-500 w-10 h-10 rounded-full cursor-pointer">
            <span><RiMessage2Fill className="text-2xl text-white"/></span> 
          </div>
          </Badge>
          <Badge color="default" content="5" >
          <div className="flex justify-center items-center bg-blue-500 w-10 h-10 rounded-full cursor-pointer">
            <span><FaBell className="text-2xl text-white"/></span> 
          </div>
          </Badge>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              {profileData?.photo ?<Avatar
                isBordered
                as="button"
                className="transition-transform cursor-pointer"
                color="secondary"
                name={profileData?.name}
                size="sm"
                src={profileData?.photo}
              /> : <Skeleton className="flex rounded-full w-12 h-12" />}
              
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{profileData?.email}</p>
              </DropdownItem>
              <DropdownItem onClick={() => navigate("/profile")}  key="settings">My Profile</DropdownItem>
              <DropdownItem onClick={() => navigate("/changePassword")}  key="settings">Change Password</DropdownItem>
              <DropdownItem key="logout" color="danger" onClick={()=>handelLogout()}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
    </>
  );
}
