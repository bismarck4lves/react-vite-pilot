import { DialogActions, DialogContent, Typography } from "@mui/material";
import BooleanAction, { ActionButtonBaseProps } from "./BooleanAction";
import FastDialogTitle from "./FastDialogTitle";
import SimpleDialog, { SimpleDialogProps } from "./SimpleDialog";

interface ConfirmDialogProps extends SimpleDialogProps, ActionButtonBaseProps {
  confirmTitle: string;
  confirmSubtitle: string;
  onClose: (val?) => unknown;
  danger?: boolean
}
function ConfirmDialog({
  confirmTitle,
  confirmSubtitle,
  danger,
  onClose,
  ...props
}: ConfirmDialogProps) {
  return (
    <SimpleDialog {...props}>
      <FastDialogTitle label="Confirmação" closeButton={onClose} />
      <DialogContent>
        <Typography fontSize={24} fontWeight={700}
            color={danger && 'red'}
        >{confirmTitle}</Typography>
        <Typography>{confirmSubtitle}</Typography>
      </DialogContent>
      <DialogActions>
        <BooleanAction {...props} />
      </DialogActions>
    </SimpleDialog>
  );
}

export default ConfirmDialog;
