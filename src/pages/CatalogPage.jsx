import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllCategory } from "../service/apiCall/categoryApiCall";
import { getCategoryBlogs } from "../service/apiCall/courseApiCall";
import Header from "../components/CatalogPage/Header";
import CatalogTab from "../components/CatalogPage/CatalogTab";
import Slider from "../components/CatalogPage/Slider";

function CatalogPage() {
  // hook
  const { catalogName } = useParams();

  // state
  const [categoriesId, setCateoriesId] = useState(null);
  const [allBlog, setAllBlog] = useState(null);
  const [allOtherBlog, setAllOtherBlog] = useState(null);
  const [tenMostViewedBlog, setTenMostViewedBlog] = useState(null);
  const [tenMostViewedOtherBlog, setTenMostViewedOtherBlog] = useState(null);
  const [tab,setTab] = useState(null);

  console.log(tab)
  console.log(tenMostViewedBlog)

  // find categoryId
  useEffect(() => {
    async function fetchCategoryId() {
      const res = await fetchAllCategory();
      const filteredCategory = res?.filter(
        (category) =>
          category?.name.split(" ").join("-").toLowerCase() === catalogName
      );
      const categoryId = filteredCategory[0]._id;
      setCateoriesId(categoryId);
    }
    fetchCategoryId();
  }, [catalogName]);

  // allCategoriesBlogs
  useEffect(() => {
    async function fetchAllBlogsOfCategory() {
      const result = await getCategoryBlogs(categoriesId);
      setAllBlog(result?.allBlogs);
      setAllOtherBlog(result?.allOtherBlogs);
      setTab(result?.tenMostViewedBlog);
      setTenMostViewedBlog(result?.tenMostViewedBlogs);
      setTenMostViewedOtherBlog(result?.tenMostViewedOtherBlogs);
    }
    fetchAllBlogsOfCategory();
  }, [categoriesId]);

  return (
    <div className=" text-white">
      <div>
        {/* header */}
        <Header />
        {/* heading and Tabs */}
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <h2 className=" text-3xl font-semibold text-[#F1F2FF]">Blogs to you started</h2>
          <CatalogTab popularBlog={tenMostViewedBlog} newBlog={allOtherBlog} />
        </div>
      </div>
    </div>
  );
}

export default CatalogPage;
