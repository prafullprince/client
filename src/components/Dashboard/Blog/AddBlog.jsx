import React from 'react'
import { FaLessThan } from 'react-icons/fa'
import RenderStep from './RenderStep'
import { useDispatch, useSelector } from 'react-redux'
import BlogInformation from './BlogInfo/BlogInformation';
import BlogBuilder from './BlogBuilder/BlogBuilder';
import Publish from './Publish/Publish';
import { Link } from 'react-router-dom';
import { setStep } from '../../../slice/blogSlice';
import { MdAdd } from 'react-icons/md';

function AddBlog() {

  // fetch data from store
  const { step } = useSelector((state)=>state.blog);
  localStorage.setItem("step",JSON.stringify(2));

  // hook
  const dispatch = useDispatch();

  // render data
  const steps = [
    {
      id:1,
      title:"Course Information"
    },
    {
      id:2,
      title:"Course Builder"
    },
    {
      id:3,
      title:"Publish Blog"
    }
  ]

  return (
    <div className='text-white'>
      {/* layout */}
      <div className='flex flex-col gap-6 md:w-[70%]'>
        {/* render */}
        <header className='text-[#838894] text-sm flex gap-4 items-center cursor-pointer'>
          <Link to={"/dashboard/blogger"} className='flex gap-2 items-center'>
            <FaLessThan />
            <p>Back to Dashboard</p>
          </Link>
          <button onClick={()=>{dispatch(setStep(1))}} className='flex gap-1 items-center text-yellow-50'>
            <MdAdd />
            <p>Create New Blog</p>
          </button>
        </header>
        {/* renderSteps */}
        <nav className='relative flex justify-between w-full mx-auto'>
          {
            steps.map((ste,index)=>(
              <RenderStep ste={ste} key={index} />
            ))
          }
        </nav>
        {/* renderedComponent */}
        { step === 1 && <BlogInformation /> }
        { step === 2 && <BlogBuilder /> }
        { step === 3 && <Publish /> }
      </div>
    </div>
  )
}

export default AddBlog
