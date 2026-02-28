import React from 'react'
import r9 from "../../assets/navbar/r9.png"
import friends from "../../assets/newfeed/friends.png"
import page from "../../assets/newfeed/page.png"
import memory from "../../assets/newfeed/memory.png"
import group from "../../assets/newfeed/group.png"
import { FaChevronDown } from 'react-icons/fa';
export default function SideBare() {
  return (
   
      <div className="w-1/5 pt-16 h-full hidden xl:flex flex-col fixed top-0 left-0 bg-gray-100">
            <ul className="p-4">
              <li>
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                  <img src={r9} alt="Profile picture" className="w-10 h-10 rounded-full" />
                  <span className="font-semibold">Ashraf Noaman</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                  <img src={friends}  alt="Profile picture" className="w-10 h-10 rounded-full" />
                  <span className="font-semibold">Friends</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                  <img src={page} alt="Profile picture" className="w-10 h-10 rounded-full" />
                  <span className="font-semibold">Pages</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                  <img src={memory} alt="Profile picture" className="w-10 h-10 rounded-full" />
                  <span className="font-semibold">Memories</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                  <img src={group} alt="Profile picture" className="w-10 h-10 rounded-full" />
                  <span className="font-semibold">Groups</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-lg transition-all dark:text-dark-txt dark:hover:bg-dark-third">
                  <span className="w-10 h-10 rounded-full grid place-items-center bg-gray-300 dark:bg-dark-second">
                    <FaChevronDown />
      
                  </span>
                  <span className="font-semibold">See more</span>
                </a>
              </li>
              <li className="border-b border-gray-200 dark:border-dark-third mt-6" />
            </ul>
          </div>
   
  )
}
