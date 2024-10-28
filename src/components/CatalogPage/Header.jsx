import React from "react";

function Header({category}) {
  console.log(category)
  return (
    <div className="bg-[#161D29]">
      {/* content */}
      <div className="w-[90%] md:w-[80%] mx-auto py-10 flex justify-between">
        {/* left part */}
        <div className="py-2 flex flex-col justify-center">
          {/* catalog route */}
          <div className="flex gap-2">
            <p className=" text-sm text-[#838894]">Home / Catalog /</p>
            <span className=" text-sm font-medium text-[#FFD60A]">{category?.name}</span>
          </div>
          {/* categoryName */}
          <div className="mt-3">
            <p className="text-[#F1F2FF] text-3xl font-medium">{category?.name}</p>
          </div>
          {/* category description */}
          <div className="mt-3">
            <p className="text-[#999DAA] text-sm">{category?.description}</p>
          </div>
        </div>
        {/* right part */}
        <div className="flex flex-col my-1">
          <div className="text-[#F1F2FF]">Related resources</div>
          <div className="mt-2 flex flex-col gap-4 px-2">
            <ul className=" list-disc px-2">
              <li className="#AFB2BF px-2">Doc Python</li>
              <li className="#AFB2BF px-2">Cheatsheets</li>
              <li className="#AFB2BF px-2">Articles</li>
              <li className="#AFB2BF px-2">Community Forums</li>
              <li className="#AFB2BF px-2">Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
