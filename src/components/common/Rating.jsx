import React from "react";
import { FaStar } from "react-icons/fa";

function Rating({currentClickStar,setCurrentClickStar}) {

  return (
    <div className=" flex justify-center mt-3">
      <div className="flex gap-2">
        {Array.from({ length: 5 }, (_, index) => {
          const currentStarValue = index + 1;
          return (
            <FaStar
              key={index}
              className={`cursor-pointer text-2xl ${currentClickStar > index ? " text-yellow-50" : " text-richblack-300"}`}
              onClick={()=>setCurrentClickStar(currentStarValue)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(Rating);
