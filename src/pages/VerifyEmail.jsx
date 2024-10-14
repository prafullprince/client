import React, { useEffect, useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, sendOtp, signup } from "../service/apiCall/authApiCall";
import { BiLeftArrow } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import { BackgroundGradient } from "../components/ui/background-gradient";

function VerifyEmail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signUpData } = useSelector((state) => state.auth);

  // state
  const [otp, setOtp] = useState("");
  console.log(otp);
  // changeHandler
  function changeHandler(e) {
    setOtp(e.target.value);
  }

  // submitHandler
  function submitHandler(e) {
    e.preventDefault();

    // fetch signupdata
    const { name, email, password, confirmPassword, accountType } = signUpData;

    // signup apiCall
    signup(name, email, password, confirmPassword, accountType, otp, navigate);
  }

  useEffect(() => {
    if (!signUpData) {
      navigate("/signup");
    }
  }, []);

 
  return (
    <div className="relative">
      <div className="fixed inset-0 bg-opacity-30 z-50 backdrop-blur-sm flex flex-col justify-center items-center">
        <BackgroundGradient>
        <div className="flex flex-col items-start gap-1 px-12 py-16 border-r m-1 rounded-lg border bg-richblack-800 max-w-[500px]">
          <div className="flex flex-col gap-2">
            <div className="text-[#F1F2FF] text-3xl font-semibold">Verify Email</div>
            <div className="text-[#AFB2BF] text-lg">A verification code has been sent to you. Enter the code below</div>
          </div>
          <form onSubmit={submitHandler} className="mt-10 max-w-[600px] w-full">
            <div className="mb-4 flex flex-col gap-2">
              <Label className="text-lg ml-1" htmlFor="email">
                Enter Otp
              </Label>
              <Input
                className="bg-richblack-900 border-richblack-900"
                id="email"
                placeholder="Enter received otp here"
                type="text"
                name="otp"
                value={otp}
                onChange={changeHandler}
              />
            </div>
            <div className="flex justify-between ml-1 items-center w-full">
              <button
                type="submit"
                className=" bg-[#FFD60A] text-[#000814] rounded-lg px-3 py-2 w-full font-medium"
              >
                Verify and Register
              </button>
            </div>
            <div className="flex mt-4 justify-between mx-1 text-base">
                <div className="px-1 py-2 flex gap-1 items-center text-white font-medium">
                    <FaArrowLeft />
                    <button
                    onClick={()=> navigate("/login")}
                        className="rounded-lg w-fit text-white"
                    >
                        Back to Login
                    </button>
                </div>
                <div className="px-1 py-2 flex items-center gap-1 text-[#47A5C5] font-medium">
                    <IoIosRefresh />
                    <button
                        onClick={()=>sendOtp(signUpData.email,navigate)}
                            className="rounded-lg w-fit"
                        >
                            resend code
                        </button>
                </div>
            </div>
          </form>
        </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}

export default VerifyEmail;
