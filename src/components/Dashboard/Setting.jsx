import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "../common/IconBtn";
import { FiEdit } from "react-icons/fi";
import { FaCheck, FaEdit } from "react-icons/fa";
import { updateProfilePic } from "../../service/apiCall/profileApiCall";
import { Link } from "react-router-dom";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

function Setting() {
  // fetch data from store
  const { user } = useSelector((state) => state.profile);
  const { image } = useSelector((state)=> state.profile);
  const { token } = useSelector((state)=> state.auth);

  // hook
  const imgRef = useRef(null);
  const dispatch = useDispatch();

  // state
  const [imageFile,setImageFile] = useState(null);
  console.log("imageFile: ",imageFile);

  // changeHandler
  function changeHandler(e){
    const file = e.target.files[0];
    console.log("file: ",file);
    if(file){
      setImageFile(file);
    }
    else{
      setImageFile(image);
    }
  }

  // changeImage
  function changeImage(){
    imgRef.current.click();
  }

  // submitHandler
  async function submitHandler(){
      await updateProfilePic(imageFile,token,dispatch);
      setImageFile("");
  }


  return (
    <div className="text-white overflow-hidden flex flex-col gap-10">
      {/* section 1 */}
      <div className="flex flex-col gap-4">
        {/* part 1 */}
        <div className="flex text-[#838894] text-sm gap-2">
          <p>Home / Dashboard / </p>
          <span className="text-sm font-medium text-[#FFD60A]">Settings</span>
        </div>
        <div className=" font-medium text-3xl text-[#F1F2FF]">Edit Profile</div>
      </div>
      {/* section 2 */}
      <div className="flex flex-col gap-8">
        {/* profile */}
        <div className="border border-[#2C333F] rounded-lg bg-[#161D29]">
          <div className="m-6 flex gap-6">
            {/* profile Picture and email, name */}
            <div className="">
              <div className="md:flex md:items-center gap-6">
                <div onClick={changeImage} className="cursor-pointer">
                  {
                    imageFile ? (<img className="w-20 h-20 rounded-full" src={URL.createObjectURL(imageFile)} />) : (<img className="w-20 h-20 rounded-full" src={image} />)
                  }
                  <input
                    type="file"
                    ref={imgRef}
                    onChange={changeHandler}
                    className="hidden"
                  />
                </div>
              </div>
            </div>
            {/* edit */}
            <div className="flex flex-col gap-3 items-start md:ml-4">
              {/* part 1 */}
              <div className="text-[#DBDDEA] font-medium">Change Profile Picture</div>
              {/* part 2 */}
              <div className={`w-fit max-w-[100px] self-start md:flex gap-4`}> 
              <IconBtn btnHandler={submitHandler} text={imageFile ? "Upload" : "Change"}>
                {imageFile ? (<FaCheck />) : (<FaEdit />)}
              </IconBtn>
              {
                imageFile ? (<button onClick={()=>{setImageFile(null)}} className='px-5 py-2 flex gap-2 text-lg font-medium text-richblack-5 bg-[#000814] rounded-lg items-center cursor-pointer'>
                Remove
              </button>) : (<div></div>)
              }
            </div>
            </div>
          </div>
        </div>

        {/* additional details */}
        <div className="border border-[#2C333F] rounded-lg bg-[#161D29]">
          <div className="m-6 flex flex-col gap-4">
            {/* part 1 */}
            <div className="md:flex gap-4 justify-between items-center">
              <div className="text-[#F1F2FF] font-semibold text-xl">Profile Information</div>
            </div>
            {/* part 2 */}
            <div className="flex md:flex-row flex-col gap-4 items-center">
              {/* name */}
              <div className=" flex flex-col gap-1 w-full">
                  <Label className="ml-1 mb-1">Full Name</Label>
                  <Input className=" bg-richblack-700" type="text"/>
              </div>
              {/* Profession */}
              <div className="w-full flex flex-col gap-1">
                <Label className="ml-1 mb-1">Profession</Label>
                <Input className=" bg-richblack-700" type="text"/>
              </div>
            </div>
            {/* part 3 */}
            <div className="flex md:flex-row flex-col gap-4 items-center">
              {/* DOB */}
              <div className=" flex flex-col gap-1 w-full">
                  <Label className="ml-1 mb-1">Date of Birth</Label>
                  <Input className=" bg-richblack-700" type="text"/>
              </div>
              {/* GENDER */}
              <div className="w-full flex flex-col gap-1">
                <Label className="ml-1 mb-1">Gender</Label>
                <Input className=" bg-richblack-700" type="text"/>
              </div>
            </div>
            {/* part 4 */}
            <div className="flex md:flex-row flex-col gap-4 items-center">
              {/* Phone */}
              <div className=" flex flex-col gap-1 w-full">
                  <Label className="ml-1 mb-1">Phone Number</Label>
                  <Input className=" bg-richblack-700" type="text"/>
              </div>
              {/* About */}
              <div className="w-full flex flex-col gap-1">
                <Label className="ml-1 mb-1">About</Label>
                <Input className=" bg-richblack-700" type="text"/>
              </div>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="border border-[#2C333F] rounded-lg bg-[#161D29]">
          <div className="m-6 flex flex-col gap-4">
            {/* part 1 */}
            <div className="md:flex gap-4 justify-between items-center">
              <div className="text-[#F1F2FF] font-semibold text-xl">Change Password</div>
            </div>
            {/* part 2 */}
            <div className="flex md:flex-row flex-col gap-4 items-center">
              {/* old pass */}
              <div className=" flex flex-col gap-1 w-full">
                  <Label className="ml-1 mb-1">Old Password</Label>
                  <Input className=" bg-richblack-700" type="text"/>
              </div>
              {/* new pass */}
              <div className="w-full flex flex-col gap-1">
                <Label className="ml-1 mb-1">New Password</Label>
                <Input className=" bg-richblack-700" type="text"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
