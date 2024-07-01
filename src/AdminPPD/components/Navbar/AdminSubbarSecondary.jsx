import dayjs from "dayjs";
import "dayjs/locale/ms";
import { Stack, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
dayjs.locale("ms");

const AdminSubBar = ({ text }) => {
  // Destructure props to access 'text'
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        direction="row"
        spacing={2}
        sx={{ p: 2, borderBottom: "1px solid #e0e0e0" }}
      >
        {text && ( // Conditionally render Typography if 'text' is provided
          <Typography
            variant="h3"
            sx={{
              fontSize: { sm: "16px", md: "26px" },
              color: "#6B7280",
              p: 0,
              m: 0,
              whiteSpace: "nowrap",
            }}
          >
            {text}
          </Typography>
        )}
      </Stack>
    </LocalizationProvider>
  );
};

export default AdminSubBar;
