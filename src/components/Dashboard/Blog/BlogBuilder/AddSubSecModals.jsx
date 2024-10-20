import React, { useState } from 'react'
import { Input } from '../../../ui/input';
import { Label } from '../../../ui/label';
import { createSubSection } from '../../../../service/apiCall/courseApiCall';
import { useDispatch, useSelector } from 'react-redux';

function AddSubSecModals({addSubSecModal,setAddSubSecModal}) {

    const [body,setBody] = useState("");
    const [imageUrl,setImageUrl] = useState(null);

    const { token } = useSelector((state)=>state.auth);
    const dispatch = useDispatch();

    async function submitHandler(e){
        e.preventDefault();
        await createSubSection(body,addSubSecModal.blogId,addSubSecModal.sectionId,imageUrl,token,dispatch);
        setAddSubSecModal(null);
    }


  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <form onSubmit={submitHandler} className="w-11/12 max-w-[250px] md:max-w-[550px] rounded-lg border border-richblack-400 bg-richblack-800 p-6 flex flex-col items-start gap-6">
        <p className="text-2xl font-semibold text-richblack-5">
          Add SubSection
        </p>
        <div className='flex flex-col gap-3 items-start w-full'>
            <div>
              <Label>Write content of current topic/section</Label>
              <textarea
                  required
                  className=' bg-richblack-900 px-2 py-1 w-full h-32 md:h-60 outline-none rounded-lg' 
                  type='text'
                  name='body'
                  placeholder='Write content here'
                  value={body}
                  onChange={(e)=>{setBody(e.target.value)}}
              />
            </div>
            <div>
              <input
                    required
                    className=' bg-richblack-900 px-2 py-1 w-full h-32 md:h-60 outline-none rounded-lg' 
                    type='file'

                    onChange={(e)=>{setImageUrl(e.target.files[0])}}
                />
            </div>
        </div>
        <div className="flex items-center gap-x-4">
          <button
            type='submit'
            className="cursor-pointer rounded-md py-[8px] px-[20px] font-semibold text-richblack-900 bg-yellow-50"
          >
            Add
          </button>
          <button
            className="cursor-pointer rounded-md bg-richblack-900 py-[8px] px-[20px] font-semibold text-richblack-5"
            onClick={()=>setAddSubSecModal(null)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddSubSecModals
