import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import Tab from "./Tab";
import { ACCOUNT_TYPE } from "../../helper/constant";
import { sendOtp } from "../../service/apiCall/authApiCall";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSignUpData } from "../../slice/authSlice";

export default function SignupForm() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // state
  const [accountType,setAccountType] = useState(ACCOUNT_TYPE.BLOGGER);
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  });

  // changeHandler
  function changeHandler(e){
    setFormData((prev)=>({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  // submitHandler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // collect signupData for verification after otp registeration
    const signupData = {
      ...formData,
      accountType
    }

    // put in store
    dispatch(setSignUpData(signupData));

    // sendOtp apiCall
    await sendOtp(formData.email,navigate);

  };


  // tabData
  const tabData = [
    {
      id:1,
      type:ACCOUNT_TYPE.VISITOR,
      tabName:"Instructor"
    },
    {
      id:2,
      type:ACCOUNT_TYPE.BLOGGER,
      tabName:"Blogger"
    }
  ]


  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-caribbeangreen-900 dark:text-white">
        Welcome to Kayakalp Blog
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-3 dark:text-white">
        Registered to inhance your thought process.
      </p>

      <Tab field={accountType} setField={setAccountType} tabData={tabData} />
  
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname"> Full Name</Label>
            <Input className="bg-richblack-800 border-richblack-900" id="firstname" placeholder="Tyler Durden" type="text" name="name" value={formData.name} onChange={changeHandler} />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input className="bg-richblack-800 border-richblack-900" id="email" placeholder="projectmayhem@fc.com" type="email" name="email" value={formData.email} onChange={changeHandler} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input className="bg-richblack-800 border-richblack-900" id="password" placeholder="Enter your password here" type="password" name="password" value={formData.password} onChange={changeHandler} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Confirm Password</Label>
          <Input
            className="bg-richblack-800 border-richblack-900"
            id="twitterpassword"
            placeholder="Enter you password here"
            type="twitterpassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={changeHandler}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
