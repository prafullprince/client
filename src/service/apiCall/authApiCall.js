import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../api";
import { setToken } from "../../slice/authSlice";
import { setImage, setUser } from "../../slice/profileSlice";

// sendotp
export async function sendOtp(email, navigate) {
  const tid = toast.loading("...Loading");
  try {
    // apiCall
    const result = await apiConnector("POST", authEndpoints.SEND_OTP, {
      email,
    });
    console.log("sendotp", result.data.data);
    // validation
    if (!result.data.success) {
      toast.error(result.data.message);
    }

    // success response
    toast.success(result.data.message);
    navigate("/verify-email");
  } catch (error) {
    console.log(error);
  }
  toast.dismiss(tid);
}

// signup
export async function signup(
  name,
  email,
  password,
  confirmPassword,
  accountType,
  otp,
  navigate
) {
  const tid = toast.loading("...Loading");
  try {
    // apiCall
    const result = await apiConnector("POST", authEndpoints.SIGNUP, {
      name,
      email,
      password,
      confirmPassword,
      accountType,
      otp,
    });
    console.log("signup", result.data.data);
    // validation
    if (!result.data.success) {
      toast.error(result.data.message);
    }

    // success response
    toast.success(result.data.message);
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
  toast.dismiss(tid);
}

// login
export async function login(email, password, navigate, dispatch) {
  const tid = toast.loading("...Loading");
  try {
    // apiCall
    const result = await apiConnector("POST", authEndpoints.LOGIN, {
      email,
      password,
    });

    // validation
    if (!result.data.success) {
      toast.error(result.data.message);
      return;
    }

    // setToken
    dispatch(setToken(result.data.token));
    localStorage.setItem("token", JSON.stringify(result.data.token));

    const userImage = result.data.user.image
      ? result.data.user.image
      : `https://api.dicebear.com/5.x/initials/svg?seed=${
          result.data.user.name.split(" ")[0]
        } ${result.data.user.name.split(" ")[1]}`;
    dispatch(setUser({ ...result.data.user, image: userImage }));
    dispatch(setImage(userImage));
    localStorage.setItem("user", JSON.stringify(result.data.user));
    localStorage.setItem("image", JSON.stringify(userImage));

    // success response
    toast.success(result.data.message);
    navigate("/dashboard/my-profile");
  } catch (error) {
    console.log(error);
  }
  finally {
    toast.dismiss(tid);
  }
}

// logout
export async function logout(navigate, dispatch) {
  const tid = toast.loading("...Loading");
  try {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("image");
    toast.success("Logged Out");
    navigate("/login");
  } catch (error) {
    console.log(error);
  }
  toast.dismiss(tid);
}

// login
export async function changePassword(
  oldPassword,
  newPassword,
  confirmNewPassword,
  token
) {
  const tid = toast.loading("...Loading");
  try {
    // apiCall
    const result = await apiConnector(
      "POST",
      authEndpoints.CHANGE_PASS,
      {
        oldPassword,
        newPassword,
        confirmNewPassword,
      },
      {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      }
    );

    // validation
    if (!result.data.success) {
      toast.error(result.data.message);
      return;
    }

    // success response
    toast.success("Password Changed");
  } catch (error) {
    console.log(error);
  }
  finally{
    toast.dismiss(tid);
  }
}
