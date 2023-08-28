import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import { ActionButtonProps } from "./types_d";
import { RoundedButton } from "components/Button/RoundedButton";
export * from "./types_d";

function ActionButton({
  resolveMsg = "Sim",
  rejectMsg = "Não",
  rejectLoading,
  resolveLoading,
  rejectDisabled,
  resolveDisabled,
  justifyContent = "flex-end",
  onResolve,
  onReject,
}: ActionButtonProps) {
  return (
    <Stack direction="row" justifyContent={justifyContent} spacing={2}>
      {onReject && (
        <RoundedButton
          variant="outlined"
          onClick={onReject}
          loading={rejectLoading}
          disabled={rejectDisabled}
        >
          {rejectMsg}
        </RoundedButton>
      )}

      {onResolve && (
        <RoundedButton
          onClick={onResolve}
          loading={resolveLoading}
          disabled={resolveDisabled}
        >
          {resolveMsg}
        </RoundedButton>
      )}
    </Stack>
  );
}

export default ActionButton;
