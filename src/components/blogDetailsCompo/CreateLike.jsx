import React, { useEffect, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useSelector } from "react-redux";
import { likeApis } from "../../service/apiCall/courseApiCall";
import LikeModal from "../common/LikeModal";

function CreateLike({ blogId, blogDetails, setBlogDetails }) {
  // store
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  // state
  const [key, setKey] = useState(false);
  const [likeModal, setLikeModal] = useState(null);

  // create like
  async function clickHandler() {
    const response = await likeApis(blogId, token);
    setBlogDetails(response);
  }

  // sideEffect handling for like icon changing dynamically
  useEffect(() => {
    const result = blogDetails?.likes?.some(
      (like) => like.user._id === user._id
    );
    if (result) {
      setKey(true);
    } else {
      setKey(false);
    }
  }, [blogDetails]);

  return (
    <div className="flex gap-2 text-richblack-100 items-center">
      <button
        className={`text-3xl transition-all duration-200 transform ${
          key ? "scale-125 animate-like" : "scale-100"
        }`}
        onClick={clickHandler}
      >
        {key ? (
          <div>
            <FcLike className="transition-opacity duration-300 ease-in-out opacity-100 text-3xl" />
          </div>
        ) : (
          <div>
            <FcLikePlaceholder className="transition-opacity duration-300 ease-in-out opacity-100 text-3xl" />
          </div>
        )}
      </button>
      <div className="text-lg flex gap-1 text-blue-100">
        <p>{blogDetails?.likes[0]?.user?.name} &</p>
        <button
          onClick={() => {
            setLikeModal(blogDetails);
          }}
        >
          {blogDetails?.totalLikes - 1} others
        </button>
      </div>
      {likeModal && (
        <LikeModal blogDetails={blogDetails} setLikeModal={setLikeModal} />
      )}
    </div>
  );
}

export default CreateLike;
