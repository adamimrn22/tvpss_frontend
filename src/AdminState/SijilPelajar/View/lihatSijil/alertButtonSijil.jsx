import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AlertButton = ({ text, alertMessage, redirectTo, sx, ...rest }) => {
  const [open, setOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true); // Show the modal
  };

  const handleClose = () => {
    setOpen(false); // Hide the modal
  };

  const handleConfirm = () => {
    localStorage.setItem("showAlert", alertMessage); // Set the alert message in localStorage
    navigate(redirectTo); // Redirect to the specified path
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        {...rest} // Spread any additional props
      >
        {text}
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Adakah anda mahu jana sijil ini?
        </DialogTitle>
        <DialogContent>
          <Typography id="alert-dialog-description">
            Sijil ini akan dijana dan akan dihantar kepada email sekolah
            tersebut.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Batal</Button>
          <Button onClick={handleConfirm} variant="contained">
            Teruskan
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertButton;
