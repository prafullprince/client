import React from "react";
import HighlightText from "./HighlightText";


function ReplyCommentModal({ setReplyCommentModal,replyCommentModal }) {


  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[550px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
        {/* all comments */}
        <div className="flex flex-col gap-2">
          {replyCommentModal?.replyComment?.length === 0 ? (
            <div>No replied comment yet</div>
          ) : (
            <div className="flex flex-col gap-5 w-full">
              {replyCommentModal?.replyComment?.map((comment) => (
                <div
                  key={comment._id}
                  className="flex gap-3 items-start max-w-[550px]"
                >
                  {/* profile */}
                  <div>
                    <img
                      src={comment?.user?.image}
                      className="w-8 h-8 rounded-full min-w-8"
                    />
                  </div>
                  {/* name and body */}
                  <div className="flex flex-col gap-[1px] w-[70%]">
                    <p className=" text-richblack-300 text-xs italic">
                      <HighlightText text={comment?.user?.name} />
                    </p>
                    <p className="max-w-[400px] break-words break-all text-balance">
                      {comment?.replyText}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button
            className=" mt-2 bg-yellow-50 text-richblack-900 h-10 text-lg font-semibold"
            onClick={() => setReplyCommentModal(null)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReplyCommentModal;
