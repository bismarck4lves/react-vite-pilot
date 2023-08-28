import { Stack } from "@mui/material";
import ActionButton from "components/ActionButton";
import PasswordField from "components/Forms/PasswordField";
import AuthBox from "containers/AuthBox";
import AuthContainer from "containers/AuthContainer";
import { useQueryParams } from "hooks/useQueryParams";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const { control, watch, setValue } = useForm();
  const navigate = useNavigate();
  const queryParams = useQueryParams();
  const { email, code } = queryParams.get();

  function onSubmit() {
    const data = watch();
    console.log(data);
  }

  function onCancel() {
    navigate(-1);
  }

  useEffect(() => {
    setValue("email", email);
    setValue("code", code);
  }, [email, code]);

  return (
    <AuthContainer centralized>
      <AuthBox
        title="Cadastrar nova senha"
        subtitle=" Informe a nova senha de no mínimo 6 caracteres, sendo ao menos um
        caractere numério e um caractere especial."
        actions={
          <ActionButton
            rejectMsg="Cancelar"
            resolveMsg="Enviar"
            onReject={onCancel}
            onResolve={onSubmit}
          />
        }
      >
        <Stack spacing={2}>
          <PasswordField control={control} name="new_password" type="email" />
          <PasswordField
            control={control}
            name="password_confirmation"
            type="email"
          />
        </Stack>
      </AuthBox>
    </AuthContainer>
  );
}

export default ResetPassword;
