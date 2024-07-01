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
        sx={{
          backgroundColor: "#f44336", // Red color for danger
          color: "#fff", // White text color
          "&:hover": {
            backgroundColor: "#d32f2f", // Darker red for hover state
          },
          ...sx, // Apply any additional styles
        }}
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
          Adakah anda pasti untuk hantar informasi TVPSS?
        </DialogTitle>
        <DialogContent>
          <Typography id="alert-dialog-description">
            Ini akan menghantar email kepada pengawai daerah anda
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
