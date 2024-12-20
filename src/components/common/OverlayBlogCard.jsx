import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { increaseViews } from "../../service/apiCall/courseApiCall";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

export function OverlayBlogCard({ blog }) {
  async function viewsApi() {
    await increaseViews(blog._id);
  }

  return (
    <div className=" flex flex-col group">
      {/* topbar */}
      <div className="transition-all duration-200 flex items-center gap-2 px-4 py-2 bg-pure-greys-900 border-t-0 rounded-t-lg shadow-sm shadow-white">
        {/* profile img */}
        <div>
          <img
            alt="Avatar"
            src={blog?.blogger?.image}
            className="h-10 w-10 min-w-10 rounded-full border-2 border-caribbeangreen-600 object-cover"
          />
        </div>
        {/* post blogger */}
        <div className=" flex flex-col gap-0">
          <div className="flex flex-col">
            <div className="flex gap-[4px] items-center">
              <p className=" text-richblack-5 font-semibold text-lg">{blog.blogger.name}</p>
              <IoCheckmarkDoneCircleSharp className=" text-pure-greys-200 bg-white bg-clip-text" />
            </div>
          </div>
        </div>
        {/* follow button */}
      </div>
      <Link
        onClick={viewsApi}
        to={`/blogDetails/${blog._id}`}
        className="w-full"
      >
        {/* image */}
        <div
          style={{ backgroundImage: `url(${blog?.thumbnail})` }}
          className={cn(
            " cursor-pointer overflow-hidden relative card h-96 rounded-b-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
            `shadow-sm shadow-white bg-center bg-cover`
          )}
        >
          {/* profile , name */}
          <div className="absolute w-full h-full top-0 left-0 transition duration-400 group-hover/card:scale-0 group-focus/card:scale-0 opacity-60"></div>
          {/* name ,description */}
        </div>
        {/* content */}
        <div className="flex gap-3 items-start mt-2">
          {/* post content */}
          <div className=" flex flex-col gap-0">
            <h1 className="font-bold text-lg text-richblack-5 text-gray-50 relative z-10">
              {blog.name}
            </h1>
            <div className="flex flex-col">
              <div className=" flex gap-2 text-pure-greys-200">
                <p>{blog?.totalViews} Views</p>
                <ul className="list-disc ml-3">
                  <li>{blog?.createdAt.split("T")[0]}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
