import React from "react";
import LoginForm from "../../components/Auth/LoginForm";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-6">
          Login
        </h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
