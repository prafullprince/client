import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function OpenRoute({ children }) {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth?.token);

  useEffect(() => {
    if (token !== null) {
      navigate("/"); // Navigate after the component renders
    }
  }, [token, navigate]);

  if (token === null) {
    return children;
  } else {
    return <Navigate to={"/"} />; // Don't render children when navigating away
  }
}

export default OpenRoute;
