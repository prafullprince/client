import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../service/apiCall/authApiCall";
import { useDispatch } from "react-redux";

function ProfileDropDownConModal({ modalData, setModalData }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function dashClickHandler() {
    navigate("/dashboard/my-profile");
    setModalData(null);
  }

  function logoutClickHandler() {
    logout(navigate, dispatch);
    setModalData(null);
  }

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[330px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
        <div>
          <div className="flex justify-between">
            <p className="text-2xl font-semibold text-richblack-5">
              {modalData?.text1}
            </p>
            <button onClick={()=>setModalData(null)} className=" text-pink-200 font-bold text-2xl">X</button>
          </div>
          <p className="mt-3 mb-5 leading-6 text-richblack-200">
            {modalData?.text2}
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <button
            className="cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-richblack-900"
            onClick={dashClickHandler}
          >
            {modalData?.btn1Text}
          </button>
          <button
            className="cursor-pointer rounded-md bg-richblack-200 py-[8px] px-[20px] font-semibold text-richblack-900"
            onClick={logoutClickHandler}
          >
            {modalData?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropDownConModal;
