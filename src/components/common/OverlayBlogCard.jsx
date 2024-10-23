import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";
import { increaseViews } from "../../service/apiCall/courseApiCall";
import HighlightText from "./HighlightText";

export function OverlayBlogCard({blog}) {

  async function viewsApi(){
    await increaseViews(blog._id);
  }


  return (
    <Link onClick={viewsApi} to={`/blogDetails/${blog._id}`} className="w-full group/card">
      <div
        style={{backgroundImage:`url(${blog?.thumbnail})`}}
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4",
          `bg-cover shadow-sm shadow-white`
        )}
      >
        {/* profile , name */}
        <div className="absolute w-full h-full top-0 left-0 transition duration-400 bg-richblack-900 group-hover/card:scale-0 group-focus/card:scale-0 opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <img
            height="100"
            width="100"
            alt="Avatar"
            src={blog?.blogger?.image}
            className="h-10 w-10 rounded-full border-2 border-caribbeangreen-600 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              <HighlightText text={blog.blogger.name} />
            </p>
            <p className="text-sm text-gray-400">{blog?.totalViews} Views</p>
          </div>
        </div>
        {/* name ,description */}
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {blog.name}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {`${blog.description.substring(0,60)}.....`}
          </p>
        </div>
      </div>
    </Link>
  );
}
