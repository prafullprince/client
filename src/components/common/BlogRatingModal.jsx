import React from "react";
import HighlightText from "./HighlightText";
import Rating from "./Rating";

function BlogRatingModal({ blogDetails, ratingModal, setRatingModal }) {
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[550px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
        {/* all ratings */}
        <div className="flex flex-col gap-2">
          {blogDetails?.ratingAndReviews?.length === 0 ? (
            <div>No rating yet</div>
          ) : (
            <div className="flex flex-col gap-5 w-full items-start">
              {blogDetails?.ratingAndReviews?.map((rating) => (
                <div key={rating._id} className="flex flex-col max-w-[530px]">
                  {/* user */}
                  <div className=" flex items-center gap-3">
                    {/* profile */}
                    <div>
                      <img
                        src={rating?.user?.image}
                        className="w-8 h-8 rounded-full min-w-8"
                      />
                    </div>
                    {/* name and body */}
                    <div className="flex flex-col gap-[1px]">
                      <p className=" text-richblack-300 text-base italic">
                        <HighlightText text={rating?.user?.name} />
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    {/* rating */}
                    <div className="text-xs flex gap-3 items-center">
                      <Rating
                        currentClickStar={rating?.rating}
                        textSize={false}
                      />
                      <p className=" text-pure-greys-200 mt-4">{rating?.createdAt?.split("T")[0]}</p>
                    </div>
                    {/* reviews */}
                    <div className="break-words break-all text-balance mt-2 text-pure-greys-300 text-sm">
                      <p>{rating?.reviews}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button
            className=" mt-2 bg-yellow-50 text-richblack-900 h-10 text-lg font-semibold"
            onClick={() => setRatingModal(null)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogRatingModal;
