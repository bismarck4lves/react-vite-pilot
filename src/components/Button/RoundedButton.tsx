import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";
import { ComponentProps } from "react";

export interface RoundedButtonProps
  extends ComponentProps<typeof LoadingButton> {
  rounded?: boolean;
}

export const RoundedButton = styled(LoadingButton)<RoundedButtonProps>(
  ({ rounded = true }) => ({
    borderRadius: rounded && 100,
  })
);
