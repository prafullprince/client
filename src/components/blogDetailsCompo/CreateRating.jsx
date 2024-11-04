import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import RatingModal from '../common/RatingModal';

function CreateRating({blogId,setBlogDetails}) {

    const [ratingModal,setRatingModal] = useState(null);

    const { user } = useSelector((state)=>state.profile);
    const { image } = useSelector((state)=>state.profile);

  return (
    <div className={`${ratingModal ? " z-50" : " z-20"}`}>
        <button onClick={()=>{
            setRatingModal({
                blogId
            })
        }} className='px-3 py-2 bg-yellow-50 text-richblack-900 rounded-lg font-semibold'>Add Rating</button>

        {
            ratingModal && <RatingModal setBlogDetails={setBlogDetails} user={user} image={image} ratingModal={ratingModal} setRatingModal={setRatingModal} />
        }
    </div>
  )
}

export default React.memo(CreateRating);
