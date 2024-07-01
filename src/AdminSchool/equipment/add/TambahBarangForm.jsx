import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import AlertButton from "./alertButton";

const TambahBarangForm = () => {
  const [equipment, setEquipment] = useState({
    name: "",
    jenis: "",
    location: "",
    dateAcquired: null,
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEquipment((prevEquipment) => ({
      ...prevEquipment,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setEquipment((prevEquipment) => ({
      ...prevEquipment,
      dateAcquired: date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server or perform actions
    console.log("Submitted data:", equipment);
    // Clear the form fields after submission if needed
    setEquipment({
      name: "",
      jenis: "",
      location: "",
      dateAcquired: null,
      status: "",
    });
  };

  return (
    <Box>
      <Box sx={{ width: "50%" }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Tambah Barang
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Nama Barang"
                name="name"
                value={equipment.name}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Jenis"
                name="jenis"
                value={equipment.jenis}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Lokasi"
                name="location"
                value={equipment.location}
                onChange={handleChange}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  fullWidth
                  label="Tarikh Diperolehi"
                  inputFormat="dd/MM/yyyy"
                  value={equipment.dateAcquired}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={equipment.status}
                  onChange={handleChange}
                  name="status"
                  label="Status"
                >
                  <MenuItem value="berfungsi">Berfungsi</MenuItem>
                  <MenuItem value="tidak berfungsi">Tidak Berfungsi</MenuItem>
                  <MenuItem value="penyelenggaraan">Penyelenggaraan</MenuItem>
                  <MenuItem value="boleh diguna">Boleh Diguna</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack
              direction="row"
              spacing={2}
              sx={{ mt: 2, justifyContent: "end" }}
            >
              <RouterLink
                to="/AdminSchool/PencapaianPelajar"
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
                text="Tambah Barang"
                alertMessage="Barang Berjaya Ditambah!"
                redirectTo="/AdminSchool/BilanganBarang"
              />
            </Stack>
          </form>
        </Paper>
      </Box>
    </Box>
  );
};

export default TambahBarangForm;
