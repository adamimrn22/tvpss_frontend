import { Chip } from "@mui/material";

const RoleChip = ({ userType }) => {
  let color, backgroundColor;
  switch (userType) {
    case "SUPER ADMIN":
      color = "#515B92";
      backgroundColor = "#E9EBF1"; // Orange-Red
      break;
    case "ADMIN STATE":
      color = "#928851";
      backgroundColor = "#FCFEED"; // Royal Blue
      break;
    case "ADMIN PPD":
      color = "#517B92";
      backgroundColor = "#E2F0FB"; // Lime Green
      break;
    case "ADMIN SEKOLAH":
      color = "#685192";
      backgroundColor = "#E9E5EF"; // Medium Purple
      break;
    default:
      color = "#ffa600";
      backgroundColor = "#ffa600"; // Gray
  }

  return (
    <Chip
      label={userType}
      sx={{
        backgroundColor: backgroundColor,
        color: color,
        fontWeight: "bold",
        borderRadius: "16px",
        "&:hover": {
          backgroundColor: backgroundColor,
          opacity: 0.9,
        },
      }}
    />
  );
};

export default RoleChip;
