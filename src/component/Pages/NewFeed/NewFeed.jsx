import React from 'react'
import SideBare from '../../Sidebar/SideBare';
import FriendReq from '../../FriendReq/FriendReq';
import story from "../../../assets/newfeed/post-1.jpg"
import story2 from "../../../assets/newfeed/post-2.jpg"
import story3 from "../../../assets/newfeed/post-3.jpg"
import tatu from "../../../assets/newfeed/tuat.jpg";
import tatu2 from "../../../assets/newfeed/avt-3.jpg";
import r9 from "../../../assets/navbar/r9.png"
import { getAllPosts } from '../../../services/postServices';
import { FaArrowRight,FaPlus } from 'react-icons/fa';
import PostSkeleton from '../../Skeletons/PostSkeleton';
import Post from '../../Post/Post';
import CreatePost from '../../CreatePost/CreatePost';
import {useQuery} from '@tanstack/react-query'

export default function NewFeed() {

  // const [posts, setPosts] = useState([])
  // async function fetchAllProducts() {
  //       const response = await getAllPosts()
  //       setPosts(response.data.data.posts)
  // }

      const {data:posts,isLoading} = useQuery(
        {queryKey:["getPosts"],
        queryFn:getAllPosts,
        retry:1,
        // retryOnMount:false,
        // retryDelay:1000,
        // refetchInterval:3000,
        // refetchOnMount:false,
        // refetchOnWindowFocus:false,
        // refetchIntervalInBackground:false,
        // staleTime:2000,
        select:(data)=>data.data.data.posts,

      })
console.log(posts);
      

  // useEffect(()=>{
  //   fetchAllProducts()
  // },[]);
  return (
  <div className="bg-gray-200 ">
    <div className="container pt-5 ">
      <div className='grid grid-cols-4'>
        <div className='col-span-1 hidden lg:block'>
          <SideBare/>
        </div>
        <div className='col-span-4 xl:col-span-2'>
          {isLoading ? [...Array(10)].map((_,index)=><PostSkeleton key={index}/>)  : <>
           <div className="relative flex space-x-2 pt-4">
                  <div className="w-1/4 sm:w-1/6 h-44 rounded-xl shadow overflow-hidden flex flex-col group cursor-pointer">
                    <div className="h-3/5 overflow-hidden">
                      <img src={r9} alt="picture" className="group-hover:transform group-hover:scale-110 transition-all duration-700" />
                    </div>
                    <div className="flex-1 relative flex items-end justify-center pb-2 text-center leading-none dark:bg-dark-second dark:text-dark-txt">
                      <span className="font-semibold">
                        Create a <br /> Story
                      </span>
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white grid place-items-center text-2xl border-4 border-white dark:border-dark-second absolute -top-5 left-1/2 transform -translate-x-1/2">
                        <FaPlus />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                    <div className="relative h-full group cursor-pointer">
                      <img src={story} alt="Story images" className="group-hover:transform group-hover:scale-110 transition-all duration-700 object-cover h-full w-full" />
                      <div className="w-full h-full  absolute top-0 left-0 bg-opacity-10" />
                      <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                        Your story
                      </span>
                      <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                        <img src={r9} alt="Profile picture" />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                    <div className="relative h-full group cursor-pointer">
                      <img src={story2} alt="Story images" className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full object-cover" />
                      <div className="w-full h-full  absolute top-0 left-0 bg-opacity-10" />
                      <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                        Lorem
                      </span>
                      <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                        <img src={tatu2} alt="Profile picture" />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                    <div className="relative h-full group cursor-pointer">
                      <img src={story3} alt="Story images" className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full object-cover" />
                      <div className="w-full h-full  absolute top-0 left-0 bg-opacity-10" />
                      <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                        John Doe
                      </span>
                      <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                        <img src={tatu} alt="Profile picture" />
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:inline-block w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                    <div className="relative h-full group cursor-pointer">
                      <img src={story} alt="Story images" className="object-cover group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full" />
                      <div className="w-full h-full  absolute top-0 left-0 bg-opacity-10" />
                      <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                        John Doe
                      </span>
                      <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                        <img src={tatu2} alt="Profile picture" />
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:inline-block w-1/4 sm:w-1/6 h-44 rounded-xl overflow-hidden">
                    <div className="relative h-full group cursor-pointer">
                      <img src={story2} alt="Story images" className="object-cover group-hover:transform group-hover:scale-110 transition-all duration-700 h-full w-full" />
                      <div className="w-full h-full absolute top-0 left-0 bg-opacity-10" />
                      <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
                        John Doe
                      </span>
                      <div className="w-10 h-10 rounded-full overflow-hidden absolute top-2 left-2 border-4 border-blue-500">
                        <img src={tatu} alt="Profile picture" />
                      </div>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full hidden lg:grid place-items-center text-2xl bg-white absolute -right-6 top-1/2 transform -translate-y-1/2 border border-gray-200 cursor-pointer hover:bg-gray-100 shadow text-gray-500 dark:bg-dark-third dark:border-dark-third dark:text-dark-txt">
                    <FaArrowRight />
                  </div>
            </div>
            <CreatePost />   
          {posts && posts.map((post)=> <Post key={post.id} post={post}/>)}
          </>}
        </div>
        <div className='col-span-1 hidden lg:block'>
          <FriendReq/>
        </div>
      </div>
    </div>
    
 
  </div>
  )
}
