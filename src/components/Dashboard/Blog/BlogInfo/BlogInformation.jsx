import React, { useEffect, useRef, useState } from "react";
import { Label } from "../../../ui/label";
import { Input } from "../../../ui/input";
import { fetchAllCategory } from "../../../../service/apiCall/categoryApiCall";
import thumbImage from "../../../../assets/Images/aboutus2.webp";
import { FaCamera } from "react-icons/fa";
import { createBlog } from "../../../../service/apiCall/courseApiCall";
import { useDispatch, useSelector } from "react-redux";

function BlogInformation() {
  // hook
  const imgRef = useRef(null);
  const dispatch = useDispatch();

  // from store
  const { token } = useSelector((state)=>state.auth);

  // state
  const [category, setCategory] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    whatYouWillLearn: "",
    category: "",
  });

  // formChangeHandler  
  function formChangeHandler(e) {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  // fetchAllCategory
  useEffect(() => {
    async function fetchCat() {
      const data = await fetchAllCategory();
      setCategory(data);
      console.log(data);
    }
    fetchCat();
  }, []);

  // submitHandler
  async function submitHandler(e){
    e.preventDefault();
    await createBlog(formData.name,formData.description,formData.whatYouWillLearn,formData.category,thumbnail,token,dispatch);
  }   

  return (
    <div className="text-white">
      {/* layout */}
      <form onSubmit={submitHandler}>
        <div className="m-6 border border-[#2C333F] bg-[#161D29] rounded-md p-6 flex flex-col gap-6">
          {/* Title */}
          <div className="flex gap-[6px] w-full flex-col">
            <Label htmlFor="title">
              Blog Title<sup className="ml-1 text-richblack-100 text-xs">*</sup>
            </Label>
            <Input
              className="bg-[#2C333F] text-[#dddee2] h-12 text-base"
              type="text"
              name="name"
              value={formData.name}
              onChange={formChangeHandler}
              id="title"
              placeholder="Enter Blog Title"
            />
          </div>

          {/* Description */}
          <div className="flex gap-[6px] w-full flex-col">
            <Label htmlFor="desc">
              Blog Short Description
              <sup className="ml-1 text-richblack-100 text-xs">*</sup>
            </Label>
            <Input
              className="bg-[#2C333F] text-[#dddee2] h-12 text-base"
              type="text"
              name="description"
              value={formData.description}
              onChange={formChangeHandler}
              id="desc"
              placeholder="Enter Blog Description"
            />
          </div>

          {/* category */}
          <div className="flex gap-[6px] w-full flex-col">
            <Label htmlFor="cat">
              Category<sup className="ml-1 text-richblack-100 text-xs">*</sup>
            </Label>
            {/* <Input className='bg-[#2C333F] text-[#999DAA] h-12 text-base' type='text' id='cat' placeholder='Select Blog Category' list='options' /> */}
            <select
              id="options" name="category"
              value={formData.category}
              onChange={formChangeHandler}
              className="bg-[#2C333F] text-[#dddee2] h-12 text-base p-2 outline-none rounded-md"
            >
              {category.map((cat) => (
                <option className="" key={cat._id} value={cat?.name}>
                  {cat?.name}
                </option>
              ))}
            </select>
          </div>

          {/* Thumbnail */}
          <div
            className="flex gap-[6px] w-full flex-col cursor-pointer rounded-lg"
            onClick={() => {
              imgRef.current.click();
            }}
          >
            <Label className="mb-1 text-sm" htmlFor="image">
              Thumbnail<sup className="ml-1 text-richblack-100 text-xs">*</sup>
            </Label>
            {thumbnail ? (
              <img className="border-[0px] rounded-lg" src={URL.createObjectURL(thumbnail)} />
            ) : (
              <div className="z-10 relative">
                <img
                  className="w-full rounded-md h-[350px] z-10"
                  src={thumbImage}
                />
                <FaCamera className="absolute top-[30%] left-[40%] z-20 text-[100px] bg-opacity-50 text-richblack-500" />
              </div>
            )}
            <Input
              className="bg-[#2C333F] text-[#dddee2] h-12 text-base hidden"
              type="file"
              id="image"
              placeholder="Enter Blog Title"
              ref={imgRef}
              onChange={(e) => {
                const file = e.target.files[0];
                setThumbnail(file);
              }}
            />
          </div>

          {/* Benifits/what youWill learn */}
          <div className="flex gap-[6px] w-full flex-col">
            <Label htmlFor="summary">
              Summary of Blog
              <sup className="ml-1 text-richblack-100 text-xs">*</sup>
            </Label>
            <textarea
              className="bg-[#2C333F] text-[#dddee2] h-32 border border-richblack-700 rounded-md p-2 outline-none"
              type="text"
              name="whatYouWillLearn"
              value={formData.whatYouWillLearn}
              onChange={formChangeHandler}
              id="summary"
              placeholder="Write Blog Summary"
            />
          </div>
        </div>
        {/* button */}
        <div className="w-full flex justify-end p-6">
            <button className="px-5 py-2 bg-yellow-100 text-richblack-900 mt-4 flex justify-end w-fit rounded-lg text-lg font-semibold" type="submit">
                Next
            </button>
        </div>
      </form>
    </div>
  );
}

export default BlogInformation;
