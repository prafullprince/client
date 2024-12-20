import React, { memo, useEffect, useRef } from "react";
// import { useNavigate } from 'react-router-dom';

function ConfirmationModal({ modalData, setModalData }) {
  // const btnRef = useRef(null);

  // useEffect(() => {
  //   let tid = setTimeout(
  //     document.addEventListener("mousedown", () => {
  //       if (btnRef.current && !btnRef.current.onClick) {
  //         setModalData(null);
  //       }
  //     }),
  //     200
  //   );

  //   return () => {
  //     clearTimeout(tid);
  //   };
  // }, []);

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
        <div>
          <div className="flex justify-between">
            <p className="text-2xl font-semibold text-richblack-5">
              {modalData.text1}
            </p>
            <button className=" text-pink-200 font-bold text-2xl" onClick={()=>setModalData(null)}>X</button>
          </div>
          <p className="mt-3 mb-5 leading-6 text-richblack-200">
            {modalData.text2}
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <button
            className="cursor-pointer rounded-md py-[8px] px-[20px] font-semibold text-richblack-900 bg-yellow-50"
            onClick={modalData.btn1Handler}
          >
            {modalData.btn1Text}
          </button>
          <button
            className="cursor-pointer rounded-md bg-richblack-900 py-[8px] px-[20px] font-semibold text-richblack-5"
            onClick={modalData.btn2Handler}
          >
            {modalData.btn2Text}
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(ConfirmationModal);
