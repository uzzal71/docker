import React from "react";
import { Navigate } from "react-router-dom";
import { getUserInfo } from "../utils/authUtils";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const userInfo = getUserInfo();

  if (!userInfo?.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
