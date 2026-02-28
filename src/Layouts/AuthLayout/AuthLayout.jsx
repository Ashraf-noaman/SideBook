import React from "react";
import AuthImage from "../../assets/Auth/1.png";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <div className="flex min-h-screen w-full mx-auto  flex-col md:flex-row">
        <div className="w-full md:w-1/3 shrink-0 h-48 md:h-screen">
            <img
              src={AuthImage}
              alt="register"
              className="w-full h-full object-cover object-center"
            />
        </div>
         <div className="w-full md:w-2/3 flex-1 flex items-center justify-center overflow-auto px-4 sm:px-6 lg:px-8 py-6 md:py-0">
            <Outlet />
          </div>
      </div>
    </>
  );
}


