import { Stack, Typography } from "@mui/material";
import PasswordField from "components/Forms/PasswordField";
import TextField from "components/Forms/TextField";
import AuthContainer from "containers/AuthContainer";
import { useForm } from "react-hook-form";
import { authServices } from "services/auth";
import { useSnackbarContext } from "contexts/SnackbarContext";
import { useNavigate } from "react-router-dom";
import siteMap from "routes/siteMap";
import { singInValidator } from "validators/auth";
import * as Yup from "yup";
import { useState } from "react";
import AuthBox from "containers/AuthBox";
import ActionButton from "components/ActionButton";

type InputKeys = "username" | "password";

function Login() {
  const { control, watch, setError, clearErrors } = useForm();
  const [isValidForm, setIsValidForm] = useState(false);
  const { snackError } = useSnackbarContext();
  const navigate = useNavigate();

  async function validate() {
    try {
      clearErrors();
      const data = watch();
      await singInValidator.validate(data, { abortEarly: false });
      setIsValidForm(true);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          setError(error.path as InputKeys, {
            type: "manual",
            message: error.message,
          });
        });
      }
      setIsValidForm(false);
    }
  }

  function handleRequestNewPassword() {
    navigate(siteMap.auth.requestNewPassword);
  }

  function onHandleSubmit() {
    const data = watch();
    authServices
      .singIn(data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        snackError("não foi possivel logar", error);
      });
    navigate(siteMap.protected.imports);
  }

  return (
    <AuthContainer>
      <AuthBox
        title="Login"
        actions={
          <ActionButton
            resolveMsg="Entrar"
            onResolve={onHandleSubmit}
            resolveDisabled={!isValidForm}
          />
        }
      >
        <Stack spacing={2}>
          <TextField
            control={control}
            name="username"
            label="Nome de usuario"
            onBlur={validate}
          />

          <PasswordField
            control={control}
            name="password"
            label="Senha"
            onBlur={validate}
          />
          <Typography
            color="primary"
            sx={{
              cursor: "pointer",
            }}
            onClick={handleRequestNewPassword}
          >
            Esqueci minha senha
          </Typography>
        </Stack>
      </AuthBox>
    </AuthContainer>
  );
}

export default Login;
