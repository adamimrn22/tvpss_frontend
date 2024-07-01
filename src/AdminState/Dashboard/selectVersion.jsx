import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [vers, setVers] = React.useState("");

  const handleChange = (event) => {
    setVers(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, my: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Versi</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={vers}
          label="Versi"
          onChange={handleChange}
        >
          <MenuItem value={1}>Versi 1</MenuItem>
          <MenuItem value={2}>Versi 2</MenuItem>
          <MenuItem value={3}>Versi 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
