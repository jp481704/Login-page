import React, { useState } from "react";
import InputFiled from "../Form/InputFiled";
import { useFormik } from "formik";
import { validation } from "../validation/Validation";
import axios from "axios";
import config from "../../config/config";
import userApi from "../../config/userApi";
import { useNavigate } from "react-router";
import { useAuth } from "../../Context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();

  const {login} = useAuth()
  const [errorMess, setErrorMess] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(`${config.URL}${userApi.userLogin}`, values);
console.log(res,"resss")
        const login_token = res?.data?.data?.authToken;
        if (login_token) {
          login(login_token); // call context login
          navigate("/country"); // protected route
        } else {
          setErrorMess("Invalid credentials");
        }
      } catch (error) {
        setErrorMess(error?.response?.data?.message || "Login failed"); 
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <InputFiled
          label="Username"
          name="username"
          id="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
          touched={formik.touched.username}
        />
        <InputFiled
          label="Password"
          name="password"
          id="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
          touched={formik.touched.password}
        />

        {errorMess && <p className="text-red-500 text-sm">{errorMess}</p>}

        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full py-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          {formik.isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
