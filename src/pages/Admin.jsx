import React from "react";
import SignIn from "../components/(admin)/auth/SignIn";
import { useSelector } from "react-redux";
import Dashboard from "../components/(admin)/dashboard/Dashboard";

const Admin = () => {
  const { isAuthenticated } = useSelector((state) => state.authentication);
  console.log(isAuthenticated);
  return <div>{isAuthenticated ? <Dashboard /> : <SignIn />}</div>;
};

export default Admin;
