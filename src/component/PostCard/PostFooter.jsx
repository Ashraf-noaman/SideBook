import React, {  useState } from 'react'
import { BiSolidLike } from 'react-icons/bi'
import { FaCamera, FaComment, FaShare, FaSmile, FaSpinner } from 'react-icons/fa'
import { IoIosHappy } from 'react-icons/io'
import { getCurrentTime } from '../../Lib/HelperFunctions/Fu'
import r9 from "../../assets/navbar/r9.png"
import { createComment, getAllComment } from '../../services/commentServices'
import { IoSend } from "react-icons/io5";
import { MdScheduleSend } from "react-icons/md";
import { Button } from '@heroui/react'


export default function PostFooter({topComment,id}) {
const [comments, setComments] = useState([]);
const [commentBody, setCommentBody] = useState('');
const [showMoreComments, setShowMoreComments] = useState(2);


  const otherComments = comments?.filter((comment)=> comment._id !== topComment?._id)

  const [isLoading,setIsLoading]  = useState(false)
  const [isLoadingComment,setIsLoadingComment]  = useState(false)

  async function fetchAllComment(postId) {
    try {
      setIsLoading(true)
      const response = await getAllComment(postId)
      setComments(response.data.data.comments);
      
    } catch (error) {
      console.log(error);
      
    }finally{
      setIsLoading(false)
    }
  }

  async function handelAddComment(postId){
    try{
      setIsLoadingComment(true)
      const formData = new FormData();
      formData.append("content",commentBody)
      const response = await createComment(postId,formData)
      setCommentBody("")
      fetchAllComment(id)
      console.log(response);
    }catch(error){
      console.log(error);
      
    }finally{
      setIsLoadingComment(false)
    }
    
    
  }



  return (
    <>
      <div className="px-4 py-2">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-row-reverse items-center">
                      <span className="ml-2 text-gray-500 dark:text-dark-txt">20</span>
                      <span className="rounded-full grid place-items-center text-2xl -ml-1 text-blue-500">
                        <BiSolidLike />
                      </span>
                      <span className="rounded-full grid place-items-center text-2xl -ml-1 text-yellow-500">
                        <IoIosHappy />
                      </span>
                    </div>
                    <div className="text-gray-500 dark:text-dark-txt">
                    <span>
                      <span>
                        {comments?.length > 0 
                          ? `${comments.length} comment${comments.length > 1 ? "s" : ""}`
                          : comments ? "Comment ..." : null}
                      </span>  
                    </span>                      
                    </div>
                  </div>
                </div>
                {/* END POST REACT */}
                {/* POST ACTION */}
                <div className="py-2 px-4">
                  <div className="border border-gray-200 dark:border-dark-third border-l-0 border-r-0 py-1">
                    <div className="flex space-x-2">
                      <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                        <BiSolidLike />
                        <span className="text-sm font-semibold">Like</span>
                      </div>
                      <button onClick={()=>fetchAllComment(id)} className=" cursor-pointer w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                        {isLoading ? <FaSpinner /> : <FaComment />}
                        
                        <span className="text-sm font-semibold">Comment</span>
                      </button>
                      <div className="w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100 dark:hover:bg-dark-third text-xl py-2 rounded-lg cursor-pointer text-gray-500 dark:text-dark-txt">
                        <FaShare />
                        <span className="text-sm font-semibold">Share</span>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="py-2 px-4">
            {/* COMMENT */}
            {topComment &&  <div className="flex space-x-2">
              <img src={topComment.commentCreator.photo} alt="Profile picture" className="w-9 h-9 rounded-full" />
              <div>
                <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                  <span className="font-semibold block">{topComment.commentCreator.name}</span>
                  <span>{topComment.content}</span>
                </div>
                <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                  <span className="font-semibold cursor-pointer">Like </span>
                  <span> </span>
                  <span className="font-semibold cursor-pointer">Reply </span>
                  <span> </span>
                  {getCurrentTime(topComment.createdAt)}
                </div>
                {/* COMMENT */}
              
              </div>
            </div>}
            {otherComments && otherComments.slice(0,showMoreComments).map((comment)=> 
            <div key={comment._id} className="flex space-x-2">
              <img src={comment.commentCreator.photo} alt="Profile picture" className="w-9 h-9 rounded-full" />
              <div>
                <div className="bg-gray-100 dark:bg-dark-third p-2 rounded-2xl text-sm">
                  <span className="font-semibold block">{comment.commentCreator.name}</span>
                  <span>{comment.content}</span>
                </div>
                <div className="p-2 text-xs text-gray-500 dark:text-dark-txt">
                  <span className="font-semibold cursor-pointer">Like </span>
                  <span> </span>
                  <span className="font-semibold cursor-pointer">Reply </span>
                  <span> </span>
                  {getCurrentTime(comment.createdAt)}
                  
                </div>
                {/* COMMENT */}
              
              </div>
              
            </div>
            )}
          </div>
          {otherComments.length > showMoreComments &&
           <div className="text-center ">
              <Button onClick={()=>setShowMoreComments(showMoreComments+2)} className='mt-0 mb-3'>Show More Comment ...</Button>
          </div> }
          
          {/* END LIST COMMENT */}
          {/* COMMENT FORM */}
          <div className="py-2 px-4">
            <div className="flex space-x-2">
              <img src={r9} alt="Profile picture" className="w-9 h-9 rounded-full" />
              <div className="flex-1 flex bg-gray-100 dark:bg-dark-third rounded-full items-center justify-between px-3">
                <input value={commentBody} onChange={(e)=>setCommentBody(e.target.value)} type="text" placeholder="Write a comment..." className="outline-none bg-transparent flex-1" />
                <div className="flex space-x-0 items-center justify-center">
                  <button onClick={()=>handelAddComment(id)} disabled={!commentBody} className=" disabled:cursor-not-allowed w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl">{isLoadingComment ? <MdScheduleSend />: <IoSend />} </button>
                  <button className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"><FaSmile /></button>
                  <button className="w-7 h-7 grid place-items-center rounded-full hover:bg-gray-200 cursor-pointer text-gray-500 dark:text-dark-txt dark:hover:bg-dark-second text-xl"><FaCamera /></button>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
