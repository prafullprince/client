const BASE_URL = "http://localhost:4000/api/v1";


export const authEndpoints = {
    SIGNUP:BASE_URL + "/auth/signup",
    SEND_OTP:BASE_URL + "/auth/sendotp",
    LOGIN: BASE_URL + "/auth/login"
}
