import React, { useState } from "react";
import HighlightText from "./HighlightText";
import { LuReplyAll } from "react-icons/lu";
import { Input } from "../ui/input";
import { replyComment } from "../../service/apiCall/courseApiCall";
import { useSelector } from "react-redux";
import ReplyCommentModal from "./ReplyCommentModal";

function CommentsModal({ blogDetails, setCommentModal, setBlogDetails }) {
  const { token } = useSelector((state) => state.auth);


  const [replyBox, setReplyBox] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [replyCommentModal,setReplyCommentModal] = useState(null);


  async function replyHandler(blogId, replyText, commentId) {
    const response = await replyComment(blogId, token, commentId, replyText);
    if (response !== null) {
      setBlogDetails(response);
      setReplyText("");
      setReplyBox(false);
    }
  }


  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[550px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
        {/* all comments */}
        <div className="flex flex-col gap-2">
          {blogDetails?.comments?.length === 0 ? (
            <div>No comments yet</div>
          ) : (
            <div className="flex flex-col gap-5 w-full">
              {blogDetails?.comments?.map((comment) => (
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
                      {comment?.body}
                    </p>
                    {/* like, reply */}
                    <div className="mt-1">
                      <button
                        onClick={() => {
                          setReplyBox((prev) => ({
                            ...prev,
                            [comment._id]: !prev[comment._id],
                          }));
                        }}
                        className="flex items-center gap-2 text-pure-greys-200 text-sm"
                      >
                        <LuReplyAll />
                        <p>Reply</p>
                      </button>
                    </div>
                    {/* reply box */}
                    <div className="ml-6 w-full mt-2">
                      {replyBox[comment._id] ? (
                        <div className="">
                          <Input
                            className=" bg-black"
                            required
                            name="replyText"
                            value={replyText}
                            onChange={(e) => {
                              setReplyText(e.target.value);
                            }}
                          />
                          <div className="flex justify-end">
                            <button
                              onClick={() =>
                                replyHandler(
                                  blogDetails._id,
                                  replyText,
                                  comment._id
                                )
                              }
                              className=" text-sm text-yellow-25"
                            >
                              Create
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    {/* reply comments */}
                    <div>
                      <button onClick={()=>{setReplyCommentModal(comment)}} className=" text-caribbeangreen-50 flex items-center gap-2 px-2 py-1 bg-richblack-600 rounded-full">
                        <p>{comment?.totalReplyComments}</p>
                        <p>replies</p>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <button
            className=" mt-2 bg-yellow-50 text-richblack-900 h-10 text-lg font-semibold"
            onClick={() => setCommentModal(null)}
          >
            Cancel
          </button>
        </div>
      </div>
        {
          replyCommentModal && <ReplyCommentModal blogDetails={blogDetails} replyCommentModal={replyCommentModal} setReplyCommentModal={setReplyCommentModal} />
        }
    </div>
  );
}

export default CommentsModal;
