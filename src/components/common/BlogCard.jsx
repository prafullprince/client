import React from 'react'

function BlogCard({blog}) {
  return (
    <div className=''>
        <div className='lg:flex-row lg:gap-4 flex flex-col gap-4'>
            <div className='lg:w-[70%]'>
                <img src={blog.thumbnail} className='w-full h-full max-h-[300px] lg:w-full lg:h-[350px] aspect-square rounded-lg' />
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
                <p className=' text-richblack-25 text-sm'>Created At: <span className=' text-yellow-50'>{blog.createdAt.split("T")[0]}</span></p>
            </div>
        </div>
    </div>
  )
}

export default BlogCard
