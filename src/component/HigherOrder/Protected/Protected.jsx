import { useSelector } from "react-redux";
import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ requireLogin, requireRoles }) => {
  const auth = useSelector((state) => state.auth);

  if (requireLogin && !auth.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;
