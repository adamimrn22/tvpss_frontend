import React, { useState } from "react";
import AlertButton from "./alertButton";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Typography,
  Link as LinkMui,
  Stack,
  Paper,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const TVPSSFormTwoContent = () => {
  const breadcrumbs = [
    <LinkMui underline="hover" key="1" color="inherit">
      Maklumat TVPSS
    </LinkMui>,
    <Typography key="2" color="primary.main">
      Kemaskini Versi TVPSS
    </Typography>,
  ];

  // State to hold form data
  const [schoolInfo, setSchoolInfo] = useState({
    alamatSekolah1: "PETRONAS, Petroliam Nasional Berhad",
    poskod: "En. Ya’kub",
    alamatSekolah2: "MAXIS, Maxis Berhad",
    negeri: "En. Karib bin Robaai",
    noTelefon: "Ada",
    noFax: "03-1234567",
    logoSekolah: null,
    PeralatanRakaman: "Ada",
    Gsccreen: "Ada",
  });

  // State for snackbar
  const [showSnackbar, setShowSnackbar] = useState(false);

  // Handler for input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSchoolInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  // Handler for file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSchoolInfo((prevInfo) => ({
      ...prevInfo,
      logoSekolah: file,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions like API calls or further processing
    // For demonstration, we're just showing the snackbar
    setShowSnackbar(true);
  };

  // Close snackbar
  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <Box sx={{ backgroundColor: "#F8FAFF", p: 1, m: 0, minHeight: "500px" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ p: 1, m: 0 }}
      >
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Box sx={{ p: 1, height: "100%" }}>
        <Paper sx={{ p: 2, height: "100%" }}>
          <Typography variant="h5" sx={{ my: 2, color: "primary.main" }}>
            Maklumat Sekolah
          </Typography>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            {/* Row 2 and 3: Alamat Sekolah 1, Poskod, Alamat Sekolah 2, Negeri */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 2 }}
            >
              <TextField
                name="alamatSekolah1"
                label="Syarikat Kolaborasi Agensi I"
                fullWidth
                value={schoolInfo.alamatSekolah1}
                onChange={handleChange}
                sx={{ flexGrow: 1 }}
              />
              <TextField
                name="poskod"
                label="Pengurus Syarikat Agensi I"
                fullWidth
                value={schoolInfo.poskod}
                onChange={handleChange}
                sx={{ flexBasis: "30%" }}
              />
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 2 }}
            >
              <TextField
                name="alamatSekolah2"
                label="Syarikat Kolaborasi Agensi II"
                fullWidth
                value={schoolInfo.alamatSekolah2}
                onChange={handleChange}
                sx={{ flexGrow: 1 }}
              />
              <TextField
                name="negeri"
                label="Pengurus Syarikat Agensi II"
                fullWidth
                value={schoolInfo.negeri}
                onChange={handleChange}
                sx={{ flexBasis: "30%" }}
              />
            </Stack>

            {/* Row 4: No Telefon, Email, No Fax */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 2 }}
            >
              <FormControl fullWidth>
                <InputLabel htmlFor="noTelefon-select">No Telefon</InputLabel>
                <Select
                  value={schoolInfo.noTelefon}
                  onChange={handleChange}
                  name="noTelefon"
                  label="No Telefon"
                  inputProps={{
                    id: "noTelefon-select",
                  }}
                >
                  <MenuItem value="Ada">Ada</MenuItem>
                  <MenuItem value="Tiada">Tiada</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="PeralatanRakaman-select">
                  Peralatan Rakaman
                </InputLabel>
                <Select
                  value={schoolInfo.PeralatanRakaman}
                  onChange={handleChange}
                  name="PeralatanRakaman"
                  label="Peralatan Rakaman"
                  inputProps={{
                    id: "PeralatanRakaman-select",
                  }}
                >
                  <MenuItem value="Ada">Ada</MenuItem>
                  <MenuItem value="Tiada">Tiada</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel htmlFor="Gsccreen-select">
                  Penggunaan Teknologi ‘Green Screen’
                </InputLabel>
                <Select
                  value={schoolInfo.Gsccreen}
                  onChange={handleChange}
                  name="Gsccreen"
                  label="Penggunaan Teknologi ‘Green Screen’"
                  inputProps={{
                    id: "Gsccreen-select",
                  }}
                >
                  <MenuItem value="Ada">Ada</MenuItem>
                  <MenuItem value="Tiada">Tiada</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            {/* Row 5: Logo Sekolah */}
            <Box sx={{ my: 2 }}>
              <Typography
                variant="body1"
                color="textSecondary"
                sx={{ flexGrow: 1, ml: 1, mb: 1 }}
              >
                {schoolInfo.logoSekolah
                  ? schoolInfo.logoSekolah.name
                  : "logosekolah.jpg"}
              </Typography>
              <label htmlFor="logo-upload" style={{ cursor: "pointer" }}>
                <Button
                  fullWidth
                  variant="outlined"
                  component="span"
                  sx={{ ml: 1, "&:hover": { backgroundColor: "transparent" } }}
                >
                  Muat naik Logo TVPSS Sekolah
                </Button>
              </label>
              <input
                id="logo-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
            </Box>

            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: 2, justifyContent: "end" }}
            >
              <RouterLink
                to="/AdminSchool/SubmitTVPSS/"
                style={{ textDecoration: "none" }}
              >
                <Button sx={{ mr: 2 }}>Kembali</Button>
              </RouterLink>

              <AlertButton
                sx={{
                  backgroundColor: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                }}
                text="Hantar Informasi TVPSS"
                alertMessage="Informasi Versi TVPSS Telah Dihantar!"
                redirectTo="/AdminSchool/Dashboard"
              />
            </Stack>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default TVPSSFormTwoContent;
