import React from 'react'
import HighlightText from './HighlightText'

function LikeModal({blogDetails,setLikeModal}) {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[550px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
        {/* all likes */}
        <div className='flex flex-col gap-2'>
            {
                blogDetails?.likes?.length === 0 ? (<div>No likes yet</div>) : 
                (
                    <div className='flex flex-col gap-5 w-full'>
                        {
                            blogDetails?.likes?.map((like)=>(
                                <div key={like._id} className='flex gap-3 items-center max-w-[550px]'>
                                    {/* profile */}
                                    <div>
                                      <img src={like?.user?.image} className='w-8 h-8 rounded-full min-w-8' />
                                    </div>
                                    {/* name */}
                                    <div className='flex flex-col gap-[1px]'>
                                      <p className=' text-richblack-300 text-lg italic'>
                                        <HighlightText text={like?.user?.name} />
                                      </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
            <button className=' mt-2 bg-yellow-50 text-richblack-900 h-10 text-lg font-semibold' onClick={()=>setLikeModal(null)}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default LikeModal
