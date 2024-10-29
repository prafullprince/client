import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import AddSubSecModals from "./AddSubSecModals";


function NestedView({ blog, setSecToggle, setSecId }) {
  // state
  const [addSubSecModal, setAddSubSecModal] = useState(null);

  return (
    <div className="relative">
      <div>
        {blog === null ? (
          <div>Blog not found</div>
        ) : (
          <div>
            {blog.blogContent.map((section) => (
              <details key={section._id}>
                {/* section */}
                <summary className="border-b border-[#424854] bg-[#2C333F] px-4 py-3 cursor-pointer text-lg text-white list-none flex items-center justify-between">
                  <div className="flex gap-1 items-center">
                    <RiArrowDropDownLine className="text-3xl text-richblack-25" />
                    <p>{section?.name}</p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setSecToggle((prev) => !prev);
                        setSecId(section?._id);
                      }}
                      className="text-base underline bg-richblack-900 py-1 rounded-lg justify-center text-yellow-50 flex items-center px-2 gap-1"
                    >
                      <p className="">
                        <MdEdit />
                      </p>
                      <p className="">edit</p>
                    </button>
                  </div>
                </summary>
                {/* subSection */}
                <div className="flex flex-col items-start gap-3 bg-richblack-900">
                  {/* content */}
                  {section?.subSection?.length === 0 ? (
                    <div className="flex flex-col items-start gap-2 px-12 py-3">
                      <p>No content found</p>
                    </div>
                  ) : (
                    <div className="px-12 py-3 flex flex-col gap-2 items-start">
                      {section?.subSection?.map((subSec) => (
                        <div key={subSec._id} className=" w-full flex items-center justify-between">
                          <p className=" text-richblack-100">{subSec?.body}</p>
                          <button
                            onClick={() => {
                              
                            }}
                            className="text-base underline bg-richblack-900 py-1 rounded-lg justify-center text-yellow-50 flex items-center px-2 gap-1"
                          >
                            <p className="">
                              <MdEdit />
                            </p>
                            <p className="">edit</p>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* buttons */}
                  {
                    <button
                      onClick={() => {
                        setAddSubSecModal({
                          blogId: blog._id,
                          sectionId: section._id,
                        });
                      }}
                      className="text-yellow-100 flex items-center justify-start gap-1 text-base px-5 py-2"
                    >
                      <IoMdAdd className="text-xl" />
                      Add lecture
                    </button>
                  }
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
      {addSubSecModal && (
        <AddSubSecModals
          addSubSecModal={addSubSecModal}
          setAddSubSecModal={setAddSubSecModal}
        />
      )}
    </div>
  );
}

export default NestedView;
