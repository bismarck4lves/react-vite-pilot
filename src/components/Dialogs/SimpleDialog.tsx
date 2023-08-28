import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { mainTransition } from "./transition";
import { SxProps, Theme } from "@mui/material";

export interface SimpleDialogProps {
  sx?: SxProps<Theme>;
  style?: React.CSSProperties;
  open: boolean;
  onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

function SimpleDialog(props: React.PropsWithChildren<SimpleDialogProps>) {
  return (
    <Dialog {...props} TransitionComponent={mainTransition}>
      {props.children}
    </Dialog>
  );
}

export default SimpleDialog;
