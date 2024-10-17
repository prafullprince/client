import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '../../../ui/input'
import { IoMdAddCircleOutline } from "react-icons/io";
import { createSection } from '../../../../service/apiCall/courseApiCall';
import NestedView from './NestedView';
import { setStep } from '../../../../slice/blogSlice';


function BlogBuilder() {

  // from store
  const { blog } = useSelector((state)=>state.blogs);
  const { token } = useSelector((state)=>state.auth);

  // hook
  const dispatch = useDispatch();

  // state
  const [name,setName] = useState("");

  // submitHandler
  async function submitHandler(e){
    e.preventDefault();
    await createSection(name,blog._id,token,dispatch);
    setName("");
  }

  // buildHandler
  function buildHandler(){
    dispatch(setStep(3));
  }

  return (
    <div className='text-white m-6 flex flex-col gap-12'>
      <form onSubmit={submitHandler}>
        <div className='p-6 border border-[#2C333F] bg-[#161D29] rounded-md flex flex-col gap-6'>
          {/* Header */}
          <div className='text-[#F1F2FF] text-2xl font-semibold'>
            Blog Builder
          </div>
          {/* Input */}
          <div>
            <Input 
              required
              className='h-12 bg-[#2C333F] text-[#999DAA] text-lg'
              placeholder='Add a section to build your blog'
              type='text'
              name='name'
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
          </div>
          {/* button */}
          <div className='flex items-center border border-[#FFD60A] rounded-md w-fit bg-richblack-900'>
            <button type='submit' className='flex items-center gap-1 px-2 py-1 md:gap-2 md:px-6 md:py-3 text-[#FFD60A] font-medium text-lg hover:scale-95 transition-all duration-200'>
              <IoMdAddCircleOutline className='text-xl' />
              Create Section
            </button>
          </div>
        </div>
      </form>
      {/* nestedView */}
      <div className='border border-[#2C333F] bg-[#161D29] rounded-md'>
          <NestedView blog={blog} />
      </div>
      <div className='flex justify-end mr-3'>
        <button onClick={buildHandler} className='px-4 py-2 bg-yellow-50 text-richblack-900 font-semibold rounded-lg text-lg'>
          Next
        </button>
      </div>
    </div>
  )
}

export default BlogBuilder
