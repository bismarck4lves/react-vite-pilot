import * as Yup from "yup";

const PASSWORD_LENGTH = 8;

const email = Yup.string()
  .email("Email inválido")
  .required("Email obrigatório");

const code = Yup.string().required().min(5);
const password = Yup.string()
  .min(PASSWORD_LENGTH, "A senha deve conter no mínimo 8 caracteres")
  .required("O campo senha é obrigatório");

const new_password = Yup.string().min(PASSWORD_LENGTH).required();

export const singInValidator = Yup.object().shape({
  username: email,
  password,
});

export const emailValidator = Yup.object().shape({
  email,
});

export const codeValidator = Yup.object().shape({
  email,
  code,
});

export const passwordValidator = Yup.object().shape({
  email,
  code,
  new_password,
  password_confirmation: new_password.oneOf([Yup.ref("password"), null])
});

