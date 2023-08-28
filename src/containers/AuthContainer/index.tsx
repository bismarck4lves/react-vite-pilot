import { Stack } from "@mui/material";
import { PropsWithChildren } from "react";
import { AuthContent } from "./style";
interface AuthContainerProps {
  centralized?: boolean;
}
function AuthContainer({
  children,
  centralized = false,
}: PropsWithChildren<AuthContainerProps>) {
  return (
    <AuthContent>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="space-between"
        sx={{
          height: "100vh",
          width: "100%",
          position: "relative",
        }}
      >
        {!centralized && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: "50vw",
            }}
          >
            <img src="/lg-logo.svg" />
          </Stack>
        )}

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          sx={{
            width: centralized ? "100vw" : "50vw",
          }}
        >
          {children}
        </Stack>
      </Stack>
    </AuthContent>
  );
}

export default AuthContainer;
