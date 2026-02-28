import React from 'react'
import { Link } from 'react-router-dom'

export default function PostBody({image,body,id,handelPostWithoutImage}) {

  return (
    <>
      <div className="text-justify">
                  {image && (
                    <div className='px-4'>
                      <p className='text-gray-900 text-[15px] whitespace-pre-line'>{body}</p>
                    </div>
                  )}
                </div>
                {/* END POST CONTENT */}
                {/* POST IMAGE */}
                <div className="py-2 overflow-hidden">
                  <Link to={`/post/${id}`}>
                      {image ? <img src={image} alt="Post image" className='w-full max-h-[500px] object-cover overflow-hidden'/> : handelPostWithoutImage(image , body)}
                  </Link>
                </div>
                
                
    </>
  )
}
