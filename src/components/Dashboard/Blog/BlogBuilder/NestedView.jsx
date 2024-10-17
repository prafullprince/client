import React, { useState } from 'react'
import { IoMdAdd } from 'react-icons/io';
import { RiArrowDropDownLine } from "react-icons/ri";
import AddSubSecModals from './AddSubSecModals';
import { CiEdit } from "react-icons/ci";


function NestedView({blog}) {

    // state
    const [addSubSecModal,setAddSubSecModal] = useState(null);


  return (
    <div className='relative'>
        <div>
            {
                blog === null ? (<div>Blog not found</div>) : (<div>
                    {
                        blog.blogContent.map((section)=>(
                            <details key={section._id}>
                                {/* section */}
                                <summary className='border-b border-[#424854] bg-[#2C333F] px-4 py-3 cursor-pointer text-lg text-white list-none'>
                                    <div className='flex gap-1 items-center'>
                                        <RiArrowDropDownLine className='text-3xl text-richblack-25' />
                                        <p>{section.name}</p>
                                    </div>
                                </summary>
                                {/* subSection */}
                                <div className='flex flex-col items-start gap-3 bg-richblack-900'>
                                    {/* content */}
                                    {
                                        section.subSection.length === 0 ? (<div className='flex flex-col items-start gap-2 px-12 py-3'>
                                            <p>No content found</p>
                                        </div>) :
                                        (<div className='px-12 py-3 flex flex-col items-start'>
                                            {
                                                section.subSection.map((subSec)=>(
                                                    <div key={subSec._id}>
                                                        <p className=' text-richblack-100'>{subSec.body}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>)
                                    }
                                    {/* buttons */}
                                    {
                                        section.subSection.length === 0 ? (<button onClick={()=>{setAddSubSecModal({
                                        blogId:blog._id,
                                        sectionId:section._id,
                                    })}} className='text-yellow-100 flex items-center justify-start gap-1 text-base px-5 py-2'>
                                        <IoMdAdd className='text-xl' />
                                        Add lecture
                                    </button>) : 
                                    (<button className='text-yellow-100 flex items-center justify-start gap-1 text-base px-5 py-2'>
                                        <CiEdit className='text-xl' />
                                        Edit lecture
                                    </button>)
                                    }
                                </div>
                            </details>
                        ))
                    }
                </div>)
            }
        </div>
        {
            addSubSecModal && <AddSubSecModals addSubSecModal={addSubSecModal} setAddSubSecModal={setAddSubSecModal} />
        }
    </div>
  )
}

export default NestedView;
