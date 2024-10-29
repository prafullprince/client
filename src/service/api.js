const BASE_URL = "https://kayakalps.onrender.com/api/v1";


export const authEndpoints = {
    SIGNUP:BASE_URL + "/auth/signup",
    SEND_OTP:BASE_URL + "/auth/sendotp",
    LOGIN: BASE_URL + "/auth/login",
    CHANGE_PASS: BASE_URL + "/auth/changepassword"
}


export const profileEndpoints = {
    UPDATE_PIC: BASE_URL + "/user/updateProfilePic",
    UPDATE_PROFILE: BASE_URL + "/user/updateProfile"
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
    CREATE_VIEWS: BASE_URL + "/blog/calculateViews",
    CREATE_LIKE: BASE_URL + "/blog/likeBlog",
    CREATE_COMMENT: BASE_URL + "/blog/createComment",
    FETCH_POST_COMMENTS: BASE_URL + "/blog/getAllComments",
    FETCH_BLOGGER_POSTS: BASE_URL + "/blog/getBloggerPosts",
    FETCH_CATEGORY_BLOGS: BASE_URL + "/blog/getBlogsOfCategory"
}
