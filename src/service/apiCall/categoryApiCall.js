import { apiConnector } from "../apiConnector";
import { categoryEndpoints } from "../api";

export async function fetchAllCategory(){
    let res = [];
    try {
        // apiCall
        const result = await apiConnector("GET",categoryEndpoints.FETCH_ALL_CATEGORY);

        // validation
        if(!result.data.success){
            throw new Error("Category not fetched");
        }

        res = result?.data?.data;

    } catch (error) {
        console.log(error);
    }
    return res;
}
