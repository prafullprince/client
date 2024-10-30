import React, { useEffect, useState } from 'react'
import { fetchAllBlogs } from '../service/apiCall/courseApiCall';
import { OverlayBlogCard } from '../components/common/OverlayBlogCard';
import Spinner from '../components/extraUi/Spinner';
import RatingAndReviewCards from '../components/common/RatingAndReviewCards';

function Homepage() {

  const [blogs,setBlogs] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    async function fetchAllBlog(){
      setLoading(true);
      const response = await fetchAllBlogs();
      setBlogs(response);
      setLoading(false);
    }
    fetchAllBlog();
  },[]);

  if(loading) return <Spinner />

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
      <RatingAndReviewCards />
    </div>
  )
}

export default Homepage
{/* <BlogCard blog={blog} key={blog._id} styleFlex={false} /> */}
