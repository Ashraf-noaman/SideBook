import React from 'react'
import PostHeader from '../PostCard/PostHeader';
import PostBody from '../PostCard/PostBody';
import PostFooter from '../PostCard/PostFooter';
import { handelPostWithoutImage } from '../../Lib/HelperFunctions/Fu';



export default function Post({post}) {
  
  return (
      <div className="overflow-x-hidden ">
        <div className="shadow bg-white dark:bg-dark-second dark:text-dark-txt mt-4 rounded-lg">
          <PostHeader photo={post.user?.photo} name={post.user?.name} createdAt={post.createdAt}/>
          <PostBody image={post.image} body={post.body} id={post.id} handelPostWithoutImage={handelPostWithoutImage}/>
          <PostFooter topComment={post.topComment} id={post.id} />
        </div>
      </div>
  )
}
