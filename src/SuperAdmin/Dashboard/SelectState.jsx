import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"; // Assuming you are using Material-UI
import statesData from "./data/statesData"; // Importing statesData from separate file

function StateSelect() {
  const [selectedState, setSelectedState] = useState("");

  const handleChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <FormControl style={{ width: 180, marginTop: 10, marginBottom: 10 }}>
      <InputLabel id="state-select-label">Negeri</InputLabel>
      <Select
        labelId="state-select-label"
        id="state-select"
        value={selectedState}
        label="Negeri"
        onChange={handleChange}
      >
        <MenuItem value="Negeri">Semua Negeri</MenuItem>
        {statesData.map((state) => (
          <MenuItem key={state.id} value={state.name}>
            {state.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default StateSelect;
