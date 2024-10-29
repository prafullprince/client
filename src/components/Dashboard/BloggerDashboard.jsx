import React, { useEffect, useState } from "react";
import { BLOG_STATUS } from "../../helper/constant";
import Tab from "../auth/Tab";
import HighlightText from "../common/HighlightText";
import { getBloggerPosts } from "../../service/apiCall/courseApiCall";
import { useDispatch, useSelector } from "react-redux";
import { OverlayBlogCard } from "../common/OverlayBlogCard";
import Spinner from "../extraUi/Spinner";
import { setBlog, setStep } from "../../slice/blogSlice";
import { useNavigate } from "react-router-dom";

const tabData = [
  {
    id: 1,
    tabName: "Status",
    type: BLOG_STATUS.DRAFT,
  },
  {
    id: 2,
    tabName: "Published",
    type: BLOG_STATUS.PUBLISHED,
  },
];

function BloggerDashboard() {
  // hook
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // state
  const [status, setStatus] = useState(BLOG_STATUS.PUBLISHED);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { token } = useSelector((state) => state.auth);

  // fetchBloggerPosts
  useEffect(() => {
    async function fetchInstructorPosts() {
      setLoading(true);
      const response = await getBloggerPosts(status, token);
      setPosts(response);
      console.log(response);
      setLoading(false);
    }
    fetchInstructorPosts();
  }, [status]);

  return (
    <div className="text-white">
      {/* content */}
      <div className="flex flex-col gap-4">
        <div className=" text-xl">
          <HighlightText text={"Your Posts"} />
        </div>
        {/* tab */}
        <div className=" w-11/12 mx-auto">
          <Tab field={status} setField={setStatus} tabData={tabData} />
        </div>
        {/* all post */}
        <div className=" w-[90%] mx-auto overflow-x-hidden">
          {loading ? (
            <Spinner />
          ) : (
            <div>
              {posts?.length === 0 ? (
                <div>No post found</div>
              ) : (
                <div className="grid lg:grid-cols-3 lg:gap-6 md:grid-cols-2 md:gap-3 gap-6">
                  {posts?.map((post) => (
                    <div key={post._id} className=" flex flex-col gap-2">
                      <OverlayBlogCard blog={post} />
                      <div className=" flex justify-end">
                        <button
                          onClick={() => {
                            dispatch(setStep(2));
                            localStorage.setItem("step", JSON.stringify(2));
                            dispatch(setBlog(post));
                            localStorage.setItem("blog", JSON.stringify(post));
                            navigate("/dashboard/add-blog");
                          }}
                          className=" bg-yellow-50 text-richblack-900 px-2 font-semibold py-1 rounded-lg w-fit flex items-end"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BloggerDashboard;
