import React from "react";
import Spinner from "../extraUi/Spinner";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../App.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import BlogCard from "../common/BlogCard";

function Slider({popularBlog}) {
  return (
    <div className=" mt-12">
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
        {
            popularBlog !== null ? (
                <div>
                    {
                        popularBlog?.map((blog)=>(
                            <SwiperSlide key={blog._id}>
                                <BlogCard blog={blog} styleFlex={false} />
                            </SwiperSlide>
                        ))
                    }
                </div>
            ) : (<Spinner />)
        }
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;


// <SwiperSlide>
//             <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//           </SwiperSlide>