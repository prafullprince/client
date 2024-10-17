import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { blogEndpoints } from "../api";
import { setBlog, setStep } from "../../slice/blogSlice";


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
export async function createSubSection(body,blogId,sectionId,token,dispatch){
    const tid = toast.loading("...Loading");
    let res = [];
    try {
        // apiCall
        const result = await apiConnector("POST",blogEndpoints.CREATE_SUBSECTION,{body,blogId,sectionId},
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

