import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Paper,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Alert,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // JSON data for users
  const users = [
    {
      role: "AdminPPD",
      email: "adminppd@moe.gov.my",
      password: "AdminPPD@123",
    },
    {
      role: "AdminSchool",
      email: "adminschool@moe.gov.my",
      password: "AdminSchool@123",
    },
    {
      role: "AdminState",
      email: "adminstate@moe.gov.my",
      password: "AdminState@123",
    },
    {
      role: "SuperAdmin",
      email: "superadmin@moe.gov.my",
      password: "SuperAdmin@123",
    },
  ];

  const handleLogin = () => {
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

    // Validate password
    if (!password) {
      setError("Kata Laluan diperlukan.");
      return;
    }

    // Check if email and password match any user
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      setError("Kata laluan atau email tidak sah.");
      return;
    }

    // Redirect based on user role
    switch (user.role) {
      case "SuperAdmin":
        navigate("/SuperAdmin/Dashboard");
        break;
      case "AdminState":
        navigate("/AdminState/Dashboard");
        break;
      case "AdminPPD":
        navigate("/AdminPPD/Dashboard");
        break;
      case "AdminSchool":
        navigate("/AdminSchool/Dashboard");
        break;
      default:
        break;
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
          {Boolean(error) && !error.includes("Kata laluan") && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {Boolean(error) && error.includes("Kata laluan") && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(error) && !error.includes("Kata laluan")}
          />

          <TextField
            id="password"
            label="Kata Laluan"
            variant="outlined"
            fullWidth
            margin="normal"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(error) && error.includes("Kata laluan")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleShowPassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Ingat Saya"
          />
          <Button
            variant="contained"
            onClick={handleLogin}
            fullWidth
            sx={{ mt: 3 }}
          >
            Log Masuk
          </Button>
          <Typography
            variant="body2"
            align="center"
            sx={{ mt: 2, cursor: "pointer" }}
          >
            <Link
              to="/LupaKataLaluan"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "grey",
                "&:hover": {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
              }}
            >
              Lupa Kata Laluan
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default LoginForm;
