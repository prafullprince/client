import React, { useState } from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { IoMdSend } from "react-icons/io";
import { createComment } from "../../service/apiCall/courseApiCall";

function CreateComment({ blogId, setBlogDetails }) {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  async function commentApi(e) {
    e.preventDefault();
    const response = await createComment(blogId, text, token);
    console.log(response);
    setBlogDetails(response);
    setText("");
  }

  return (
    <div className=" w-full relative z-40">
      <div>
        <Label>Add Comment: </Label>
      </div>
      <div className="mt-1 flex gap-2 items-center w-full">
        <div className=" max-w-[20%]">
          <img src={user?.image} className=" w-8 h-8 rounded-full min-w-8" />
        </div>
        <form
          onSubmit={commentApi}
        >
          {token !== null ? (
            <div className="flex items-center border-b border-richblack-600 p-2 w-full gap-3">
              <Input
                className="flex-1 border-none focus:ring-0 outline-none resize-none p-2 bg-richblack-900 w-full md:min-w-[500px] sm:min-w-[500px] lg:min-w-[500px] 2xl:min-w-[800px]"
                placeholder="Add a comment..."
                name="text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              {text.length > 0 ? (
                <button type="submit">
                  <IoMdSend className=" text-2xl text-richblack-50" />
                </button>
              ) : (
                <div className="text-blue-500 font-semibold ml-2">Post</div>
              )}
            </div>
          ) : (
            <div className="flex items-center border-b border-richblack-600 p-2 w-full gap-3">
              <Input
                className="flex-1 border-none focus:ring-0 outline-none resize-none p-2 bg-richblack-900 w-full md:min-w-[500px] sm:min-w-[500px] lg:min-w-[500px] 2xl:min-w-[800px] text-richblack-50"
                placeholder="Please signin to, add a comment..."
                disabled
                
              />
              {text.length > 0 ? (
                <button type="submit">
                  <IoMdSend className=" text-2xl text-richblack-50" />
                </button>
              ) : (
                <div className="text-blue-500 font-semibold ml-2">Post</div>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateComment;
