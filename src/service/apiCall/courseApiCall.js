import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { blogEndpoints } from "../api";
import { setBlog, setLikeKey, setStep } from "../../slice/blogSlice";


// createBlog
export async function createBlog(name,description,whatYouWillLearn,category,thumbnail,token,dispatch){
    const tid = toast.loading("...Loading");
    let res = [];
    try {
        // apiCall
        const result = await apiConnector("POST",blogEndpoints.CREATE_BLOG,{name,description,whatYouWillLearn,category,thumbnail},
            {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            }
        );

        // validation
        if(!result.data.success){
            return toast.error("Category not fetched");
        }

        dispatch(setBlog(result?.data?.data));
        dispatch(setStep(2));
        localStorage.setItem("blog",JSON.stringify(result.data.data));

        res = result?.data?.data;
        toast.success("Blog Created");

    } catch (error) {
        console.log(error);
    }
    toast.dismiss(tid);
    return res;
}


// createSection
export async function createSection(name,blogId,token,dispatch){
    const tid = toast.loading("...Loading");
    let res = [];
    try {
        // apiCall
        const result = await apiConnector("POST",blogEndpoints.CREATE_SECTION,{name,blogId},
            {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            }
        );

        // validation
        if(!result.data.success){
            return toast.error("Category not fetched");
        }

        console.log("updatedBlog is: ",result?.data?.updatedBlog)
        dispatch(setBlog(result?.data?.updatedBlog));
        localStorage.setItem("blog",JSON.stringify(result?.data?.updatedBlog));
        res = result?.data?.updatedBlog;
        toast.success("Section Created");

    } catch (error) {
        console.log(error);
    }
    toast.dismiss(tid);
    return res;
}


// createSubSection
export async function createSubSection(body,blogId,sectionId,imageUrl,token,dispatch){
    const tid = toast.loading("...Loading");
    let res = [];
    try {
        // apiCall
        const result = await apiConnector("POST",blogEndpoints.CREATE_SUBSECTION,{body,blogId,sectionId,imageUrl},
            {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
            }
        );

        // validation
        if(!result.data.success){
            return toast.error("Category not fetched");
        }

        console.log("updatedBlog is: ",result?.data?.updatedBlog)
        dispatch(setBlog(result?.data?.updatedBlog));
        localStorage.setItem("blog",JSON.stringify(result?.data?.updatedBlog));
        res = result?.data?.updatedBlog;
        toast.success("SubSection Created");

    } catch (error) {
        console.log(error);
    }
    toast.dismiss(tid);
    return res;
}


// updateBlog
export async function publishBlog(blogId,status,token,dispatch){
    const tid = toast.loading("...Loading");
    try {
        // fetch apiCall
        const result = await apiConnector("PUT",blogEndpoints.PUBLISH_BLOG,{blogId,status},{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });
        
        // validation
        if(!result.data.success){
            throw new Error("Published failed");
        }

        // resetBlog
        dispatch(setBlog(null));
        dispatch(setStep(1));
        localStorage.removeItem("step");
        localStorage.removeItem("blog");
        toast.success(`blog ${result.data.updatedBlog.status}`);

    } catch (error) {
        console.log(error);
    }
    toast.dismiss(tid);
}

// searchBlog
export async function searchBlog(query){
    let res = [];
    try {
        // fetch apiCall
        const result = await apiConnector("POST",blogEndpoints.SEARCH_BLOG,null,null,{query});
        
        // validation
        if(!result.data.success){
            throw new Error("Published failed");
        }

        // update res
        res = result.data.matchedBlog;

    } catch (error) {
        console.log(error);
    }
    return res;
}

// Get All Blogs
export async function fetchAllBlogs(){
    let res = [];
    try {
        // fetch apiCall
        const result = await apiConnector("GET",blogEndpoints.FETCH_ALL_BLOG);
        
        // validation
        if(!result.data.success){
            throw new Error("Published failed");
        }

        // update res
        res = result.data.AllBlogs;

    } catch (error) {
        console.log(error);
    }
    return res;
}


// Get All BlogsDetails
export async function fetchAllBlogsDeatils(blogId){
    let res = null;
    try {
        // fetch apiCall
        const result = await apiConnector("POST",blogEndpoints.FETCH_BLOG_DETAILS,{blogId});
        
        // validation
        if(!result.data.success){
            throw new Error("Published failed");
        }

        // update res
        res = result.data.blogDetails;

    } catch (error) {
        console.log(error);
    }
    return res;
}


// Views increament
export async function increaseViews(blogId){
    try {
        // fetch apiCall
        const result = await apiConnector("PUT",blogEndpoints.CREATE_VIEWS,{blogId});
        
        // validation
        if(!result.data.success){
            return null;
        }

    } catch (error) {
        console.log(error);
    }
}


// Like/unlike api
export async function likeApis(blogId,token,dispatch){
    try {
        // fetch apiCall
        const result = await apiConnector("POST",blogEndpoints.CREATE_LIKE,{blogId},{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });
        console.log("first")
        // validation
        if(!result.data.success){
            return null;
        }

        const { key,totalLikes,data } = result.data;

        dispatch(setLikeKey(key));
        localStorage.setItem(`like_${blogId}`,JSON.stringify(key));

        return {key,totalLikes,data};

    } catch (error) {
        console.log(error);
    }
}



// comment apis
export async function createComment(blogId,body,token){
    try {
        // fetch apiCall
        const result = await apiConnector("POST",blogEndpoints.CREATE_COMMENT,{blogId,body},{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });
        console.log("first")
        // validation
        if(!result.data.success){
            return null;
        }
        console.log(result.data);
        const { totalComments } = result.data.updatedBlog;

        toast.success("Comment Successfull");

        return totalComments;

    } catch (error) {
        console.log(error);
    }
}


// comment apis
export async function getComment(blogId){
    let res = null;
    try {
        // fetch apiCall
        const result = await apiConnector("POST",blogEndpoints.FETCH_POST_COMMENTS,{blogId});
        console.log("first")
        // validation
        if(!result.data.success){
            return null;
        }
        console.log(result.data);
        res = result?.data?.data;

    } catch (error) {
        console.log(error);
    }
    return res;
}



// blogger posts apis
export async function getBloggerPosts(status,token){
    let res = null;
    try {
        // fetch apiCall
        const result = await apiConnector("POST",blogEndpoints.FETCH_BLOGGER_POSTS,{status},{
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        });
        console.log("first");
        // validation
        if(!result.data.success){
            return null;
        }
        console.log(result.data);
        res = result.data.data;

    } catch (error) {
        console.log(error);
    }
    return res;
}


// BlogsOfCategories
export async function getCategoryBlogs(categoryId){
    let res = null;
    try {
        // fetch apiCall
        const result = await apiConnector("POST",blogEndpoints.FETCH_CATEGORY_BLOGS,{categoryId});
        // validation
        if(!result.data.success){
            return null;
        }
        
        res = result?.data;

    } catch (error) {
        console.log(error);
    }
    return res;
}
