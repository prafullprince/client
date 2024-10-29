import React from "react";
import HighlightText from "../components/common/HighlightText";

function Instruction() {
  return (
    <div>
      {/* Features */}
      <div className="bg-[#161D29] flex flex-col gap-6">
        {/* content */}
        {/* Features Introduction */}
        <div className="w-[90%] md:w-[80%] mx-auto pb-8">
          <p className=" text-3xl pt-8">
            <HighlightText text={"Features Introduction"} />
          </p>
          <ul className=" mt-4 text-richblack-50">
            <li>&rarr; You can create blog but only after register.</li>
            <li>
              &rarr; You can view all available blog on this website without
              register.
            </li>
            <li>
              &rarr; You can like and comment on blog but only after
              register.You will see tips on how to create blogs further.
            </li>
            <li>
              &rarr; You can create course also when sign up with instructor
              account(on signupPage).It's not available yet but comming soon.
            </li>
            <li>&rarr; You can see other features while using.</li>
            <li>
              &rarr; You can search blog,you can visit blogs of particular
              category by clicking category dropdown.
            </li>
          </ul>
        </div>
        {/* How to register */}
        <div className="w-[90%] md:w-[80%] mx-auto">
          <p className=" text-3xl">
            <HighlightText text={"How to register"} />
          </p>
          <ul className=" mt-4 text-richblack-50">
            <li>
              <HighlightText text={"Mobile "} />
              &rarr; Logo: Clicking on it navigates to the homepage.{" "}
            </li>
            <li>
              &rarr; Search Bar: Allows users to search for any blog by clicking
              and typing keywords.
            </li>
            <li>
              &rarr; Category Dropdown: Displays available categories on click;
              selecting any option will show blogs related to that specific
              category.
            </li>
            <li>
              &rarr; Icon: Clicking this icon opens a modal, which contains:{" "}
              <br></br>
              <p className=" ml-3">
                A Sign Up / Log In button to access the authentication page.
                <br></br> An Instructions button to navigate to the instructions
                page.
              </p>
            </li>
            <li><HighlightText text={"Desktop "} /> &rarr; Same as mobile almost.You can see others things</li>
          </ul>
        </div>
        {/* Interaction tips */}
        <div className="w-[90%] md:w-[80%] mx-auto pb-8">
          <p className=" text-3xl pt-8">
            <HighlightText text={"Interaction tips"} />
          </p>
          <ul className=" mt-4 text-richblack-50">
            <li>&rarr; You can create blog but only after register.</li>
            <li>
              &rarr; You can view all available blog on this website without
              register.
            </li>
            <li>
              &rarr; You can like and comment on blog but only after
              register.You will see tips on how to create blogs further.
            </li>
            <li>
              &rarr; You can create course also when sign up with instructor
              account(on signupPage).It's not available yet but comming soon.
            </li>
            <li>&rarr; You can see other features while using.</li>
          </ul>
        </div>
        {/* Search Category tips */}
        <div className="w-[90%] md:w-[80%] mx-auto pb-8">
          <p className=" text-3xl pt-8">
            <HighlightText text={"Search/Category Tips"} />
          </p>
          <ul className=" mt-4 text-richblack-50">
            <li>&rarr; You can create blog but only after register.</li>
            <li>
              &rarr; You can view all available blog on this website without
              register.
            </li>
            <li>
              &rarr; You can like and comment on blog but only after
              register.You will see tips on how to create blogs further.
            </li>
            <li>
              &rarr; You can create course also when sign up with instructor
              account(on signupPage).It's not available yet but comming soon.
            </li>
            <li>&rarr; You can see other features while using.</li>
          </ul>
        </div>
        {/* Add blog tips */}
        <div className="w-[90%] md:w-[80%] mx-auto pb-8">
          <p className=" text-3xl pt-8">
            <HighlightText text={"Add blog tips"} />
          </p>
          <ul className=" mt-4 text-richblack-50">
            <li>&rarr; You can create blog but only after register.</li>
            <li>
              &rarr; You can view all available blog on this website without
              register.
            </li>
            <li>
              &rarr; You can like and comment on blog but only after
              register.You will see tips on how to create blogs further.
            </li>
            <li>
              &rarr; You can create course also when sign up with instructor
              account(on signupPage).It's not available yet but comming soon.
            </li>
            <li>&rarr; You can see other features while using.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Instruction;
