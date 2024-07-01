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
        <MenuItem onClick={() => onSelect("")}>SEMUA</MenuItem>
        <MenuItem onClick={() => onSelect("DIJANA")}>DIJANA</MenuItem>
        <MenuItem onClick={() => onSelect("PENDING")}>PENDING</MenuItem>
      </Menu>
    </>
  );
};

export default FilterButtonMenu;
