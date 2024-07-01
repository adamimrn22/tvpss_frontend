import { Button, Menu, MenuItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
const FilterButtonMenu = ({ anchorEl, onButtonClick, onClose, onSelect }) => {
  return (
    <>
      <Button
        variant="outlined"
        onClick={onButtonClick}
        sx={{ height: '100%' }}
        endIcon={<FilterListIcon />}
      >
        Filter
      </Button>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onClose}>
        <MenuItem onClick={() => onSelect('')}>Semua</MenuItem>
        <MenuItem onClick={() => onSelect('SUPER ADMIN')}>SUPER ADMIN</MenuItem>
        <MenuItem onClick={() => onSelect('ADMIN STATE')}>ADMIN STATE</MenuItem>
        <MenuItem onClick={() => onSelect('ADMIN PPD')}>ADMIN PPD</MenuItem>
        <MenuItem onClick={() => onSelect('ADMIN SEKOLAH')}>
          ADMIN SEKOLAH
        </MenuItem>
      </Menu>
    </>
  );
};

export default FilterButtonMenu;
