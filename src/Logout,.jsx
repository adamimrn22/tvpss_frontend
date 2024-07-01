import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Alert } from "@mui/material";

const LogoutPage = () => {
  const navigate = useNavigate();

  // Redirect to login page after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    // Clear timeout if the component unmounts or on rerender
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      sx={{
        backgroundColor: "#F8FAFF",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Paper variant="outlined" sx={{ p: 4, width: 500 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Password Kemaskini Berjaya
          </Typography>
          <Alert severity="success" sx={{ mb: 2 }}>
            Anda akan di logout dari sistem.
          </Alert>
          <Typography variant="body1">
            Anda akan diarahkan semula ke halaman log masuk dalam 3 saat...
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default LogoutPage;
