import React from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

function ChangePass() {
  return (
    <div className="border border-[#2C333F] rounded-lg bg-[#161D29]">
      <div className="m-6 flex flex-col gap-4">
        {/* part 1 */}
        <div className="md:flex gap-4 justify-between items-center">
          <div className="text-[#F1F2FF] font-semibold text-xl">
            Change Password
          </div>
        </div>
        {/* part 2 */}
        <div className="flex md:flex-row flex-col gap-4 items-center">
          {/* oldPassword */}
          <div className=" flex flex-col gap-1 w-full">
            <Label className="ml-1 mb-1">Old Password</Label>
            <Input className=" bg-richblack-700" type="password" />
          </div>
          {/* new pass */}
          <div className=" flex flex-col gap-1 w-full">
            <Label className="ml-1 mb-1">New Password</Label>
            <Input className=" bg-richblack-700" type="password" />
          </div>
          {/* new pass */}
          <div className="w-full flex flex-col gap-1">
            <Label className="ml-1 mb-1">New Password</Label>
            <Input className=" bg-richblack-700" type="password" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePass;
