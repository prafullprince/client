import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import OpenRoute from "./components/auth/OpenRoute";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import VerifyEmail from "./pages/VerifyEmail";
import Navbar from "./components/common/Navbar";
import MainDashboard from "./pages/MainDashboard";
import PrivateRoute from "./components/auth/PrivateRoute";
import MyProfile from "./components/Dashboard/MyProfile";
import AddBlog from "./components/Dashboard/Blog/AddBlog";
import BloggerDashboard from "./components/Dashboard/BloggerDashboard";
import Setting from "./components/Dashboard/Setting/Setting";
import BlogDetails from "./pages/BlogDetails";
import BlogCategory from "./pages/BlogCategory";
import CatalogPage from "./pages/CatalogPage";
import Instruction from "./pages/Instruction";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";



function App() {

  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem("token");

    if(token){
      try {
        const decode = jwtDecode(token);
        const currentTime = Date.now()/1000;

        if(decode.exp < currentTime ){
          localStorage.removeItem("token");
          navigate("/login");
        }
        else{
          let diff = decode.exp - currentTime;
          setTimeout(()=>{
            localStorage.removeItem("token");
            navigate("/login");
          },diff)
        }
      } catch (error) {
        console.log(error);
      }
    }
  },[])

  
  return (
    <div className="flex flex-col min-h-screen w-screen bg-richblack-900">
      <Navbar />

      <Routes>

        {/* homepage */}
        <Route path="/" element={<Homepage />} />
        <Route path="/blogDetails/:blogId" element={<BlogDetails />} />
        {/* <Route path="/blog/list?v=category" element={<BlogCategory />} /> */}
        <Route path="/blog/list" element={<BlogCategory />} />
        <Route path="/catalog/:catalogName" element={<CatalogPage />} />
        <Route path="/about" element={<Instruction />} />

        {/* signup route */}
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <SignupPage />
            </OpenRoute>
          }
        />

        {/* login route */}
        <Route
          path="/login"
          element={
            <OpenRoute>
              <LoginPage />
            </OpenRoute>
          }
        />

        {/* verify-email route */}
        <Route path="/verify-email" element={
          <OpenRoute>
            <VerifyEmail />
          </OpenRoute>
        } />

        {/* private route */}
        <Route element={<PrivateRoute><MainDashboard /></PrivateRoute>}>
            <Route path="dashboard/my-profile" element={<MyProfile />} />
            <Route path="dashboard/add-blog" element={<AddBlog />} />
            <Route path="dashboard/blogger" element={<BloggerDashboard />}/>
            <Route path="dashboard/settings" element={<Setting />} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
