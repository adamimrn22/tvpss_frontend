import { Button, Menu, MenuItem } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
const FilterButtonMenu = ({ anchorEl, onButtonClick, onClose, onSelect }) => {
  return (
    <>
      <Button
        variant="outlined"
        onClick={onButtonClick}
        sx={{ height: "100%" }}
        endIcon={<FilterListIcon />}
      >
        Filter
      </Button>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        <MenuItem onClick={() => onSelect("")}>Semua</MenuItem>
        <MenuItem onClick={() => onSelect("Berfungsi")}>BERFUNGSI</MenuItem>
        <MenuItem onClick={() => onSelect("TidakBerfungsi")}>
          TIDAK BERFUNGSI
        </MenuItem>
        <MenuItem onClick={() => onSelect("Penyelengaraan")}>
          PENYELENGARAAN
        </MenuItem>
      </Menu>
    </>
  );
};

export default FilterButtonMenu;
