import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconBtn from "../common/IconBtn";
import { FiEdit, FiEdit2 } from "react-icons/fi";
import { FaCheck, FaEdit } from "react-icons/fa";
import { updateProfilePic } from "../../service/apiCall/profileApiCall";
import { Link } from "react-router-dom";

function MyProfile() {
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
    <div className="text-white overflow-hidden flex flex-col gap-10">
      {/* section 1 */}
      <div className="flex flex-col gap-4">
        {/* part 1 */}
        <div className="flex text-[#838894] text-sm gap-2">
          <p>Home / Dashboard / </p>
          <span className="text-sm font-medium text-[#FFD60A]">My Profile</span>
        </div>
        <div className=" font-medium text-3xl text-[#F1F2FF]">My Profile</div>
      </div>
      {/* section 2 */}
      <div className="flex flex-col gap-8">
        {/* profile */}
        <div className="border border-[#2C333F] rounded-lg bg-[#161D29]">
          <div className="m-6 grid gap-4 md:grid-cols-4">
            {/* profile Picture and email, name */}
            <div className="col-span-2 md:col-span-3">
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
                <div className="flex flex-col gap-2">
                  <div className="text-[#F1F2FF] text-lg font-semibold">
                    {user?.name}
                  </div>
                  <p className="text-[#838894] text-sm">{user?.email}</p>
                </div>
              </div>
            </div>
            {/* edit */}
            <div className={`md:self-center w-fit md:place-self-end max-w-[100px] ${imageFile ? "mr-6":""}`}> 
              <IconBtn btnHandler={submitHandler} text={imageFile ? "Upload" : "Edit"}>
                {imageFile ? (<FaCheck />) : (<FaEdit />)}
              </IconBtn>
            </div>
          </div>
        </div>

        {/* additional details */}
        <div className="border border-[#2C333F] rounded-lg bg-[#161D29]">
          <div className="m-6 flex flex-col gap-4">
            {/* part 1 */}
            <div className="md:flex gap-4 justify-between items-center">
              <div className="text-[#F1F2FF] font-semibold text-xl">Personal Details</div>
              <Link to={"/dashboard/settings"} className=" max-w-[100px]">
                <IconBtn text={"Edit"}>
                  <FiEdit />
                </IconBtn>
              </Link>
            </div>
            {/* part 2 */}
            <div className="grid md:grid-cols-4 gap-2">
              {/* name */}
              <div className="col-span-2 flex flex-col gap-2">
                <p className="text-[#424854] text-sm">Name</p>
                <p className="text-[#F1F2FF] font-medium text-sm">{user?.name}</p>
              </div>
              {/* email */}
              <div className="col-span-2 flex flex-col gap-2">
                <p className="text-[#424854] text-sm">Email</p>
                <p className="text-[#F1F2FF] font-medium text-sm">{user?.email}</p>
              </div>
            </div>
            {/* part 3 */}
            <div className="grid md:grid-cols-4">
              {/* dob */}
              <div className="col-span-2 flex flex-col gap-2">
                <p className="text-[#424854] text-sm">Date Of Birth</p>
                <div className="text-[#F1F2FF] font-medium text-sm">{user?.additionalDetails?.dateOfBirth ? (<p>{user?.additionalDetails?.dateOfBirth}</p>) : (<p className="text-brown-500">You don't uploaded yet</p>)}</div>
              </div>
              {/* phone */}
              <div className="col-span-2 flex flex-col gap-2">
                <p className="text-[#424854] text-sm">Phone</p>
                <div className="text-[#F1F2FF] font-medium text-sm">
                {user?.additionalDetails?.dateOfBirth ? (<p>{`+91 ${user?.additionalDetails?.contactNumber}`}</p>) : (<p className="text-brown-500">You don't uploaded yet</p>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
