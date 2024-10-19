import { Route, Routes } from "react-router-dom";
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
import Setting from "./components/Dashboard/Setting";
import BlogDetails from "./pages/BlogDetails";
import BlogCategory from "./pages/BlogCategory";
import CatalogPage from "./pages/CatalogPage";


function App() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-richblack-900">
      <Navbar />

      <Routes>

        {/* homepage */}
        <Route path="/" element={<Homepage />} />
        <Route path="/blog/details/:blogId" element={<BlogDetails />} />
        {/* <Route path="/blog/list?v=category" element={<BlogCategory />} /> */}
        <Route path="/blog/list" element={<BlogCategory />} />
        <Route path="/catalog/:catalogName" element={<CatalogPage />} />


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
