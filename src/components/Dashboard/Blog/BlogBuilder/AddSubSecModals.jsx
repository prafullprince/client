import React, { useState } from "react";
import { Label } from "../../../ui/label";
import { createSubSection } from "../../../../service/apiCall/courseApiCall";
import { useDispatch, useSelector } from "react-redux";
import { FileUpload } from "../../../ui/file-upload";
import toast from "react-hot-toast";

function AddSubSecModals({ addSubSecModal, setAddSubSecModal }) {
  // state
  const [body, setBody] = useState("");
  const [files, setFiles] = useState([]);
  const [option, setOption] = useState("Image");

  // file uploadHandler
  const handleFileUpload = (files) => {
    setFiles(files);
  };

  // store
  const { token } = useSelector((state) => state.auth);

  // hook
  const dispatch = useDispatch();

  // create subSection
  async function submitHandler(e) {
    e.preventDefault();
    if (files.length === 0) {
      toast.error("Image not found");
      return;
    }
    await createSubSection(
      body,
      addSubSecModal.blogId,
      addSubSecModal.sectionId,
      files[0],
      token,
      dispatch
    );
    setAddSubSecModal(null);
  }

  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <form
        onSubmit={submitHandler}
        className="w-11/12 max-w-[250px] md:max-w-[550px] rounded-lg border border-richblack-400 bg-richblack-800 p-6 flex flex-col items-start gap-6"
      >
        <p className="text-2xl font-semibold text-richblack-5">
          Add SubSection
        </p>
        <div className="flex flex-col gap-3 items-start w-full">
          {/* title */}
          <div className=" w-full">
            <label className=" text-richblack-25">
              Write content of current topic/section
            </label>
            <textarea
              required
              className=" bg-richblack-900 px-2 py-1 w-full h-32 md:h-60 outline-none rounded-lg mt-2"
              type="text"
              name="body"
              placeholder="Write content here"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </div>
          {/* radio button */}
          <div>
            <div className=" text-richblack-25 text-xl">Select file option</div>
            <div className="flex items-center gap-2 mt-3">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  className={`w-5 h-5 cursor-pointer flex items-center justify-center border-2 rounded ${
                    option ? "bg-green-500 border-green-500" : "border-gray-400"
                  }`}
                  type="checkbox"
                  value="Image"
                  checked={option === "Image"}
                  onChange={(e) => setOption(e.target.value)}
                />
                Image
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  className={`w-5 h-5 cursor-pointer flex items-center justify-center border-2 rounded ${
                    option ? "bg-green-500 border-green-500" : "border-gray-400"
                  }`}
                  type="checkbox"
                  value="Video"
                  checked={option === "Video"}
                  onChange={(e) => setOption(e.target.value)}
                />
                Video
              </label>
            </div>
          </div>
          {/* file Upload */}
          {option === "Image" ? (
            <div className=" w-full">
              <div className="w-full mx-auto min-h-64 border border-dashed bg-white border-richblack-50 dark:bg-black text-richblack-25 rounded-lg">
                <FileUpload onChange={handleFileUpload} />
              </div>
            </div>
          ) : (
            <div className=" w-full">
              <div className="w-full mx-auto min-h-64 border border-dashed bg-white border-richblack-50 dark:bg-black text-richblack-25 rounded-lg">
                <FileUpload onChange={handleFileUpload} />
              </div>
            </div>
          )}
          {/* video/upload */}
        </div>
        <div className="flex items-center gap-x-4">
          <button
            type="submit"
            className="cursor-pointer rounded-md py-[8px] px-[20px] font-semibold text-richblack-900 bg-yellow-50"
          >
            Add
          </button>
          <button
            className="cursor-pointer rounded-md bg-richblack-900 py-[8px] px-[20px] font-semibold text-richblack-5"
            onClick={() => setAddSubSecModal(null)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddSubSecModals;
