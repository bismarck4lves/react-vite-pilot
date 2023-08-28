import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { mainTransition } from "./transition";

interface FullDialogProps {
  open: boolean;
  onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

function FullDialog(props: React.PropsWithChildren<FullDialogProps>) {
  return (
    <Dialog fullScreen {...props} TransitionComponent={mainTransition}>
      {props.children}
    </Dialog>
  );
}

export default FullDialog;
