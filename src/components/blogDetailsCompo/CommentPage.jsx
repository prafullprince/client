import React, { useEffect, useState } from "react";
import { getComment } from "../../service/apiCall/courseApiCall";
import CommentsModal from "../common/CommentsModal";
import HighlightText from "../common/HighlightText";

function CommentPage({ blogId }) {
  const [blogDetails, setBlogDetails] = useState(null);
  const [commentModal, setCommentModal] = useState(null);

  function modalHandler() {
    setCommentModal({
      blogDetails,
    });
  }

  useEffect(() => {
    async function getComments() {
      const response = await getComment(blogId);
      setBlogDetails(response);
    }
    getComments();
  }, [blogId]);

  return (
    <div className="lg:w-[60%] relative z-40">
      <button onClick={modalHandler} className="bg-richblack-700 rounded-xl w-full p-3 flex flex-col gap-2 hover:opacity-60 transition-all duration-200 max-w-[980px]">
        <div className=" text-lg font-light italic text-richblack-5">
          <HighlightText text={"Comments"} />{" "}
          <span className=" text-pink-200">
            {blogDetails?.totalComments}
          </span>
        </div>
        {blogDetails?.comments?.length === 0 ? (
          <div>No comment yet</div>
        ) : (
          <div className="flex gap-4 items-start max-w-[700px]">
            <img
              src={blogDetails?.comments[0]?.user?.image}
              className="w-8 h-8 rounded-full min-w-8 text-balance"
            />
            <div className="xl:max-w-[700px] break-words break-all text-start text-balance">{blogDetails?.comments[0]?.body}</div>
          </div>
        )}
      </button>
      <div
          onClick={modalHandler}
          className=" text-yellow-50 font-semibold mt-2 cursor-pointer flex justify-end w-full"
        >
          View All
      </div>

      {commentModal && (
        <CommentsModal
          blogDetails={blogDetails}
          setCommentModal={setCommentModal}
        />
      )}
    </div>
  );
}

export default CommentPage;
