import AuthContainer from "containers/AuthContainer";
import { Card, Stack, Typography } from "@mui/material";
import { useQueryParams } from "hooks/useQueryParams";
import siteMap from "routes/siteMap";
import DividedField from "../components/Forms/DividedField";
import { useForm } from "react-hook-form";
import ActionButton from "components/ActionButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ConfirmCode = () => {
  const { setValue, watch } = useForm();
  const queryParams = useQueryParams();
  const navigate = useNavigate();
  const { email } = queryParams.get();

  const onHandleSubmit = () => {
    const { code, email } = watch();
    queryParams.navigate(siteMap.auth.newPassword, [
      ["email", email],
      ["code", code.join("")],
    ]);
  };

  const onHandleCancel = () => {
    navigate(siteMap.auth.requestNewPassword);
  };

  useEffect(() => {
    setValue("email", email);
  }, [email]);

  return (
    <AuthContainer centralized>
      <Card
        sx={{
          width: "30rem",
          height: "30rem",
        }}
      >
        <Stack
          sx={{
            p: 4,
            height: "calc(30rem - 20px)",
          }}
        >
          <Stack spacing={8} direction="column">
            <Typography color="primary" fontSize={36} fontWeight={700}>
              Confirmar código
            </Typography>
            <Typography>
              Informe o código de 6 dígitos que enviamos para o email{" "}
              {email || "-"}
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" justifyContent="center" spacing={2}>
                <DividedField
                  size={6}
                  onChange={(value) => {
                    setValue("code", value);
                  }}
                />
              </Stack>
            </Stack>
            <ActionButton
              rejectMsg="CANCELAR"
              resolveMsg="CONFIRMAR"
              onReject={onHandleCancel}
              onResolve={onHandleSubmit}
            />
          </Stack>
        </Stack>
      </Card>
    </AuthContainer>
  );
};

export default ConfirmCode;
