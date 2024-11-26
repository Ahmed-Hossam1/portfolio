import * as yup from "yup";

export const ContactSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .required()
    .matches(/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, "email is not valid"),
  message: yup.string().required(),
});
