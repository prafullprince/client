import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../service/apiCall/authApiCall";

function ChangePass() {

  // hook
  const { token } = useSelector((state)=>state.auth);
  const dispatch = useDispatch();

  // state
  const [formData,setFormData] = useState({
    oldPassword:"",
    newPassword:"",
    confirmNewPassword:""
  });

  function changeHandler(e){
    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  async function submitHandler(){
    const response = await changePassword(formData.oldPassword,formData.newPassword,formData.confirmNewPassword,token);
    if(response){
      setFormData(null);
    }
  }


  return (
    <div className="border border-[#2C333F] rounded-lg bg-[#161D29]">
      <div className="m-6 flex flex-col gap-4">
        {/* part 1 */}
        <div className="md:flex gap-4 justify-between items-center">
          <div className="text-[#F1F2FF] font-semibold text-xl">
            Change Password
          </div>
          <div onClick={submitHandler} className=" text-richblack-900 font-semibold rounded-lg bg-yellow-50 py-2 px-4">
            Save
          </div>
        </div>
        {/* part 2 */}
        <div className="flex md:flex-row flex-col gap-4 items-center">
          {/* oldPassword */}
          <div className=" flex flex-col gap-1 w-full">
            <Label className="ml-1 mb-1">Old Password</Label>
            <Input className=" bg-richblack-700" type="password" name="oldPassword" value={formData.oldPassword} onChange={changeHandler} />
          </div>
          {/* new pass */}
          <div className=" flex flex-col gap-1 w-full">
            <Label className="ml-1 mb-1">New Password</Label>
            <Input className=" bg-richblack-700" type="password" name="newPassword" value={formData.newPassword} onChange={changeHandler} />
          </div>
          {/* new pass */}
          <div className="w-full flex flex-col gap-1">
            <Label className="ml-1 mb-1">Confirm New Password</Label>
            <Input className=" bg-richblack-700" type="password" name="confirmNewPassword" value={formData.confirmNewPassword} onChange={changeHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ChangePass);
