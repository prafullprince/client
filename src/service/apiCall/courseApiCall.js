import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { blogEndpoints } from "../api";
import { setBlog, setStep } from "../../slice/blogSlice";

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
        res = result?.data?.data;
        toast.success("Category fetched successfully");

    } catch (error) {
        console.log(error);
    }
    toast.dismiss(tid);
    return res;
}
