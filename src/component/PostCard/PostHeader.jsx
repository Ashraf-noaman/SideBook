import React from 'react'
import { getAvatar, getCurrentTime } from '../../Lib/HelperFunctions/Fu'
import { HiDotsHorizontal } from 'react-icons/hi'


export default function PostHeader({photo,name,createdAt}) {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2">
            <div className="flex space-x-2 items-center">
              <div className="relative">
                <img src={getAvatar(photo)} alt="Profile picture" className="w-10 h-10 rounded-full" />
                <span className="bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2" />
              </div>
              <div>
                <div className="font-semibold">
                   {name || "unKnown" } 
                </div>
                <span className="text-sm text-gray-500">{getCurrentTime(createdAt)}</span>
              </div>
            </div>
            <div className="w-8 h-8 grid place-items-center text-xl text-gray-500 hover:bg-gray-200 dark:text-dark-txt dark:hover:bg-dark-third rounded-full cursor-pointer">
              <HiDotsHorizontal />
            </div>
          </div>
    </>
  )
}
