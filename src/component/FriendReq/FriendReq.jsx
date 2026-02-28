import React from 'react'
import dola from "../../assets/newfeed/dd.jpg"
import tatu from "../../assets/newfeed/tuat.jpg"
import tatu2 from "../../assets/newfeed/avt-3.jpg"

export default function FriendReq() {
  return (
    
        <div className="w-1/5 pt-16 h-full hidden xl:block px-4 fixed top-0 right-0 bg-gray-100">
      <div className="h-full">
        <div className="flex justify-between items-center px-4 pt-4">
          <span className="font-semibold text-gray-500 text-lg dark:text-dark-txt">Firend requests</span>
          <span className="text-blue-500 cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-third p-2 rounded-md">See All</span>
        </div>
        <div className="p-2">
          <a href="#" className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third rounded-lg transition-all">
            <img src={tatu} alt="Profile picture" className="w-16 h-16 rounded-full" />
            <div className="flex-1 h-full">
              <div className="dark:text-dark-txt">
                <span className="font-semibold">Baraketo</span>
                <span className="float-right">6d</span>
              </div>
              <div className="flex space-x-2 mt-2">
                <div className="w-1/2 bg-blue-500 cursor-pointer py-1 text-center font-semibold text-white rounded-lg">
                  Confirm
                </div>
                <div className="w-1/2 bg-gray-300 cursor-pointer py-1 text-center font-semibold text-black rounded-lg">
                  Delete
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="border-b border-gray-200 dark:border-dark-third mt-6" />
        {/* CONTACTS */}
        <div className="flex justify-between items-center px-4 pt-4 text-gray-500 dark:text-dark-txt">
          <span className="font-semibold text-lg">Contacts</span>
          <div className="flex space-x-1">
            <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
              <i className="bx bx-search-alt-2" />
            </div>
            <div className="w-8 h-8 grid place-items-center text-xl hover:bg-gray-200 dark:hover:bg-dark-third rounded-full cursor-pointer">
              <i className="bx bx-dots-horizontal-rounded" />
            </div>
          </div>
        </div>
        <ul className="p-2">
          <li>
            <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
              <div className="relative">
                <img src={tatu} alt="Friends profile picture" className="rounded-full w-[30px] h-[30px] object-cover" />
                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
              </div>
              <div>
                <span className="font-semibold">hamoda ibrahim</span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
              <div className="relative">
                <img src={tatu2} alt="Friends profile picture" className="rounded-full w-[30px] h-[30px] object-cover" />
                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
              </div>
              <div>
                <span className="font-semibold">tarek elsayed</span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-4 p-2 hover:bg-gray-200 dark:hover:bg-dark-third dark:text-dark-txt rounded-lg cursor-pointer">
              <div className="relative">
                <img src={dola} alt="Friends profile picture" className="rounded-full w-[30px] h-[30px] object-cover" />
                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
              </div>
              <div>
                <span className="font-semibold">adel hamdy</span>
              </div>
            </div>
          </li>      
        </ul>
        {/* END CONTACTS */}
      </div>
    </div>
    
  )
}
