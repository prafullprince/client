import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { authEndpoints } from "../api";
import { setToken } from "../../slice/authSlice";


// sendotp
export async function sendOtp(email,navigate){
    const tid = toast.loading("...Loading");
    try {
        // apiCall
        const result = await apiConnector("POST",authEndpoints.SEND_OTP,{email});
        console.log("sendotp",result.data.data);
        // validation
        if(!result.data.success){
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
export async function signup(name,email,password,confirmPassword,accountType,otp,navigate){
    const tid = toast.loading("...Loading");
    try {
        // apiCall
        const result = await apiConnector("POST",authEndpoints.SIGNUP,{name,email,password,confirmPassword,accountType,otp});
        console.log("signup",result.data.data);
        // validation
        if(!result.data.success){
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
export async function login(email,password,navigate,dispatch){
    const tid = toast.loading("...Loading");
    try {
        // apiCall
        const result = await apiConnector("POST",authEndpoints.LOGIN,{email,password});
        
        // validation
        if(!result.data.success){
            toast.error(result.data.message);
        }

        // setToken
        dispatch(setToken);
        localStorage.setItem("token",JSON.stringify(result.data.token));

        // success response
        toast.success(result.data.message);
        navigate("/user");

    } catch (error) {
        console.log(error);
    }
    toast.dismiss(tid);
}
