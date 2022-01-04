import * as yup from "yup";

export const createUserSchema = yup.object().shape({
  username: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .max(255)
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters"),
});