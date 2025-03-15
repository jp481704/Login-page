import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const Login = () => {
  // const [formData, setFormData] = useState({ name: "", password: "" });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, "Username must be at least 3 characters long")
        .required("Required"),
      password: Yup.string()
        .min(8, "Password should be at least 8 characters long")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      try {
        const response = await axios.post(
          "http://134.209.155.122:8087/api/v1/auth",
          {
            username: values.username,
            password: values.password,
          }
        );
        console.log(response, "res");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-6">
          Login
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <label
              className="text-lg font-medium text-gray-700"
              htmlFor="userName"
            >
              Username
            </label>
            <input
              className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="userName"
              name="username"
              onChange={formik.handleChange}
              type="text"
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 text-sm">
                {formik.errors.username}
              </div>
            ) : null}
          </div>
          <div>
            <label
              className="text-lg font-medium text-gray-700"
              htmlFor="passWord"
            >
              Password
            </label>
            <input
              className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="passWord"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
