import * as yup from "yup";

export const userSignInFormValidator = yup.object({
  email: yup
    .string()
    .nullable()
    .email()
    .required("email is required")
    .typeError("invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .typeError("Password must be a string"),
});
