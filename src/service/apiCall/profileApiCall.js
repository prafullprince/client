import toast from "react-hot-toast";
import { profileEndpoints } from "../api";
import { apiConnector } from "../apiConnector";
import { setUser } from "../../slice/profileSlice";


// updateProfilePic
export async function updateProfilePic(imageFile, token, dispatch) {
  const tid = toast.loading("...Loading");
  try {
    // apiCall
    const result = await apiConnector(
      "PUT",
      profileEndpoints.UPDATE_PIC,
      { imageFile },
      {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      }
    );

    // setImage
    localStorage.setItem(
      "image",
      JSON.stringify(result.data.updatedUser.image)
    );
    dispatch(
      setUser({
        ...result.data.updatedUser,
        image: result.data.updatedUser.image,
      })
    );
    localStorage.setItem("user", JSON.stringify(result.data.updatedUser));

    // success response
    toast.success("Profile Pic Updated");
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
  toast.dismiss(tid);
}


// updateProfileInfo
export async function updateProfileInfo(name,about,contactNumber,dateOfBirth,gender,token,dispatch) {
  const tid = toast.loading("...Loading");
  try {
    // apiCall
    const result = await apiConnector(
      "PUT",
      profileEndpoints.UPDATE_PROFILE,
      { name,about,contactNumber,dateOfBirth,gender },
      {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      }
    );

    // setImage
    localStorage.setItem(
      "user",
      JSON.stringify(result.data.updatedUserDetails)
    );
    dispatch(
      setUser(result.data.updatedUserDetails)
    );

    // success response
    toast.success("Profile Info Updated");
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
  }
  toast.dismiss(tid);
}
