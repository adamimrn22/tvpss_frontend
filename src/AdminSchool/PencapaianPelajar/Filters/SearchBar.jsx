import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ value, onChange }) => {
  return (
    <TextField
      label="Cari Pencapaian...."
      variant="outlined"
      size="small"
      value={value}
      onChange={onChange}
      style={{ marginRight: "10px" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
