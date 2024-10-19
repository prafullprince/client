import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import BlogCard from '../components/common/BlogCard';
import { searchBlog } from '../service/apiCall/courseApiCall';


function BlogCategory() {

    // hooks
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('v');

    // blogs
    const [blogs,setBlogs] = useState([]);

    // apiCall
    useEffect(()=>{
        if(searchQuery){
            async function search(){
                const response = await searchBlog(searchQuery);
                setBlogs(response);
            }
            search();
        }
        else{
            setBlogs([]);
        }
    },[searchQuery]);



  return (
    <div className='text-white'>
        <div className='w-[90%] lg:w-[80%] lg:mx-auto mx-auto flex flex-col gap-4'>
            {
                blogs !== null ? (<div className='flex flex-col gap-6 mt-6'>
                    {
                        blogs.map((blog)=>(
                        <BlogCard key={blog._id} blog={blog} styleFlex={true} />
                ))
                    }
                </div>) : (<div>No Blog Found</div>)
            }
        </div>
    </div>
  )
}

export default BlogCategory
