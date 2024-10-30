import React, { useEffect, useState } from 'react'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import { getAllRating } from '../../service/apiCall/courseApiCall';

function RatingAndReviewCards() {

    const [ratings,setRatings] = useState(null);
    console.log(ratings)

    useEffect(()=>{
        async function fetchRatingAll() {
            const response = await getAllRating();
            setRatings(response);
        }
        fetchRatingAll();
    },[])


  return (
    <div className="rounded-md mt-16 flex flex-col antialiased bg-white dark:bg-richblack-900 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={ratings}
        direction="left"
        speed="fast"
      />
    </div>
  )
}


export default RatingAndReviewCards
