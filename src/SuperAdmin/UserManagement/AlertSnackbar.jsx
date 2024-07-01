import { Snackbar, Alert } from "@mui/material";

const AlertSnackbar = ({ open, handleClose, alertMessage, severity }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }} // Position at the top-right
      sx={{
        "& .MuiSnackbarContent-root": {
          backgroundColor:
            severity === "error"
              ? "error.main"
              : severity === "warning"
              ? "warning.main"
              : severity === "info"
              ? "info.main"
              : "success.main", // Background color based on severity
        },
        "& .MuiAlert-root": {
          color: "#fff", // Change text color if needed
        },
      }}
    >
      <Alert
        variant="filled"
        onClose={handleClose}
        severity={severity}
        sx={{ width: "100%" }}
      >
        {alertMessage}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
