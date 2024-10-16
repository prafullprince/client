import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { categoryEndpoints } from "../api";

export async function fetchAllCategory(){
    const tid = toast.loading("...Loading");
    let res = [];
    try {
        // apiCall
        const result = await apiConnector("GET",categoryEndpoints.FETCH_ALL_CATEGORY);

        // validation
        if(!result.data.success){
            toast.error("Category not fetched");
        }

        toast.success("Category fetched successfully");
        res = result?.data?.data;

    } catch (error) {
        console.log(error);
    }
    toast.dismiss(tid);
    return res;
}
