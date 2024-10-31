import React, { useState } from 'react'
import Rating from './Rating'
import { createRatings } from '../../service/apiCall/courseApiCall';
import { useSelector } from 'react-redux';

function RatingModal({setRatingModal,ratingModal,user,image,setBlogDetails}) {

    const [totalRating,setTotalRating] = useState(0);
    const [reviews,setReviews] = useState("");

    const { token } = useSelector((state)=>state.auth);

    async function submitHandler(){
        const response = await createRatings(reviews,totalRating,ratingModal.blogId,token);
        setBlogDetails(response);
        setRatingModal(null);
    }

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
        <div className="w-11/12 max-w-[330px] rounded-lg border border-richblack-400 bg-richblack-800 px-6 py-4 flex flex-col gap-2">
            <div className=' text-xl text-yellow-100 font-medium'>Add Review</div>
            {/* user Profile */}
            <div className='flex flex-col gap-2 mt-3'>
                <div className='flex gap-3 justify-center'>
                    <img src={image} className=' w-12 h-12 min-w-10 min-h-10 rounded-full' />
                    <div className='flex flex-col'>
                        <p className='text-[#F1F2FF] font-semibold'>{user?.name}</p>
                        <p className=' text-[#F1F2FF] text-sm'>Posting Publicly</p>
                    </div>
                </div>
                {/* Rating */}
                <div className=' mt-2'>
                    <Rating currentClickStar={totalRating} setCurrentClickStar={setTotalRating} />
                </div>
            </div>
            {/* textInput */}
            <div className=' mt-3 text-blue-50'>Add your experience<sup>*</sup></div>
            <textarea
                required 
                className='bg-richblack-900 outline-none w-full h-36 px-2 py-3'
                name='reviews'
                value={reviews}
                onChange={(e)=>setReviews(e.target.value)}
            />
            {/* button */}
            <div className=' flex justify-end gap-3 mt-6'>
                <button onClick={submitHandler} className='px-4 py-[2px] bg-yellow-50 text-richblack-900 rounded-lg font-semibold'>Add</button>
                <button className='px-3 py-2 bg-richblack-900 rounded-lg font-semibold' onClick={()=>setRatingModal(null)}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default RatingModal
