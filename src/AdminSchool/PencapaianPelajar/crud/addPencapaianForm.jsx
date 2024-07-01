import React, { useState } from "react";
import {
  Box,
  Breadcrumbs,
  Typography,
  Link as LinkMui,
  Stack,
  Paper,
  Button,
  InputLabel,
  TextField,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import InputComponent from "./InputComponent";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Link as RouterLink } from "react-router-dom";
import AlertButton from "../alertButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const AddPencapaianForm = () => {
  const breadcrumbs = [
    <LinkMui
      underline="hover"
      key="1"
      color="inherit"
      href="/AdminSchool/PencapaianPelajar"
    >
      Permohonan Sijil
    </LinkMui>,
    <Typography key="2" color="primary.main">
      Hantar Borang Pencapaian
    </Typography>,
  ];

  // State to manage form mode: 'single' or 'bulk'
  const [formMode, setFormMode] = useState("single");

  // State to hold selected values
  const [jenisPencapaian, setJenisPencapaian] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [csvFile, setCsvFile] = useState(null);

  // Handler for select change to switch between single and bulk mode
  const handleFormModeChange = (event) => {
    setFormMode(event.target.value);
    setSelectedFiles([]); // Clear selected files when switching modes
    setCsvFile(null); // Clear CSV file when switching modes
  };

  // Handler for select change of Jenis Pencapaian
  const handleJenisPencapaianChange = (event) => {
    setJenisPencapaian(event.target.value);
  };

  // Handler for date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Handler for file input change (support form in bulk mode)
  const handleSupportFormChange = (e) => {
    setSelectedFiles([...e.target.files]);
  };

  // Handler for CSV file input change (bulk mode)
  const handleCsvFileChange = (e) => {
    setCsvFile(e.target.files[0]);
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
            Maklumat Pelajar
          </Typography>
          <Box component={"form"} noValidate autoComplete="off">
            {/* Select dropdown for form mode: single or bulk */}
            <InputLabel htmlFor="form-mode" sx={{ color: "primary.main" }}>
              Pilihan Borang
            </InputLabel>
            <Select
              labelId="form-mode"
              id="form-mode-select"
              fullWidth
              size="small"
              value={formMode}
              onChange={handleFormModeChange}
              displayEmpty
              renderValue={(value) =>
                value === "single" ? "Borang Individu" : "Borang Berkumpul"
              }
              inputProps={{ sx: { color: "primary.main" } }}
              MenuProps={{
                PaperProps: { sx: { backgroundColor: "#FFFFFF" } },
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                transformOrigin: {
                  vertical: "top",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}
            >
              <MenuItem value="single">Borang Individu</MenuItem>
              <MenuItem value="bulk">Borang Berkumpul</MenuItem>
            </Select>

            {/* Conditionally render based on formMode */}
            {formMode === "single" && (
              <>
                <InputComponent label="Kad Pengenalan" />
                {/* Select dropdown for Jenis Pencapaian */}
                <InputLabel
                  htmlFor="jenis-pencapaian"
                  sx={{ color: "primary.main" }}
                >
                  Jenis Pencapaian
                </InputLabel>
                <Select
                  labelId="jenis-pencapaian"
                  id="jenis-pencapaian-select"
                  fullWidth
                  size="small"
                  value={jenisPencapaian}
                  onChange={handleJenisPencapaianChange}
                  displayEmpty
                  renderValue={(value) =>
                    value ? value : "Pilih Jenis Pencapaian"
                  }
                  inputProps={{ sx: { color: "primary.main" } }}
                  MenuProps={{
                    PaperProps: { sx: { backgroundColor: "#FFFFFF" } },
                    anchorOrigin: {
                      vertical: "bottom",
                      horizontal: "left",
                    },
                    transformOrigin: {
                      vertical: "top",
                      horizontal: "left",
                    },
                    getContentAnchorEl: null,
                  }}
                >
                  <MenuItem
                    value="Pencapaian Akademik"
                    sx={{ color: "primary.main" }}
                  >
                    Pencapaian Akademik
                  </MenuItem>
                  <MenuItem value="Sukan">Pencapaian Sukan</MenuItem>
                  {/* Add more MenuItem as needed */}
                </Select>

                {/* DatePicker component from MUI x-date-pickers */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Tarikh"
                    value={selectedDate}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                    sx={{ width: "100%", mt: 2 }}
                  />
                </LocalizationProvider>

                <Box sx={{ my: 2 }}>
                  {/* TextField configured as a multiline textarea for Maklumat Pencapaian */}
                  <TextField
                    label="Maklumat Pencapaian"
                    multiline
                    rows={4} // Number of rows to display
                    fullWidth
                  />
                </Box>
              </>
            )}

            {formMode === "bulk" && (
              <>
                <Box sx={{ my: 1 }}>
                  {/* File input for CSV/Excel */}
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ flexGrow: 1, ml: 1, my: 1 }}
                  >
                    {/* Show selected CSV file name */}
                    {csvFile ? csvFile.name : "Pilih Fail CSV/Excel"}
                  </Typography>
                  <label
                    htmlFor="csv-file-upload"
                    style={{ cursor: "pointer" }}
                  >
                    <Button
                      fullWidth
                      variant="outlined"
                      component="span"
                      sx={{
                        ml: 1,
                        "&:hover": { backgroundColor: "transparent" },
                      }}
                    >
                      Muat naik CSV/Excel
                    </Button>
                  </label>
                  <input
                    id="csv-file-upload"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleCsvFileChange}
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                  />
                </Box>
                <Box sx={{ my: 1 }}>
                  {/* File input for support form */}
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ flexGrow: 1, ml: 1, my: 1 }}
                  >
                    {/* Show selected support form file names */}
                    {selectedFiles.length > 0
                      ? selectedFiles.map((file) => file.name).join(", ")
                      : "Pilih Fail Borang Sokongan"}
                  </Typography>
                  <label
                    htmlFor="support-file-upload"
                    style={{ cursor: "pointer" }}
                  >
                    <Button
                      fullWidth
                      variant="outlined"
                      component="span"
                      sx={{
                        ml: 1,
                        "&:hover": { backgroundColor: "transparent" },
                      }}
                    >
                      Muat naik borang sokongan
                    </Button>
                  </label>
                  <input
                    id="support-file-upload"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleSupportFormChange}
                    multiple
                  />
                </Box>
              </>
            )}

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
                text="Hantar Borang Permohonan"
                alertMessage="Borang Permohonan telah dihantar!"
                redirectTo="/AdminSchool/PencapaianPelajar"
              />
            </Stack>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddPencapaianForm;
