import toast from "react-hot-toast";
import { profileEndpoints } from "../api";
import { apiConnector } from "../apiConnector";
import { setUser } from "../../slice/profileSlice";

export async function updateProfilePic(imageFile,token,dispatch) {
    const tid = toast.loading("...Loading");
    try {
      // apiCall
      const result = await apiConnector("PUT", profileEndpoints.UPDATE_PIC,
        {imageFile},
        {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        }
      )
  
      // validation
      if (!result.data.success) {
        toast.error(result.data.message);
      }
  
      // setImage
      localStorage.setItem("image", JSON.stringify(result.data.updatedUser.image));
      dispatch(setUser({ ...result.data.updatedUser, image: result.data.updatedUser.image }));
      localStorage.setItem("user", JSON.stringify(result.data.updatedUser));
  
      // success response
      toast.success("Profile Pic Updated");
    } catch (error) {
      console.log(error);
    }
    toast.dismiss(tid);
  }
  