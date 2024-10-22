import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { Link, useParams } from "react-router-dom";
import {
  fetchAllBlogsDeatils,
  likeApis,
} from "../service/apiCall/courseApiCall";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import Spinner from "../components/extraUi/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { FcLikePlaceholder } from "react-icons/fc";


function BlogDetails() {
  const dispatch = useDispatch();
  const { blogId } = useParams();
  const { token } = useSelector((state) => state.auth);

  const [blogDetails, setBlogDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const { likeKey } = useSelector((state) => state.blogs);
  const [key, setKey] = useState(likeKey);

  useEffect(() => {
    async function fetchBlogDetails() {
      setLoading(true);
      const response = await fetchAllBlogsDeatils(blogId);
      console.log(response);
      setBlogDetails(response);
      setLoading(false);
    }
    fetchBlogDetails();
  }, []);

  async function likeHandler() {
    const response = await likeApis(blogId, token, dispatch);
    setKey(response);
  }

  if (loading) return <Spinner />;

  return (
    <div className="text-white relative pb-12">
      {/* topbar */}
      <div className="bg-[#161D29] px-1 py-12 font-inter relative">
        <div className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-6 lg:flex-row lg:gap-2 lg:justify-between">
          {/* header details */}
          {/* left */}
          <div className="flex flex-col w-[80%]">
            {/* path */}
            <div className="flex text-[#838894] text-base gap-1 items-center">
              Home / Blog /{" "}
              <span className="text-sm md:text-base text-[#FFD60A] md:font-medium">
                {blogDetails?.category?.name}
              </span>
            </div>
            <div className="text-[#F1F2FF] font-medium text-4xl mt-4">
              {blogDetails?.name}
            </div>
            <p className=" text-pure-greys-100 text-sm">
              {blogDetails?.totalViews} views
            </p>
            <p className="text-sm text-[#999DAA] mt-2">
              {blogDetails?.description}
            </p>
            {/* rating and reviews */}
            {/* author name */}
            <p className="text-[#6e6f76] text-base mt-3">{`Created by ${blogDetails?.blogger?.name}`}</p>
            {/* time */}
            <div className="flex gap-2 mt-1 items-center text-sm">
              <p className="text-[#6e6f76] text-base">CreatedAt:</p>
              <IoTimeOutline className=" text-yellow-50 h-5 w-5" />
              <p className=" text-yellow-50">
                {blogDetails?.createdAt.split("T")[0]}
              </p>
            </div>
            {/* likes and Comment */}
            <div className="flex flex-col gap-3 mt-3">
              {/* likes */}

              {/* {key ? (
                  <button className="text-3xl transition-all duration-200" onClick={likeHandler}>
                    <FcLike />
                  </button>
                ) : (
                  <button className="text-3xl transition-all duration-200" onClick={likeHandler}>
                    <IoIosHeartEmpty />
                  </button>
                )} */}

              <div className="flex gap-2 text-richblack-100 items-center">
                <button
                  className={`text-3xl transition-all duration-200 transform ${
                    key ? "scale-125 animate-like" : "scale-100"
                  }`}
                  onClick={likeHandler}
                >
                  {key ? (
                    <FcLike className="transition-opacity duration-300 ease-in-out opacity-100" />
                  ) : (
                    <FcLikePlaceholder className="transition-opacity duration-300 ease-in-out opacity-100" />
                  )}
                </button>
                <p className="text-lg text-richblack-100 mt-[4px]">
                  {blogDetails?.totalLikes}
                </p>
              </div>

              {/* comments */}
              <div className="flex gap-2"></div>
            </div>
          </div>
          {/* right */}
          <div className="flex lg:justify-end rounded-lg">
            <img
              src={blogDetails?.thumbnail}
              className="h-[250px] w-[500px] bg-contain rounded-lg drop-shadow-2xl shadow-2xl shadow-caribbeangreen-200"
            />
          </div>
        </div>
      </div>
      {/* content */}
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-8 relative z-10">
        {/* What you will Learn */}
        <div className="md:px-12 md:py-8 px-2 py-1 mt-16 border border-[#2C333F] w-fit shadow-sm shadow-blue-25 md:w-[60%] relative z-20">
          <div className="text-[#F1F2FF] font-medium text-3xl">
            What You'll learn
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {blogDetails?.blogContent?.map((section, index) => (
              <Link
                key={section?._id}
                to={`#${index}`}
                className="font-medium text-[#C5C7D4]"
              >
                {index + 1} {"."} {section.name.substring(0, 40)}...
              </Link>
            ))}
          </div>
        </div>
        {/* Blog Content */}
        <div className="mt-12 flex flex-col gap-8 relative z-20">
          <div className="flex flex-col gap-3">
            <div className="text-white font-semibold text-2xl">
              Course Content
            </div>
            <div className="text-[#C5C7D4] text-sm flex gap-2">
              {blogDetails?.totalSections} sections
            </div>
          </div>
          {/* nested content */}
          <div className="">
            {blogDetails?.blogContent?.map((section, index) => (
              <details className="" key={section?._id}>
                <summary className="list-none lg:w-[60%] flex justify-between cursor-pointer border border-[#424854] bg-[#2C333F] text-[#F1F2FF] font-medium px-4 py-3 transition-all duration-200 z-40">
                  <div className="flex items-center gap-2 w-full">
                    <MdOutlineArrowDropDown className="text-xl" />
                    <div className="break-words w-[80%]">
                      {section?.name.substring(0, 80)}
                    </div>
                  </div>
                  <div></div>
                </summary>
                <div>
                  {section?.subSection?.map((subSec, index) => (
                    <div className="py-2 flex flex-col w-full" key={subSec._id}>
                      <img
                        className="rounded-lg shadow-md drop-shadow-lg shadow-caribbeangreen-200 lg:w-[59%] ml-2 h-[400px] aspect-auto"
                        src={subSec?.imageUrl}
                      />
                      <div className="lg:w-[100%] break-words py-2 relative">
                        <p className="px-4 mt-3 lg:w-[60%] text-clip text-wrap text-[#C5C7D4]">
                          {`->  `}
                          {subSec?.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
        {/* author */}
        <div className="flex flex-col gap-4 mt-8 relative z-20">
          <p className="text-[#F1F2FF] font-semibold text-2xl shadow-sm shadow-blue-100 w-fit p-2">
            Author
          </p>
          <div className="flex gap-2 items-center">
            <img
              src={blogDetails?.blogger?.image}
              className="w-10 h-10 rounded-full"
            />
            <p className="text-[#F1F2FF] font-medium">
              {blogDetails?.blogger?.name}
            </p>
          </div>
          <div className="">
            <p className="text-[#C5C7D4] text-sm">{blogDetails?.description}</p>
          </div>
        </div>
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
}

export default BlogDetails;
