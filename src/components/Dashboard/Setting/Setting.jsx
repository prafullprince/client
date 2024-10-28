import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "../../common/IconBtn";
import { FiEdit } from "react-icons/fi";
import { FaCheck, FaEdit } from "react-icons/fa";
import { updateProfilePic } from "../../../service/apiCall/profileApiCall";
import { Link } from "react-router-dom";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import Name from "./Name";
import ChangePass from "./ChangePass";


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
    <div className="text-white overflow-hidden flex flex-col gap-10 w-full">
      {/* section 1 */}
      <div className="flex flex-col gap-4 w-full">
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
              <div className="">
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
              <div className="text-[#DBDDEA] font-medium w-fit">Change Profile Picture</div>
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
        <Name />

        {/* Change Password */}
        <ChangePass />
      </div>
    </div>
  )
}

export default Setting
