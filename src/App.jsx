import { Route, Routes } from "react-router-dom";
import "./App.css";
import OpenRoute from "./components/auth/OpenRoute";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import VerifyEmail from "./pages/VerifyEmail";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-screen bg-richblack-900">


      <Routes>

        {/* homepage */}
        <Route path="/" element={<Homepage />} />

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

      </Routes>


    </div>
  );
}

export default App;
