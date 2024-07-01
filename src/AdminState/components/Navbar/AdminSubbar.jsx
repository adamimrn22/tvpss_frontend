import { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ms-my";
import {
  Button,
  Box,
  Stack,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

dayjs.locale("ms-my");

const AdminSubBar = () => {
  const [value, setValue] = useState(dayjs("2024-07-2"));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ p: 2 }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { sm: "16px", md: "16px" },
            color: "#6B7280",
            p: 0,
            m: 0,
            whiteSpace: "nowrap",
          }}
        >
          Selamat Datang Pengguna
        </Typography>

        <Stack
          flex="1"
          direction="row"
          spacing={1}
          justifyContent="end"
          alignItems="center"
        >
          <Box sx={{ px: 2 }}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Jenis</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Jenis"
                size="small"
                value="Mingguan"
                sx={{ width: "160px" }}
              >
                <MenuItem value={"Mingguan"}>Mingguan</MenuItem>
                <MenuItem value={"Bulanan"}>Bulanan</MenuItem>
                <MenuItem value={"Tahunan"}>Tahunan</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              format="LL"
              label="Tarikh"
              value={value}
              slotProps={{ textField: { size: "small" } }}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#515B92", fontSize: "12px", p: 1 }}
            startIcon={<ImportExportIcon />}
          >
            Export
          </Button>
        </Stack>
      </Stack>
    </LocalizationProvider>
  );
};

export default AdminSubBar;
