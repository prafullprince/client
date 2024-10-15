import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function OpenRoute({ children }) {
  const token = useSelector((state) => state.auth.token);

  if (token === null) {
    return children;
  } else {
    return <Navigate to={"/dashboard/my-profile"} />; // Don't render children when navigating away
  }
}

export default OpenRoute;
