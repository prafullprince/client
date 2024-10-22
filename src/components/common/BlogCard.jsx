import React from 'react'
import { Link } from 'react-router-dom'
import { increaseViews } from '../../service/apiCall/courseApiCall'

function BlogCard({blog,styleFlex}) {

    async function viewsApi(){
        await increaseViews(blog._id);
    }


  return (
    <Link onClick={viewsApi} to={`/blogDetails/${blog._id}`} className=''>
        <div className={`${styleFlex ? "lg:flex-row lg:gap-4 flex flex-col gap-4" : "flex flex-col gap-4"}`}>
            <div className={`${styleFlex ? "lg:w-[70%]" : ""}`}>
                <img src={blog.thumbnail} className={`w-full h-full ${ styleFlex ? "max-h-[300px]" : "max-h-[200px]" } lg:w-full lg:h-[350px] aspect-square rounded-lg`} />
            </div>
            <div className='w-full p-1 flex flex-col gap-0'>
                <h2 className=''>{blog.name}</h2>
                {/* views */}
                <p className=' text-sm text-pure-greys-200'>{blog.totalViews} views</p>
                {/* Author */}
                <div className='flex gap-2 items-center my-4'>
                    <div>
                        <img src={blog.blogger.image} className='rounded-full w-8 h-8' />
                    </div>
                    <div className=' text-sm text-pure-greys-200 font-bold'>{blog.blogger?.name}</div>
                </div>
                {/* description */}
                <p className=' text-pure-greys-200 text-sm font-medium mt-2'>{blog.description.substring(0,200)}....</p>
                {/* like & comment */}
                {/* ratingAndReviews */}
                {/* createdAt */}
                {
                    styleFlex ? <p className=' text-richblack-25 text-sm mt-1'>Created At: <span className=' text-yellow-50'>{blog.createdAt.split("T")[0]}</span></p> : <p></p>
                }
            </div>
        </div>
    </Link>
  )
}

export default BlogCard
