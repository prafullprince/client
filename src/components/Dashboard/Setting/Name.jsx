import React, { useEffect, useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { updateProfileInfo } from "../../../service/apiCall/profileApiCall";
import { useDispatch, useSelector } from "react-redux";

function Name() {

  // hook
  const dispatch = useDispatch();
  const { token } = useSelector((state)=>state.auth);


  // state
  const [formData, setFormData] = useState({
    names: "",
    dateOfBirth:"",
    gender:"",
    contactNumber:"",
    about:""
  });

  const submitHandler = async () => {
    const response = await updateProfileInfo(formData.names,formData.about,formData.contactNumber,formData.dateOfBirth,formData.gender,token,dispatch);
  };

  function changeHandler(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  console.log(formData);

  return (
    <div className="border border-[#2C333F] rounded-lg bg-[#161D29]">
      <div className="m-6 flex flex-col gap-4">
        {/* part 1 */}
        <div className="md:flex gap-4 justify-between items-center">
          <div className="text-[#F1F2FF] font-semibold text-xl">
            Profile Information
          </div>
          <button onClick={submitHandler} className=" bg-yellow-50 text-richblack-900 px-4 py-2 font-semibold rounded-lg">
            Save
          </button>
        </div>
        {/* part 2 */}
        <div className="flex md:flex-row flex-col gap-4 items-center">
          {/* name */}
          <div className=" flex flex-col gap-1 w-full">
            <Label className="ml-1 mb-1">Full Name</Label>
            <Input
              className=" bg-richblack-700"
              type="text"
              name="names"
              value={formData.names}
              onChange={changeHandler}
            />
          </div>
        </div>
        {/* part 3 */}
        <div className="flex md:flex-row flex-col gap-4 items-center">
          {/* DOB */}
          <div className=" flex flex-col gap-1 w-full">
            <Label className="ml-1 mb-1">Date of Birth</Label>
            <Input className=" bg-richblack-700 text-richblack-25" type="date" value={formData.dateOfBirth} name="dateOfBirth" onChange={changeHandler} />
          </div>
          {/* GENDER */}
          <div className="w-full flex flex-col gap-1">
            <Label className="ml-1 mb-1">Gender</Label>
            <select className=" bg-richblack-700 outline-none py-2 px-3 rounded-lg" name="gender" value={formData.gender} onChange={changeHandler}>
              <option value={""}>select</option>
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
              <option value={"other"}>Rathar than not say</option>
            </select>
          </div>
        </div>
        {/* part 4 */}
        <div className="flex md:flex-row flex-col gap-4 items-center">
          {/* Phone */}
          <div className=" flex flex-col gap-1 w-full">
            <Label className="ml-1 mb-1">Phone Number (+91)</Label>
            <Input className=" bg-richblack-700" type="text" name="contactNumber" value={formData.contactNumber} onChange={changeHandler} />
          </div>
          {/* About */}
          <div className="w-full flex flex-col gap-1">
            <Label className="ml-1 mb-1">About</Label>
            <Input className=" bg-richblack-700" type="text" name="about" value={formData.about} onChange={changeHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Name);
