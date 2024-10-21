import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({blog,styleFlex}) {
  return (
    <Link to={`/blogDetails/${blog._id}`} className=''>
        <div className={`${styleFlex ? "lg:flex-row lg:gap-4 flex flex-col gap-4" : "flex flex-col gap-4"}`}>
            <div className={`${styleFlex ? "lg:w-[70%]" : ""}`}>
                <img src={blog.thumbnail} className={`w-full h-full ${ styleFlex ? "max-h-[300px]" : "max-h-[200px]" } lg:w-full lg:h-[350px] aspect-square rounded-lg`} />
            </div>
            <div className='w-full p-1 flex flex-col gap-2'>
                <h2>{blog.name}</h2>
                {/* views */}
                {/* description */}
                <p className=' text-richblack-50 text-sm font-medium'>{blog.description}</p>
                {/* Author */}
                <div className='flex gap-2 items-center my-2'>
                    <div>
                        <img src={blog.blogger.image} className='rounded-full w-8 h-8' />
                    </div>
                    <div className=' text-sm text-richblack-100 font-bold'>{blog.blogger?.name}</div>
                </div>
                {/* like & comment */}
                {/* ratingAndReviews */}
                {/* createdAt */}
                {
                    styleFlex ? <p className=' text-richblack-25 text-sm'>Created At: <span className=' text-yellow-50'>{blog.createdAt.split("T")[0]}</span></p> : <p></p>
                }
            </div>
        </div>
    </Link>
  )
}

export default BlogCard
