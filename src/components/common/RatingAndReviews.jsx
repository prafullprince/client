import React, { useEffect, useState } from "react";
import { averageRating } from "../../service/apiCall/courseApiCall";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import BlogRatingModal from "./BlogRatingModal";



function RatingAndReviews({ blogDetails, blogId }) {

  const [averageRatings, setAvereageRatings] = useState(0);
  const [ratingModal,setRatingModal] = useState(null);

  useEffect(() => {
    async function avRating() {
      const response = await averageRating(blogId);
      setAvereageRatings(Math.round(response * 10) / 10);
    }
    avRating();
  }, [blogDetails]);


  return (
    <div className=" mt-2 w-full">
      <div className="flex gap-3 items-center flex-wrap">
        {/* rating */}
        <p className="text-[#E7C009] text-lg font-semibold">{averageRatings}</p>
        {/* stars */}
        <div className="flex gap-2">
          {Array.from({ length: 5 }, (_, index) => {
              if(Math.floor(averageRatings) > index){
                return <FaStar
                className=" text-[#E7C009] text-xl"
                key={index}
              />
              }
              else if(averageRatings > index){
                return <FaStarHalfAlt key={index} className=" text-[#E7C009] text-xl" />
              }
              else{
                return <FaRegStar key={index} className=" text-xl"  />
              }
          })}
        </div>
        {/* no of user rated */}
        <div className=" text-[#DBDDEA]">
          ({blogDetails?.totalRatings} ratings)
        </div>
        <button className=" text-yellow-100 border rounded-full px-2 py-1 text-xs border-pink-200 shadow-lg shadow-blue-100 ml-3" onClick={()=>{
          setRatingModal(blogDetails?._id);
        }}>View All</button>
      </div>
      {
        ratingModal && <BlogRatingModal blogDetails={blogDetails} ratingModal={ratingModal} setRatingModal={setRatingModal} />
      }
    </div>
  );
}

export default React.memo(RatingAndReviews);
