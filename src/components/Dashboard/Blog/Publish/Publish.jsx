import React, { useState } from 'react'
import { BLOG_STATUS } from '../../../../helper/constant';
import Tab from '../../../auth/Tab';
import { publishBlog } from '../../../../service/apiCall/courseApiCall';
import { useSelector , useDispatch } from "react-redux";


function Publish() {

  // from store
  const { token } = useSelector((state)=>state.auth);
  const { blog } = useSelector((state)=>state.blogs);

  const dispatch = useDispatch();

  // tabData
  const tabData = [
    {
      id:1,
      type:BLOG_STATUS.DRAFT,
      tabName:"Draft"
    },
    {
      id:2,
      type:BLOG_STATUS.PUBLISHED,
      tabName:"Published"
    }
  ]

  // status
  const [status,setStatus] = useState(BLOG_STATUS.DRAFT);

  // publishHandler
  async function publishHandler(){
    await publishBlog(blog._id,status,token,dispatch);
  }

  return (
    <div className='text-white'>
      <div className='m-6 border border-[#2C333F] bg-[#0b0e14] rounded-md p-6 flex flex-col gap-6'>
        {/* tab */}
        <div className='flex flex-col gap-3 items-start'>
          <p className='text-2xl font-semibold'>What do you want ?</p>
          <p>Post blog instantly or later, draft will save information for 10 days.</p>
          <Tab field={status} setField={setStatus} tabData={tabData} />
          <div className=''>
            <button onClick={publishHandler} className='px-2 py-1 bg-yellow-50 text-richblack-900 text-lg font-medium rounded-lg'>
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publish;
