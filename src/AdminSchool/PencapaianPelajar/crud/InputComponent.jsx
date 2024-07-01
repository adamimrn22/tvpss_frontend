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
  readOnly = false, // Default to false if not provided
}) => {
  return (
    <TextField
      id="outlined-basic"
      type={type || "text"}
      label={label}
      placeholder={placeholder}
      variant="outlined"
      fullWidth
      size="small"
      value={value}
      sx={{
        my: 2,
      }}
      InputLabelProps={{
        ...InputLabelProps,
        sx: { ...(InputLabelProps?.sx || {}), color: "primary.main" }, // Label color
      }}
      InputProps={{
        readOnly: readOnly,
        sx: {
          color: "primary.main", // Text color always uses primary color
          fontWeight: "normal",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0, 0, 0, 0.23)", // Default border color (can customize this)
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main", // Hover border color
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main", // Focused border color
          },
          "& .MuiInputBase-input": {
            color: "inherit", // Inherit text color
          },
          "& .MuiSvgIcon-root": {
            color: "inherit", // Inherit icon color
          },
        },
        startAdornment: startAdornment && (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: endAdornment && (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ),
      }}
      disabled={readOnly} // Use disabled prop to disable input when readOnly is true
    />
  );
};

export default InputComponent;
