import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  TextField,
  Typography,
  Paper,
  Button,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TodayOutlinedIcon from "@mui/icons-material/TodayOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { CheckCircleOutlineOutlined, BlockOutlined } from "@mui/icons-material";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";

import AlertButton from "../alertButton";

const PermohonanKrewDetailForm = () => {
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Paper>
      <Typography variant="h5" sx={{ pt: 3, px: 3, color: "primary.main" }}>
        Maklumat Permohonan Krew
      </Typography>
      <Box sx={{ p: 3 }} component={"form"}>
        {/* First Row */}
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            label="Nama Pelajar"
            sx={{
              color: "primary.main",
              "& .MuiInputLabel-root": {
                color: "primary.main",
              },
              "& .MuiOutlinedInput-input": {
                color: "primary.main",
              },
              "& .MuiOutlinedInput-root": {
                borderColor: "primary.main",
              },
            }}
            InputLabelProps={{
              style: { color: "primary.main" },
            }}
            InputProps={{
              style: {
                color: "primary.main",
                borderColor: "primary.main",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <TagOutlinedIcon style={{ color: "primary.main" }} />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            value="011231010022"
          />
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            label="Nama Pelajar"
            sx={{
              color: "primary.main",
              "& .MuiInputLabel-root": {
                color: "primary.main",
              },
              "& .MuiOutlinedInput-input": {
                color: "primary.main",
              },
              "& .MuiOutlinedInput-root": {
                borderColor: "primary.main",
              },
            }}
            InputLabelProps={{
              style: { color: "primary.main" },
            }}
            InputProps={{
              style: {
                color: "primary.main",
                borderColor: "primary.main",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlinedIcon
                    style={{ color: "primary.main" }}
                  />
                </InputAdornment>
              ),
              readOnly: true,
            }}
            value="Ahmad Faizal bin Mohamad	"
          />
        </Stack>

        {/* Second Row: Email */}
        <Stack direction="row" spacing={2} alignItems="center" mt={2}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            label="E-mel"
            sx={{
              color: "primary.main",
              "& .MuiInputLabel-root": {
                color: "primary.main",
              },
              "& .MuiOutlinedInput-input": {
                color: "primary.main",
              },
              "& .MuiOutlinedInput-root": {
                borderColor: "primary.main",
              },
            }}
            InputLabelProps={{
              style: { color: "primary.main" },
            }}
            InputProps={{
              style: {
                color: "primary.main",
                borderColor: "primary.main",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon style={{ color: "primary.main" }} />
                </InputAdornment>
              ),
            }}
            readOnly
            value="ahmadfaizal@moe.gov.my"
          />
        </Stack>

        {/* Third Row: Application Date */}
        <Stack direction="row" spacing={2} alignItems="center" mt={2}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            label="Tarikh Permohonan"
            sx={{
              color: "primary.main",
              "& .MuiInputLabel-root": {
                color: "primary.main",
              },
              "& .MuiOutlinedInput-input": {
                color: "primary.main",
              },
              "& .MuiOutlinedInput-root": {
                borderColor: "primary.main",
              },
            }}
            InputLabelProps={{
              style: { color: "primary.main" },
            }}
            InputProps={{
              style: {
                color: "primary.main",
                borderColor: "primary.main",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <TodayOutlinedIcon style={{ color: "primary.main" }} />
                </InputAdornment>
              ),
            }}
            readOnly
            value="2024-07-01"
          />
        </Stack>

        {/* Fourth Row: Resume Link and Social Media Links */}
        <Stack direction="row" spacing={2} alignItems="center" mt={2}>
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            label="Pautan Resume (jika ada)"
            sx={{
              color: "primary.main",
              "& .MuiInputLabel-root": {
                color: "primary.main",
              },
              "& .MuiOutlinedInput-input": {
                color: "primary.main",
              },
              "& .MuiOutlinedInput-root": {
                borderColor: "primary.main",
              },
            }}
            InputLabelProps={{
              style: { color: "primary.main" },
            }}
            InputProps={{
              style: {
                color: "primary.main",
                borderColor: "primary.main",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <YouTubeIcon style={{ color: "primary.main" }} />
                </InputAdornment>
              ),
            }}
            readOnly
            value="https://youtube.com/?e321"
          />
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            label="Pautan Media Sosial (jika ada)"
            sx={{
              color: "primary.main",
              "& .MuiInputLabel-root": {
                color: "primary.main",
              },
              "& .MuiOutlinedInput-input": {
                color: "primary.main",
              },
              "& .MuiOutlinedInput-root": {
                borderColor: "primary.main",
              },
            }}
            InputLabelProps={{
              style: { color: "primary.main" },
            }}
            InputProps={{
              style: {
                color: "primary.main",
                borderColor: "primary.main",
              },
              startAdornment: (
                <InputAdornment position="start">
                  <PublicOutlinedIcon style={{ color: "primary.main" }} />
                </InputAdornment>
              ),
            }}
            readOnly
            value="https://youtube.com/example"
          />
        </Stack>

        {/* Fifth Row: Application Status */}
        <Stack direction="row" spacing={2} alignItems="center" mt={2}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel
              sx={{
                color: "primary.main",
                "&.Mui-focused": {
                  color: "primary.main",
                },
              }}
            >
              Status Permohonan
            </InputLabel>

            <Select
              value={status}
              onChange={handleChange}
              label="Status Permohonan"
              placeholder="Pilih Status Permohonan"
              sx={{
                color: "primary.main",
                "& .MuiOutlinedInput-input": {
                  color: "primary.main",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
              }}
              inputProps={{
                style: {
                  color: "primary.main",
                  borderColor: "primary.main",
                },
              }}
            >
              <MenuItem value="tolak">
                <BlockOutlined style={{ marginRight: 8, color: "red" }} />
                Tolak Permohonan
              </MenuItem>
              <MenuItem value="lulus">
                <CheckCircleOutlineOutlined
                  style={{ marginRight: 8, color: "green" }}
                />
                Lulus Permohonan
              </MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 2, justifyContent: "end" }}
        >
          <RouterLink
            to="/AdminSchool/PermohonanKrew"
            style={{ textDecoration: "none" }}
          >
            <Button sx={{ mr: 2 }}>Batal</Button>
          </RouterLink>

          <AlertButton
            sx={{
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
            text="Kemaskini Status"
            alertMessage="Status Permohonan Pelajar telah dekemaskini!"
            redirectTo="/AdminSchool/PermohonanKrew"
          />
        </Stack>
      </Box>
    </Paper>
  );
};

export default PermohonanKrewDetailForm;
