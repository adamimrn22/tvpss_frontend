import { MenuItem, ListItemIcon, ListItemText } from "@mui/material";

const CustomMenuItem = ({ icon: Icon, text, sx, active }) => {
  return (
    <MenuItem
      sx={{
        color: "#bdbdbd",
        p: 1,
        marginBottom: 2,
        "&:hover": {
          color: "white",
          bgcolor: "primary.light",
          borderRadius: 1,
        },
        ...(active && {
          color: "white",
          bgcolor: "primary.main",
          borderRadius: 1,
        }),
        "& .MuiListItemIcon-root": {
          color: "inherit",
        },
        ...sx, // Allow additional styling through props
      }}
    >
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </MenuItem>
  );
};

export default CustomMenuItem;
