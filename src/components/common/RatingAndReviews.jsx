import React, { useEffect, useState } from "react";
import { averageRating } from "../../service/apiCall/courseApiCall";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";



function RatingAndReviews({ blogDetails, blogId }) {
  console.log(blogDetails);
  const [averageRatings, setAvereageRatings] = useState(0);

  useEffect(() => {
    async function avRating() {
      const response = await averageRating(blogId);
      setAvereageRatings(Math.round(response * 10) / 10);
    }
    avRating();
  }, [blogDetails]);

  console.log(averageRatings);

  return (
    <div className=" mt-2 w-full">
      <div className="flex gap-3 items-center">
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
      </div>
    </div>
  );
}

export default React.memo(RatingAndReviews);
