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
        <MenuItem onClick={() => onSelect("DILULUSKAN")}>LULUS</MenuItem>
        <MenuItem onClick={() => onSelect("PENDING")}>PENDING</MenuItem>
        <MenuItem onClick={() => onSelect("DITOLAK")}>DITOLAK</MenuItem>
      </Menu>
    </>
  );
};

export default FilterButtonMenu;
