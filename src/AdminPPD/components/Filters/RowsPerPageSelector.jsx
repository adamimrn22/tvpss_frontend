import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";

const RowsPerPageSelector = ({ value, onChange }) => {
  return (
    <>
      <Stack
        direction={"row"}
        spacing={1}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="subtitle2" sx={{ px: 1 }}>
          Tunjuk
        </Typography>

        <FormControl
          variant="outlined"
          style={{ marginLeft: "auto" }}
          size="small"
        >
          <InputLabel id="rows-per-page-label">Bilangan</InputLabel>
          <Select
            labelId="rows-per-page-label"
            value={value}
            onChange={onChange}
            label="Rows per page"
            sx={{ width: "80px" }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>

        <Typography variant="subtitle2">Entri</Typography>
      </Stack>
    </>
  );
};

export default RowsPerPageSelector;
