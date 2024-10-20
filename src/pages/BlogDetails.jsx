import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useParams } from "react-router-dom";
import { fetchAllBlogsDeatils } from "../service/apiCall/courseApiCall";
import { IoTimeOutline } from "react-icons/io5";
import { WobbleCard } from "../components/ui/wobble-card";

function BlogDetails() {
  const { blogId } = useParams();

  const [blogDetails, setBlogDetails] = useState(null);

  useEffect(() => {
    async function fetchBlogDetails() {
      const response = await fetchAllBlogsDeatils(blogId);
      console.log(response);
      setBlogDetails(response);
    }
    fetchBlogDetails();
  }, []);

  console.log(blogDetails?.thumbnail);

  return (
    <div className="text-white relative">
      {/* topbar */}
      <div className="bg-[#161D29] px-1 py-12 font-inter relative">
        <div className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-6 lg:flex-row lg:gap-2 lg:justify-between">
          {/* header details */}
          {/* left */}
          <div className="flex flex-col gap-3 w-[80%]">
            {/* path */}
            <div className="flex text-[#838894] text-base gap-1 items-center">
              Home / Blog /{" "}
              <span className="text-sm md:text-base text-[#FFD60A] md:font-medium">
                {blogDetails?.category?.name}
              </span>
            </div>
            <div className="text-[#F1F2FF] font-medium text-4xl mt-2">
              {blogDetails?.name}
            </div>
            <p className="text-sm text-[#999DAA]">{blogDetails?.description}</p>
            {/* rating and reviews */}
            {/* author name */}
            <p className="text-[#DBDDEA] text-base mt-1">{`Created by ${blogDetails?.blogger?.name}`}</p>
            {/* time */}
            <div className="flex gap-2 mt-1 items-center text-sm">
              <p>CreatedAt:</p>
              <IoTimeOutline className=" text-yellow-50 h-5 w-5" />
              <p className=" text-yellow-50">
                {blogDetails?.createdAt.split("T")[0]}
              </p>
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
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-8">
        {/* What you will Learn */}
        <div className="md:px-12 md:py-8 px-2 py-1 mt-16 border border-[#2C333F] w-fit shadow-sm shadow-blue-25">
          <div className="text-[#F1F2FF] font-medium text-3xl">
            What You'll learn
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {blogDetails?.blogContent?.map((section) => (
              <p key={section?._id} className="font-medium text-[#C5C7D4]">
                {section.name.substring(0, 40)}...
              </p>
            ))}
          </div>
        </div>
        {/* Blog Content */}
        {/* author */}
        <div className="flex flex-col gap-4">
            <p className="text-[#F1F2FF] font-semibold text-2xl shadow-sm shadow-blue-100 w-fit p-2">Author</p>
            <div className="flex gap-2 items-center">
              <img 
                src={blogDetails?.blogger?.image}
                className="w-10 h-10 rounded-full"
              />
              <p className="text-[#F1F2FF] font-medium">{blogDetails?.blogger?.name}</p>
            </div>
            <div className="">
              <p className="text-[#C5C7D4] text-sm">{blogDetails?.description}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
