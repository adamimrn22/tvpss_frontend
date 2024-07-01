import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const InputComponent = ({
  label,
  placeholder = "",
  type,
  value,
  startAdornment,
  endAdornment,
  InputLabelProps,
}) => {
  return (
    <TextField
      id="outlined-basic"
      type={type || "text"} // Default to 'text' if type prop is not provided
      label={label}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      size="small"
      value={value}
      sx={{
        marginBottom: 2, // Adds margin bottom for spacing
        paddingBottom: 1, // Adds padding bottom for space between input and bottom border
      }}
      InputLabelProps={{
        ...InputLabelProps,
        sx: { ...(InputLabelProps?.sx || {}), color: "primary.main" }, // Change label color
      }}
      InputProps={{
        sx: {
          color: "primary.main", // Change text color
          fontWeight: "normal", // Adjust font weight if needed
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.light", // Change outline color
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main", // Change outline color on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main", // Change outline color when focused
          },
          "& .MuiSvgIcon-root": {
            color: "primary.main", // Change icon color
          },
        },
        startAdornment: startAdornment && (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: endAdornment && (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ),
      }}
    />
  );
};

export default InputComponent;
