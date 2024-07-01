import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Typography,
  Link as LinkMui,
  Stack,
  Paper,
  Button,
  Alert,
  TextField,
  InputAdornment,
  Snackbar,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LinkIcon from "@mui/icons-material/Link";

const TVPSSFormOneContent = () => {
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
    namaSekolah: "SMK Mutiara Rini",
    alamatSekolah1: "Jalan Persiaran Utama",
    poskod: "81300",
    alamatSekolah2: "PPD Johor Bahru, Skudai",
    negeri: "Johor",
    noTelefon: "012345678910",
    email: "mutiara@moe.gov.my",
    noFax: "03-1234567",
    logoSekolah: null,
    linkVideo: "youtube.com/tvpss-mutiara-rini",
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
    <Box sx={{ backgroundColor: "#F8FAFF", p: 1, m: 0 }}>
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
      <Box sx={{ p: 1 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ my: 2, color: "primary.main" }}>
            Maklumat Sekolah
          </Typography>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            {/* Row 1: Nama Sekolah */}
            <TextField
              name="namaSekolah"
              label="Nama Sekolah"
              fullWidth
              value={schoolInfo.namaSekolah}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />

            {/* Row 2 and 3: Alamat Sekolah 1, Poskod, Alamat Sekolah 2, Negeri */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 2 }}
            >
              <TextField
                name="alamatSekolah1"
                label="Alamat Sekolah 1"
                fullWidth
                value={schoolInfo.alamatSekolah1}
                onChange={handleChange}
                sx={{ flexGrow: 1 }}
              />
              <TextField
                name="poskod"
                label="Poskod"
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
                label="Alamat Sekolah 2"
                fullWidth
                value={schoolInfo.alamatSekolah2}
                onChange={handleChange}
                sx={{ flexGrow: 1 }}
              />
              <TextField
                name="negeri"
                label="Negeri"
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
              <TextField
                name="noTelefon"
                label="No Telefon"
                fullWidth
                value={schoolInfo.noTelefon}
                onChange={handleChange}
                sx={{ flexGrow: 1 }}
              />
              <TextField
                name="email"
                label="Email"
                fullWidth
                value={schoolInfo.email}
                onChange={handleChange}
                sx={{ flexGrow: 1 }}
              />
              <TextField
                name="noFax"
                label="No Fax"
                fullWidth
                value={schoolInfo.noFax}
                onChange={handleChange}
                sx={{ flexGrow: 1 }}
              />
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
                  Muat naik Logo Sekolah
                </Button>
              </label>
              <input
                id="logo-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />
            </Box>

            {/* Row 6: Link Video */}
            <TextField
              name="linkVideo"
              label="Link Video (YouTube)"
              fullWidth
              value={schoolInfo.linkVideo}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LinkIcon sx={{ color: "primary.main" }} />
                  </InputAdornment>
                ),
              }}
              sx={{ mb: 2 }}
            />

            {/* Submit Button */}
            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: 2, justifyContent: "end" }}
            >
              <RouterLink
                to="/AdminSchool/Dashboard"
                style={{ textDecoration: "none" }}
              >
                <Button sx={{ mr: 2 }}>Batal</Button>
              </RouterLink>
              <RouterLink
                to="/AdminSchool/SubmitTVPSS/Two"
                style={{ textDecoration: "none" }}
              >
                <Button sx={{ mr: 2 }} variant="contained">
                  Seterusnya
                </Button>
              </RouterLink>
            </Stack>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default TVPSSFormOneContent;
