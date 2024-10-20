import React, { useEffect, useState } from 'react'
import { Spotlight } from '../components/ui/Spotlight'
import { fetchAllBlogs } from '../service/apiCall/courseApiCall';
import BlogCard from '../components/common/BlogCard';
import { OverlayBlogCard } from '../components/common/OverlayBlogCard';

function Homepage() {

  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    async function fetchAllBlog(){
      const response = await fetchAllBlogs();
      setBlogs(response);
    }
    fetchAllBlog();
  },[]);

  return (
    <div className='text-white relative min-h-screen'>
      <div className='w-[90%] mx-auto md:w-[80%]'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 my-8'>
          {
            blogs.map((blog)=>(
              <OverlayBlogCard blog={blog} key={blog._id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Homepage
{/* <BlogCard blog={blog} key={blog._id} styleFlex={false} /> */}
