import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";

const ForgotPass = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [stage, setStage] = useState("email"); // "email" or "reset"

  const handleSendResetEmail = () => {
    setError("");

    // Validate email format
    if (!email) {
      setError("Email diperlukan.");
      return;
    }

    if (!email.endsWith("@moe.gov.my")) {
      setError("Format email mesti @moe.gov.my.");
      return;
    }

    // Logic to send reset password email goes here

    // For demo purposes, move to reset stage after successful email submission
    setStage("reset");
  };

  const handleResetPassword = () => {
    setError("");

    // Validate new password format
    if (!newPassword) {
      setError("Kata Laluan Baharu diperlukan.");
      return;
    }

    // Validate password match
    if (newPassword !== confirmPassword) {
      setError("Kata Laluan Baharu dan Pengesahan Kata Laluan tidak sepadan.");
      return;
    }

    // Logic to reset password goes here

    // For demo purposes, navigate to login after successful password reset
    navigate("/logout"); // Replace '/login' with your actual login route
  };

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
          <Box sx={{ display: "flex", justifyContent: "start", my: 1 }}>
            <img src="./LogoTVPSS.svg" alt="logo" height={"100"} />
          </Box>
          {Boolean(error) && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {stage === "email" && (
            <>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={Boolean(error)}
              />

              <Button
                variant="contained"
                onClick={handleSendResetEmail}
                fullWidth
                sx={{ mt: 3 }}
              >
                Hantar Email Reset Kata Laluan
              </Button>

              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 2, cursor: "pointer", textDecoration: "underline" }}
                onClick={() => navigate("/")}
              >
                Kembali ke Log Masuk
              </Typography>
            </>
          )}

          {stage === "reset" && (
            <>
              <TextField
                id="newPassword"
                label="Kata Laluan Baharu"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                error={Boolean(error)}
              />

              <TextField
                id="confirmPassword"
                label="Pengesahan Kata Laluan"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={Boolean(error)}
              />

              <Button
                variant="contained"
                onClick={handleResetPassword}
                fullWidth
                sx={{ mt: 3 }}
              >
                Reset Kata Laluan
              </Button>

              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 2, cursor: "pointer", textDecoration: "underline" }}
                onClick={() => navigate("/")}
              >
                Kembali ke Log Masuk
              </Typography>
            </>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default ForgotPass;
