import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React from "react";

interface IDialogProps {
  buttonText?: string;
  buttonExtraStyle?: CSSProperties;
  cancelButtonText?: string;
  confirmbuttonText?: string;
  description: string;
  title: string;
  onConfirm: () => void;
}

const UIDialog: React.FC<IDialogProps> = ({
  buttonText = "Abrir",
  buttonExtraStyle= {},
  cancelButtonText = "Cancelar",
  confirmbuttonText = "Confirmar",
  description,
  title,
  onConfirm,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={buttonExtraStyle}>
        {buttonText}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="default">
            {cancelButtonText}
          </Button>
          <Button onClick={handleConfirm} color="primary" variant="contained">
            {confirmbuttonText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { UIDialog };
