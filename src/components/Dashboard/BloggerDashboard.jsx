import React, { useEffect, useState } from 'react'
import { BLOG_STATUS } from '../../helper/constant'
import Tab from '../auth/Tab'
import HighlightText from '../common/HighlightText';
import { getBloggerPosts } from '../../service/apiCall/courseApiCall';
import { useSelector } from 'react-redux';
import { OverlayBlogCard } from '../common/OverlayBlogCard';
import Spinner from '../extraUi/Spinner';


const tabData = [
  {
    id:1,
    tabName:"Status",
    type:BLOG_STATUS.DRAFT
  },
  {
    id:2,
    tabName:"Published",
    type:BLOG_STATUS.PUBLISHED
  }
]


function BloggerDashboard() {

  const [status,setStatus] = useState(BLOG_STATUS.PUBLISHED);
  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
  console.log(status);

  const { token } = useSelector((state)=>state.auth);

  useEffect(()=>{
    async function fetchInstructorPosts(){
      setLoading(true);
      const response = await getBloggerPosts(status,token);
      setPosts(response);
      console.log(response);
      setLoading(false);
    }
    fetchInstructorPosts();
  },[status]);

  // if(loading) return <Spinner />

  return (
    <div className='text-white'>
        {/* content */}
        <div className='flex flex-col gap-4'>
          <div className=' text-xl'>
            <HighlightText text={"Your Posts"} />
          </div>
          {/* tab */}
          <div className=' w-11/12 mx-auto'>
            <Tab field={status} setField={setStatus} tabData={tabData} />
          </div>
          {/* all post */}
          <div className=' w-[90%] mx-auto overflow-x-hidden'>
            {
              loading ? (<Spinner />) : 
              (
                <div>
                {
              posts?.length === 0 ? (<div>No post found</div>) : 
              (
                <div className='grid lg:grid-cols-3 lg:gap-4 md:grid-cols-2 md:gap-3 gap-4'>
                  {
                    posts.map((post)=>(
                      <OverlayBlogCard blog={post} key={post._id} />
                    ))
                  }
                </div>
              )
            }
                </div>
              )
            }
          </div>
        </div>
    </div>
  )
}

export default BloggerDashboard
