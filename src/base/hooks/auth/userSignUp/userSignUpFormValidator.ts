import * as yup from "yup";

export const userSignUpFormValidator = yup.object({
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
  password_confirmation: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .min(8, "Confirm password must be at least 8 characters long")
    .typeError("Confirm password must be a string"),
});
