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
    <Link underline="hover" key="1" color="inherit" href="/">
      Pengurusan Pengguna
    </Link>,
    <Typography key="3" color="inherit">
      Kemaskini Pengguna
    </Typography>,
    <Typography key="3" color="primary.main">
      zainalrah@moe.gov.my
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
            Kemaskini Pengguna
          </Typography>
          <Divider></Divider>
          <Box component={"form"} noValidate autoComplete="off">
            <InputComponent
              label="Nama Penuh Pengguna"
              type="email"
              value={"zainalrah@moe.gov.my"}
              startAdornment={<AccountCircleIcon />}
            />
            <InputComponent
              label="Email Pengguna"
              type="email"
              value={"zainarah@moe.gov.my"}
              startAdornment={<EmailIcon />}
            />

            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={role}
              defaultValue={role[3]}
              sx={{ marginBottom: 2 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Jenis Pengguna"
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
              defaultValue={statesData[0]}
              sx={{ marginBottom: 2 }}
              renderInput={(params) => (
                <TextField
                  {...params}
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
              defaultValue={districtsData["johor"][1]}
              sx={{ marginBottom: 2 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Daerah"
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
              defaultValue={schoolsData["skudai"][2]}
              sx={{ marginBottom: 2 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Daerah"
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
                text="Kemaskini Pengguna"
                alertMessage="Pengguna telah dikemaskini!"
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
