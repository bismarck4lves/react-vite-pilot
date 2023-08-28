import ActionButton from "components/ActionButton";
import TextField from "components/Forms/TextField";
import AuthBox from "containers/AuthBox";
import AuthContainer from "containers/AuthContainer";
import { useQueryParams } from "hooks/useQueryParams";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import siteMap from "routes/siteMap";

function RequestNewPassword() {
  const { control, watch } = useForm();
  const navigate = useNavigate();
  const queryParams = useQueryParams();

  function onSubmit() {
    const { email } = watch();
    const qs = queryParams.set([["email", email]]);
    queryParams.navigate(siteMap.auth.confirmCode, qs);
  }

  function onCancel() {
    navigate(siteMap.auth.login);
  }
  return (
    <AuthContainer centralized>
      <AuthBox
        title="Redefinir Senha"
        subtitle="Enviaremos um email com um código para redefinir a sua senha. Qual
      o email cadastrado no sistema?"
        actions={
          <ActionButton
            rejectMsg="Cancelar"
            resolveMsg="Enviar"
            onReject={onCancel}
            onResolve={onSubmit}
          />
        }
      >
        <TextField control={control} name="email" type="email" label="Email" />
      </AuthBox>
    </AuthContainer>
  );
}

export default RequestNewPassword;
