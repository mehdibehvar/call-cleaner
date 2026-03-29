"use client";
import { useState } from "react";
import Login from "../components/login";
import Register from "../components/register";
export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
}
const LoginTemplate = () => {
  const [currentView, setCurrentView] = useState("sign-in");
  return (
    <>
      {currentView === "sign-in" && <Login setCurrentView={setCurrentView} />}
      {currentView === "register" && (
        <Register setCurrentView={setCurrentView} />
      )}
    </>
  );
};

export default LoginTemplate;
