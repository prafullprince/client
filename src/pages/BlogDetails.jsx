import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAllBlogsDeatils } from "../service/apiCall/courseApiCall";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { ShootingStars } from "../components/ui/shooting-stars";
import { StarsBackground } from "../components/ui/stars-background";
import Spinner from "../components/extraUi/Spinner";
import CommentPage from "../components/blogDetailsCompo/CommentPage";
import CreateComment from "../components/blogDetailsCompo/CreateComment";
import CreateLike from "../components/blogDetailsCompo/CreateLike";
import RatingAndReviewCards from "../components/common/RatingAndReviewCards";
import CreateRating from "../components/blogDetailsCompo/CreateRating";
import RatingAndReviews from "../components/common/RatingAndReviews";


function BlogDetails() {
  // hook and state
  const { blogId } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toggleText,setToggleText] = useState(false);
  
  console.log("blogDetails",blogDetails);
  // fetchBlogPageDetails
  useEffect(() => {
    async function fetchBlogDetails() {
      setLoading(true);
      const response = await fetchAllBlogsDeatils(blogId);
      setBlogDetails(response);
      setLoading(false);
    }
    fetchBlogDetails();
  }, [blogId]);

  if (loading) return <Spinner />;

  return (
    <div className="text-white relative pb-12">
      {/* topbar */}
      <div className="bg-[#161D29] px-1 py-12 font-inter relative">
        <div className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-6 lg:flex-row lg:gap-2 lg:justify-between">
          {/* header details */}
          {/* left */}
          <div className="flex flex-col lg:w-[80%]">
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
            <RatingAndReviews blogId={blogId} blogDetails={blogDetails} />
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
            {/* likes */}
            <div className="flex flex-col gap-3 mt-3">
              {/* likes */}
              <CreateLike
                blogId={blogId}
                blogDetails={blogDetails}
                setBlogDetails={setBlogDetails}
              />
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
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-8 relative z-0">
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
              Doc Content
            </div>
            <div className="text-[#C5C7D4] text-sm flex gap-2">
              {blogDetails?.totalSections} sections
            </div>
          </div>
          {/* nested content */}
          <div className=" w-full">
            {blogDetails?.blogContent?.map((section) => (
              <details className=" w-full" key={section?._id}>
                <summary className="list-none flex justify-between cursor-pointer border border-[#424854] bg-[#2C333F] text-[#F1F2FF] font-medium px-4 py-3 transition-all duration-200 z-40">
                  <div className="flex items-center gap-2 w-full">
                    <MdOutlineArrowDropDown className="text-xl" />
                    <div className="break-words w-[80%]">
                      {section?.name.substring(0, 80)}
                    </div>
                  </div>
                  <div></div>
                </summary>
                {/* subSection */}
                <div>
                  {section?.subSection?.map((subSec) => (
                    <div
                      className="py-2 flex flex-col lg:flex-row gap-2 w-full"
                      key={subSec._id}
                    >
                      {subSec.imageUrl.endsWith('.mp4') || subSec.imageUrl.endsWith('.webm') ? (
                        <video
                          className="rounded-lg shadow-md drop-shadow-lg shadow-caribbeangreen-200 lg:w-[50%] ml-2 max-h-[300px] max-w-[300px] aspect-auto"
                          src={subSec.imageUrl}
                          controls // Optional: adds play/pause controls
                          muted
                        />
                      ) : (
                        <img
                          className="rounded-lg shadow-md drop-shadow-lg shadow-caribbeangreen-200 lg:w-[50%] ml-2 max-h-[300px] max-w-[300px] aspect-auto"
                          src={subSec.imageUrl}
                          alt="Content"
                        />
                      )}
                      <div className="lg:w-[100%] break-words py-2 relative">
                        <p className="px-4 mt-3 text-clip text-wrap text-[#C5C7D4] break-all">
                          {`->  `}
                          {
                            toggleText[subSec._id] ? (<span>{subSec?.body}</span>) : (<span>{subSec?.body.substring(0,600)}</span>)
                          }
                          <button className="ml-1" onClick={()=> {
                            setToggleText((prev)=>({
                              ...prev,
                              [subSec._id]:!prev[subSec._id]
                            }))
                          }}>
                            {
                              toggleText[subSec._id] ? <span className=" text-blue-100 shadow-md shadow-blue-100">read less</span> : <span className=" text-blue-100 shadow-md shadow-blue-100">read more...</span>
                            }
                          </button>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
        {/* comment */}
        <div className=" lg:w-[60%] z-30">
          <CreateComment setBlogDetails={setBlogDetails} blogId={blogId} />
        </div>
        <div className=" z-30">
          <CommentPage blogDetails={blogDetails} blogId={blogId} />
        </div>
        {/* Create Rating */}
          <CreateRating setBlogDetails={setBlogDetails} blogId={blogId} />
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
            <p className="text-[#C5C7D4] text-sm">
              {blogDetails?.whatYouWillLearn}
            </p>
          </div>
        </div>
        {/* ratingAndReviews */}
        <RatingAndReviewCards />
        <ShootingStars />
        <StarsBackground />
      </div>
    </div>
  );
}

export default BlogDetails;
