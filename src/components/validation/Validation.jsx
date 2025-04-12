import * as Yup from "yup";

export const validation = Yup.object({
      username: Yup.string()
        .min(3, "Username must be at least 3 characters long")
        .required("Required"),
      password: Yup.string()
        .min(8, "Password should be at least 8 characters long")
        .required("Required"),
    })