import { Link as RouterLink } from "react-router-dom";
import {
  Autocomplete,
  Box,
  Button,
  Breadcrumbs,
  Typography,
  TextField,
  Link,
  Stack,
  InputAdornment,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";

import AlertButton from "../alertButton";

import InputComponent from "../../components/InputCompononent";
import statesData from "../data/stateUsersData"; // Assuming the path is correct
import districtsData from "../data/districtData"; // Assuming the path is correct
import schoolsData from "../data/schoolsData"; // Assuming the path is correct

const EditUserContent = () => {
  const role = [
    { label: "SUPER ADMIN" },
    { label: "ADMIN STATE" },
    { label: "ADMIN PPD" },
    { label: "ADMIN SCHOOL" },
  ];

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="#">
      Pengurusan Pengguna
    </Link>,
    <Typography key="3" color="inherit">
      Tambah Pengguna
    </Typography>,
  ];

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
      <Box sx={{ p: 1, width: "50%" }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ my: 2, color: "primary.main" }}>
            Tambah Pengguna Baharu
          </Typography>
          <Divider></Divider>
          <Box component={"form"} noValidate autoComplete="off">
            <InputComponent
              label="Nama Penuh Pengguna"
              placeholder="Isi Nama Penuh Pengguna"
              type="email"
              startAdornment={<AccountCircleIcon />}
            />
            <InputComponent
              label="Email Pengguna"
              placeholder="Isi Alamat Email Pengguna"
              type="email"
              startAdornment={<EmailIcon />}
            />

            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={role}
              sx={{ marginBottom: 3 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Jenis Pengguna"
                  placeholder="Pilih Jenis Pengguna"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                          <SupervisedUserCircleOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                    sx: {
                      color: "primary.main",
                      fontWeight: "normal",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.light",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "primary.main",
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "primary.main",
                    },
                  }}
                />
              )}
            />

            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={statesData}
              sx={{ marginBottom: 3 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Pilih Negeri Pengguna"
                  label="Negeri"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                          <MyLocationOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                    sx: {
                      color: "primary.main",
                      fontWeight: "normal",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.light",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "primary.main",
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "primary.main",
                    },
                  }}
                />
              )}
            />

            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={districtsData["johor"]}
              sx={{ marginBottom: 3 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Daerah"
                  placeholder="Pilih Daerah Pengguna"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                          <MyLocationOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                    sx: {
                      color: "primary.main",
                      fontWeight: "normal",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.light",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "primary.main",
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "primary.main",
                    },
                  }}
                />
              )}
            />
            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={schoolsData["skudai"]}
              sx={{ marginBottom: 4 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Nama Sekolah"
                  placeholder="Pilih Nama Sekolah Pengguna"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton>
                          <HomeWorkOutlinedIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                    sx: {
                      color: "primary.main",
                      fontWeight: "normal",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.light",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "primary.main",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "primary.main",
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "primary.main",
                    },
                  }}
                />
              )}
            />

            <Stack direction={"row"} justifyContent={"end"}>
              <RouterLink
                to="/SuperAdmin/PengurusanPengguna"
                style={{ textDecoration: "none" }}
              >
                <Button sx={{ mr: 2 }}>Batal</Button>
              </RouterLink>
              <AlertButton
                text="Tambah Pengguna"
                alertMessage="Anda telah tambah pengguna baharu!"
                redirectTo="/SuperAdmin/PengurusanPengguna"
              />
            </Stack>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default EditUserContent;