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
    CREATE_SUBSECTION : BASE_URL + "/blog/createSubSection"
}
