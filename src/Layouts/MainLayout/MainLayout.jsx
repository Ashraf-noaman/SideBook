import React from "react";
import NavbarCom from "../../component/Navbar/NavbarCom";
import Footercom from "../../component/Footer/Footercom";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <NavbarCom />

      <Outlet />

      <Footercom />
    </>
  );
}
