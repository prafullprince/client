const BASE_URL = "https://kayakalps.onrender.com/api/v1";


export const authEndpoints = {
    SIGNUP:BASE_URL + "/auth/signup",
    SEND_OTP:BASE_URL + "/auth/sendotp",
    LOGIN: BASE_URL + "/auth/login"
}


export const profileEndpoints = {
    UPDATE_PIC:BASE_URL + "/user/updateProfilePic",

}

export const categoryEndpoints = {
    FETCH_ALL_CATEGORY:BASE_URL + "/blog/showAllCategories",
}

export const blogEndpoints = {
    CREATE_BLOG: BASE_URL + "/blog/createBlog",
    CREATE_SECTION: BASE_URL + "/blog/createSection",
    CREATE_SUBSECTION : BASE_URL + "/blog/createSubSection",
    PUBLISH_BLOG : BASE_URL + "/blog/updateBlog",
    SEARCH_BLOG: BASE_URL + "/blog/searchBlogApi",
    FETCH_ALL_BLOG: BASE_URL + "/blog/getAllBlogs",
    FETCH_BLOG_DETAILS: BASE_URL + "/blog/blogPageDetails",
    CREATE_VIEWS: BASE_URL + "/blog/calculateViews"
}
