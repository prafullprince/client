import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAllCategory } from "../service/apiCall/categoryApiCall";
import { getCategoryBlogs } from "../service/apiCall/courseApiCall";
import Header from "../components/CatalogPage/Header";
import CatalogTab from "../components/CatalogPage/CatalogTab";
import Slider from "../components/CatalogPage/Slider";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

function CatalogPage() {
  // hook
  const { catalogName } = useParams();

  // state
  const [categoriesId, setCateoriesId] = useState(null);
  const [allBlog, setAllBlog] = useState(null);
  const [allOtherBlog, setAllOtherBlog] = useState(null);
  const [tenMostViewedBlog, setTenMostViewedBlog] = useState(null);
  const [tenMostViewedOtherBlog, setTenMostViewedOtherBlog] = useState(null);
  const [tab, setTab] = useState(null);
  const [category, setCategory] = useState(null);

  console.log(tab);
  console.log(tenMostViewedBlog);

  // find categoryId
  useEffect(() => {
    async function fetchCategoryId() {
      const res = await fetchAllCategory();
      const filteredCategory = res?.filter(
        (category) =>
          category.name.split(" ").join("-").toLowerCase() === catalogName
      );
      const categoryId = filteredCategory[0]._id;
      setCateoriesId(categoryId);
      setCategory(filteredCategory[0]);
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
        <Header category={category} />
        {/* heading and Tabs */}
        <div className="w-[90%] lg:w-[80%] mx-auto mt-12">
          {/* section 1 */}
          <h2 className=" text-3xl font-semibold text-[#F1F2FF]">
            Blogs to get you started
          </h2>
          <CatalogTab popularBlog={tenMostViewedBlog} newBlog={allOtherBlog} />
          {/* section 2 */}
          <div className=" mt-24">
            <div>
              <h2 className=" text-3xl font-semibold text-[#F1F2FF]">
                Top courses in Python and Machine Learning
              </h2>
            </div>
            <Slider popularBlog={allBlog} />
          </div>
          {/* section 3 */}
          <div className=" mt-24">
            <h2 className=" text-3xl font-semibold text-[#F1F2FF]">
              Frequently Viewed Blogs
            </h2>
            <div className="mt-1 grid gap-1 lg:grid-cols-2 2xl:grid-cols-3">
              {tenMostViewedOtherBlog?.map((blog) => (
                <Link className=" w-full" to={`/blogDetails/${blog?._id}`}>
                  <CardContainer className="inter-var w-full">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                      >
                        {blog?.name}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                      >
                        {blog?.description}
                      </CardItem>
                      <CardItem
                        translateZ="100"
                        rotateX={20}
                        rotateZ={-10}
                        className="w-full mt-4"
                      >
                        <img
                          src={blog?.thumbnail}
                          height="1000"
                          width="1000"
                          className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </CardItem>
                      <div className="flex justify-between items-center mt-20">
                        <CardItem
                          translateZ={20}
                          translateX={-40}
                          as="button"
                          className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                          {blog?.totalViews} views
                        </CardItem>
                        <CardItem
                          translateZ={20}
                          translateX={40}
                          as="button"
                          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                          {blog?.blogger?.name}
                        </CardItem>
                      </div>
                    </CardBody>
                  </CardContainer>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogPage;
