import { Card, Input, Skeleton, useDisclosure } from '@heroui/react'
import React, { useContext } from 'react'
import {  FaRegImages, FaRegSmile } from 'react-icons/fa';
import { BiSolidVideoPlus } from "react-icons/bi";
import FormModal from './FormModal';
import { ProfileContext } from '../../context/ProfileContext';

export default function CreatePost() {
      const {isOpen, onOpen, onOpenChange} = useDisclosure();
        let {profileData} = useContext(ProfileContext)
      

  return (
    <>
    <div className="px-4 mt-4 shadow rounded-lg bg-white dark:bg-dark-second">
        <div className="p-2 border-b border-gray-300 dark:border-dark-third flex space-x-4">
          {profileData?.photo ? <img src={profileData?.photo} alt="Profile picture" className="w-11 h-10 rounded-full" /> :<Skeleton className="flex rounded-full w-11 h-10" />}
              <Input onClick={onOpen} isReadOnly type="text" placeholder="What On Your Mind ?" className='mb-2 cursor-pointer ' />
        </div>
        <div className="p-2 flex">
          <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-red-500">
            <BiSolidVideoPlus />
            <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Live video</span>
          </div>
          <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-green-500">
            <FaRegImages />
            <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Photo/video</span>
          </div>
          <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-pointer text-yellow-500">
            <FaRegSmile />
            <span className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-dark-txt">Feeling/Activity</span>
          </div>
        </div>
        </div> 
      <FormModal  isOpen={isOpen} onOpenChange={onOpenChange}/>
    </>
  )
}
