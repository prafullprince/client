import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../service/apiCall/authApiCall";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // state
  const [formData,setFormData] = useState({
    email:"",
    password:"",
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

    login(formData.email,formData.password,navigate,dispatch);


  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-caribbeangreen-900 dark:text-white">
        Welcome to Kayakalp Blog
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-3 dark:text-white">
        Registered to inhance your thought process.
      </p>

      <form className="mt-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="email">Email Address</Label>
          <Input className="bg-richblack-800 border-richblack-900" id="email" placeholder="projectmayhem@fc.com" type="email" name="email" value={formData.email} onChange={changeHandler} />
        </LabelInputContainer>
        <LabelInputContainer className="mb-6">
          <Label htmlFor="password">Password</Label>
          <Input className="bg-richblack-800 border-richblack-900" id="password" placeholder="Enter your password here" type="password" name="password" value={formData.password} onChange={changeHandler} />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Log in &rarr;
          <BottomGradient />
        </button>

        {/* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */}

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
