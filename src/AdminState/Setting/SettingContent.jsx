import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Stack,
  Box,
  Button,
  Paper,
  Link as LinkMui,
  Typography,
  Breadcrumbs,
  Divider,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LockIcon from "@mui/icons-material/Lock";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SettingContent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const breadcrumbs = [
    <LinkMui underline="hover" key="1" color="inherit" href="/">
      Tetapan
    </LinkMui>,
    <Typography key="3" color="primary.main">
      Tetapan Pengguna
    </Typography>,
  ];

  return (
    <>
      <Box sx={{ backgroundColor: "#F8FAFF", p: 1, m: 0 }}>
        <Breadcrumbs
          sx={{ py: 2 }}
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>

        <Box sx={{ marginBottom: 2, width: "50%" }}>
          <Paper sx={{ p: 2, marginTop: 1 }}>
            <Typography variant="h5">Tukar Kata Laluan</Typography>
            <Divider sx={{ marginBottom: 3, marginTop: 2 }}></Divider>

            <TextField
              label="Kata Laluan Semasa"
              placeholder="*******"
              type={showPassword ? "text" : "password"}
              fullWidth
              sx={{ marginBottom: 3 }}
              InputLabelProps={{ sx: { color: "#515B92" } }} // Correct way to set label color
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#515B92" }} />{" "}
                    {/* Set icon color directly */}
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <Visibility sx={{ color: "#515B92" }} />
                      ) : (
                        <VisibilityOff sx={{ color: "#515B92" }} />
                      )}{" "}
                      {/* Set icon color directly */}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  color: "#515B92", // Change text color
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#515B92", // Change outline color
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#515B92", // Change outline color on hover
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#515B92", // Change outline color when focused
                  },
                },
              }}
            />

            <TextField
              label="Kata Laluan Baharu"
              placeholder="*******"
              type={showPassword ? "text" : "password"}
              fullWidth
              sx={{ marginBottom: 3 }}
              InputLabelProps={{ sx: { color: "#515B92" } }} // Correct way to set label color
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#515B92" }} />{" "}
                    {/* Set icon color directly */}
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <Visibility sx={{ color: "#515B92" }} />
                      ) : (
                        <VisibilityOff sx={{ color: "#515B92" }} />
                      )}{" "}
                      {/* Set icon color directly */}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  color: "#515B92", // Change text color
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#515B92", // Change outline color
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#515B92", // Change outline color on hover
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#515B92", // Change outline color when focused
                  },
                },
              }}
            />

            <TextField
              label="Sahkan Kata Laluan Baharu"
              placeholder="*******"
              type={showPassword ? "text" : "password"}
              fullWidth
              sx={{ marginBottom: 3 }}
              InputLabelProps={{ sx: { color: "#515B92" } }} // Correct way to set label color
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#515B92" }} />{" "}
                    {/* Set icon color directly */}
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <Visibility sx={{ color: "#515B92" }} />
                      ) : (
                        <VisibilityOff sx={{ color: "#515B92" }} />
                      )}{" "}
                      {/* Set icon color directly */}
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  color: "#515B92", // Change text color
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#515B92", // Change outline color
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#515B92", // Change outline color on hover
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#515B92", // Change outline color when focused
                  },
                },
              }}
            />

            <Stack direction={"row"} justifyContent={"end"}>
              <RouterLink
                to="/AdminPPD/Dashboard"
                style={{ textDecoration: "none" }}
              >
                <Button sx={{ mr: 2 }}>Batal</Button>
              </RouterLink>

              <RouterLink to="/Logout" style={{ textDecoration: "none" }}>
                <Button variant="contained">Kemaskini Kata Laluan</Button>
              </RouterLink>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default SettingContent;
