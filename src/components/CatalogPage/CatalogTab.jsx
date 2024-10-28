import React, { useState } from 'react'
import Slider from './Slider';


function CatalogTab({popularBlog,newBlog}) {

    const tab = ["Popular","Others"];
    const [category,setCategory] = useState(tab[0]);

  return (
    <div className='mt-4'>
        <div className='flex gap-6 w-fit justify-between px-2 py-1 rounded-full text-lg text-richblack-200'>
            {
                tab?.map((cat)=>(
                    <button key={cat?._id} onClick={()=>setCategory(cat)} className={`${cat === category ? "py-2 border-b-[3px] text-yellow-50 border-yellow-50 " : ""}`}>
                        {cat}
                    </button>
                ))
            }
        </div>
        {
            category === "Popular" && <Slider popularBlog={popularBlog} />
        }
        {
            category === "Others" && <Slider popularBlog={newBlog} />
        }
    </div>
  )
}

export default CatalogTab
// className={`${tab !== null ? " bg-richblack-900" : "" }`}
